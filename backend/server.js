const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Homestay = require('./models/Homestay');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB Connected Successfully");

    try {
      const homestayCount = await Homestay.countDocuments();

      if (homestayCount === 0) {
        const seedData = homestays.map(({ id, ...stay }) => stay);
        await Homestay.insertMany(seedData);
        console.log("✅ Seeded homestays into MongoDB");
      } else {
        console.log("ℹ️ Homestays already exist in MongoDB");
      }
    } catch (err) {
      console.error("❌ Error seeding homestays");
      console.error(err);
    }
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed");
    console.error(err);
    process.exit(1);
  });

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json());

let homestays = [
  {
    id: 1,
    name: 'Mountain View Homestay',
    location: 'Chopta',
    price: 1500,
    description: 'Beautiful mountain view with cozy rooms',
    image: '🏔️',
    amenities: ['WiFi', 'Parking', 'Hot Water', 'Kitchen Access', 'Garden', 'Fireplace'],
    rating: 4.8,
    reviews: 125,
  },
  {
    id: 2,
    name: 'Lakeside Retreat',
    location: 'Nainital',
    price: 2000,
    description: 'Peaceful lakeside cottage',
    image: '🏞️',
    amenities: ['WiFi', 'Parking', 'Boat Access', 'Restaurant', 'Swimming', 'Spa'],
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: 'Forest Cabin',
    location: 'Munnar',
    price: 1800,
    description: "Nature's sanctuary in the hills",
    image: '🌲',
    amenities: ['WiFi', 'Parking', 'Tea Garden Tour', 'Bonfire', 'Hiking Trails'],
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: 'Beachfront Villa',
    location: 'Goa',
    price: 3000,
    description: 'Stunning beach views and sunset',
    image: '🏖️',
    amenities: ['WiFi', 'Parking', 'Beach Access', 'Pool', 'Gym', 'Restaurant'],
    rating: 4.9,
    reviews: 234,
  },
];

const getNextId = () =>
  homestays.length > 0
    ? Math.max(...homestays.map((stay) => stay.id)) + 1
    : 1;

app.get('/api/homestays', async (req, res) => {
  const { q, location } = req.query;
  const filter = {};

  if (q) {
    filter.$or = [
      { name: { $regex: q, $options: 'i' } },
      { description: { $regex: q, $options: 'i' } },
      { location: { $regex: q, $options: 'i' } },
    ];
  }

  if (location) {
    filter.location = { $regex: `^${location}$`, $options: 'i' };
  }

  const results = await Homestay.find(filter);

  res.status(200).json({ success: true, data: results });
});

app.get('/api/homestays/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const stay = await Homestay.findById(id);

    if (!stay) {
      return res
        .status(404)
        .json({ success: false, message: 'Homestay not found' });
    }

    res.status(200).json({ success: true, data: stay });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch homestay',
    });
  }
});

app.post('/api/homestays', async (req, res) => {
  const { name, location, price, description, image, amenities } = req.body;

  if (!name || !location || !price || !description) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields: name, location, price, description',
    });
  }

  try {
    const newStay = new Homestay({
      name,
      location,
      price,
      description,
      image: image || '🏡',
      amenities: Array.isArray(amenities) ? amenities : [],
      rating: 0,
      reviews: 0,
    });

    const savedStay = await newStay.save();

    res.status(201).json({
      success: true,
      data: savedStay,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create homestay',
    });
  }
});

app.put('/api/homestays/:id', async (req, res) => {
  const id = req.params.id;

  const {
    name,
    location,
    price,
    description,
    image,
    amenities,
    rating,
    reviews,
  } = req.body;

  try {
    const updatedStay = await Homestay.findByIdAndUpdate(
      id,
      {
        name,
        location,
        price,
        description,
        image,
        amenities,
        rating,
        reviews,
      },
      { new: true, runValidators: true }
    );

    if (!updatedStay) {
      return res
        .status(404)
        .json({ success: false, message: 'Homestay not found' });
    }

    res.status(200).json({
      success: true,
      data: updatedStay,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update homestay',
    });
  }
});

app.delete('/api/homestays/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const deletedStay = await Homestay.findByIdAndDelete(id);

    if (!deletedStay) {
      return res
        .status(404)
        .json({ success: false, message: 'Homestay not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete homestay',
    });
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
});

app.listen(PORT, () => {
  console.log(`🚀 SmartStay backend running on http://localhost:${PORT}`);
});
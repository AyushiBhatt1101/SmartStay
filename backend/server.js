const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

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
    description: 'Nature\'s sanctuary in the hills',
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

const getNextId = () => (homestays.length > 0 ? Math.max(...homestays.map((stay) => stay.id)) + 1 : 1);

app.get('/api/homestays', (req, res) => {
  const { q, location } = req.query;
  let results = [...homestays];

  if (q) {
    const query = q.toLowerCase();
    results = results.filter((stay) =>
      stay.name.toLowerCase().includes(query) ||
      stay.description.toLowerCase().includes(query) ||
      stay.location.toLowerCase().includes(query)
    );
  }

  if (location) {
    results = results.filter((stay) => stay.location.toLowerCase() === location.toLowerCase());
  }

  res.status(200).json({ success: true, data: results });
});

app.get('/api/homestays/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const stay = homestays.find((item) => item.id === id);

  if (!stay) {
    return res.status(404).json({ success: false, message: 'Homestay not found' });
  }

  res.status(200).json({ success: true, data: stay });
});

app.post('/api/homestays', (req, res) => {
  const { name, location, price, description, image, amenities } = req.body;

  if (!name || !location || !price || !description) {
    return res.status(400).json({ success: false, message: 'Missing required fields: name, location, price, description' });
  }

  const newStay = {
    id: getNextId(),
    name,
    location,
    price,
    description,
    image: image || '🏡',
    amenities: Array.isArray(amenities) ? amenities : [],
    rating: 0,
    reviews: 0,
  };

  homestays.push(newStay);
  res.status(201).json({ success: true, data: newStay });
});

app.put('/api/homestays/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const stayIndex = homestays.findIndex((item) => item.id === id);

  if (stayIndex === -1) {
    return res.status(404).json({ success: false, message: 'Homestay not found' });
  }

  const { name, location, price, description, image, amenities, rating, reviews } = req.body;
  const updatedStay = {
    ...homestays[stayIndex],
    name: name ?? homestays[stayIndex].name,
    location: location ?? homestays[stayIndex].location,
    price: price ?? homestays[stayIndex].price,
    description: description ?? homestays[stayIndex].description,
    image: image ?? homestays[stayIndex].image,
    amenities: amenities ?? homestays[stayIndex].amenities,
    rating: rating ?? homestays[stayIndex].rating,
    reviews: reviews ?? homestays[stayIndex].reviews,
  };

  homestays[stayIndex] = updatedStay;
  res.status(200).json({ success: true, data: updatedStay });
});

app.delete('/api/homestays/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const stayIndex = homestays.findIndex((item) => item.id === id);

  if (stayIndex === -1) {
    return res.status(404).json({ success: false, message: 'Homestay not found' });
  }

  homestays.splice(stayIndex, 1);
  res.status(204).send();
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`SmartStay backend running on http://localhost:${PORT}`);
});

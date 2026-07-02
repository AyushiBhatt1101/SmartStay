import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/ui/Loader';
import Toast from '../components/ui/Toast';
import Modal from '../components/ui/Modal';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import API_BASE_URL from '../api';

const initialForm = {
  name: '',
  location: '',
  price: '',
  description: '',
  image: '',
  amenities: '',
};

const Listings = () => {
  const [homestays, setHomestays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState({ message: '', variant: 'info', visible: false });
  const [modalOpen, setModalOpen] = useState(false);
  const [formValues, setFormValues] = useState(initialForm);
  const [editingHomestay, setEditingHomestay] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const showToast = (message, variant = 'info') => {
    setToast({ message, variant, visible: true });
  };

  const closeToast = () => setToast((current) => ({ ...current, visible: false }));

  const fetchHomestays = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/homestays`);
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.message || 'Failed to load homestays');
      }
      const payload = await response.json();
      setHomestays(payload.data || []);
    } catch (err) {
      setError(err.message || 'Unable to fetch listings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomestays();
  }, []);

  const openAddModal = () => {
    setEditingHomestay(null);
    setFormValues(initialForm);
    setModalOpen(true);
  };

  const openEditModal = (homestay) => {
    setEditingHomestay(homestay);
    setFormValues({
      name: homestay.name || '',
      location: homestay.location || '',
      price: homestay.price?.toString() || '',
      description: homestay.description || '',
      image: homestay.image || '',
      amenities: (homestay.amenities || []).join(', '),
    });
    setModalOpen(true);
  };

  const handleChange = (field) => (event) => {
    setFormValues({ ...formValues, [field]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const payload = {
      name: formValues.name.trim(),
      location: formValues.location.trim(),
      price: Number(formValues.price),
      description: formValues.description.trim(),
      image: formValues.image.trim() || '🏡',
      amenities: formValues.amenities
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean),
    };

    if (!payload.name || !payload.location || !payload.price || !payload.description) {
      setError('Name, location, price, and description are required.');
      setSubmitting(false);
      return;
    }

    try {
      const method = editingHomestay ? 'PUT' : 'POST';
      const endpoint = editingHomestay ? `${API_BASE_URL}/api/homestays/${editingHomestay._id}` : `${API_BASE_URL}/api/homestays`;
      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.message || 'Failed to save homestay');
      }

      showToast(editingHomestay ? 'Homestay updated successfully.' : 'Homestay added successfully.', 'success');
      setModalOpen(false);
      setEditingHomestay(null);
      setFormValues(initialForm);
      await fetchHomestays();
    } catch (err) {
      setError(err.message || 'Unable to save homestay');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (homestay) => {
    const confirmed = window.confirm(`Delete ${homestay.name}? This action cannot be undone.`);
    if (!confirmed) return;

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/homestays/${homestay._id}`, { method: 'DELETE' });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.message || 'Failed to delete homestay');
      }

      showToast('Homestay deleted successfully.', 'success');
      await fetchHomestays();
    } catch (err) {
      setError(err.message || 'Unable to delete homestay');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto p-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Homestay Listings</h1>
            <p className="mt-2 text-gray-500">Manage existing homestays or add a new property.</p>
          </div>
          <Button onClick={openAddModal} className="whitespace-nowrap">Add Homestay</Button>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader size={48} />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homestays.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-500">
                No homestays available yet. Add one to get started.
              </div>
            ) : (
              homestays.map((homestay) => (
                <div key={homestay._id} className="flex flex-col rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
                  <div className="text-6xl text-center bg-gray-100 py-8">{homestay.image}</div>
                  <div className="p-5 flex-1">
                    <h2 className="text-xl font-semibold text-gray-900">{homestay.name}</h2>
                    <p className="text-sm text-gray-500">{homestay.location}</p>
                    <p className="mt-3 text-gray-600 text-sm">{homestay.description}</p>
                    <p className="mt-4 text-lg font-semibold text-blue-600">₹{homestay.price}/night</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
                      {homestay.amenities?.map((amenity) => (
                        <span key={amenity} className="rounded-full border border-gray-200 px-3 py-1">{amenity}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 border-t border-gray-100 bg-gray-50 p-4 sm:flex-row">
                    <Link to={`/details/${homestay._id}`} className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-500 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 sm:w-auto">
                      View Details
                    </Link>
                    <button type="button" onClick={() => openEditModal(homestay)} className="inline-flex w-full items-center justify-center rounded-2xl border border-blue-500 bg-white py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 sm:w-auto">
                      Edit
                    </button>
                    <button type="button" onClick={() => handleDelete(homestay)} className="inline-flex w-full items-center justify-center rounded-2xl bg-red-50 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100 sm:w-auto">
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <Footer />

      <Toast message={toast.message} variant={toast.variant} visible={toast.visible} onClose={closeToast} />
      <Toast message={error || ''} variant="error" visible={Boolean(error)} onClose={() => setError(null)} />

      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditingHomestay(null);
          setFormValues(initialForm);
          setError(null);
        }}
        title={editingHomestay ? 'Edit Homestay' : 'Add Homestay'}
        footer={
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => {
                setModalOpen(false);
                setEditingHomestay(null);
                setFormValues(initialForm);
                setError(null);
              }}
              className="inline-flex w-full items-center justify-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 sm:w-auto"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {editingHomestay ? 'Update Homestay' : 'Create Homestay'}
            </button>
          </div>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Name" value={formValues.name} onChange={handleChange('name')} placeholder="Enter homestay name" />
          <Input label="Location" value={formValues.location} onChange={handleChange('location')} placeholder="Enter location" />
          <Input label="Price per night" type="number" value={formValues.price} onChange={handleChange('price')} placeholder="Enter price" />
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={formValues.description}
              onChange={handleChange('description')}
              rows={4}
              placeholder="Enter a short description"
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm transition-colors duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <Input label="Image Emoji" value={formValues.image} onChange={handleChange('image')} placeholder="Enter an emoji or image text" />
          <Input
            label="Amenities"
            value={formValues.amenities}
            onChange={handleChange('amenities')}
            placeholder="Separate amenities with commas"
            helpText="Example: WiFi, Parking, Hot Water"
          />
          {error && <p className="rounded-2xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        </form>
      </Modal>
    </div>
  );
};

export default Listings;

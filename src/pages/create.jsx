import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, Upload } from 'lucide-react';
import Card from '@components/ui/card';
import Input from '@components/ui/input';
import Button from '@components/ui/button';
import { categories } from '@data/categories';
import { useAuth } from '@contexts/auth-context';

const Create = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    url: '',
    category: '',
    image: null,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert('Please login to submit a tool');
      return;
    }

    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      alert('Tool submitted successfully! It will be reviewed by our team.');
      setFormData({ name: '', description: '', url: '', category: '', image: null });
      setLoading(false);
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <PlusCircle className="w-10 h-10 text-green-600" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Submit a Tool
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Share an amazing free tool with the community
        </p>
      </motion.div>

      <Card padding="lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Tool Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., ChatGPT, Canva, Notion"
            required
            error={errors.name}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe what this tool does and why it's useful..."
              rows={4}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
            />
            {errors.description && (
              <p className="mt-1.5 text-sm text-red-600">{errors.description}</p>
            )}
          </div>

          <Input
            label="Tool URL"
            name="url"
            type="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="https://example.com"
            required
            error={errors.url}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1.5 text-sm text-red-600">{errors.category}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tool Image (Optional)
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 dark:border-dark-border border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-dark-bg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-2 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPG or WebP (MAX. 5MB)
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                />
              </label>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              type="submit"
              variant="primary"
              loading={loading}
              fullWidth
              icon={PlusCircle}
            >
              Submit Tool
            </Button>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            By submitting, you agree that this tool is genuinely free to use
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Create;

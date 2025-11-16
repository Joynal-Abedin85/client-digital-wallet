import { useUpdateAdminProfileMutation } from "@/redux/features/adminapi";
import React, { useState } from "react";

const ProfileManage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [updateAdminProfile, { isLoading }] = useUpdateAdminProfileMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateAdminProfile(formData);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile Management</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded" disabled={isLoading}>
          {isLoading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default ProfileManage;

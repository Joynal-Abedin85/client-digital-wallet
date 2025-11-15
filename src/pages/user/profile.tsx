import { useGetMeQuery, useUpdateProfileMutation } from "@/redux/features/auth/auth.api";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setUser } from "@/redux/features/authslice";

const Profile = () => {
  const { data, refetch } = useGetMeQuery("");
  const [updateProfile] = useUpdateProfileMutation();
  const dispatch = useDispatch();

  const [form, setForm] = useState({ name: "", phone: "" });

  // Load user data into form
  useEffect(() => {
    if (data?.data) {
      setForm({
        name: data.data.name,
        phone: data.data.phone,
      });
    }
  }, [data]);

  const handleUpdate = async () => {
    const res = await updateProfile(form).unwrap();

    // Redux user state update
    dispatch(setUser(res.data)); // 👈 stored in redux + localStorage

    await refetch(); // 🔥 Reload fresh user data from API

    alert("Profile updated!");
  };

  return (
    <div className="p-6 max-w-xl">
      <h1 className="text-xl font-bold mb-4">My Profile</h1>

      <input
        type="text"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2 mb-3 w-full rounded"
        placeholder="Your name"
      />

      <input
        type="text"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="border p-2 mb-3 w-full rounded"
        placeholder="Phone"
      />

      <button
        onClick={handleUpdate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Update
      </button>
    </div>
  );
};

export default Profile;

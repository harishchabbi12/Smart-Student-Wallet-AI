import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProfileCard from "../../components/ProfileCard";
import EditProfileModal from "../../components/EditProfileModal";
import Navbar from "../../components/Navbar";

function Profile() {
  const [user, setUser] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);

      setFormData({
        name: storedUser.name,
        email: storedUser.email,
      });
    }
  };

  const handleSaveProfile = () => {
    if (!formData.name || !formData.email) {
      alert("Please fill all fields.");
      return;
    }

    const updatedUser = {
      ...user,
      name: formData.name,
      email: formData.email,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    setUser(updatedUser);

    setShowModal(false);

    alert("Profile Updated Successfully!");
  };

  return (
    <DashboardLayout>
        <Navbar title="Profile" />
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          Profile
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold transition"
        >
          Edit Profile
        </button>
      </div>

      {user && <ProfileCard user={user} />}

      <EditProfileModal
        showModal={showModal}
        setShowModal={setShowModal}
        formData={formData}
        setFormData={setFormData}
        handleSaveProfile={handleSaveProfile}
      />
    </DashboardLayout>
  );
}

export default Profile;
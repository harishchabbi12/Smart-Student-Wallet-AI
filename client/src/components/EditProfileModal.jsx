function EditProfileModal({
  showModal,
  setShowModal,
  formData,
  setFormData,
  handleSaveProfile,
}) {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Edit Profile
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg p-3"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />

        </div>

        <div className="flex justify-end gap-4 mt-6">

          <button
            onClick={() => setShowModal(false)}
            className="px-5 py-2 border rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSaveProfile}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            Save Changes
          </button>

        </div>

      </div>
    </div>
  );
}

export default EditProfileModal;
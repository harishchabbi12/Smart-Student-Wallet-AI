function ProfileCard({ user }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8">

      <div className="flex items-center gap-6">

        <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            {user?.name}
          </h2>

          <p className="text-gray-500 mt-2">
            {user?.email}
          </p>
        </div>

      </div>

    </div>
  );
}

export default ProfileCard;
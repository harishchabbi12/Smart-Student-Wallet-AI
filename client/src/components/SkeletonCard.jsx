function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">

      <div className="flex justify-between items-center">

        <div>

          <div className="h-4 w-24 bg-gray-300 rounded mb-4"></div>

          <div className="h-8 w-40 bg-gray-300 rounded"></div>

        </div>

        <div className="w-16 h-16 rounded-2xl bg-gray-300"></div>

      </div>

    </div>
  );
}

export default SkeletonCard;
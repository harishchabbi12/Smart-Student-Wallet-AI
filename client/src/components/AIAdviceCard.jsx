function AIAdviceCard({ advice }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        🤖 AI Financial Advisor
      </h2>

      <div className="whitespace-pre-wrap leading-8 text-gray-700">
        {advice}
      </div>
    </div>
  );
}

export default AIAdviceCard;
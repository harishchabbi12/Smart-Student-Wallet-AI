function TransactionModal({
  showModal,
  setShowModal,
  formData,
  setFormData,
  handleSaveTransaction,
  isEditing,
}) {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-lg p-6 shadow-xl">

        <h2 className="text-2xl font-bold mb-6">
          {isEditing ? "Edit Transaction" : "Add Transaction"}
        </h2>

        <div className="space-y-4">

          <select
            className="w-full border rounded-lg p-3"
            value={formData.type}
            onChange={(e) =>
              setFormData({
                ...formData,
                type: e.target.value,
              })
            }
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <input
            type="text"
            placeholder="Category"
            className="w-full border rounded-lg p-3"
            value={formData.category}
            onChange={(e) =>
              setFormData({
                ...formData,
                category: e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Amount"
            className="w-full border rounded-lg p-3"
            value={formData.amount}
            onChange={(e) =>
              setFormData({
                ...formData,
                amount: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Description"
            className="w-full border rounded-lg p-3"
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
          />

          <input
            type="date"
            className="w-full border rounded-lg p-3"
            value={formData.date}
            onChange={(e) =>
              setFormData({
                ...formData,
                date: e.target.value,
              })
            }
          />

        </div>

        <div className="flex justify-end gap-4 mt-6">

          <button
            onClick={() => setShowModal(false)}
            className="px-5 py-2 rounded-lg border hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSaveTransaction}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            {isEditing ? "Update" : "Save"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default TransactionModal;
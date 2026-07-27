import { Pencil, Trash2, ArrowUpCircle, ArrowDownCircle } from "lucide-react";

function TransactionTable({
  transactions,
  onEdit,
  onDelete,
}) {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-16 text-center">
        <div className="text-6xl mb-4">💳</div>

        <h2 className="text-2xl font-bold text-slate-700">
          No Transactions Yet
        </h2>

        <p className="text-slate-500 mt-2">
          Start by adding your first transaction.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="sticky top-0 bg-slate-100 z-10">
            <tr className="text-slate-700">
              <th className="text-left px-6 py-4 font-semibold">Type</th>
              <th className="text-left px-6 py-4 font-semibold">Category</th>
              <th className="text-left px-6 py-4 font-semibold">Amount</th>
              <th className="text-left px-6 py-4 font-semibold">Description</th>
              <th className="text-left px-6 py-4 font-semibold">Date</th>
              <th className="text-center px-6 py-4 font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction._id}
                className="border-t hover:bg-blue-50 transition-all duration-200"
              >
                <td className="px-6 py-5">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${
                      transaction.type === "income"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {transaction.type === "income" ? (
                      <ArrowUpCircle size={16} />
                    ) : (
                      <ArrowDownCircle size={16} />
                    )}

                    {transaction.type}
                  </span>
                </td>

                <td className="px-6 py-5 font-medium text-slate-700">
                  {transaction.category}
                </td>

                <td className="px-6 py-5 font-bold text-lg">
                  ₹{Number(transaction.amount).toLocaleString("en-IN")}
                </td>

                <td className="px-6 py-5 text-slate-600">
                  {transaction.description}
                </td>

                <td className="px-6 py-5 text-slate-600">
                  {new Date(transaction.date).toLocaleDateString("en-GB")}
                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() => onEdit(transaction)}
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                    >
                      <Pencil size={16} />

                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(transaction._id)}
                      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                    >
                      <Trash2 size={16} />

                      Delete
                    </button>

                  </div>

                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default TransactionTable;
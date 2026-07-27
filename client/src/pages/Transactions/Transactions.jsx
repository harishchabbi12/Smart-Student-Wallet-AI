import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import TransactionTable from "../../components/TransactionTable";
import TransactionModal from "../../components/TransactionModal";
import Navbar from "../../components/Navbar";
import toast from "react-hot-toast";

import {
  getTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
} from "../../services/transactionService";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [formData, setFormData] = useState({
    type: "expense",
    category: "",
    amount: "",
    description: "",
    date: "",
  });

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      setLoading(true);

      const response = await getTransactions();

      setTransactions(response.data.transactions);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      type: "expense",
      category: "",
      amount: "",
      description: "",
      date: "",
    });

    setSelectedId(null);
    setIsEditing(false);
  };

  const handleAddClick = () => {
    resetForm();
    setShowModal(true);
  };

  const handleEdit = (transaction) => {
    setIsEditing(true);

    setSelectedId(transaction._id);

    setFormData({
      type: transaction.type,
      category: transaction.category,
      amount: transaction.amount,
      description: transaction.description,
      date: transaction.date.substring(0, 10),
    });

    setShowModal(true);
  };


     const handleSaveTransaction = async () => {
    try {
      if (
        !formData.category ||
        !formData.amount ||
        !formData.description ||
        !formData.date
      ) {
toast.error("Please fill all fields.");
        return;
      }

      if (isEditing) {
        await updateTransaction(selectedId, formData);

toast.success("Transaction Updated Successfully!");
      } else {
        await addTransaction(formData);

toast.success("Transaction Added Successfully!");
      }

      setShowModal(false);

      resetForm();

      fetchTransactions();
    } catch (error) {
      console.error(error);

      toast.error(
  error.response?.data?.message ||
    "Something went wrong."
);
    }
  };

  const handleDeleteTransaction = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirmDelete) return;

    try {
      await deleteTransaction(id);

toast.success("Transaction Deleted Successfully!");
      fetchTransactions();
    } catch (error) {
      console.error(error);

      toast.error(
      error.response?.data?.message ||
      "Failed to delete transaction."
    );
    }
  };



    return (
    <DashboardLayout>
        <Navbar title="Transactions" />
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          Transactions
        </h1>

        <button
          onClick={handleAddClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold transition"
        >
          + Add Transaction
        </button>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="bg-white rounded-xl shadow-md p-10 text-center text-gray-500">
          Loading Transactions...
        </div>
      ) : (
        <TransactionTable
          transactions={transactions}
          onEdit={handleEdit}
          onDelete={handleDeleteTransaction}
        />
      )}

      {/* Modal */}
      <TransactionModal
        showModal={showModal}
        setShowModal={setShowModal}
        formData={formData}
        setFormData={setFormData}
        handleSaveTransaction={handleSaveTransaction}
        isEditing={isEditing}
      />
    </DashboardLayout>
  );
}

export default Transactions;
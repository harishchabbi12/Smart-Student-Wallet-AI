import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import AnalyticsCard from "../../components/AnalyticsCard";
import ExpensePieChart from "../../components/ExpensePieChart";
import IncomeExpenseChart from "../../components/IncomeExpenseChart";
import Navbar from "../../components/Navbar";
import {
  getMonthlyAnalytics,
  getExpenseByCategory,
} from "../../services/dashboardService";

function Analytics() {
  const [analytics, setAnalytics] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);

      const [monthlyResponse, categoryResponse] =
        await Promise.all([
          getMonthlyAnalytics(),
          getExpenseByCategory(),
        ]);

      setAnalytics(monthlyResponse.data);
      setCategoryData(categoryResponse.data.categories);
    } catch (error) {
      console.error(error);
      alert("Failed to load analytics");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
          <Navbar title="Analytics" />
        <div className="bg-white rounded-xl shadow-md p-10 text-center text-gray-500">
          Loading Analytics...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Analytics
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <AnalyticsCard
          title="Monthly Income"
          value={analytics.totalIncome}
          color="text-green-600"
        />

        <AnalyticsCard
          title="Monthly Expense"
          value={analytics.totalExpense}
          color="text-red-600"
        />

        <AnalyticsCard
          title="Balance"
          value={analytics.balance}
          color="text-blue-600"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <IncomeExpenseChart
          income={analytics.totalIncome}
          expense={analytics.totalExpense}
        />

        <ExpensePieChart
          data={categoryData}
        />
      </div>
    </DashboardLayout>
  );
}

export default Analytics;
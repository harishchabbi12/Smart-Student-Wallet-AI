import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import SummaryCard from "../../components/SummaryCard";
import TransactionTable from "../../components/TransactionTable";
import Navbar from "../../components/Navbar";
import SkeletonCard from "../../components/SkeletonCard";
import { getDashboardData } from "../../services/dashboardService";
import AnimatedContainer from "../../components/AnimatedContainer";


function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await getDashboardData();
      setDashboardData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

 if (!dashboardData) {
  return (
    <DashboardLayout>
      <Navbar title="Dashboard" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />

      </div>

    </DashboardLayout>
  );
}

  return (
  <DashboardLayout>
    <Navbar title="Dashboard" />

    <AnimatedContainer>
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">
          Welcome Back 👋
        </h2>

        <p className="text-slate-500 mt-2">
          Here's an overview of your financial activity.
        </p>
      </div>
    </AnimatedContainer>

    <AnimatedContainer delay={0.1}>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SummaryCard
          title="Balance"
          amount={dashboardData.totalBalance}
        />

        <SummaryCard
          title="Income"
          amount={dashboardData.totalIncome}
        />

        <SummaryCard
          title="Expense"
          amount={dashboardData.totalExpense}
        />
      </div>
    </AnimatedContainer>

    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

      <AnimatedContainer delay={0.2}>
        <div className="xl:col-span-2">

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-xl font-bold text-slate-800">
                Recent Transactions
              </h2>

              <span className="text-sm text-slate-500">
                Latest Activity
              </span>

            </div>

            <TransactionTable
              transactions={dashboardData.recentTransactions}
            />

          </div>

        </div>
      </AnimatedContainer>

      <AnimatedContainer delay={0.3}>
        <div>

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-xl font-bold mb-6">
              Financial Health
            </h2>

            <div className="space-y-6">

              <div>

                <div className="flex justify-between mb-2">

                  <span className="text-gray-600">
                    Income
                  </span>

                  <span className="font-semibold text-green-600">
                    ₹{Number(
                      dashboardData.totalIncome
                    ).toLocaleString("en-IN")}
                  </span>

                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">

                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "100%" }}
                  />

                </div>

              </div>

              <div>

                <div className="flex justify-between mb-2">

                  <span className="text-gray-600">
                    Expense
                  </span>

                  <span className="font-semibold text-red-600">
                    ₹{Number(
                      dashboardData.totalExpense
                    ).toLocaleString("en-IN")}
                  </span>

                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">

                  <div
                    className="bg-red-500 h-3 rounded-full"
                    style={{
                      width: `${
                        dashboardData.totalIncome > 0
                          ? Math.min(
                              (dashboardData.totalExpense /
                                dashboardData.totalIncome) *
                                100,
                              100
                            )
                          : 0
                      }%`,
                    }}
                  />

                </div>

              </div>

              <div className="border-t pt-5">

                <h3 className="font-semibold mb-2">
                  Quick Insight
                </h3>

                <p className="text-gray-600 text-sm leading-7">
                  {dashboardData.totalExpense <
                  dashboardData.totalIncome
                    ? "Great job! You're spending less than you earn. Keep building your savings."
                    : "Your expenses are close to or exceed your income. Consider reviewing your spending habits."}
                </p>

              </div>

            </div>

          </div>

        </div>
      </AnimatedContainer>

    </div>

  </DashboardLayout>
);
}

export default Dashboard;
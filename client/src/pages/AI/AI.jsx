import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import AIAdviceCard from "../../components/AIAdviceCard";
import { getFinancialAdvice } from "../../services/aiService";
import Navbar from "../../components/Navbar";
function AI() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    try {
      setLoading(true);

      const response = await getFinancialAdvice();

      setAdvice(response.data.advice);
    } catch (error) {
      console.error(error);

      setAdvice(
        "Unable to generate financial advice at the moment."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
        <Navbar title="AI Financial Advisor" />
      <h1 className="text-3xl font-bold mb-8">
        AI Financial Advisor
      </h1>

      {loading ? (
        <div className="bg-white rounded-xl shadow-md p-10 text-center text-gray-500">
          Generating AI Advice...
        </div>
      ) : (
        <AIAdviceCard advice={advice} />
      )}
    </DashboardLayout>
  );
}

export default AI;
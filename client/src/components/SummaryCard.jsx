import {
  Wallet,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

function SummaryCard({ title, amount, color }) {
  const getIcon = () => {
    switch (title) {
      case "Balance":
        return <Wallet size={30} />;
      case "Income":
        return <TrendingUp size={30} />;
      case "Expense":
        return <TrendingDown size={30} />;
      default:
        return <Wallet size={30} />;
    }
  };

  const getGradient = () => {
    switch (title) {
      case "Balance":
        return "from-blue-500 to-blue-700";
      case "Income":
        return "from-green-500 to-green-700";
      case "Expense":
        return "from-red-500 to-red-700";
      default:
        return "from-slate-500 to-slate-700";
    }
  };

  return (
    <div
      className={`
        bg-gradient-to-r
        ${getGradient()}
        rounded-2xl
        p-6
        text-white
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-1
        transition-all
        duration-300
        flex
        justify-between
        items-center
      `}
    >
      <div>
        <p className="text-sm opacity-90">
          {title}
        </p>

        <h2 className="text-3xl font-bold mt-2">
          ₹{Number(amount).toLocaleString("en-IN")}
        </h2>

        <p className="text-xs mt-3 opacity-80">
          Updated just now
        </p>
      </div>

      <div className="bg-white/20 p-4 rounded-2xl">
        {getIcon()}
      </div>
    </div>
  );
}

export default SummaryCard;
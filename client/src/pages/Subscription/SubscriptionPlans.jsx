import { useEffect, useState } from "react";
import { getSubscriptionPlans } from "../../services/subscriptionService";
import { getUserSubscription } from "../../services/userService";
import CurrentSubscription from "./components/CurrentSubscription";
import "./SubscriptionPlans.css";
import PricingCards from "./components/PricingCards";

function SubscriptionPlans() {
  const [plans, setPlans] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPage();
  }, []);

  const loadPage = async () => {
    try {
      const [plansResponse, subscriptionResponse] = await Promise.all([
        getSubscriptionPlans(),
        getUserSubscription(),
      ]);

      setPlans(plansResponse.data.plans);
      setSubscription(subscriptionResponse.data.subscription);
    } catch (error) {
      console.error("Error loading subscription page:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="subscription-container">
        <h2 style={{ textAlign: "center" }}>Loading Plans...</h2>
      </div>
    );
  }

 return (
  <div className="subscription-container">
    <h1 className="subscription-title">
      Upgrade to Smart Student Wallet Pro
    </h1>

    <p className="subscription-subtitle">
      Choose the plan that best fits your financial journey.
    </p>

    {/* Current Subscription */}
    <CurrentSubscription subscription={subscription} />

    {/* Pricing Cards */}
    <PricingCards
      plans={plans}
      subscription={subscription}
    />
  </div>
);
}

export default SubscriptionPlans;
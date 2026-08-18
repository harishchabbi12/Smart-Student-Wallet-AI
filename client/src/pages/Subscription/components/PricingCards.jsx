function PricingCards({ plans, subscription }) {
  return (
    <div className="plans-container">
      {plans.map((plan) => (
        <div className="plan-card" key={plan.id}>
          {plan.popular && (
            <div className="popular-badge">
              ⭐ Most Popular
            </div>
          )}

          <h2 className="plan-name">
            {plan.name}
          </h2>

          <h1 className="plan-price">
            ₹{plan.price}
          </h1>

          <p className="plan-duration">
            {plan.duration}
          </p>

          <ul className="plan-features">
            {plan.features.map((feature, index) => (
              <li key={index}>
                ✅ {feature}
              </li>
            ))}
          </ul>

          <button className="plan-button">
            {plan.id === subscription?.plan
              ? "Current Plan"
              : "Upgrade to Pro"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default PricingCards;
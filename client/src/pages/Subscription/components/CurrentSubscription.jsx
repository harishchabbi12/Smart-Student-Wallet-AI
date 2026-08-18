function CurrentSubscription({ subscription }) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        padding: "25px",
        marginBottom: "40px",
        boxShadow: "0px 8px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        Current Subscription
      </h2>

      {subscription ? (
        <>
          <p>
            <strong>Plan:</strong> {subscription.plan}
          </p>

          <p>
            <strong>Status:</strong> {subscription.status}
          </p>

          <p>
            <strong>Started:</strong>{" "}
            {new Date(subscription.startedAt).toLocaleDateString()}
          </p>

          <p>
            <strong>Expires:</strong>{" "}
            {subscription.expiresAt
              ? new Date(subscription.expiresAt).toLocaleDateString()
              : "Never"}
          </p>
        </>
      ) : (
        <p>Loading subscription...</p>
      )}
    </div>
  );
}

export default CurrentSubscription;
export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#111827",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "16px" }}>Testseite</h1>
      <p style={{ fontSize: "20px", color: "#d1d5db" }}>Wenn diese Seite lädt, ist der Build-Prozess in Ordnung.</p>
      <button
        style={{
          marginTop: "32px",
          padding: "12px 24px",
          backgroundColor: "#8b5cf6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Test Button
      </button>
    </div>
  )
}

import React, { useState } from "react";

export default function App() {
  const [n, setN] = useState(0);
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Hello React — تجربة</h1>
      <p>Counter: {n}</p>
      <button onClick={() => setN(n + 1)}>زيد</button>
    </div>
  );
}
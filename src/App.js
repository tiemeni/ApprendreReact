import { useState } from "react";

function App() {
  const [compt, setCompt] = useState(true)
  return (
    <div style={{ marginLeft: "20%", textAlign: "center", marginRight: '20%', width: "60%" }}>
      <p style={{ fontSize: "200px" }}>{compt ? <p>&#128545;</p> : <p>&#128540;</p>}</p>
      <p style={{ color: compt ? "red" : "green", fontSize: 30 }}>{compt ? "click vite le button" : "bluuugs! je t'ai eu !!! hahaha"}</p>
      {compt ? <button onClick={() => setCompt(v => !v)}>click !!!</button> : ""}
    </div>
  );
}

export default App;

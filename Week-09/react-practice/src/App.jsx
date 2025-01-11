import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((current) => current + 1); // Increment count
    }, 1000);
  }, []); // Empty dependency array ensures this runs only once

  return <h1>{count}</h1>;
}

export default App;

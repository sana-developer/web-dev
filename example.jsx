import React, { useState, useCallback } from 'react';

// 🔹 Child component wrapped in React.memo to prevent unnecessary re-renders
const Button = React.memo(({ onClick, label }) => {
  console.log(`Rendering Button: ${label}`);
  return <button onClick={onClick}>{label}</button>;
});

const App = () => {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  // 🔸 useCallback prevents recreation of the function on each render
  const handleClick = useCallback(() => {
    setClicked(prev => !prev);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      {/* This button will not re-render when count updates, thanks to React.memo + useCallback */}
      <Button onClick={handleClick} label="Toggle Something" />
    </div>
  );
};

export default App;

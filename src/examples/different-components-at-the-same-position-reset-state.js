import { useState } from 'react';
import './example.css';

function ChildComponent() {
  const [num, setNum] = useState(0);
  return (
    <button onClick={() => setNum(num + 1)}>{num}-Add(ChildComponent)</button>
  );
}

export default function Example() {
  function InnerChildComponent() {
    const [num, setNum] = useState(0);
    return (
      <button onClick={() => setNum(num + 1)}>
        {num}-Add(InnerChildComponent)
      </button>
    );
  }

  const [num, setNum] = useState(0);

  return (
    <div className="example-container">
      <button onClick={() => setNum(num + 1)}>
        {num}-Add(FatherComponent)
      </button>
      <ChildComponent />
      <InnerChildComponent />
    </div>
  );
}

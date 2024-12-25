import { useState } from 'react';
import '../example.css';

function ChildComponent(props) {
  const [num, setNum] = useState(0);

  return (
    <button onClick={() => setNum(num + 1)}>
      {props.num}-{num}-Add(ChildComponent)
    </button>
  );
}

export default function Example() {
  function InnerChildComponent(props) {
    const [num, setNum] = useState(0);
    return (
      <button onClick={() => setNum(num + 1)}>
        {props.num}-{num}-Add(InnerChildComponent)
      </button>
    );
  }

  const [num, setNum] = useState(0);

  return (
    <div className="example-container">
      <button onClick={() => setNum(num + 1)}>
        {num}-Add(FatherComponent)
      </button>
      <ChildComponent num={num} />
      <InnerChildComponent num={num} />
    </div>
  );
}

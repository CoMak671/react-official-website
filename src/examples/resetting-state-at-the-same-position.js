import { useState } from 'react';

export default function Example() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <SamePosition />
      <DifferentPosition />
    </div>
  );
}

function SamePosition() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      SamePosition:
      {isPlayerA ? <Counter person="Taylor" /> : <Counter person="Sarah" />}
      <button
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}
      >
        下一位玩家！
      </button>
    </div>
  );
}

function DifferentPosition() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      DifferentPosition:
      {isPlayerA && <Counter person="Taylor" />}
      {!isPlayerA && <Counter person="Sarah" />}
      <button
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}
      >
        下一位玩家！
      </button>
    </div>
  );
}

function Counter({ person }) {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h3>
        {person} 的分数：{score}
      </h3>
      <button onClick={() => setScore(score + 1)}>加一</button>
    </div>
  );
}

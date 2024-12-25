import { useState, useTransition, memo } from 'react';
import '../example.css';

function NormalTab(props) {
  return (
    <div>
      <h3>Normal Tab {props.name}</h3>
    </div>
  );
}

export const SlowTab = memo(function PostsTab() {
  // 打印一次。真正变慢的地方在 SlowPost 内。
  console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />');

  let items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return <ul className="items">{items}</ul>;
});

function SlowPost({ index }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // 每个 item 都等待 1 毫秒以模拟极慢的代码。
  }

  return <li className="item">Post #{index + 1}</li>;
}

export default function Example() {
  const [tab, setTab] = useState('normal-1');

  const [isPending, startTransition] = useTransition();

  function handleClick(tab) {
    startTransition(() => {
      setTab(tab);
    });
  }

  const style = {
    opacity: isPending ? 0.5 : 1,
  };

  return (
    <div className="example-container">
      <button style={style} onClick={() => handleClick('normal-1')}>
        Normal-1
      </button>
      <button style={style} onClick={() => handleClick('slow')}>
        Slow
      </button>
      <button style={style} onClick={() => handleClick('normal-2')}>
        Normal-2
      </button>
      {tab === 'normal-1' && <NormalTab name={'1'} />}
      {tab === 'slow' && <SlowTab />}
      {tab === 'normal-2' && <NormalTab name={'2'} />}
    </div>
  );
}

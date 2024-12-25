import DifferentComponentsAtTheSamePositionResetState from './examples/different-components-at-the-same-position-reset-state';
import ResettingStateAtTheSamePosition from './examples/resetting-state-at-the-same-position';
import UseTransition from './examples/use-transition';
import UseDeferredValue from './examples/use-deferred-value';

export const RoutingTable = [
  {
    title: 'different-components-at-the-same-position-reset-state',
    component: <DifferentComponentsAtTheSamePositionResetState />,
  },
  {
    title: 'resetting-state-at-the-same-position',
    component: <ResettingStateAtTheSamePosition />,
  },
  {
    title: 'use-transition',
    component: <UseTransition />,
  },
  {
    title: 'use-deferred-value',
    component: <UseDeferredValue />,
  },
];

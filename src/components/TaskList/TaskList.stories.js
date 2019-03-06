import React from 'react';
import { storiesOf } from '@storybook/react';

import { PureTaskList } from './TaskList';
import { task, actions } from '../Task/Task.stories';
import { withKnobs, object } from '@storybook/addon-knobs/react';

export const defaultTasks = [
  { ...task, id: '1', title: 'Task 1' },
  { ...task, id: '2', title: 'Task 2' },
  { ...task, id: '3', title: 'Task 3' },
  { ...task, id: '4', title: 'Task 4' },
  { ...task, id: '5', title: 'Task 5' },
  { ...task, id: '6', title: 'Task 6' },
];

export const withPinnedTasks = [
  ...defaultTasks.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
];

export const noTasks = [];

storiesOf('TaskList', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .add('default', () => { return <PureTaskList tasks={object("tasklist", defaultTasks)} {...actions} /> })
  .add('withPinnedTasks', () => { return <PureTaskList tasks={object("tasklist", withPinnedTasks)} {...actions} /> })
  .add('loading', () => { return <PureTaskList loading tasks={object("tasklist", noTasks)} {...actions} /> })
  .add('empty', () => { return <PureTaskList tasks={object("tasklist", noTasks)} {...actions} /> });
import React from 'react';
import CounterContainer from './containers/CounterContainer';
import GithubProfileLoader from './containers/GithubProfileLoader';
import TodoApp from './containers/TodoApp';

const App: React.FC = () => {
  return (
    <>
     <CounterContainer />
     <TodoApp />
     <GithubProfileLoader />
    </>
  );
}

export default App;

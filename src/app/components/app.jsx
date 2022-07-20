import CastsList from './casts-list/casts-list';
import ActionBar from './action-bar/action-bar';

const App = () => {
  return (
    <div className="app">
      <ActionBar />
      <CastsList />
    </div>
  );
}

export default App;

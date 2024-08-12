import Header from './components/Header';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Header />
      <img src="/gav.jpg" alt="gav-png" width={400} height={600} />
      <img src="/dom.jpg" alt="gav-png" width={400} height={600} />
      <h1>Kings</h1>
      <Button variant='primary'>test</Button>
    </div>
  );
}

export default App;

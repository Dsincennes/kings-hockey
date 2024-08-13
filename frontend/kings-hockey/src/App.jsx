import Header from './components/Header';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Header />
      <img src="/gav.jpg" alt="gav-png" width="auto" height={600} />
      <img src="/dom.jpg" alt="gav-png" width="auto" height={600} />
      <h1>Kings</h1>
      <button className="btn btn-primary">Primary Button</button>
      <br></br>
      <br></br>
      <Button>Testing</Button>
      <Button variant='primary'>test</Button>
    </div>
  );
}

export default App;

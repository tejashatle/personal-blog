import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Quotesintro from './components/quotes_intro';
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.6.0/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

function App() {
  return (
    <div className="App">
      <Home/>

      <Quotesintro/>
    </div>
  );
}

export default App;

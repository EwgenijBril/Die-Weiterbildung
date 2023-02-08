import './App.css';
import Banner1 from './components/Banner1';
import Header from './components/Header';
import Products from './components/Products';
import Banner2 from './components/Banner2';
import Plans from './Plans';

function App() {
  return (
    <div>
      <Header/>
      <Banner1/>
      <Products/>
      <Banner2/>
      <Plans/>
    </div>
  );
}

export default App;

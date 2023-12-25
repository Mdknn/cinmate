// import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import  {Header}  from './components/Header';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div className='App' >
    <Header/>
      <AllRoutes/>
      {/* <h1 className='text-6xl'>kaif kn</h1> */}
      <Footer/>
    </div>
  );
}

export default App;

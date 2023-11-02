
import './App.css';
import Header from './components/home/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePages from './components/pageConent/HomePages';
import About from './components/home/about/About';
import Menu from './components/menu/Menu';
import {useFirebaseApp} from 'reactfire'
import Hamburguesas from './components/menu/filtro/Hamburguesas';
import Footer from './components/footer/Footer';
import Map from './maps/Map';

function App() {
  const firebase = useFirebaseApp()
  console.log(firebase)
  return (
    <>
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact component={HomePages}/>
        <Route path='/historia' exact component={About}/>
        <Route path='/menu' exact component={Menu}/>
        <Route path='/ubucacion' exact component={Map}/>
        <Route path='/hamburguesas' exact component={Hamburguesas}/>
      </Switch>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;

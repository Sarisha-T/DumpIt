import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Dump from './components/Dump/Dump';
import How from './components/howitstarted/howitstarted'
import Footer from './components/footer/Footer'
import Loginn from "./components/login/Loginn"


import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Loginn/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Dump' element={<Dump/>}></Route>
          <Route path='/How' element={<How/>}></Route>
          <Route path='/Footer' element={<Footer/>}></Route>
          
      </Routes>
    </BrowserRouter>
  )
}

export default App;

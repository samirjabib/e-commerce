import { useSelector } from 'react-redux';
import {HashRouter,Routes,Route} from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen';
import {Home,Login,ProductsDetail,Purshases} from './pages/index'
import './index.css'


function App() {

  const isLoading = useSelector(state => state.isLoading);
  
  

  return (
    <div className="App">
      <HashRouter>
        {isLoading && <LoadingScreen/>}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/product/:id" element={<ProductsDetail />} />
            <Route path="/purshases" element={<Purshases/>} />
        </Routes>
    </HashRouter>
    </div>
  );
}

export default App;

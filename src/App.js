
import { useSelector } from 'react-redux';
import {HashRouter,Routes,Route} from 'react-router-dom'
import {LoadingScreen,NavBar, ProtectedRoutes} from './components/index';
import {Home,Login,ProductsDetail,Purshases, Shop} from './pages/index'
import './styles/App.css'

function App() {

  const isLoading = useSelector(state => state.isLoading);

  return (
    <div className="App">
      <HashRouter> 
        {isLoading && <LoadingScreen/>}
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/product/:id" element={<ProductsDetail />} />
          
          <Route element={<ProtectedRoutes/>}>
            <Route path="/purshases" element={<Purshases/>} /> 
            <Route path="/shop" element={<Shop/>} />
          </Route>
        </Routes>
    </HashRouter>
    </div>
  );
}

export default App;

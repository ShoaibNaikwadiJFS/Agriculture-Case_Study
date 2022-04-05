import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import Header from './Component/Header';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Farmer from './Component/Farmer';
import AddCrops from './Component/AddCrops';
import CropList from './Component/CropList';
import UpdateCropList from './Component/UpdateCropList';
import Orders from './Pages/Orders';
import Profile from './Pages/Profile';
import HomePage from './Pages/HomePage';
import Farmerhome from './Pages/Farmerhome';
import Defaultpage from './Pages/Defaultpage';



function App() {
  return (
    <Router>
        <div className="App">
          <Switch>


            {/* Login */}
            <Route path="/login">
              <Login />
              {/* <Footer /> */}
            </Route>
            {/* Register */}
            <Route path="/register">
              <Register />
              {/* <Footer /> */}
            </Route>
            {/* Checkout */}
            <Route path="/checkout">
              <Header />
              <Checkout />
            {/* Farmer */}
            </Route>
            <Route path="/farmer">
              <Farmer />
              <CropList />
            </Route>
            {/* Update Crop Data */}
            <Route exact path="/update-data/:cropID" >
              <UpdateCropList />
            </Route>
            {/* Profile */}
            <Route path="/profile">
              <Profile />
            </Route>
            {/* Orders */}
            <Route path="/orders">
              <Orders />
            </Route>
            {/* Adding Crops */}
            <Route path="/add">
              <AddCrops />
              {/* <Footer /> */}
            </Route>

            {/* Dealer page  */}
            <Route path="/home">
              <HomePage />
            </Route>

            {/* farmerHome page */}
            <Route path="/farmerhome">
              <Farmerhome/>
            </Route>

            {/* Default page  */}
            <Route path="/">
              <Defaultpage />
            </Route>

          </Switch>
          
        </div>
        <div>
          {/* <Footer /> */}
        </div>
    </Router>
    
    
  );
}

export default App;

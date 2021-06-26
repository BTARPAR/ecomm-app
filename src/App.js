import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {useSelector} from "react-redux";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import ProductDetailPage from "./components/Product";
import Cart from "./components/Cart";
import Sidebar from "./components/Sidebar";
import Checkout from "./components/Checkout";
import AccountPage from "./components/AccountPage";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import './App.scss';


function App() {
    const {sidebar} = useSelector((state) => state.preference);

    return (
        <Router>
            <Sidebar/>
            <div className={'app'} style={{
                marginLeft: sidebar ? '250px' : ''
            }}>
                <Header/>
                <Switch>
                    <Route exact path="/" children={<Homepage/>}/>
                    <Route exact path="/search/:query" children={<Homepage/>}/>
                    <Route exact path="/login" children={<Login/>}/>
                    <Route exact path="/product-detail/:id" children={<ProductDetailPage/>}/>
                    <Route exact path="/cart" children={<Cart/>}/>
                    <Route exact path="/checkout" children={<Checkout/>}/>
                    <Route exact path="/account" children={<AccountPage/>}/>
                    <Route exact path="/signup" children={<SignUp/>}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;

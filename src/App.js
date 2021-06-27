import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {GuardProvider, GuardedRoute} from 'react-router-guards'
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

const requireLogin = async (to, from, next) => {
    if (to.meta.auth) {
        await fetch('/heartbeat', {
            method: 'GET',
            headers: {
                credentials: 'include'
            }
        })
            .then((res) => {
                if (res.status === 201) next();
                next.redirect('/login');
            }).catch(() => {
                next.redirect('/login');
            })
    } else {
        next();
    }
};

function App() {
    const {sidebar} = useSelector((state) => state.preference);

    return (
        <Router>
            <GuardProvider guards={[requireLogin]}>
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
                        <GuardedRoute exact path="/checkout" children={<Checkout/>} meta={{auth: true}}/>
                        <GuardedRoute exact path="/account" children={<AccountPage/>} meta={{auth: true}}/>
                        <Route exact path="/signup" children={<SignUp/>}/>
                    </Switch>
                    <Footer/>
                </div>
            </GuardProvider>
        </Router>
    );
}

export default App;

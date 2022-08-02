import React from 'react';
import './index.css'
import {BrowserRouter, Link, Routes, Route, Navigate} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Auth from './components/Authentication.js'
import MainContent from './components/Main.js'
import WareList from './components/Catalog.js'
import wares from './items/wares.json'
import Profile from './components/Profile.js'


class Main extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            is_authenticated: false,
            orders: JSON.parse(JSON.stringify(wares, null, 2))
        }
    }

    getOrderData(order){
        if (this.is_authenticated()){
            alert("Заказ оформлен!")
            this.setState({
                orders: order
            })
        }else{
            alert("Необходима авторизация!")
        }
    }

    deleteOrder(order){
        this.setState({
            orders: JSON.parse(JSON.stringify(wares, null, 2))
        })
        alert("Заказ отменен!")
    }

    setAuth(auth){
        this.setState({is_authenticated: auth})
    }

    is_authenticated(){
        return this.state.is_authenticated !== false
    }

    logout() {
        this.setAuth(false)
    }

    getAuth(login, password){
        this.setAuth()
    }

    SortedPriceData(items){
        items.sort((min, max) => min.price - max.price)
        this.setState({
            orders: items
        })
    }

    CancelSortAndFilters(){
        this.setState({
             orders: JSON.parse(JSON.stringify(wares, null, 2))
        })
    }

    FilterName(items){
        let filterName = prompt('Введите название товара', '')
        this.setState({
            orders: items.filter(item => item.name === filterName)
        })
    }





    render(){
        return(
            <div>
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Главная</Link>
                            </li>
                            <li>
                                <Link to="/profile">Профиль</Link>
                            </li>
                            <li>
                                <Link to="/catalog">Каталог</Link>
                            </li>
                            <li>
                                {this.is_authenticated() ? <button onClick={()=>this.logout()}>Выйти</button> :
                                <Link to='/login'>Войти</Link>}
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route exact path="/" element={<MainContent />} />
                        <Route exact path="/catalog" element={<WareList wares={this.state.orders} getOrderData={(order) => this.getOrderData(order)}
                        SortedPriceData={(item) => this.SortedPriceData(item)} CancelSortAndFilters={() => this.CancelSortAndFilters()}
                         FilterName={(items) => this.FilterName(items)}/>}/>
                        <Route exact path="/login" element={this.is_authenticated() ? <Navigate to="/profile"/> :
                        <Auth getAuth={(login, password) => this.getAuth(login, password)} />}/>
                        <Route exact path="/profile" element={this.is_authenticated() ? <Profile orders={this.state.orders}
                        deleteOrder={(order) => this.deleteOrder(order)} /> : <Navigate to="/login" />}/>
                    </Routes>
                    <div className="footer"></div>
                </BrowserRouter>
            </div>
        );
    }
}

// =======================================


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
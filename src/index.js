import React from 'react';
import './index.css'
import {BrowserRouter, Link, Routes, Route, Navigate} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Auth from './components/Authentication.js'
import MainContent from './components/Main.js'
import WareList from './components/Catalog.js'
import wares from './items/wares.json'
import Profile from './components/Profile.js'
import OrderList from './components/OrdersList.js'


class Main extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            is_authenticated: false,
            wares: JSON.parse(JSON.stringify(wares, null, 2)),
            order: [].fill(null),
            history: [{
                orders: [].fill(null)
            }],
            orderNumber: 0,
            sort: false,
            login: '',
            password: '',
        }
    }

    getOrderData(order){
        if (this.is_authenticated()) {
            this.setState({
                order: order.filter((item) => item.isChecked === true)
            })
            alert("Заказ оформлен!")
        }else{
            alert("Необходима авторизация!")
        }
    }

    deleteOrder(){
        this.setState({
            order: [].fill(null)
        })
    }

    deleteOrderItem(id){
        this.setState({
            order: this.state.order.filter((order) => order.id !== id),
        })
    }

    setAuth(auth){
        this.setState({
            is_authenticated: auth
        })
    }

    is_authenticated(){
        return this.state.is_authenticated !== false
    }

    logout() {
        this.setAuth(false)
        this.setState({
            login: '',
            password: ''
        })
    }

    getAuth(login, password){
        this.setAuth()
        this.setState({
            login: login,
            password: password
        })
    }

    SortedPriceData(items){
        if (this.state.sort === false){
            items.sort((min, max) => min.price - max.price)
            this.setState({
                wares: items,
                sort: true
            })
        } else {
            items.sort((min, max) => max.price - min.price)
            this.setState({
                wares: items,
                sort: false
            })
        }
    }

    SortedPriceDataUp(items){
        items.sort((min, max) => min.price - max.price)
        this.setState({
            wares: items,
            sort: true
        })
    }

    SortedPriceDataDn(items){
        items.sort((min, max) => max.price - min.price)
        this.setState({
            wares: items,
            sort: false
        })
    }

    CancelSortAndFilters(){
        this.setState({
             wares: JSON.parse(JSON.stringify(wares, null, 2)),
             sort: false
        })
    }

    FilterName(items){
        let filterName = prompt('Введите название товара', '')
        let filterData = items.filter(item => item.name === filterName)

        if(filterName === null || filterName === ''){
            return this.state.wares
        }else{
            this.setState({
                wares: filterData
            })
        }
    }

    saveOrderInHistory(order){
        const history= this.state.history.slice(0, this.state.orderNumber + 1);
        const current = history[history.length - 1];
        const orders = current.orders.slice();

        orders[this.state.login] = order.filter((item) => item.isChecked === true);

        this.setState({
            history: history.concat([{
                orders: orders
            }]),
            orderNumber: history.length,
        });
    }

    formOrder(order){
        this.getOrderData(order)
        this.saveOrderInHistory(order)
    }


    render(){
        return(
            <div>
                <BrowserRouter>
                    <nav className="nav">
                        <ul>
                            <li className="nav_link">
                                <Link to="/">Главная</Link>
                            </li>
                            <li className="nav_link">
                                <Link to="/profile">Профиль</Link>
                            </li>
                            <li className="nav_link">
                                <Link to="/catalog">Каталог</Link>
                            </li>
                            <li className="nav_link last">
                                {this.is_authenticated() ? <button className="btn" onClick={()=>this.logout()}>Выйти</button> :
                                <Link to='/login'>Войти</Link>}
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route exact path="/" element={<MainContent />} />
                        <Route exact path="/catalog" element={<WareList wares={this.state.wares}
                        SortedPriceData={(item) => this.SortedPriceData(item)} CancelSortAndFilters={() => this.CancelSortAndFilters()}
                         FilterName={(items) => this.FilterName(items)} SortedPriceDataUp={(items) => this.SortedPriceDataUp(items)}
                          SortedPriceDataDn={(items) => this.SortedPriceDataDn(items)} formOrder={(order) => this.formOrder(order)} login={this.state.login}/>}/>
                        <Route exact path="/login" element={this.is_authenticated() ? <Navigate to="/profile"/> :
                        <Auth getAuth={(login, password) => this.getAuth(login, password)} />}/>
                        <Route exact path="/profile" element={this.is_authenticated() ? <Profile order={this.state.order}
                        deleteOrder={() => this.deleteOrder()} deleteOrderItem={(id) => this.deleteOrderItem(id)}
                        login={this.state.login}  history={this.state.history}/> : <Navigate to="/login" />}/>
                        <Route exact path="/profile/ordersHistory" element={this.is_authenticated() ?
                        <OrderList orders={this.state.order} history={this.state.history} login={this.state.login}/> :  <Navigate to="/login" />} />
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
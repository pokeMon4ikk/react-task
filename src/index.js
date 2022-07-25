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
            wares: wares
        }
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
                                {this.is_authenticated() ? <button onClick={()=>this.logout()}>Logout</button> :
                                <Link to='/login'>Login</Link>}
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route exact path="/" element={<MainContent />} />
                        <Route exact path="/catalog" element={<WareList wares={this.state.wares}/>}/>
                        <Route exact path="/login" element={this.is_authenticated() ? <Navigate to="/profile"/> : <Auth getAuth={() => this.getAuth()} />}/>
                        <Route exact path="/profile" element={this.is_authenticated() ? <Profile /> : <Navigate to="/login" />}/>
                    </Routes>
                    <div className="footer"></div>
                </BrowserRouter>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);



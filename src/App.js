import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';

const Home = () => {
    return (
        <h1>Strona startowa</h1>
    );
}
const News = () => <h1>Aktualności</h1>;
const Contact = () => <h1>Kontakt</h1>;
const ErrorPage = () => <h1>Taka strona nie istnieje</h1>;


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header>
                        <nav>
                            <ul>
                                {/*<li><a href="/">Start</a></li>*/}
                                {/*<li><a href="/news">Aktualności</a></li>*/}
                                {/*<li><a href="/contact">Kontakt</a></li>*/}
                                <li>
                                    <NavLink to="/"
                                             exact
                                             className="home_selected">Start</NavLink>
                                </li>
                                <li>
                                    <NavLink exact
                                             to="/news"
                                             className="news_selected">Aktualności</NavLink>
                                </li>
                                <li>
                                    <NavLink exact
                                             to="/contact"
                                             className="contact_selected">Kontakt</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <section>
                        <Routes>
                                <Route path="/"
                                       exact
                                       element={<Home/>}/>
                                <Route path="/news"
                                       element={<News/>}/>
                                <Route path="/contact"
                                       element={<Contact/>}/>
                                <Route path="*"
                                       element={<ErrorPage/>}/>
                        </Routes>
                    </section>
                </div>
            </Router>
        );
    }
}

export default App;
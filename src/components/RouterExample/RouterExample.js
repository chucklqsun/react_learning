import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css"
import Game from "../Game";

function Index() {
    return <h2>Home</h2>;
}

function myGame() {
    return <Game />
}

class RouterExample extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul className="menu">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/tic-tac-toe/">tic-tac-toe</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={Index} />
                    <Route path="/tic-tac-toe/" component={myGame} />
                </div>
            </Router>
        );
    }
}
export default RouterExample;

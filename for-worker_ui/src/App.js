import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout";
import Register from "./components/Register";
import React, {Component} from "react";
import {Link, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/HomePage"
import CarWash from "./components/CarWash"

class App extends Component {
    render() {
        return (<html>
        <head>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"
                integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
                crossOrigin="anonymous"
            />
            <title></title>
        </head>

        
            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Carwash" element={<CarWash/>}/>

            </Routes>
        

        { /* <Layout>
            <Routes>

                <Route path="/" element={<Login/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>

                {/*<Route path="/add" element={<AddTutorial/>} />*/}
                {/*<Route path="/tutorials/:id" element={<Tutorial/>} />*/}
        {/*</Routes>
        </Layout>*/}
        </html>);
    }
}

export default App;

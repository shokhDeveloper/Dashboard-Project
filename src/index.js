import "./index.css"
import React from "react"
import App from "./App"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>   
)
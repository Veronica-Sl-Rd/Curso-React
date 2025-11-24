import React from "react";
import { Spinner } from "react-bootstrap";
import '../css/Loader.css'

const Loader = ({texto}) => {
    return (
        <div className= "loader">
            <Spinner animation="border" variant="dark"/>
            {texto && <p className="loader-text">{texto}</p>}
        </div>
    )
}
export default Loader
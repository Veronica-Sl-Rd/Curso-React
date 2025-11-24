import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/CarrouselNovedades.css"
import { Carousel } from "bootstrap";

const CarrouselNovedades = ({ productos }) => {

    useEffect(() => {
        const myCarousel = document.getElementById("carouselNovedades");
        if (myCarousel) {
            const carousel = Carousel.getOrCreateInstance(myCarousel);
            carousel.cycle();
        }
    }, []);

    return (
        <div id="carouselNovedades" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {productos.map((prod, index) => (
                <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={prod.id}>
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-4 carousel-box">
                        <img src={prod.heroimg} alt={prod.name} className="carousel-img-small"/>
                        <div className="carousel-info text-center text-md-start mt-3 mt-md-0 ms-md-5">
                            <h2 className="fw-bold">{prod.name}</h2>
                            <p className="text-muted mb-2">{prod.author}</p>
                            <p className="small">
                                {prod.description?.slice(0, 120)}...
                            </p>
                            <Link to={`/item/${prod.id}`} className="btn btn-dark mt-2">
                                Ver detalle
                            </Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselNovedades" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselNovedades" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    );
};

export default CarrouselNovedades;


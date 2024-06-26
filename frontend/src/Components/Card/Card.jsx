import { BsFillBagFill } from "react-icons/bs";
import './Card.css'
import { FaDog } from "react-icons/fa6";
import StarRating from "../StarRating/StarRating";
import {React, useState} from 'react';

const Card = ({ product }) => {
  const getEstadoStyles = (estado) => {
    switch (estado) {
        case "ACTIVO":
            return {
                boxBorder: "1.5px solid #BBE479",
                circleColor: "#BBE479",
                backgroundColor: "#BBE479",
            };
        case "INACTIVO":
            return {
                boxBorder: "1.5px solid #FEF3A6",
                circleColor: "#FEF3A6",
                backgroundColor: "#FEF3A6",
            };
        case "PENDIENTE":
            return {
                boxBorder: "1.5px solid orange",
                circleColor: "orange",
            };
        default:
            return {
                boxBorder: "1.5px solid gray",
                circleColor: "gray",
            };
    }
};
const [status, setStatus] = useState('INACTIVO');
const estadoStyles = getEstadoStyles(status);



  return (
    <>
      <section className="card">
        <div className="card-status">
          <div className="card-box-estado" style={{ border: estadoStyles.boxBorder, backgroundColor: estadoStyles.backgroundColor }}>
              <p className="card-estado-text">{status}</p>
          </div>
        </div>
        <h3 className="card-title">{product.title}</h3>
        <div className="main-info">
          <section className="pet-details">
            <div className="circle-icon"><FaDog className="pet-icon" title="Perro" /></div>
            <div className="circle-icon"><FaDog className="pet-icon" title="Perro" /></div>
          </section>
          <StarRating rating = {product.rating}/>
        </div>
        <section className="card-details">
          <p className="service-description">{product.description}</p>

          <div class="box-down">
            <div class="h-bg">
              <div class="h-bg-inner"></div>
            </div>

            <a class="cart" href="#">
              <span class="price">$ {product.price}</span>
              <span class="more-details">
                <span class="txt">VER SERVICIO</span>
              </span>
            </a>
          </div>
        </section>
        

      {/*

        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div> */}
      </section>
    </>
  );
};

export default Card;
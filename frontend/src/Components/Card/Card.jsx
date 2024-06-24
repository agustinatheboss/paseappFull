import { BsFillBagFill } from "react-icons/bs";
import './Card.css'
import { FaDog } from "react-icons/fa6";
import StarRating from "../StarRating/StarRating";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className="card">
        <h3 className="card-title">{title}</h3>
        <div className="main-info">
          <section className="pet-details">
            <div className="circle-icon"><FaDog className="pet-icon" title="Perro" /></div>
            <div className="circle-icon"><FaDog className="pet-icon" title="Perro" /></div>
          </section>
          <StarRating rating = {1.2}/>
        </div>
        <section className="card-details">
          <p className="service-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</p>

          <div class="box-down">
            <div class="h-bg">
              <div class="h-bg-inner"></div>
            </div>

            <a class="cart" href="#">
              <span class="price">$120</span>
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
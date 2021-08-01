import React from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Products from "./Products";
// import axios from "axios";

// export async function getUser(contax) {
//   const products = await axios.get("https://fakestoreapi.com/products");
//   console.log(products);
//   return products;
// }

// getUser();

const Home = () => {
  // console.log(products);
  return (
    <div className="home">
      <div className="home_container">
        {/* <div className="banner_gradiant" /> */}
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div>
            <img
              className="home_banner"
              loading="lazy"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Afsos-PC-adapt_1500x600._CB663795688_.jpg"
              alt="banner"
            />
          </div>
          <div>
            <img
              className="home_banner"
              loading="lazy"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/StylebazaarJuly/GWnew/5._CB664790843_.jpg"
              alt="banner"
            />
          </div>
          <div>
            <img
              className="home_banner"
              loading="lazy"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/cnnjpp/July21/Hero/OP_9series_Jul_12_1500x600._CB664358258_.jpg"
              alt="banner"
            />
          </div>
          <div>
            <img
              className="home_banner"
              loading="lazy"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/GW/Event_hero_Teaser_PC_1500X600_eng._CB664069228_.jpg"
              alt="banner"
            />
          </div>
        </Carousel>
        <div className="all_products">
          <div className="home_row">
            <Products
              title="The Maidens: The new thriller from the author of the global bestselling debut The Silent Patient"
              s_price={499}
              A_price={699}
              img="https://images-na.ssl-images-amazon.com/images/I/41EANP48VAL._SX322_BO1,204,203,200_.jpg"
              rating={4}
            />
            <Products
              title="Bosch GDC 120 Professional Marble Cutter"
              s_price={2999}
              A_price={4999}
              img="https://images-na.ssl-images-amazon.com/images/I/71bM%2BWSv5YL._SX522_.jpg"
              rating={5}
            />
          </div>
          <div className="home_row">
            <Products
              title="boAt Xtend Smartwatch with Alexa Built-in, 1.69” LCD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor & 5 ATM Water Resistance(Olive Green)"
              s_price={3499}
              A_price={7999}
              img="https://images-na.ssl-images-amazon.com/images/I/51KXBx3kwCS._SX679_.jpg"
              rating={3}
            />
            <Products
              title="Echo Dot (3rd Gen, Black) + Wipro 9W LED Smart Color Bulb combo - Works with Alexa - Smart Home starter kit"
              s_price={3099}
              A_price={5499}
              img="https://images-na.ssl-images-amazon.com/images/I/51qkBdfmymS._SX679_.jpg"
              rating={4}
            />
            <Products
              title="OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage) I Extra upto Rs.1000 off on Exchange"
              s_price={29999}
              // A_price={5499}
              img="https://images-na.ssl-images-amazon.com/images/I/61TnX0PmqES._SX679_.jpg"
              rating={5}
            />
          </div>
          <div className="home_row">
            <Products
              title="LG Ultragear 27 240Hz, 1ms, G-Sync Compatible, HDR 10, IPS Display Gaming Monitor, Height Adjust, Pivot Stand, Display Port, HDMI Port - 27GN750"
              s_price="28,999.00"
              A_price="40,000.00"
              img="https://images-na.ssl-images-amazon.com/images/I/71VHmNBWJQL._SX679_.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// export async function getServerSideProps(contex) {
//   const products = await fetch("https://fakestoreapi.com/products").then(
//     (res) => res.json().then((data) => console.log(data))
//   );

//   return {
//     props: {
//       products,
//     },
//   };
// }

// getServerSideProps();

// export const products = fetch("https://fakestoreapi.com/products/1").then(
//   (res) => res.json().then((data) => console.log(data))
// );

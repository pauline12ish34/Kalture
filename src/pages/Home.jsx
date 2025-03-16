import React from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import { Button } from 'react-bootstrap'
const artworks = [
  {
    id: 1,
    image: "https://via.placeholder.com/200", // Replace with actual images
    title: "Modern Art 1",
    price: 50,
    oldPrice: 80,
  },
  {
    id: 2,
    image: "./arts/images1.jpg",
    title: "Traditional Art",
    price: 60,
    oldPrice: 90,
  },
  {
    id: 3,
    image: ".museums/inka",
    title: "African Pottery",
    price: 70,
    oldPrice: 100,
  },
  {
    id: 4,
    image: "./vite.svg",
    title: "Abstract Design",
    price: 40,
    oldPrice: 60,
  },
  {
    id: 5,
    image: "./vite.svg",
    title: "Tribal Painting",
    price: 80,
    oldPrice: 120,
  },
  {
    id: 6,
    image: "./museums/ancient.jpg",
    title: "Handmade Bowl",
    price: 30,
    oldPrice: 50,
  },
];




export default function Home() {
  return (
    <div className='bg-light'>
      
<Navbar/>

      <div class="row ">
            <div class="col-md-6">
                <h1>Finding Your talent or buy a decoration </h1>
                <p>"To study history means submitting 
                    yourself to chaos, but nevertheless 
                    retaining your faith in order and meaning."</p>

                <a href="signup" class="btn btn-outline-dark btn-lg">Discover Now</a>
            </div>
            <div class="col-md-6">
            
                {/* <img src="imgs/car_home.svg" alt="Parking Image" class="img-fluid rounded"/> */}
                <ImageSlider />
            </div>
        </div>

        <div>
            cards
            {/* <Container> */}
            <h2 className="text-center">New Artist Work</h2>
            <div className="d-flex slider-container">
            {artworks.map((art, index) => (
          <div key={index} className="slider-item  bg-white p-3">
            <div className="p-5">
                
            <img src={art.image}  width={100} height={100} alt={`Slide ${index + 1}`} />
            </div>
            <p className="description">{art.title}</p>
          </div>
          
        ))}

        
      
</div>
        </div>
    </div>
  )
}

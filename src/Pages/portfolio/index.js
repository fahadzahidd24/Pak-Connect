import React from "react";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import img1 from "../../Assets/natures-view.jpg";
import img3 from "../../Assets/morning-view.jpg";
import custImg from "../../Assets/window-banner-03.jpg";
import galImg1 from "../../Assets/gallery-first-slide.jpg";
import galImg2 from "../../Assets/gallery-second-slide.jpg";
import galImg3 from "../../Assets/gallery-third-slide.jpg";
import galImg4 from "../../Assets/gallery-fourth-slide.jpg";
import galImg5 from "../../Assets/gallery-fifth-slide.jpg";
import galImg6 from "../../Assets/gallery-sixth-slide.jpg";
import galImg7 from "../../Assets/gallery-seventh-slide.jpg";
import galImg8 from "../../Assets/gallery-eightth-slide.jpg";
import galImg9 from "../../Assets/gallery-08-free-img.jpg";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const photos = [
  { src: galImg1, alt: "gallery-first-slide" },
  { src: galImg2, alt: "gallery-second-slide" },
  { src: galImg3, alt: "gallery-third-slide" },
  { src: galImg4, alt: "gallery-fourth-slide" },
  { src: galImg5, alt: "gallery-fifth-slide" },
  { src: galImg6, alt: "gallery-sixth-slide" },
  { src: galImg7, alt: "gallery-seventh-slide" },
  { src: galImg8, alt: "gallery-eightth-slide" },
  { src: galImg9, alt: "gallery-08-free-img" },
];

function Portfolio() {
  return (
    <div className="min-h-screen font-[Barlow] bg-[#e0ffd7]">
      <div
        className="h-fit bg-cover"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="bg-[#4F7942] bg-opacity-60 flex-col">
          <Navbar />
          <div className="md:flex items-start justify-between px-10 md:px-16 mt-14">
            <h1 className="text-white text-center md:text-start w-full md:w-8/12 text-5xl md:text-[5.2rem] font-bold">
              Portfolio
            </h1>
            <div className="w-full md:w-1/3 left-10 bg-[#4F7942] text-white p-5 md:p-10 mt-10 md:mt-36 text-center md:text-start">
              <p className="text-lg font-bold mb-4">Toll Free Call</p>
              <p className="text-3xl font-bold">+1 910-626-85255</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit px-10 md:px-16 mb-20 flex items-center justify-between">
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <p className="text-lg font-bold mb-8">Our Work</p>
          <p className="text-3xl md:text-4xl font-bold mb-8">
            We Have Been Serving People Around the Country, Here's the Proof!
          </p>
          <p className="text-lg mb-10">
            I am text block. Click edit button to change this text. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <img
          src={custImg}
          alt="window-banner-01"
          className="hidden md:block w-1/3 h-fit object-fit"
        />
      </div>
      <PhotoProvider>
        <div className="px-10 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {photos.map((photo, index) => (
            <PhotoView key={index} src={photo.src}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:cursor-pointer"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
      <div
        className="h-fit bg-cover bg-center"
        style={{ backgroundImage: `url(${img3})` }}
      >
        <div className="bg-[#4F7942] bg-opacity-60 min-h-fit px-10 md:px-20 py-10 md:py-28 flex md:items-end md:justify-end">
          <div className="flex-col items-start justify-start w-full md:w-7/12">
            <p className="text-4xl md:text-5xl font-bold text-white mb-10">
              Sleep in Absolute Peace Wake up to Bright Sunshine
            </p>
            <p className="md:text-lg text-white mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="bg-[#4F7942] text-white px-10 py-3 rounded-full">
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;

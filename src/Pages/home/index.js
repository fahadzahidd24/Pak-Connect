import React from "react";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import img1 from "../../Assets/window-home-banner.jpg";
import img2 from "../../Assets/window-banner-01.jpg";
import img3 from "../../Assets/morning-view.jpg";
import { MdDoubleArrow } from "react-icons/md";
import entDoor from "../../Assets/entrance-door.jpg";
import slideDoor from "../../Assets/sliding-door.jpg";
import garDoor from "../../Assets/services-03-free-img.jpg";
import instRep from "../../Assets/repair-service.jpg";
import custImg from "../../Assets/window-banner-03.jpg";
import img4 from "../../Assets/morning-window-view.jpg";

function Home() {
  return (
    <div className="min-h-screen font-[Barlow] bg-[#e0ffd7]">
      <div
        className="h-fit bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="bg-[#4F7942] bg-opacity-40 flex-col">
          <Navbar />
          <div className="md:flex items-start justify-between px-10 md:px-20 mt-14">
            <div className="text-white w-full md:w-3/5">
              <h2 className="text-2xl font-bold mb-10">
                J’a Door - More than Enough Choices
              </h2>
              <h1 className="text-5xl md:text-[5.2rem] font-bold mb-10 md:mb-20">
                The Right Windows & Doors For You
              </h1>
              <p className="font-base mb-10 md:mb-24 w-11/12">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris.
              </p>
              <button className="bg-[#4F7942] text-white px-10 py-3 rounded-full mb-10 md:mb-0">
                Get Free Estimate
              </button>
            </div>
            <div className="w-full md:w-1/3">
              <form className="bg-white p-8 space-y-6">
                <h3 className="text-xl font-semibold mb-6">Make an Enquiry</h3>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border border-gray-300 "
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 "
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-3 border border-gray-300 "
                  />
                </div>
                <div className="mb-4">
                  <select className="w-full p-3 border border-gray-300 ">
                    <option>Entrance Doors</option>
                    <option>Windows</option>
                    <option>Patio Doors</option>
                    <option>Garage Doors</option>
                  </select>
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Additional Message"
                    className="w-full p-3 border border-gray-300 "
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#4F7942] self-start text-white px-6 py-3 rounded-full md:w-1/2"
                >
                  Send Message
                </button>
              </form>
              <div className="left-10 bg-[#4F7942] text-white p-8">
                <p className="text-lg font-bold mb-4">Toll Free Call</p>
                <p className="text-3xl font-bold">+1 910-626-85255</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-fit px-10 md:px-20 mb-20 flex md:flex-row flex-col-reverse items-center justify-between">
        <div className="w-full md:w-7/12 ps-4 md:ps-16 ">
          <p className="text-4xl font-bold mb-12">About Us</p>
          <p className="text-2xl font-bold mb-10">
            Morbi Accumsan Ipsum Velit. Nam Nec Tellus a Odio Tincidunt Auctor
            Amet Mauris.
          </p>
          <p className="text-lg font-normal">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
            amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
            tincidunt auctor. Nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
            nec sagittis sem nibh id elit.
          </p>
        </div>
        <img
          src={img2}
          alt="window-banner-01"
          className="w-full md:w-1/3 h-full object-cover mb-20 md:mb-0"
        />
      </div>
      <div
        className="md:h-fit bg-cover bg-center mb-20"
        style={{ backgroundImage: `url(${img3})` }}
      >
        <div className="bg-[#4F7942] bg-opacity-40 px-10 md:px-20 py-10 md:py-28">
          <div className="flex-col items-start justify-start w-full md:w-7/12 ">
            <p className="text-3xl md:text-5xl font-bold text-white mb-10">
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
      <div className="px-10 mb-32 md:mb-52 flex flex-col items-center justify-center">
        <p className="text-4xl font-bold text-center mb-8">Services</p>
        <p className="text-lg mb-20 text-center w-full md:w-1/2">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-[#e0ffd7] text-black rounded-2xl shadow-lg">
            <img
              src={entDoor}
              alt="entrance-door"
              className="w-full object-cover rounded-t-2xl"
            />
            <div className="p-8">
              <p className="text-xl font-bold mb-3">Entrance Doors</p>
              <p className="text-base">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum.
              </p>
              <button className=" text-black flex items-center justify-center space-x-6 px-10 mt-8">
                Read More <MdDoubleArrow size={20} className="text-black" />
              </button>
            </div>
          </div>
          <div className="bg-[#e0ffd7] text-black rounded-2xl shadow-lg">
            <img
              src={slideDoor}
              alt="entrance-door"
              className="w-full object-cover rounded-t-2xl"
            />
            <div className="p-8">
              <p className="text-xl font-bold mb-3">Sliding Doors</p>
              <p className="text-base">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum.
              </p>
              <button className=" text-black flex items-center justify-center space-x-6 px-10 mt-8">
                Read More <MdDoubleArrow size={20} className="text-black" />
              </button>
            </div>
          </div>
          <div className="bg-[#e0ffd7] text-black rounded-2xl shadow-lg">
            <img
              src={garDoor}
              alt="entrance-door"
              className="w-full object-cover rounded-t-2xl"
            />
            <div className="p-8">
              <p className="text-xl font-bold mb-3">Garage Doors</p>
              <p className="text-base">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum.
              </p>
              <button className=" text-black flex items-center justify-center space-x-6 px-10 mt-8">
                Read More <MdDoubleArrow size={20} className="text-black" />
              </button>
            </div>
          </div>
          <div className="bg-[#e0ffd7] text-black rounded-2xl shadow-lg">
            <img
              src={instRep}
              alt="entrance-door"
              className="w-full object-cover rounded-t-2xl"
            />
            <div className="p-8">
              <p className="text-xl font-bold mb-3">Installation & Repair</p>
              <p className="text-base">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum.
              </p>
              <button className=" text-black flex items-center justify-center space-x-6 px-10 mt-8">
                Read More <MdDoubleArrow size={20} className="text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit px-10 md:px-20 flex flex-col md:flex-row items-center justify-between mb-10 md:mb-0">
        <img
          src={custImg}
          alt="window-banner-01"
          className="w-full md:w-1/3 h-fit object-fit mb-14 md:mb-0"
        />
        <div className="w-full md:w-7/12 md:ps-16">
          <p className="text-4xl md:text-5xl font-bold mb-8 text-center">Happy Customers</p>
          <p className="md:text-lg mb-10 text-center">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum.
          </p>
          <div className="space-y-5 md:space-y-10">
            <div className="bg-[#e0ffd7] p-8 rounded-2xl shadow-lg">
              <p className="text-xl mb-4">
                "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                auctor a ornare odio."
              </p>
              <p className="font-semibold">Ethan Valdez</p>
              <p className="text-gray-500">California</p>
            </div>

            <div className="bg-[#e0ffd7] p-8 rounded-2xl shadow-lg">
              <p className="text-xl mb-4">
                "Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                gravida nibh vel ipsum."
              </p>
              <p className="font-semibold">Adam Brooks</p>
              <p className="text-gray-500">Los Angeles</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-fit bg-cover bg-center"
        style={{ backgroundImage: `url(${img4})` }}
      >
        <div className="bg-[#4F7942] bg-opacity-40 px-10 md:px-20 py-14 md:py-28">
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

export default Home;

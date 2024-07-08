import React from "react";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";
import img1 from "../../Assets/morning-view.jpg";

function Contact() {
  return (
    <div className="min-h-screen font-[Barlow] bg-[#e0ffd7]">
      <div
        className="h-fit bg-cover"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="bg-[#4F7942] bg-opacity-60 flex-col">
          <Navbar />
          <div className="md:flex items-start justify-between px-10 md:px-16 mt-14">
            <h1 className="text-white text-center md:text-start w-full md:w-8/12 text-5xl md:text-[5.2rem] font-bold">Contact</h1>
            <div className="w-full md:w-1/3 left-10 bg-[#4F7942] text-white p-5 md:p-10 mt-10 md:mt-36 text-center md:text-start">
              <p className="text-lg font-bold mb-4">Toll Free Call</p>
              <p className="text-3xl font-bold">+1 910-626-85255</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row px-10 md:px-16 justify-between items-center">
        <div className="w-full md:w-1/2 p-4">
          <p className="text-4xl text-gray-800 mb-10 font-bold">Contact Us</p>
          <p className="text-lg text-gray-800 mb-20">
            Sed non mauris vitae erat consequat auctor eu in elit class aptent
            taciti sociosqu ad litora torquent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-2xl text-gray-500 mr-4" />
              <div>
                <p className="font-medium">
                  123 Fifth Avenue, New York, NY 10160
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <FaRegClock className="text-2xl text-gray-500 mr-4" />
              <div>
                <p className="font-medium">Weekdays ...... 9AM to 7PM</p>
                <p className="font-medium">Weekends ...... Off</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-2xl text-gray-500 mr-4" />
              <div>
                <p className="font-medium">+1234567890</p>
                <p className="font-medium">+1234567890</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-2xl text-gray-500 mr-4" />
              <div>
                <p className="font-medium">contact@example.com</p>
                <p className="font-medium">sales@example.com</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="#"
                className="text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                href="#"
                className="text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700"
              >
                <FaGooglePlusG className="text-lg" />
              </a>
              <a
                href="#"
                className="text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 ">
          <form className="bg-[#395830] p-8 space-y-6">
            <h3 className="text-2xl text-white font-semibold mb-6">Make an Enquiry</h3>
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
        </div>
      </div>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.867872349287!2d-73.98434068459071!3d40.75889697932491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4f3b8f1ef%3A0x6a7e0d0d7e4d0c3d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sng!4v1633151748829!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

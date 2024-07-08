import React from "react";
import Navbar from "../../Components/navbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import img1 from "../../Assets/enjoy-window-view.jpg";
import img2 from "../../Assets/window-banner-01.jpg";
import entDoor from "../../Assets/entrance-door.jpg";
import slideDoor from "../../Assets/sliding-door.jpg";
import garDoor from "../../Assets/services-03-free-img.jpg";
import winFrames from "../../Assets/window-scene.jpg";
import installImg from "../../Assets/repair-service.jpg";
import img3 from "../../Assets/morning-window-view.jpg";
import Footer from "../../Components/footer";

function Services() {
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
              Services
            </h1>
            <div className="w-full md:w-1/3 left-10 bg-[#4F7942] text-white p-5 md:p-10 mt-10 md:mt-36 text-center md:text-start">
              <p className="text-lg font-bold mb-4">Toll Free Call</p>
              <p className="text-3xl font-bold">+1 910-626-85255</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" min-h-fit bg-inherit px-10 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between ">
        <div className="w-full md:w-7/12 flex flex-col-reverse md:flex-row items-start">
          <div className="flex-col w-full md:w-1/2">
            <p className="text-xl font-bold mb-4 *:md:mb-12">Services</p>
            <p className="text-3xl md:text-4xl font-bold mb-4">
              Let It Be Any Door or Window Work, We Are Here to Help!!
            </p>
            <p className="md:text-lg font-normal mb-2">
              I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="font-[Barlow] w-full md:w-1/2 md:ps-10 mb-10 md:mb-0">
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <p className="font-bold ">Custom Designs</p>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  I am text block. Click edit button to change this text. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <p className="font-bold ">Strong Material</p>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  I am text block. Click edit button to change this text. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <p className="font-bold ">Beautiful Designs</p>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  I am text block. Click edit button to change this text. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <p className="font-bold ">Instant Repairs</p>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  I am text block. Click edit button to change this text. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <img
          src={img2}
          alt="window-banner-01"
          className="w-full md:w-1/3 h-full object-cover mb-10 md:mb-0"
        />
      </div>
      <div className="p-10 md:p-16 md:space-y-10">
        <div className="flex flex-col md:flex-row">
          <img
            src={entDoor}
            alt="entrance-door"
            className="w-full md:w-1/4 h-fit object-cover mb-5 md:mb-0"
          />
          <div className="w-full md:w-1/2 md:px-10 flex-col items-center justify-center ">
            <p className="text-3xl text-gray-800 font-bold mb-5">
              Entrance Doors
            </p>
            <p className="text-lg text-gray-700  mb-10">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <img
            src={slideDoor}
            alt="slide-door"
            className="w-full md:w-1/4 h-fit object-cover mb-5 md:mb-0"
          />
          <div className="w-full md:w-1/2 md:px-10 flex-col items-center justify-center ">
            <p className="text-3xl text-gray-800 font-bold mb-5">
              Sliding Doors
            </p>
            <p className="text-lg text-gray-700  mb-10">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <img
            src={garDoor}
            alt="garage-door"
            className="w-full md:w-1/4 h-fit object-cover mb-5 md:mb-0"
          />
          <div className="w-full md:w-1/2 md:px-10 flex-col items-center justify-center ">
            <p className="text-3xl text-gray-800 font-bold mb-5">
              Garage Doors
            </p>
            <p className="text-lg text-gray-700  mb-10">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <img
            src={winFrames}
            alt="windows and frames"
            className="w-full md:w-1/4 h-fit object-cover mb-5 md:mb-0"
          />
          <div className="w-full md:w-1/2 md:px-10 flex-col items-center justify-center ">
            <p className="text-3xl text-gray-800 font-bold mb-5">
              Windows & Frames
            </p>
            <p className="text-lg text-gray-700  mb-10">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <img
            src={installImg}
            alt="installation"
            className="w-full md:w-1/4 h-fit object-cover mb-5 md:mb-0"
          />
          <div className="-full md:w-1/2 md:px-10 flex-col items-center justify-center ">
            <p className="text-3xl text-gray-800 font-bold mb-5">
              Installation
            </p>
            <p className="text-lg text-gray-700  mb-10">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio.
            </p>
          </div>
        </div>
      </div>
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

export default Services;

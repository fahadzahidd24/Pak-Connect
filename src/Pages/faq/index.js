import React, { useState } from "react";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import bgImg from "../../Assets/window-morning-view.jpg";
import img1 from "../../Assets/faq-questions.jpg";
import img2 from "../../Assets/morning-view.jpg";

function Faq() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div
      className="min-h-screen font-[Barlow] bg-[#e0ffd7] bg-cover bg-fixed"
      style={{ backgroundImage: `url(https://www.fairobserver.com/wp-content/uploads/2024/01/Pakistan-1.jpg)` }}
    >
      <div
        className="h-fit bg-cover"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="bg-[#4F7942] bg-opacity-60 flex-col">
          <Navbar />
          <div className="md:flex items-start justify-between px-10 md:px-16 mt-14">
            <h1 className="text-white text-center md:text-start w-full md:w-8/12 text-5xl md:text-[5.2rem] font-bold">
              FAQ's
            </h1>
            <div className="w-full md:w-1/3 left-10 bg-[#4F7942] text-white p-5 md:p-10 mt-10 md:mt-36 text-center md:text-start">
              <p className="text-lg font-bold mb-4">Contact Us</p>
              <p className="text-3xl font-bold">+92 337 0446599</p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-fit w-full px-10 md:px-16 flex md:items-start md:justify-end">
        <div className="w-full md:w-2/3 min-h-fit p-5 md:p-20 bg-white flex-col items-center justify-center">
          <p className="text-3xl md:text-4xl text-center text-gray-800 mb-10 font-bold">
            Frequently Asked Questions
          </p>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            className="my-2 p-2 rounded-lg shadow-sm"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className="bg-gray-100"
            >
              <p className="font-medium">
                How to Contact You?
              </p>
            </AccordionSummary>
            <AccordionDetails className="bg-gray-50">
              <p className="text-gray-600">
                You may fill in the the form at home page or contact us at +92 337 0446599
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            className="my-2 p-2 rounded-lg shadow-sm"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              className="bg-gray-100"
            >
              <p className="font-medium">
                Do you have lawyers?
              </p>
            </AccordionSummary>
            <AccordionDetails className="bg-gray-50">
              <p className="text-gray-600">
                We do offer legal services and yes we have lawyers for your help. Please contact us for more information.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            className="my-2 p-2 rounded-lg shadow-sm"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
              className="bg-gray-100"
            >
              <p className="font-medium">
                What is the process of buying a home?
              </p>
            </AccordionSummary>
            <AccordionDetails className="bg-gray-50">
              <p className="text-gray-600">
                The process of buying a home is simple, just contact us for more information.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div
        className="h-fit bg-cover bg-center"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="bg-[#4F7942] bg-opacity-60 min-h-fit px-10 md:px-20 py-10 md:py-28 flex md:items-end md:justify-end">
          <div className="flex-col items-start justify-start w-full md:w-7/12">
            <p className="text-4xl md:text-5xl font-bold text-white mb-10">
              Sleep in Absolute Peace Wake up to Bright Sunshine
            </p>
            {/* <p className="md:text-lg text-white mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p> */}
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

export default Faq;

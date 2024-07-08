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
      style={{ backgroundImage: `url(${bgImg})` }}
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
              <p className="text-lg font-bold mb-4">Toll Free Call</p>
              <p className="text-3xl font-bold">+1 910-626-85255</p>
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
                Will replacement windows aptent taciti sociosqu ad litora?
              </p>
            </AccordionSummary>
            <AccordionDetails className="bg-gray-50">
              <p className="text-gray-600">
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                auctor a ornare odio.
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
                Do your windows and doors have warranty?
              </p>
            </AccordionSummary>
            <AccordionDetails className="bg-gray-50">
              <p className="text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae.
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
                What is the difference between condimentum sit amet?
              </p>
            </AccordionSummary>
            <AccordionDetails className="bg-gray-50">
              <p className="text-gray-600">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            className="my-2 p-2 rounded-lg shadow-sm"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              className="bg-gray-100"
            >
              <p className="font-medium">
                What is the price difference velit mauris egestas?
              </p>
            </AccordionSummary>
            <AccordionDetails className="bg-gray-50">
              <p className="text-gray-600">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
            className="my-2 p-2 rounded-lg shadow-sm"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
              className="bg-gray-100"
            >
              <p className="font-medium">
                How much does it cost to fermentum feugiat?
              </p>
            </AccordionSummary>
            <AccordionDetails className="bg-gray-50">
              <p className="text-gray-600">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
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

export default Faq;

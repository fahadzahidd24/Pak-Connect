import React from "react";
import Navbar from "../../Components/navbar";
import pageBg from "../../Assets/window-morning-view.jpg";
import img1 from "../../Assets/morning-window-view.jpg";
import img2 from "../../Assets/window-banner-05.jpg";
import Footer from "../../Components/footer";

function About() {
  return (
    <div
      className="min-h-screen font-[Barlow] bg-[#e0ffd7] bg-cover bg-fixed"
      style={{ backgroundImage: `url(${pageBg})` }}
    >
      <div
        className="h-fit bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="bg-[#4F7942] bg-opacity-60 flex-col">
          <Navbar />
          <div className="md:flex items-start justify-between px-10 md:px-16 mt-14">
            <h1 className="text-white text-center md:text-start w-full md:w-8/12 text-5xl md:text-[5.2rem] font-bold">
              About
            </h1>
            <div className="w-full md:w-1/3 left-10 bg-[#4F7942] text-white p-5 md:p-10 mt-10 md:mt-36 text-center md:text-start">
              <p className="text-lg font-bold mb-4">Toll Free Call</p>
              <p className="text-3xl font-bold">+1 910-626-85255</p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-fit bg-inherit px-10 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between ">
        <div className="w-full md:w-7/12 md:ps-16">
          <p className="text-4xl font-bold mb-6 md:mb-12">Who We Are</p>
          <p className="text-lg font-normal mb-4">
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
            amet mauris.
          </p>
          <p className="text-lg font-normal mb-2">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
            amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
            tincidunt auctor. Nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
            nec sagittis sem nibh id elit.
          </p>
          <p className="text-lg font-normal mb-2">
            Sed non mauris vitae erat consequat auctor eu in elit. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra. Duis sed odio
            sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
            ipsum velit. Nam nec tellus a odio tincidunt auctor. Nibh vel velit
            auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
            nisi elit consequat ipsum.
          </p>
        </div>
        <img
          src={img2}
          alt="window-banner-01"
          className="w-full md:w-1/3 h-full object-cover mb-10 md:mb-0"
        />
      </div>
      <div className="bg-[#4F7942] bg-opacity-60 min-h-fit px-10 md:px-20 py-10 md:py-28 flex md:items-end md:justify-end">
        <div className="flex-col items-end justify-end w-full md:w-1/2">
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
      <div className="py-10 md:py-20 bg-inherit">
        <div className="flex-col px-10 md:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="w-full md:w-1/3 text-center text-4xl text-gray-800 font-bold mb-10 md:mb-0">
              Numbers Speak for Themselves
            </h2>

            <div className="w-full md:w-1/2 flex flex-col md:flex-row bg-white items-center justify-center space-y-12 md:space-y-0 md:space-x-12 py-12">
              <div className="text-center">
                <p className="text-6xl text-gray-700 font-bold">200+</p>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <p className="text-6xl text-gray-700 font-bold">25</p>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <p className="text-6xl  text-gray-700 font-bold">330</p>
                <p className="text-gray-600">Completed Projects</p>
              </div>
            </div>
          </div>

          <p className="text-2xl font-bold mb-12">
            Click Edit Button to Change This Text. Lorem Ipsum Dolor Sit Amet,
            Consectetur Adipiscing Elit. Ut Elit Tellus, Luctus Nec Ullamcorper
            Mattis, Pulvinar Dapibus Leo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <p className="text-lg text-gray-700">
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae.
            </p>
            <p className="text-lg text-gray-700">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Sed ut perspiciatis unde omnis iste
              natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa.
            </p>
            <p className="text-4xl font-bold">
              Excepteur Sint Occaecat Cupidatat Non Proident, Sunt in Culpa Qui
              Officia Deserunt Mollit.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;

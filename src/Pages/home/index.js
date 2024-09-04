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
import axios from "axios";

function Home() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await axios.post('https://pak-connect-backend.vercel.app/api/send-email', { fullName: formData.name, email: formData.email, phone: formData.phone, service: formData.service });

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      alert("Message sent successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen font-[Barlow] bg-[#e0ffd7]">
      <div
        className="h-fit bg-cover bg-center"
        style={{ backgroundImage: `url(https://static.the.akdn/53832/1649922491-aktc-pakistan-shahi-hammam_48103721137_o_r.jpg)` }}
      >
        <div className="bg-[#4F7942] bg-opacity-40 flex-col">
          <Navbar />
          <div className="md:flex items-start justify-between px-10 md:px-20 mt-14">
            <div className="text-white w-full md:w-3/5">
              {/* <h2 className="text-2xl font-bold mb-10">
                J’a Door - More than Enough Choices
              </h2> */}
              <h1 className="text-5xl md:text-[4.2rem] font-bold mb-10 md:mb-20">
                Connecting Overseas Pakistanis with Essential Services
              </h1>
              <p className="font-base font-bold mb-10 md:mb-24 w-11/12">
                We bridge the gap between you and the services you need back home in Pakistan. Whether it’s legal assistance, property management, or financial services, we ensure you stay connected and supported, no matter where you are in the world.
              </p>
              <button className="bg-[#4F7942] text-white px-10 py-3 rounded-full mb-10 md:mb-0">
                Get Free Estimate
              </button>
            </div>
            <div className="w-full md:w-1/3">
              <form onSubmit={handleSubmit} className="bg-white p-8 space-y-6">
                <h3 className="text-xl font-semibold mb-6">Make an Enquiry</h3>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-3 border border-gray-300 "
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 "
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full p-3 border border-gray-300 "
                  />
                </div>
                <div className="mb-4">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 ">
                    <option value="Legal Assistance">Legal Assistance</option>
                    <option value="Property Management">Property Management</option>
                    <option value="Document Processing">Document Processing</option>
                    <option value="Repatriation and Travel Assistance">Repatriation and Travel Assistance</option>
                    <option value="Education Support">Education Support</option>
                    <option value="Cultural and Social Integration">Cultural and Social Integration</option>
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
                <p className="text-lg font-bold mb-4">Contact Us</p>
                <p className="text-3xl font-bold">+92 337 0446599</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-fit px-10 md:px-20 mb-20 flex md:flex-row flex-col-reverse items-center justify-between">
        <div className="w-full md:w-7/12 ps-4 md:ps-16 ">
          <p className="text-4xl font-bold mb-12">About Us</p>
          <p className="text-2xl font-bold mb-10">
            Who We Are
          </p>
          <p className="text-lg font-normal">
            PakConnect is dedicated to providing comprehensive support to overseas Pakistanis. With a deep understanding of the unique challenges faced by expatriates, our mission is to offer a seamless connection to essential services in Pakistan. Our experienced team and robust network ensure that your needs are handled with care and professionalism.
          </p>
        </div>
        <img
          src={"https://w0.peakpx.com/wallpaper/720/692/HD-wallpaper-minar-e-pakistan-lahore-pakistan.jpg"}
          alt="window-banner-01"
          className="w-full md:w-1/3 h-full object-cover mb-20 md:mb-0"
        />
      </div>
      <div
        className="md:h-fit bg-cover bg-center mb-20"
        style={{ backgroundImage: `url(https://tourism.gov.pk/assets/images/culture.jpeg)` }}
      >
        <div className="bg-[#4F7942] bg-opacity-40 px-10 md:px-20 py-10 md:py-28">
          <div className="flex-col items-start justify-start w-full md:w-7/12 ">
            <p className="text-3xl md:text-5xl font-bold text-white mb-10">
              Sleep in Absolute Peace Wake up to Bright Sunshine
            </p>
            <p className="md:text-lg text-white mb-10">
              Let us Handle All you Legal, Cultural, Property Affairs.
            </p>
            <button className="bg-[#4F7942] text-white px-10 py-3 rounded-full">
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
      <div className="px-10 mb-32 md:mb-52 flex flex-col items-center justify-center">
        <p className="text-4xl font-bold text-center mb-8">Services</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-[#e0ffd7] text-black rounded-2xl shadow-lg">
            <img
              src={"https://media.istockphoto.com/id/1413828606/photo/handshake-lawyer-legal-services-advice-justice-concept.jpg?s=612x612&w=0&k=20&c=Llmy-jodY6T9Prusc2giWEoHT6_98P_-bigLY3SkkUg="}
              alt="entrance-door"
              className="w-full object-cover rounded-t-2xl"
            />
            <div className="p-8">
              <p className="text-xl font-bold mb-3">Legal Assistance</p>
              <p className="text-base">
                Navigate property disputes, power of attorney, and court matters in Pakistan with ease.
              </p>
            </div>
          </div>
          <div className="bg-[#e0ffd7] text-black rounded-2xl shadow-lg">
            <img
              src={"https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.jpg?s=612x612&w=0&k=20&c=SFybbpGMB0wIoI0tJotFqptzAYK_mICVITNdQIXqnyc="}
              alt="entrance-door"
              className="w-full object-cover rounded-t-2xl"
            />
            <div className="p-8">
              <p className="text-xl font-bold mb-3">Property Management</p>
              <p className="text-base">
                From buying and renting to maintenance, ensure your property in Pakistan is well-managed.
              </p>
            </div>
          </div>
          <div className="bg-[#e0ffd7] text-black rounded-2xl shadow-lg">
            <img
              src={"https://media.istockphoto.com/id/1349390515/photo/paperless-workplace-idea-e-signing-electronic-signature-document-management-businessman-signs.jpg?s=612x612&w=0&k=20&c=EyQl13diegNV5DVLnb0krcAcRDhL7NiSA7IEVImZs6Q="}
              alt="entrance-door"
              className="w-full object-cover rounded-t-2xl"
            />
            <div className="p-8">
              <p className="text-xl font-bold mb-3">Document Processing</p>
              <p className="text-base">
                Handle attestation, passport renewals, and visa applications efficiently.
              </p>
            </div>
          </div>
          <div className="bg-[#e0ffd7] text-black rounded-2xl shadow-lg">
            <img
              src={"https://media.istockphoto.com/id/1344771294/photo/happy-family-in-masks-enjoying-travel-together.jpg?s=612x612&w=0&k=20&c=JMGLBlMM4TyAQ1CAgDJx9igoSucyehARKkvN2rZpec0="}
              alt="entrance-door"
              className="w-full object-cover rounded-t-2xl"
            />
            <div className="p-8">
              <p className="text-xl font-bold mb-3">Repatriation and Travel Assistance</p>
              <p className="text-base">
                Arrange flights, accommodations, and logistics for your travels to and from Pakistan.
              </p>
            </div>
          </div>
          <div className="bg-[#e0ffd7] text-black rounded-2xl shadow-lg">
            <img
              src={"https://media.istockphoto.com/id/1361844238/photo/high-school-professor-assisting-her-students-in-e-learning-on-laptop-in-the-classroom.jpg?s=612x612&w=0&k=20&c=RUI6d64h2mszvH2CicmeSCp_sZowN1p81dtuctGIaRM="}
              alt="entrance-door"
              className="w-full object-cover rounded-t-2xl"
            />
            <div className="p-8">
              <p className="text-xl font-bold mb-3">Education Support</p>
              <p className="text-base">
                Access admissions help, document verification, and online tutoring for Pakistani curriculum.
              </p>
            </div>
          </div>
          <div className="bg-[#e0ffd7] text-black rounded-2xl shadow-lg">
            <img
              src={"https://guillermowolf.com/wp-content/uploads/2023/03/crowd-culture.jpg"}
              alt="entrance-door"
              className="w-full object-cover rounded-t-2xl"
            />
            <div className="p-8">
              <p className="text-xl font-bold mb-3">Cultural and Social Integration</p>
              <p className="text-base">
                Join cultural events, learn languages, and engage with Pakistani communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit px-10 md:px-20 flex flex-col md:flex-row items-center justify-between mb-10 md:mb-0">
        <img
          src={"https://cdn.prod.website-files.com/64e7165ad3097898a6aaaebc/650691e810237164c6dd3b35_pexels-mikhail-nilov-7682464-1184x1232.jpg"}
          alt="window-banner-01"
          className="w-full md:w-1/3 h-fit object-fit mb-14 md:mb-0"
        />
        <div className="w-full md:w-7/12 md:ps-16">
          <p className="text-4xl md:text-5xl font-bold mb-8 text-center">Happy Customers</p>
          {/* <p className="md:text-lg mb-10 text-center">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum.
          </p> */}
          <div className="space-y-5 md:space-y-10">
            <div className="bg-[#e0ffd7] p-8 rounded-2xl shadow-lg">
              <p className="text-xl mb-4">
                "Connecting with my cultural roots has been enriching thanks to PakConnect. They've provided opportunities to participate in local events and access language resources, making me feel more connected to Pakistan"
              </p>
              <p className="font-semibold">Ahmed Khan</p>
              {/* <p className="text-gray-500">California</p> */}
            </div>

            <div className="bg-[#e0ffd7] p-8 rounded-2xl my-5 shadow-lg">
              <p className="text-xl mb-4">
                "Navigating legal matters from abroad was daunting until I found PakConnect. Their expert team handled my property dispute with professionalism and efficiency, making the process smooth and stress-free."
              </p>
              <p className="font-semibold">Ali Bilal</p>
              {/* <p className="text-gray-500">Los Angeles</p> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-fit bg-cover bg-center"
        style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/1/14/Badshahi_Lahore_Night.jpg)` }}
      >
        <div className="bg-[#4F7942] bg-opacity-40 px-10 md:px-20 py-14 md:py-28">
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

export default Home;

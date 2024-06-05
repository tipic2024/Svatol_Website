import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
 
export default function Panchakarma() {
  return (
    <div className="max-w-screen-xl mx-auto mt-1 bg-[#FFF6E7] flex flex-col md:flex-row items-center justify-center">
      <div className="sm:w-1/2 p-10 lg:w-1/2 flex justify-center animate__animated animate__fadeInLeft">
        <div className="image text-center">
          <img className="rounded-3xl" src={require('./panchakrama4.jpg')} alt="Panchakarma"/>
        </div>
      </div>
      <div className="sm:w-1/2 p-5 text-center lg:text-right animate__animated animate__fadeInRight">
        <div className="text">
          <h2 className="my-4 font-bold text-3xl sm:text-4xl text-amber-900 text-center mt-0">
            Panchakarma <span className="text-amber-900"></span>
          </h2>
          <p className="text-amber-950 text-justify">
            Panchakarma is an ancient Ayurvedic detoxification and rejuvenation therapy consisting of five
            therapeutic procedures: Vamana (therapeutic vomiting), Virechana (purgation), Basti (medicated enema),
            Nasya (nasal administration of herbs), and Raktamokshana (blood purification). It aims to balance the body's
            doshas, remove toxins, and restore overall health and well-being. Customized treatment plans are created based
            on individual needs, and the process involves various therapies like massage, steam, dietary adjustments, and
            detoxification procedures. Panchakarma is renowned for its ability to alleviate chronic conditions,
            reduce stress, and promote holistic wellness under the guidance of trained Ayurvedic practitioners.
          </p>
          <div className="mt-6 flex justify-center content-center animate__animated animate__zoomIn">
            <Link to="/book_appointment">
              <button className="m-1.5 py-2.5 px-5 rounded-md border-2 border-teal-400 bg-cyan-500 text-white font-semibold uppercase hover:text-black hover:border-blue-500 hover:bg-cyan-200">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
 
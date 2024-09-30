
import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
 
export default function Genralphysician() {
  return (
    <div className="max-w-screen-xl mx-auto mt-1 bg-[#FFF6E7] flex flex-col md:flex-row items-center justify-center">
      <div className="sm:w-1/2 p-10 lg:w-1/2 flex justify-center animate__animated animate__fadeInLeft">
        <div className="image text-center size-96">
          <img className="rounded-3xl mt-16" src={require('./physician5.avif')} alt="General Physician"/>
        </div>
      </div>
      <div className="sm:w-1/2 p-5 text-center lg:text-right animate__animated animate__fadeInRight">
        <div className="text">
          <h2 className="my-4 font-bold font-serif  text-3xl sm:text-4xl text-amber-900 text-center mt-0">
            General Wellness <span className="text-amber-900"></span>
          </h2>
          <p className="text-amber-950 text-justify font-serif">
          General wellness through Ayurveda and meditation focuses on achieving holistic health by balancing the mind, body, and spirit using natural therapies, lifestyle practices, and mindfulness techniques. Ayurvedic practitioners employ personalized treatments such as herbal remedies, dietary guidelines, yoga, and detoxification methods like Panchakarma to restore internal harmony. Complementing these, meditation practices promote mental clarity, emotional stability, and stress reduction. Together, they aim to enhance digestion, boost immunity, and support overall vitality. This integrative approach helps prevent diseases, manage chronic conditions, and maintain long-term health by addressing the root causes rather than just alleviating symptoms.
          </p>
          <div className="mt-6 flex justify-center content-center animate__animated animate__zoomIn">
            <Link to="/book_appointment">
              <button className="m-1.5 py-2.5 px-5 rounded-md font-serif border-2 border-teal-400 bg-cyan-500 text-white font-semibold uppercase hover:text-black hover:border-blue-500 hover:bg-cyan-200">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
 
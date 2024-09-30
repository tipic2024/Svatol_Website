import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
 
export default function YogaDietMeditation() {
  return (
    <div className="max-w-screen-xl mx-auto mt-1 bg-[#FFF6E7] flex flex-col md:flex-row items-center justify-center">
      <div className="sm:w-1/2 p-10 lg:w-1/2 flex justify-center animate__animated animate__fadeInLeft">
        <div className="image text-center">
          <img className="rounded-3xl" src={require('./yoga.webp')} alt="Oncology" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5 text-center lg:text-right animate__animated animate__fadeInRight">
        <div className="text">
          <h2 className="my-4 font-bold font-serif text-3xl sm:text-4xl text-amber-900 text-center mt-0">
            Yoga Meditaion and Diet <span className="text-amber-900"></span>
          </h2>
          <p className="text-amber-950 text-justify font-serif">
          Yoga meditation and diet are holistic practices aimed at enhancing physical, mental, and emotional well-being through mindfulness, balanced nutrition, and lifestyle modifications. Yoga practitioners focus on a combination of physical postures, breath control, and meditation techniques to cultivate inner peace, flexibility, and strength. Complementing this, a mindful diet emphasizes whole foods, balanced nutrients, and moderation to nourish the body and promote vitality. Together, they support stress reduction, improved digestion, weight management, and overall health. These practices empower individuals to achieve harmony in body and mind, fostering long-term wellness and resilience against lifestyle-related diseases.
          </p>
          <div className="mt-6 flex justify-center content-center animate__animated animate__zoomIn">
            <Link to="/book_appointment">
            
              <button className="m-1.5 py-2.5 px-5 rounded-md  font-serif border-2 border-teal-400 bg-cyan-500 text-white font-semibold uppercase hover:text-black hover:border-blue-500 hover:bg-cyan-200">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
 

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
          <h2 className="my-4 font-bold text-3xl sm:text-4xl text-amber-900 text-center mt-0">
            General Physician <span className="text-amber-900"></span>
          </h2>
          <p className="text-amber-950 text-justify">
            General physicians, also known as primary care physicians or general practitioners, play a crucial role in
            providing comprehensive healthcare services to individuals of all ages. These medical professionals are
            typically the first point of contact for patients seeking medical care and are trained to diagnose, treat,
            and manage a wide range of health conditions. General physicians are skilled in conducting physical examinations,
            interpreting diagnostic tests, and prescribing medications to address acute and chronic illnesses. In addition
            to treating specific health concerns, general physicians focus on promoting preventive care and wellness by
            emphasizing the importance of healthy lifestyle choices, regular screenings, and vaccinations.
            They often serve as coordinators of care, collaborating with specialists and other healthcare
            providers to ensure patients receive appropriate and timely medical interventions.
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
 
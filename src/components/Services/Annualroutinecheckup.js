
import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
 
export default function Annualroutinecheckup() {
  return (
    <div className="max-w-screen-xl mx-auto mt-1 bg-[#FFF6E7] flex flex-col md:flex-row items-center justify-center">
      <div className="sm:w-1/2 p-10 lg:w-1/2 flex justify-center animate__animated animate__fadeInLeft">
        <div className="image text-center size-96">
          <img className="rounded-3xl" src={require('./anunal routin checkup6.avif')} alt="Annual Routine Checkup"/>
        </div>
      </div>
      <div className="sm:w-1/2 p-5 text-center lg:text-right animate__animated animate__fadeInRight">
        <div className="text">
          <h2 className="my-4 font-bold  font-serif text-3xl sm:text-4xl text-amber-900 text-center mt-0">
            Annual Routine Checkup <span className="text-amber-900"></span>
          </h2>
          <p className="text-amber-950 text-justify font-serif">
            Routine checkups are essential for maintaining overall health and detecting
            potential issues early. These checkups typically involve a comprehensive assessment
            of various aspects of health, including physical, mental, and sometimes emotional well-being.
            During a routine checkup, healthcare providers may measure vital signs such as blood pressure,
            heart rate, and weight, as well as conduct screenings for conditions like high cholesterol,
            diabetes, and certain cancers. In addition to physical examinations and screenings, routine
            checkups often include discussions about lifestyle factors such as diet, exercise, sleep habits,
            and stress management.
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

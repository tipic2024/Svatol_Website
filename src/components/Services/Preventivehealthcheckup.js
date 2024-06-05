import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
 
export default function Preventivehealthcheckup() {
  return (
    <div className="max-w-screen-xl mx-auto mt-1 bg-[#FFF6E7] flex flex-col md:flex-row items-center justify-center">
      <div className="sm:w-1/2 p-10 lg:w-1/2 flex justify-center animate__animated animate__fadeInLeft">
        <div className="image text-center">
          <img className="rounded-3xl" src={require('./Preventivehelthcheckup3.jpg')} alt="Preventive Health Checkup"/>
        </div>
      </div>
      <div className="sm:w-1/2 p-5 text-center lg:text-right animate__animated animate__fadeInRight">
        <div className="text">
          <h2 className="my-4 font-bold text-3xl sm:text-4xl text-amber-900 text-center mt-0">
            Preventive Health Checkup <span className="text-amber-900"></span>
          </h2>
          <p className="text-amber-950 text-justify">
            Preventive health checkups are comprehensive examinations aimed at identifying potential health
            risks and promoting early detection and prevention of diseases. These checkups typically involve
            a series of medical tests, screenings, and evaluations tailored to an individual's age, gender,
            medical history, and risk factors. Common components of preventive health checkups include blood
            pressure measurement, cholesterol and blood sugar level testing, body mass index (BMI) assessment,
            and screenings for conditions such as cancer, diabetes, and heart disease. Depending on specific health
            concerns and demographic factors, additional tests such as mammograms, pap smears, colonoscopies,
            and bone density scans may be recommended.
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
 
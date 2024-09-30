
import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
 
export default function MentalHealth() {
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
            <span className="text-amber-900">Mental health</span>
          </h2>
          <p className="text-amber-950 text-justify font-serif">
          Mental health is a crucial aspect of overall well-being, focusing on the emotional, psychological, and social factors that influence how individuals think, feel, and behave. Mental health professionals specialize in diagnosing, treating, and preventing conditions such as depression, anxiety, bipolar disorder, schizophrenia, and substance abuse. They utilize various therapeutic approaches, including cognitive-behavioral therapy, counseling, medication management, and lifestyle interventions to promote mental stability and resilience. Treatment plans are personalized to address each individual's unique needs, aiming to restore balance and functionality. Mental health care also emphasizes the importance of early intervention, self-care, and social support to prevent long-term complications.
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

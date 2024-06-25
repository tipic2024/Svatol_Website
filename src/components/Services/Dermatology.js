import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
 
export default function Dermatology() {
  return (
    <div className="max-w-screen-xl mx-auto mt-1 bg-[#FFF6E7] flex flex-col md:flex-row items-center justify-center">
      <div className="sm:w-1/2 p-10 lg:w-1/2 flex justify-center animate__animated animate__fadeInLeft">
        <div className="image text-center">
          <img className="rounded-3xl" src={require('./dermatology2.jpg')} alt="Dermatology"/>
        </div>
      </div>
      <div className="sm:w-1/2 p-5 text-center lg:text-right animate__animated animate__fadeInRight">
        <div className="text">
          <h2 className="my-4 font-bold font-serif text-3xl sm:text-4xl text-amber-900 text-center mt-0">
            Dermatology <span className="text-amber-900"></span>
          </h2>
          <p className="text-amber-950 text-justify font-serif">
            Dermatology is the medical specialty focused on the diagnosis, treatment, and prevention of
            conditions related to the skin, hair, and nails. Dermatologists are trained to identify and manage a
            wide range of dermatological issues, including acne, eczema, psoriasis, skin cancer, and infections.
            They utilize various diagnostic tools such as skin biopsies, dermatoscopes, and laboratory tests to
            accurately diagnose skin conditions. Treatment options may include topical or oral medications,
            surgical procedures, laser therapy, and cosmetic procedures like botox injections or chemical peels.
            Dermatologists also play a crucial role in educating patients about skin health and sun protection
            to prevent skin cancers and other dermatological problems.
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
 
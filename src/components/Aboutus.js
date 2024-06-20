// src/App.js
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Aboutus Component
const Aboutus = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto bg-[#FFF6E7] flex flex-col md:flex-col items-center justify-center" ref={aboutRef}>
      <div className="sm:w-1/3 p-10 lg:w-1/2 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="image text-center">
            <img className="rounded-full" src={require('./ayurveda-16037170.webp')} alt="Ayurveda" />
          </div>
        </motion.div>
      </div>
      <div className="sm:w-1/2 p-5 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="text">
            <h2 className="my-4 font-bold text-3xl sm:text-4xl text-amber-900 text-center mt-0">
              <motion.span
                animate={{ color: isVisible ? '#7B553C' : '#000000' }}
                transition={{ duration: 0.5 }}
              >
                About Us
              </motion.span>
              {/* <motion.span
                animate={{ color: isVisible ? '#7B553C' : '#000000' }}
                transition={{ duration: 0.5 }}
                className="text-amber-900"
              >
                Us
              </motion.span> */}
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-amber-950 text-justify"
            >
              The Ayurveda Hospital functions as a haven for holistic healing, beginning with a thorough 
assessment of the patient's dosha, medical history, and current health condition. The 
process involves experienced Ayurvedic physicians who employ diagnostic techniques such 
as Nadi Pariksha (pulse diagnosis) and observation. Treatment plans are then meticulously 
crafted, incorporating a combination of Panchakarma therapies, herbal medications, dietary 
adjustments, and lifestyle modifications. The hospital provides a serene environment where 
patients undergo rejuvenating therapies to address specific health concerns.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="mt-6 flex justify-center content-center">
                <Link to="/what_we_stands_for">
                  <button className="m-1.5 py-2.5 px-5 rounded-md border-2 border-teal-400 text-white font-semibold uppercase bg-blue-400 hover:text-black hover:border-blue-500">
                    READ MORE
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// WhatWeStandFor Component
const WhatWeStandFor = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-[#FFF6E7] p-10">
      <h1 className="text-3xl font-bold text-amber-900">What We Stand For</h1>
      <p className="text-amber-950 text-justify mt-4">
        This is the page that describes what we stand for.
      </p>
    </div>
  );
};
export default Aboutus;
// Main App Component
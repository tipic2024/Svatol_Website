import React, { useState,useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function HerosectionForm() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    patientMobile: '',
    appointmentDate: null,
    enquiryType: '',
    timeSlot: '', // Add timeSlot to the formData state
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (id === 'patientMobile') {
      validateMobile(value);
    }
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, appointmentDate: date });
  };

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        patientMobile: 'Mobile number must be 10 digits long and contain only numbers.',
      }));
    } else {
      setErrors((prevErrors) => {
        const { patientMobile, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.patientMobile || errors.patientMobile) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        patientMobile: 'Mobile number must be 10 digits long and contain only numbers.',
      }));
      return;
    }
    try {
      const response = await axios.post('http://localhost/Svatol/contact_us.php', formData);
      console.log('Response:', response.data);
      setSubmissionStatus('success');
      // Clear form after successful submission
      setFormData({ patientName: '', patientEmail: '', patientMobile: '', appointmentDate: null, enquiryType: '', timeSlot: '' });
    } catch (error) {
      console.error('There was an error!', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <section className=" ">
      
      <div className="container justify-center lg:justify-end px-full lg:px-full  mt-32  ">
        <div className="block    bg-white py-7 -mt-[100px] backdrop-blur-[30px] border lg:border-l-0 md:border-l-0 border-gray-300">
          {submissionStatus === 'success' && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
              <p>Form submitted successfully!</p>
            </div>
          )}
          {submissionStatus === 'error' && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
              <p>There was an error submitting the form!</p>
            </div>
          )}
          <div className="flex flex-col ">
            <h1 className=' text-2xl font-serif font-bold text-center lg:text-center text-[#7B553C] mb-3 lg:mb-3  '>Patient  Appointment  Form</h1>
            <div className="flex flex-wrap bg-green">
              <div className=" w-full shrink-0 grow-0 basis-auto  lg:mb-0 lg:w-full lg:px-6 ">
                <form onSubmit={handleSubmit} className=''>
                  <div className="relative mb-3 px-3">
                    <input
                      type="text"
                      className={`peer block min-h-[auto] w-full   rounded border-2 bg-transparent py-[0.2rem] md:py-[0.1rem] lg:py-[0.3rem] px-3  leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary ${formData.patientName ? 'placeholder-shown:-translate-y-[0.9rem] placeholder-shown:scale-[0.8] placeholder-shown:text-primary' : ''}`}
                      id="patientName"
                      value={formData.patientName}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label
                      className={`pointer-events-none absolute top-0 left-3 pl-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.4rem] md:pt-[0.2rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.patientName ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                      htmlFor="patientName"
                    >
                      Patient Name
                    </label>
                  </div>
                  <div className="relative mb-3 px-3">
                    <input
                      type="email"
                      className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.2rem] md:py-[0.1rem] lg:py-[0.3rem] px-2 lg:px-32 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary ${formData.patientEmail ? 'placeholder-shown:-translate-y-[0.9rem] placeholder-shown:scale-[0.8] placeholder-shown:text-primary' : ''}`}
                      id="patientEmail"
                      value={formData.patientEmail}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label
                      className={`pointer-events-none absolute top-0 pl-3 left-3 mb-0 max-w-[90%] origin-[0_0] truncate  pt-[0.4rem] md:pt-[0.2rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.patientEmail ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                      htmlFor="patientEmail"
                    >
                      Patient Email address
                    </label>
                  </div>
                  <div className="relative mb-3 px-3">
                    <input
                      type="text"
                      className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.2rem] md:py-[0.1rem] lg:py-[0.3rem] px-8 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary ${formData.patientMobile ? 'placeholder-shown:-translate-y-[0.9rem] placeholder-shown:scale-[0.8] placeholder-shown:text-primary' : ''}`}
                      id="patientMobile"
                      value={formData.patientMobile}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label
                      className={`pointer-events-none absolute top-0 pl-3 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.4rem] md:pt-[0.2rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.patientMobile ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                      htmlFor="patientMobile"
                    >
                      Patient Mobile
                    </label>
                    {errors.patientMobile && <p className="text-red-600 text-sm">{errors.patientMobile}</p>}
                  </div>
                  
                  <div className="relative mb-3 px-3">
                    <select
                      id="enquiryType"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.2rem]  lg:py-[0.3rem] px-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                      value={formData.enquiryType}
                      onChange={handleChange}
                    >
                      <option value="General Physician">General Physician</option>
                      <option value="Oncology">Oncology</option>
                      <option value="Dermatology">Dermatology</option>
                      <option value="Preventive Health Checkup">Preventive Health Checkup</option>
                      <option value="Panchkurma Kendra">Panchkurma Kendra</option>
                      <option value="Annual Routin Check">Annual Routin Check</option>
                    </select>
                    <label
                      className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.4rem] md:pt-[0.2rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.enquiryType ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                      htmlFor="enquiryType"
                    >
                     
                    </label>
                  </div>
                  <div className="relative mb-2 px-3">
                    <select
                      id="timeSlot"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.2rem] lg:py-[0.3rem] px-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                      value={formData.timeSlot}
                      onChange={handleChange}
                    >
                      
                      <option value="Morning (09-12)">Morning (09-12)</option>
                      <option value="Afternoon (1-4)">Afternoon (1-4)</option>
                      <option value="Evening (5-7)">Evening (5-7)</option>
                    </select>
                    <label
                      className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.4rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.timeSlot ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                      htmlFor="timeSlot"
                    >
                     
                    </label>
                  </div>

                  <div className="relative mb-3 px-3">
                    <DatePicker
                      selected={formData.appointmentDate}
                      onChange={handleDateChange}
                      className="peer block min-h-[auto]  w-full rounded border-2 bg-transparent py-[0.2rem] md:py-[0.1rem] lg:py-[0.3rem] pl-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                      placeholderText="Select a date"
                      filterDate={(date) => {
                        const today = new Date();
                        return date >= today && !isWeekend(date);
                      }}
                    />
                    <label
                      className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.3rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.appointmentDate ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                      htmlFor="appointmentDate"
                    >
                      
                    </label>
                  </div>
                 
                  <div className='px-3 md:mb-0 '>
                  <button
                    type="submit"
                    className=" w-full  rounded bg-sky-500 text-white pt-1 md:pt-2 lg:py-3 text-md md:text-xs lg:text-sm font-medium uppercase leading-normal  md:mb-0 "
                  >
                    BOOK APPOINMENT
                  </button>
                  </div>
                </form>
              </div>
             
                
              </div>
            </div>   
        </div>
     </div>     
      </section>
    );
  }

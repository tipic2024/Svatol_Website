import React, { useState } from 'react';
import axios from 'axios';

export default function BookEvent() {
  const [formData, setFormData] = useState({
    name: '',
    whatsappMobile: '',
    address: '',
    email: '',
    gender: '',
    screenshot: null,
    transactionId: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (id === 'whatsappMobile') {
      validateMobile(value);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      validateFile(file);
    }
  };

  const validateFile = (file) => {
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        screenshot: 'Only PNG, JPEG, and JPG files are allowed.',
      }));
      return;
    }
    if (file.size > 2 * 1024 * 1024) { // 2MB
      setErrors((prevErrors) => ({
        ...prevErrors,
        screenshot: 'File size must be less than 2MB.',
      }));
      return;
    }
    setErrors((prevErrors) => {
      const { screenshot, ...rest } = prevErrors;
      return rest;
    });

    // Convert file to Base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, screenshot: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        whatsappMobile: 'Mobile number must be 10 digits long and contain only numbers.',
      }));
    } else {
      setErrors((prevErrors) => {
        const { whatsappMobile, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.whatsappMobile || errors.whatsappMobile) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        whatsappMobile: 'Mobile number must be 10 digits long and contain only numbers.',
      }));
      return;
    }

    if (!formData.screenshot || errors.screenshot) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        screenshot: 'Valid screenshot is required.',
      }));
      return;
    }

    try {
      const response = await axios.post('http://localhost/Svatol/EventBook.php', formData);

      console.log('Response:', response.data);
      if (response.data === 'SUCCESS') {
        setSubmissionStatus('success');
        setFormData({
          name: '',
          whatsappMobile: '',
          address: '',
          email: '',
          gender: '',
          screenshot: null,
          transactionId: '',
        });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <section className="mb-32 mt-16">
      <div className="container justify-center px-6 md:px-12 lg:max-w-6xl">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
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
          <div className="flex flex-col">
            <h1 className="md:text-3xl text-2xl font-serif font-bold text-center text-[#7B553C] mb-10">Register here for Svatol's Mega Event</h1>
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form onSubmit={handleSubmit} className='order-2 md:order-1'>
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary ${formData.name ? 'placeholder-shown:-translate-y-[0.9rem] placeholder-shown:scale-[0.8] placeholder-shown:text-primary' : ''}`}
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label
                      className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.name ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                      htmlFor="name"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary ${formData.whatsappMobile ? 'placeholder-shown:-translate-y-[0.9rem] placeholder-shown:scale-[0.8] placeholder-shown:text-primary' : ''}`}
                      id="whatsappMobile"
                      value={formData.whatsappMobile}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label
                      className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.whatsappMobile ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                      htmlFor="whatsappMobile"
                    >
                      WhatsApp/Mobile Number
                    </label>
                    {errors.whatsappMobile && <p className="text-red-600 text-sm">{errors.whatsappMobile}</p>}
                  </div>
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary ${formData.address ? 'placeholder-shown:-translate-y-[0.9rem] placeholder-shown:scale-[0.8] placeholder-shown:text-primary' : ''}`}
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label
                      className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.address ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                      htmlFor="address"
                    >
                      Address
                    </label>
                  </div>
                  <div className="relative mb-6">
                    <input
                      type="email"
                      className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary ${formData.email ? 'placeholder-shown:-translate-y-[0.9rem] placeholder-shown:scale-[0.8] placeholder-shown:text-primary' : ''}`}
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label
                      className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.email ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                      htmlFor="email"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative mb-6">
                    <select
                      id="gender"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out"
                      htmlFor="gender"
                    >
                    </label>
                  </div>
                  <div className="relative mb-6">
                    <input
                      type="file"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                      id="screenshot"
                      onChange={handleFileChange}
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out"
                      htmlFor="screenshot"
                    >
                    </label>
                    {errors.screenshot && <p className="text-red-600 text-sm">{errors.screenshot}</p>}
                  </div>
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary ${formData.transactionId ? 'placeholder-shown:-translate-y-[0.9rem] placeholder-shown:scale-[0.8] placeholder-shown:text-primary' : ''}`}
                      id="transactionId"
                      value={formData.transactionId}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label
                      className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.transactionId ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                      htmlFor="transactionId"
                    >
                      Transaction ID
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 bg-blue-200 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_#3b71ca] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_#3b71ca] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_#3b71ca]"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 order-1 md:order-2">
                <div className="flex justify-center">
                  <img src={require("./gallery/ScannerDemo.jpeg")} alt="Registration" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

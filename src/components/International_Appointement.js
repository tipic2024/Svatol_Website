import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function International_Appointment() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    patientMobile: '',
    appointmentDate: null,
    enquiryType: '', // Set default to empty string
    timeSlot: '', // Set default to empty string
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    // Clear mobile validation error when user corrects input
    if (id === 'patientMobile' && errors.patientMobile) {
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
      setFormData({
        patientName: '',
        patientEmail: '',
        patientMobile: '',
        appointmentDate: null,
        enquiryType: '',
        timeSlot: '',
      });
    } catch (error) {
      console.error('There was an error!', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-200 to-white pb-16">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Schedule an Appointment</h1>
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
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4">
                <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                  Enquiry Type
                </label>
                <select
                  id="enquiryType"
                  className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-primary focus:bg-white"
                  value={formData.enquiryType}
                  onChange={handleChange}
                >
                  <option value="">Select Enquiry Type</option>
                  <option value="General Physician">30-min Online Consultation</option>
                  <option value="Oncology">Know Your Prakruti (Body Type)</option>
                  <option value="Dermatology">60-min Online Consultation</option>
                  <option value="Preventive Health Checkup">30-min Online Consultation</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time Slot
                </label>
                <select
                  id="timeSlot"
                  className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-primary focus:bg-white"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  disabled={!formData.enquiryType}
                >
                  <option value="">Select Time Slot</option>
                  <option value="Morning (10.00 am)">Morning (10.00 am)</option>
                  <option value="Morning (10.30 am)">Morning (10.30 am)</option>
                  <option value="Morning (11.00 am)">Morning (11.00 am)</option>
                  <option value="Morning (11.30 am)">Morning (11.30 am)</option>
                  <option value="Afternoon (12.00 pm)">Afternoon (12.00 pm)</option>
                  <option value="Afternoon (12.30 pm)">Afternoon (12.30 pm)</option>
                  <option value="Evening (04.00 pm)">Evening (04.00 pm)</option>
                  <option value="Evening (04.30 pm)">Evening (04.30 pm)</option>
                  <option value="Evening (05.00 pm)">Evening (05.00 pm)</option>
                  <option value="Evening (05.30 pm)">Evening (05.30 pm)</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Appointment Date
                </label>
                <DatePicker
                  selected={formData.appointmentDate}
                  onChange={handleDateChange}
                  className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-primary focus:bg-white"
                  placeholderText="Select a date"
                  filterDate={(date) => {
                    const today = new Date();
                    return date >= today && !isWeekend(date);
                  }}
                  disabled={!formData.enquiryType}
                />
              </div>
            </div>
            <button
              type="submit"
              className="ml-96 bg-primary hover:bg-primary-dark bg-slate-600 text-white py-2 px-4 rounded mt-6 focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={!formData.enquiryType || !formData.timeSlot || !formData.appointmentDate}
            >
              BOOK APPOINTMENT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

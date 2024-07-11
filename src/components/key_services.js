import React from 'react';

const KeyServices = () => {
  return (
    <div className="bg-[#003430] p-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center mb-4">
              <img
                src={require('./Ayurveda.png')}
                className="w-20 h-20 mr-4"
                alt="Ayurveda"
              />
              <h2 className="text-3xl font-bold font-serif text-white">
              Clinical Evidence Method
              </h2>
            </div>
            <p className="text-white font-serif font text-lg">
            We utilize established scales, biochemical analyses, and individual symptoms to assess the effectiveness of treatments and monitor progress. By dedicating time to each patient, we thoroughly understand their medical history, which allows us to devise a customized treatment plan tailored specifically to their needs.
            </p>
          </div>

          <div className="flex flex-col items-start text-left">
            <div className="flex items-center mb-4">
              <img
                src={require('./Ayurveda.png')}
                className="w-20 h-20 mr-4"
                alt="Ayurveda"
              />
              <h2 className="text-3xl font-serif font-bold text-white">
              Ayurvedic Care Approach
              </h2>
            </div>
            <p className="text-white font-serif text-lg">
            In our Ayurvedic care approach, we rely on traditional diagnostic methods, such as pulse diagnosis (Nadi Pariksha), tongue examination, and assessment of dosha imbalances (Vata, Pitta, Kapha). These ancient techniques help us evaluate the effectiveness of treatments and monitor progress.
            </p>
          </div>

          <div className="flex flex-col items-start text-left">
            <div className="flex items-center mb-4">
              <img
                src={require('./Ayurveda.png')}
                className="w-20 h-20 mr-4"
                alt="Ayurveda"
              />
              <h2 className="text-3xl font-bold font-serif text-white">
              Addressing Root Causes 
              </h2>
            </div>
            <p className="text-white text-lg font-serif">
            Ayurveda emphasizes understanding the root causes (nidana) of illnesses through pulse diagnosis, dosha analysis (Vata, Pitta, Kapha), and lifestyle assessment. Treatment focuses on restoring balance for sustainable health and wellness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyServices;

import React from "react";

const Ussd = () => {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="https://th.bing.com/th/id/OIP.uias0ml9CW-gBsu2-r2rbgHaEB?rs=1&pid=ImgDetMain" // Replace with your actual image URL
            alt="USSD Engagement"
            className="w-full rounded-lg"
          />
        </div>

        {/* Right side - Text */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Engage with Us on Sexual Health via USSD
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We offer a convenient way for you to access sexual health
            information and services via our USSD platform. Simply dial our
            short code to anonymously ask questions, get guidance, or find the
            help you need. Your health and well-being are our priority.
          </p>
          <p className="text-gray-700 mt-4">
            Dial <strong>*123#</strong> to get started today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ussd;

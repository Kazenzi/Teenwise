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

      {/* New Section - Background Image with Light Pink Overlay */}
      <div
        className="relative py-12 text-center"
        style={{
          backgroundImage:
            "url('https://th.bing.com/th/id/R.92e402a6f76e22ccc2ad10b7b42c3aff?rik=M4ytcSw6pEGcKw&riu=http%3a%2f%2fwww.rq8tech.com%2fwp-content%2fuploads%2f2020%2f04%2fcontact-us-banner.jpeg&ehk=zLMn9hrwH40%2fauKCMkSRX9lupXR0D%2bNn4tgAl9pH9l4%3d&risl=&pid=ImgRaw&r=0')", // Replace with your actual background image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-pink-300 opacity-50"></div>{" "}
        {/* Light pink overlay */}
        <div className="relative z-10">
          <h3 className="text-white text-4xl font-bold mb-4">
            Talk to Our Professionals
          </h3>
          <p className="g text-lg">
            Call <strong>0734 332 478 </strong> for assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ussd;

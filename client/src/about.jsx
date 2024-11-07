import React from "react";

const About = () => {
  return (
    <>    
    <div className="h-screen bg-gradient-to-r from-teal-400 to-cyan-500 flex items-center justify-center ">
    <div className="bg-white p-6 rounded-lg shadow-md ">
        <img
          src="https://res.cloudinary.com/dvgieawnp/image/upload/v1695017914/eac-pm-calls-for-codification-of-law-of-torts-punitive-damages-to-victims_yjmj3g.jpg" // Replace with your photo URL or import it
          alt="Law Photo"
          className="w-32 h-32 mx-auto rounded-full"
        />
        <h1 className="text-2xl font-semibold text-gray-800 mt-4 justify-center flex">About</h1>
        <h2 className="text-lg text-gray-600 mt-2 justify-center flex">Legal Assistant</h2>
        <p className="text-gray-700 mt-4">
        We propose a web-based platform tailored for individuals and small businesses to streamline the creation of legal documents. Users can describe their situation or select a specific 
        <br />document type, with the assistance of an integrated chatbot that helps guide them to the appropriate legal document. Once selected, users will be prompted to provide essential <br />
        information—such as party names and dates—through a few straightforward questions. The system then seamlessly integrates these inputs into our extensive legal database, significantly<br /> simplifying the typically complex and time-consuming document drafting process.

        </p>
      </div>
    </div>
    
    </>
  );
};

export default About;

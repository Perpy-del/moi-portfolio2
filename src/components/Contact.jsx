import React from "react";
import "../../index.css";
// import Map from './Map';

const Contact = () => {
  return (
    <section id="contact" className="md:max-w-[100%] bg-[#fffefe] md:min-h-[110vh]">
      <div className="max-w-[90%] flex md:flex-row min-h-[100vh] mx-auto sm:flex-col justify-between items-center gap-[50px] sm:pt-[50px] md:py-[100px]">
        <div className="flex-1 flex items-center border-[#FF4848] rounded-lg border-2 p-[50px] sm:w-[500px]">
          <form className="w-[100%] flex flex-col gap-10">
            <h1 className="text-[#1e3050] text-[1.5rem] font-extrabold pb-4 border-b-4 border-[#f86d6d]">Contact Us</h1> 
            <input placeholder="Name" className="px-[20px] py-[10px] text-lg bg-[#d9dbdf] border border-[#1e3050] rounded-lg" />
            <input placeholder="Email" className="px-[20px] py-[10px] text-lg bg-[#d9dbdf] border border-[#1e3050] rounded-lg" />
            <textarea placeholder="Message" className="px-[20px] py-[10px] text-lg bg-[#d9dbdf] border border-[#1e3050] rounded-lg row-sp" />
            <button className="bg-[#ff4848] text-[#F2F0F0] hover:bg-[#FF4545] py-3 rounded-lg font-bold">Send Message</button>
          </form>
        </div>
        <div className="flex-1 flex items-center">
          {/* <Map /> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;

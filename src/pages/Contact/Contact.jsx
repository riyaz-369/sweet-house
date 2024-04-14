import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";

const Contact = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            offset: 200,
        })
    }, [])

    const [submit, setSubmit] = useState(false);

    const handleSubmit = () => {
        toast.success("You'r successfully submit your feedback !");
    }
    return (
        <section data-aos="fade-up" className="py-6 my-24 max-w-7xl mx-auto shadow-sm shadow-slate-200 bg-neutral rounded-md">
            <Helmet>
                <title>Sweet House/Contact</title>
            </Helmet>
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div data-aos="fade-right" className="py-6 md:py-0 md:px-6 text-white text-opacity-80">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>34 Willis Ave, Mineola, NY 11501</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>+1-678-336-9840</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>sweethouse.digital@yahoo.com</span>
                        </p>
                    </div>
                </div>
                <form data-aos="fade-left" noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <label className="input input-bordered flex items-center gap-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow bg-neutral" placeholder="Full Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="Email" className="grow" placeholder="Email Address" />
                    </label>
                    <label className="block">
                        <span className="mb-1 text-white">Your Message</span>
                        <textarea onChange={() => setSubmit(true)}
                            rows="4" className="block w-full rounded-md border-gray-300 border">
                        </textarea>
                    </label>
                    <button onClick={handleSubmit} type="button" className="btn bg-blue-600 hover:bg-blue-500 rounded-md w-full text-white hover:shadow-md border-none disabled:bg-slate-400" disabled={!submit}>
                        Submit
                    </button>
                </form>
            </div>
            <ToastContainer position="top-center" />
        </section>
    );
};

export default Contact;
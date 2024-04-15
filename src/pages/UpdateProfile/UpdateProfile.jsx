import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";

const UpdateProfile = () => {

    const [change, setChange] = useState(false);
    const [isSave, setIsSave] = useState(false);
    const { user, userProfile } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const handleUpdateProfile = (data) => {

        const { fullName, profileImg } = data;

        userProfile(fullName, profileImg)
            .then(() => {
                toast.success('Your profile updated successfully.', { autoClose: 2500 });
                setTimeout(() => {
                    navigate("/profile");
                }, 4000)
            }).catch((error) => {
                const errorMsg = (error.message.slice(10, error.code.length));
                toast.error(errorMsg);
            })
    }

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            offset: 200,
        })
    }, []);

    return (
        <section data-aos="fade-up" className="max-w-4xl mx-auto my-12 bg-gray-100 rounded-md">
            <Helmet>
                <title>Sweet House/Update Profile</title>
            </Helmet>
            <form onSubmit={handleSubmit(handleUpdateProfile)}
                className="flex flex-col mx-auto">
                <fieldset className="grid grid-cols-4 gap-2 rounded-md">
                    <div data-aos="fade-right" className="space-y-2 col-span-full lg:col-span-1 bg-neutral bg-opacity-90 text-white p-6 lg:rounded-l-md">
                        <p className="font-medium text-xl">Profile</p>
                        <p className="text-sm opacity-80">Update your profile</p>
                    </div>
                    <div data-aos="fade-up" className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 p-8">
                        <div className="col-span-full sm:col-span-4">
                            <label className="text-base">Your Name</label>
                            <input id="name" type="text" placeholder="Full Name"
                                className="w-full rounded-md border-gray-300 bg-gray-50 bg-opacity-40 input"
                                {...register("fullName")} defaultValue={user.displayName}
                                onChange={() => setIsSave(true)}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-4">
                            <label className="text-base">Profile Photo</label>
                            <div className="join w-full">
                                <Link onClick={() => setChange(true)} className="btn btn-sm bg-lime-400 hover:bg-lime-300 join-item rounded-l-md mb-2">Change</Link>
                                <input className={`w-full join-item rounded-md mb-2 input-sm border border-slate-300 bg-gray-50 bg-opacity-40 ${change || 'hidden'}`}
                                    type="text" placeholder="Enter Your Photo URL"
                                    {...register("profileImg")} defaultValue={user.photoURL}
                                    onChange={() => setIsSave(true)}
                                />
                            </div>
                            <div>
                                <img className="rounded-md min-w-full" src={user.photoURL} />
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <button
                                className="btn rounded-md px-8 md:px-4 text-base bg-blue-600 transition-all hover:bg-blue-500
                                 text-white hover:shadow-md hover:shadow-slate-400 border-none w-full"
                                disabled={!isSave}>
                                Save
                            </button>
                        </div>
                        <Link to="/profile"
                            className="btn ml-8 md:ml-0 bg-lime-400 hover:bg-lime-300 text-base rounded-md px-8 md:px-4 hover:shadow-lg">
                            Cancel
                        </Link>
                    </div>
                </fieldset>
            </form>
            <ToastContainer position="top-center" />
        </section>
    );
};

export default UpdateProfile;
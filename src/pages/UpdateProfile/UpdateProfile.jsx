import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const UpdateProfile = () => {

    const [change, setChange] = useState(false);
    const [isSave, setIsSave] = useState(false);
    const { user, userProfile } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const handleUpdateProfile = (data) => {
        const { name, photoURL } = data;

        userProfile(name, photoURL)
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

    return (
        <section className="max-w-4xl mx-auto my-12 shadow-md rounded-md">
            <form onSubmit={handleSubmit(handleUpdateProfile)}
                className="flex flex-col mx-auto">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium text-xl">Profile</p>
                        <p className="text-sm opacity-80">Update your profile</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-4">
                            <label className="text-base">Your Name</label>
                            <input id="name" type="text" placeholder="Full Name"
                                className="w-full rounded-md border-gray-300 input"
                                {...register("name")}
                                onChange={() => setIsSave(true)}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-4">
                            <label className="text-base">Profile Photo</label>
                            <div className="join w-full">
                                <Link onClick={() => setChange(true)} className="btn btn-sm join-item rounded-l-md btn-neutral mb-2">Change</Link>
                                <input className={`w-full join-item rounded-md mb-2 input-sm border bg-slate-50 ${change || 'hidden'}`}
                                    type="text" placeholder="Enter Your Photo URL"
                                    {...register("photoURL")}
                                    onChange={() => setIsSave(true)}
                                />
                            </div>
                            <div>
                                <img className="rounded-md min-w-full" src={user.photoURL} />
                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-4">
                            <button
                                className="btn rounded-md px-4 text-base bg-blue-600 transition-all hover:bg-blue-500
                                 text-white hover:shadow-md hover:shadow-slate-400 border-none w-full"
                                disabled={!isSave}>
                                Save
                            </button>
                        </div>
                        <Link to="/profile"
                            className="btn btn-neutral text-white text-base border-none rounded-md px-4 hover:shadow-lg hover:shadow-slate-400">
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
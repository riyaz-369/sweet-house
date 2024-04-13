import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";


const UpdateProfile = () => {

    const { user, userProfile } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const handleUpdateProfile = (data) => {
        const { name, photoURL } = data;

        userProfile(name, photoURL)
            .then(() => {
                toast.success('Your profile updated successfully.');
                // handleSaveChanges();
            }).catch((error) => {
                console.log(error)
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
                            <label className="text-base">Full Name</label>
                            <input id="name" type="text" placeholder="Full Name"
                                className="w-full rounded-md border-gray-300 input"
                                {...register("name")}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-4 my-2">
                            <label className="text-base">Profile Photo</label>
                            <div>
                                <img className="rounded-md min-w-full" src={user.photoURL} />
                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-4">
                            <div>
                                <label>Enter your new photo url</label>
                                <input className="w-full rounded-md mb-2 input-sm border bg-slate-50"
                                    type="text" placeholder="Photo URL"
                                    {...register("photoURL", { required: true })}
                                />
                            </div>
                            <button
                                className="btn rounded-md px-4 text-base bg-blue-600 transition-all hover:bg-blue-500 text-white hover:shadow-md hover:shadow-slate-400 border-none w-full">
                                Save
                            </button>
                        </div>
                    </div>
                </fieldset>
            </form>
            <ToastContainer position="top-center" />
        </section>
    );
};

export default UpdateProfile;
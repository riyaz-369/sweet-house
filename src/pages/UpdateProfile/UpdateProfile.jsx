import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const UpdateProfile = () => {

    const { user, userProfile } = useContext(AuthContext);

    return (
        <section className="max-w-4xl mx-auto my-12 shadow-md rounded-md">
            <form className="flex flex-col mx-auto">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Profile</p>
                        <p className="text-xs">Update your profile</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-base">Full Name</label>
                            <input id="name" type="text" placeholder="Full Name" className="w-full rounded-md border-gray-300 input" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-base">Email</label>
                            <input id="email" type="email" placeholder="Enter your email" className="w-full input rounded-md border-gray-300" />
                        </div>
                        <div className="col-span-full mt-8">
                            <label htmlFor="bio" className="text-base">Profile Photo</label>
                            <div className="space-y-2">
                                <img className="min-w-52 rounded-md" src={user.photoURL} />
                                <a type="button" className="btn bg-blue-600 hover:bg-blue-700 btn-sm text-white rounded-md">Change</a>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="pb-6 pr-5 flex justify-end">
                    <a className="btn rounded-md px-8 text-base bg-blue-600 transition-all hover:bg-blue-700 text-white">Save</a>
                </div>
            </form>
        </section>
    );
};

export default UpdateProfile;
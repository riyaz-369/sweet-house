import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";


const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="max-w-7xl mx-auto my-12 flex justify-end">
            <div className="p-6 min-w-[500px] shadow-md rounded-md sm:px-12">
                <img src={user.photoURL} alt="" className="w-32 mx-auto rounded-full transition-all shadow-xl hover:shadow-slate-400 aspect-square ring-4 ring-blue-600 ring-offset-2" />
                <div className="space-y-4 mt-6 text-center">
                    <div className="my-2 mb-4 space-y-1">
                        <h2 className="text-lg font-semibold">Name: <span className="font-normal">{user.displayName}</span></h2>
                        <p className="text-lg font-semibold">Email: <span className="font-normal">{user.email}</span></p>
                    </div>
                    <Link to="/update-profile">
                        <button className="btn btn-sm bg-blue-600 hover:bg-blue-500 text-white hover:shadow-md border-none">Update Profile</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;
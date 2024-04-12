import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const { createUser, userProfile } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleRegister = (data) => {
        const { name, email, photoURL, password, conditions } = data;

        if (password.length < 6) {
            toast.error('Length must be at least 6 character.');
            return
        }
        else if (!/^(?=.*[A-Z])/.test(password)) {
            toast.error('Password must have an uppercase letter');
            return
        }
        else if (!/^(?=.*[a-z])/.test(password)) {
            toast.error('Password must have an lowercase letter');
            return
        }
        else if (!conditions) {
            toast.warning('Accept our trams & condition !')
            return;
        }
        else {
            createUser(email, password)
                .then(() => {
                    toast.success("Registration Success !");
                    userProfile(name, photoURL)
                        .then(() => {
                            // navigate
                            navigate("/profile");
                        })
                        .catch(() => {
                            // do something
                        })
                })
                .catch(error => {
                    const errorMsg = (error.code.split("-").join(" ").slice(5, error.code.length));
                    const err = (errorMsg.charAt(0).toUpperCase() + errorMsg.slice(1));
                    toast.error(`This ${err}`);
                });
        }
    }

    return (
        <div className="max-w-7xl flex justify-around items-center mx-auto my-12">
            <div className="min-w-[500px] p-8 space-y-3 shadow-md hover:shadow-xl transition-all rounded-md dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-3xl font-semibold mb-8 text-center">Register Now</h1>
                <form onSubmit={handleSubmit(handleRegister)}
                    className="space-y-4">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Full Name</label>
                        <input type="text" placeholder="Your Name"
                            className="w-full input input-bordered px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            {...register("name", { required: true })} />
                        {errors.name && <p className="text-sm text-red-500">Name is required</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Email</label>
                        <input type="email" placeholder="example@gmail.com"
                            className="w-full input input-bordered px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            {...register("email", { required: true })} />
                        {errors.email && <span className="text-sm text-red-500">Email address is required</span>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Photo URL</label>
                        <input type="text" placeholder="https://your.photos/200"
                            className="w-full input input-bordered px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            {...register("photoURL")} />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Password</label>
                        <input type={showPassword ? "text" : "password"} placeholder="******"
                            className="w-full input input-bordered px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            {...register("password", { required: true })} />
                        <div onClick={() => setShowPassword(!showPassword)}
                            className="text-lg absolute -translate-y-9 translate-x-[400px]">
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </div>
                        {errors.password && <span className="text-sm text-red-500">Password is required</span>}

                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" className="checkbox checkbox-sm"
                            {...register("conditions")} />
                        <p>Accept our <Link className="btn-link text-gray-800" href="">trams and conditions?</Link></p>
                    </div>
                    <input className="btn btn-neutral w-full rounded-md hover:text-white" type="submit" value="REGISTER" />
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="dark:text-gray-600"></p>
                </div>
                <p className="text-center sm:px-6 dark:text-gray-600">Already have an account?
                    <Link
                        to="/login"
                        className="hover:btn-link font-semibold dark:text-violet-600">
                        Login
                    </Link>.
                </p>
            </div>
            <div>
                <h2 className="text-4xl font-semibold">Register your account to <br /> access.</h2>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Register;
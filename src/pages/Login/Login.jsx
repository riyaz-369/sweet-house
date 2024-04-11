import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {

    const [loginError, setLoginError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleLogIn = (data) => {
        const email = data.email;
        const password = data.password;

        setLoginError('');
        setSuccessMsg('');

        if (password.length < 6) {
            setLoginError('Length must be at least 6 character.');
            return
        }
        else if (!/^(?=.*[A-Z])/.test(password)) {
            setLoginError('Password must have an uppercase letter');
            return
        }
        else if (!/^(?=.*[a-z])/.test(password)) {
            setLoginError('Password must have an lowercase letter');
            return
        }
        else {
            setSuccessMsg("Login Success !")
            return
        }
    }

    return (
        <div className="max-w-7xl flex justify-around items-center mx-auto my-12">
            <div className="min-w-[500px] p-8 space-y-3 shadow-md hover:shadow-xl transition-all rounded-md dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-3xl font-semibold mb-8 text-center">Login your account</h1>
                <form onSubmit={handleSubmit(handleLogIn)}
                    className="space-y-4">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Email</label>
                        <input type="email" placeholder="Your Email"
                            className="w-full input input-bordered px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            {...register("email", { required: true })} />
                        {errors.email && <p className="text-sm text-red-500">Email address is required</p>}
                    </div>

                    <div className="space-y-1 text-sm relative">
                        <label className="block dark:text-gray-600">Password</label>
                        <input type={showPassword ? "text" : "password"} placeholder="Password"
                            className="w-full input input-bordered px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            {...register("password", { required: true })} />
                        <div onClick={() => setShowPassword(!showPassword)}
                            className="text-lg absolute -translate-y-9 translate-x-[400px]">
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </div>
                        {errors.password && <span className="text-sm text-red-500">Password is required</span>}

                        <div className="flex justify-end hover:btn-link hover:text-black dark:text-gray-600">
                            <Link href="">Forget Password?</Link>
                        </div>
                    </div>
                    <input className="btn btn-neutral w-full hover:text-white text-base" type="submit" value="Log In" />
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="p-3 rounded-sm">

                    </button>
                    <button aria-label="Log in with Twitter" className="p-3 rounded-sm">

                    </button>
                    <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                        {/* <FaFacebook></FaFacebook> */}
                    </button>
                    <button aria-label="Log in with GitHub" className="p-3 rounded-sm">

                    </button>
                </div>
                <p className="text-center sm:px-6 dark:text-gray-600">Do not have an account?
                    <Link
                        to="/register"
                        className="hover:btn-link font-semibold dark:text-violet-600">
                        Register
                    </Link>.
                </p>
            </div >
            <div>
                <h2 className="text-4xl font-semibold">Login or register to access <br /> your account.</h2>
            </div>
        </div >
    );
};

export default Login;
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { signInUser, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = (data) => {
        const email = data.email;
        const password = data.password;

        if (password.length < 6) {
            toast.error('Length must be at least 6 character.')
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
        else {
            signInUser(email, password)
                .then(() => {
                    toast.success('Login success !', { autoClose: 2500 });
                    setTimeout(() => {
                        navigate(location?.state ? location.state : "/");
                    }, 3500);
                })
                .catch(error => {
                    const errorMsg = (error.code.slice(5, 12));
                    const err = (errorMsg.charAt(0).toUpperCase() + errorMsg.slice(1));
                    toast.error(`${err} account or password`);
                });
            return
        }
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => {
                toast.success('Login success !', { autoClose: 2500 });
                setTimeout(() => {
                    navigate(location?.state ? location.state : "/");
                }, 3500)
            }).catch(() => {
                toast.error("Something went wrong !");
            });
    }
    const handleGithubLogin = () => {
        signInWithGitHub()
            .then(() => {
                toast.success('Login success !', { autoClose: 2500 });
                setTimeout(() => {
                    navigate(location?.state ? location.state : "/");
                }, 3500);
            }).catch((error) => {
                console.log(error.message);
            });
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
                    <input className="btn btn-neutral w-full rounded-md hover:text-white" type="submit" value="LOG IN" />
                </form>

                {/* login with social account */}
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center">
                    <button onClick={handleGoogleLogin} className="btn btn-ghost rounded-md text-3xl">
                        <FaGoogle />
                    </button>
                    <button onClick={handleGithubLogin} className="btn btn-ghost rounded-md text-3xl">
                        <FaGithub />
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
            <ToastContainer position="top-center" />
        </div >
    );
};

export default Login;
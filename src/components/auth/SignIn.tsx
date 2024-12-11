import Link from "next/link";
import Banner from "./Banner";

const SignIn: React.FC = () => {
    return (
    <div>
        <Banner path="/assets/signInBanner.png"/>
        <div className="max-w-lg mx-auto p-6 mt-2 mb-24 bg-white rounded-lg shadow-lg text-center">
            
        <h2 className="text-4xl font-semibold mb-6 text-gray-900">Sign In</h2>
        <form>
          <div className="relative mb-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border border-gray-300 rounded-lg text-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="relative mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 border border-gray-300 rounded-lg text-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
              <img
                src="/assets/eye.png"
                alt="Toggle Password Visibility"
                width="24"
                height="24"
              />
            </span>
          </div>
          <div className="flex justify-between items-center mb-6 text-gray-600 text-lg">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <Link href="/forget" className="text-orange-500 hover:underline">Forget Password</Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white text-lg font-semibold rounded-full hover:bg-orange-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <p  className="block mt-6 text-lg text-gray-700 ">
        Don’t have account? <Link href="/register" className="text-gray-900 hover:underline">Register</Link> 
        </p>
        </div>
      </div>
    )
}

export default SignIn;
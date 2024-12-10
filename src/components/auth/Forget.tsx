import Banner from "./Banner";

const Forget: React.FC = () => { 
    return (
        <div>
            <Banner path="/assets/signInBanner.png"/>
            <div className="max-w-lg mx-auto my-8 p-8 bg-white rounded-lg shadow-md text-center">
            {/* Title */}
            <h1 className="text-4xl font-semibold text-gray-800 mb-6">Forgot Password</h1>

            {/* Email Input */}
            <input
                type="email"
                placeholder="Email"
                className="w-full mb-6 p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* Submit Button */}
            <button className="w-full py-3 bg-orange-500 text-white text-lg font-semibold rounded-full hover:bg-orange-600 transition">
                Submit
            </button>
            </div>
        </div>
    )
}

export default Forget;
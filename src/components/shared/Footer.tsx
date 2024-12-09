import Image from "next/image";

const Footer: React.FC = ( ) => {
    return (
        <div className="bg-gray-900">
            <div className="w-5/6 mx-auto">
            <footer className="bg-gray-900 text-gray-100 px-6 py-12">
            <div className="container mx-auto flex flex-col gap-8 md:flex-row md:justify-between">
                {/* First Section: Logo, Paragraph, and Input */}
                <div className="flex flex-col items-center mx-4 md:items-start md:w-1/3">
                <Image
                    src="/assets/logo.png"
                    alt="Logo"
                    width={234}
                    height={61}
                    className="mb-4"
                />
                <p className="text-center w-4/5 md:text-left text-sm opacity-70 mb-4">
                    Ecommerce is a free UI Kit from Paperpillar that you can use for your personal or commercial project.
                </p>
                <div className="flex items-center overflow-hidden h-12 w-full gap-2">
                    <div>
                    <input
                    type="email"
                    placeholder="Type your email address"
                    className="flex-grow px-4 py-2 rounded-full border-2 bg-transparent text-gray-100 placeholder-gray-400 focus:outline-none"
                    />
                    </div>
                    <button className="px-6 py-2 bg-white text-gray-900 font-semibold hover:bg-gray-300 rounded-full">
                    Submit
                    </button>
                </div>
                </div>

                {/* Second Section: Links (Account, Quick Links, Support) */}
                <div className="flex flex-col justify-center mb-2 gap-8 md:flex-row md:w-2/3 md:justify-between">
                {/* Account Links */}
                <div className="md:w-1/3">
                    <h2 className="font-bold text-lg mb-4 text-center md:text-left">Account</h2>
                    <ul className="space-y-2 text-sm text-center md:text-left">
                    <li><a href="#" className="hover:underline">My Account</a></li>
                    <li><a href="#" className="hover:underline">Login / Register</a></li>
                    <li><a href="#" className="hover:underline">Cart</a></li>
                    <li><a href="#" className="hover:underline">Wishlist</a></li>
                    <li><a href="#" className="hover:underline">Shop</a></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="md:w-1/3">
                    <h3 className="font-bold text-lg mb-4 text-center md:text-left">Quick Link</h3>
                    <ul className="space-y-2 text-sm text-center md:text-left">
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline">Terms Of Use</a></li>
                    <li><a href="#" className="hover:underline">FAQ</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Support Links */}
                <div className="md:w-1/3">
                    <h3 className="font-bold text-lg mb-4 text-center md:text-left">Support</h3>
                    <p className="text-sm mb-2 text-center md:text-left">exclusive@gmail.com</p>
                    <p className="text-sm text-center md:text-left">+88015-88888-9999</p>
                </div>
                </div>

                {/* Third Section: Download App */}
                <div className="flex flex-col items-center gap-4 md:w-1/4 md:items-start">
                <h2 className="font-bold text-lg mb-2 text-center">Download App</h2>
                <div className="flex flex-row items-center gap-4">
                    <Image
                    src="/assets/QrCode.png"
                    alt="QR Code"
                    width={76}
                    height={76}
                    />
                    <div className="space-y-2">
                    <a href="#" className="block">
                        <Image
                        src="/assets/playStore.png"
                        alt="Google Play Store"
                        width={110}
                        height={40}
                        />
                    </a>
                    <a href="#" className="block">
                        <Image
                        src="/assets/appStore.png"
                        alt="Apple App Store"
                        width={110}
                        height={40}
                        />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </footer>
        </div>
        </div>
    )
}

export default Footer;
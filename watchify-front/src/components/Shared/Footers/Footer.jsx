import { ArrowDropUp } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Newsletter Section */}
        <div>
          <h2 className="text-lg font-bold mb-3 uppercase">Newsletter Sign-Up</h2>
          <p className="text-sm mb-4 text-gray-300">
            Get insider information about exclusive offers, events and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your Email Address..."
              className="px-4 py-2 w-full sm:flex-1 bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
            <button className="mt-4 px-6 py-2 bg-white text-black font-semibold hover:bg-gray-200 transition">
              Subscribe
            </button>
        </div>

        {/* Information */}
        <div>
          <h2 className="text-lg font-bold mb-3 uppercase">Information</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Warranty & Authenticity</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-bold mb-3 uppercase">Services</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Sale</a></li>
            <li><a href="#">Quick Ship</a></li>
            <li><a href="#">New Designs</a></li>
            <li><a href="#">Protection Plan</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h2 className="text-lg font-bold mb-3 uppercase">Help</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex justify-between items-center flex-col sm:flex-row gap-4">
        <p className="text-gray-400 text-sm">© 2025 Your Company. All rights reserved.</p>
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
          className="cursor-pointer w-10 h-10 border border-gray-500 flex items-center justify-center hover:bg-gray-800"
        >
          <ArrowDropUp/>
        </button>
      </div>
    </footer>
  );
}

import { IMAGES } from "../../../../public/assest";

export default function HeroSection() {
    return (
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={`${IMAGES.MEETING_ROOM_ONE}?quality=40`}// Replace with your actual image path
          alt="Room preview"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
  
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
  
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col justify-center h-full text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Find your <br />
            meeting places.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
            Book the perfect Wander with amazing views, modern workstations, restful beds,
            and reliable blazing-fast Wi-Fi.
          </p>
  
          <div className="flex gap-4 flex-wrap">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition">
              Book Now
            </button>
            {/* <button className="flex items-center gap-2 border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.66z"
                />
              </svg>
              Watch video
            </button> */}
          </div>
        </div>
      </section>
    );
  }
  
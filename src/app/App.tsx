import { PhoneMockup } from "./components/PhoneMockup";
import appIcon from "../assets/4e2960a3b8905c28d2757a2db16ebd949cef29a3.png";
import logMoodScreen from "../assets/fcdc0dcbd03a6c17f5a204d6861684613f173d2c.png";
import homepageScreen from "../assets/83039d646ee315ff23cf2bab5fe49d6625956218.png";
import appStoreQR from "../assets/others-qr-code.png";

export default function App() {
  const screenshots = [
    {
      image: homepageScreen,
      caption: "Track your mood trends over time with beautiful visualizations",
    },
    {
      image: logMoodScreen,
      caption: "Log your feelings with a simple slider and optional notes",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img
              src={appIcon}
              alt="Others App Icon"
              className="w-24 h-24 rounded-[20px] shadow-lg"
            />
          </div>
          <h1 className="text-5xl mb-4">others</h1>
          <p className="text-2xl text-gray-600 mb-2">
            mood tracking. made simple.
          </p>
          <p className="text-lg text-gray-500">
            Lifestyle · Track your emotional well-being
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          {screenshots.map((screen, index) => (
            <PhoneMockup
              key={index}
              screenshot={screen.image}
              caption={screen.caption}
            />
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-xl mb-2">Visual Trends</h3>
            <p className="text-gray-600">
              See your mood patterns over days, weeks, or months
            </p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-3">✍️</div>
            <h3 className="text-xl mb-2">Quick Logging</h3>
            <p className="text-gray-600">
              Capture your mood in seconds with an intuitive slider
            </p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-3">💭</div>
            <h3 className="text-xl mb-2">Context Matters</h3>
            <p className="text-gray-600">
              Add notes to remember what influenced your feelings
            </p>
          </div>
        </div>

        {/* App Store Badge Placeholder */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-black text-white rounded-xl">
            <div>
              <p className="text-sm">Download on the</p>
              <p className="text-2xl">App Store</p>
            </div>
            <img
              src={appStoreQR}
              alt="Download Others App QR Code"
              className="w-32 h-32 rounded-lg bg-white p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

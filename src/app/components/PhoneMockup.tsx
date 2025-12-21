interface PhoneMockupProps {
  screenshot: string;
  caption?: string;
}

export function PhoneMockup({ screenshot, caption }: PhoneMockupProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        {/* iPhone Frame */}
        <div className="relative w-[280px] h-[572px] bg-black rounded-[40px] shadow-2xl p-3">
          {/* Screen */}
          <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
            <img 
              src={screenshot} 
              alt="App screenshot" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Notch overlay - positioned absolutely on top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[28px] bg-black rounded-b-[20px]" />
      </div>
      
      {caption && (
        <p className="text-center text-gray-700 max-w-[280px]">
          {caption}
        </p>
      )}
    </div>
  );
}

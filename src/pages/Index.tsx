import oemLogo from "@/assets/oem-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Content area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="text-center mb-auto" />
        <div className="text-center">
          <a
            href="mailto:martin@oeminteractive.se"
            className="block text-foreground text-xl md:text-2xl font-semibold hover:opacity-70 transition-opacity"
          >
            martin@oeminteractive.se
          </a>
          <a
            href="mailto:anders@oeminteractive.se"
            className="block text-foreground text-xl md:text-2xl font-semibold mt-2 hover:opacity-70 transition-opacity"
          >
            anders@oeminteractive.se
          </a>
          <p className="text-foreground/80 text-sm md:text-base mt-4 leading-relaxed">
            Rosenlundsgatan 32B
            <br />
            118 53 Stockholm
          </p>
        </div>
      </div>

      {/* Logo bleeding into bottom */}
      <div className="w-full flex justify-center mt-auto">
        <img
          src={oemLogo}
          alt="OEM Interactive"
          className="w-[60%] md:w-[45%] lg:w-[35%] translate-y-[15%] max-w-[700px]"
        />
      </div>
    </div>
  );
};

export default Index;

import React from 'react';

const SpotLight = () => {
  return (
    <section className="relative w-full h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-banner-image.jpg')" }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl sm:text-6xl text-white font-bold shadow-lg">
          The Title Goes Here
        </h1>
      </div>
    </section>
  );
};

export default SpotLight;

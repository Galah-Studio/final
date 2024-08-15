import React from 'react';

const SpotLight = () => {
  return (
    <section id="spotlight" className="relative w-full h-96 bg-cover bg-center text-center text-white" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
      <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold">The Title Goes Here</h1>
      </div>
    </section>
  );
};

export default SpotLight;

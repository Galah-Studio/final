import Image from "next/image";

const SpotLight = () => {
  return (
    <section className="relative w-full h-[500px]">
      <Image
        src="/path-to-main-image.jpg"
        alt="Abajora Main Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <h1 className="absolute bottom-10 left-10 text-white text-4xl font-bold">
        The Title Goes Here
      </h1>
    </section>
  );
};

export default SpotLight;

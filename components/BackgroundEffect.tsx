const BackgroundEffect = () => {
  return (
    <>
      {/* bg blur effect */}
      <div className="bg-[#ffd3e0] dark:bg-[#290E16] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
      <div className="bg-[#ffebf1] dark:bg-[#0c0507] absolute top-[-1rem] -z-10 left-[-35rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
    </>
  );
};

export default BackgroundEffect;

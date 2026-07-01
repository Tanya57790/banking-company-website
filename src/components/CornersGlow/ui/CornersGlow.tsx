const CornersGlow = () => {
  return (
    <>
      <div className="absolute inset-0 z-1 h-full w-full xl:w-102.75 2xl:w-[585.2px] bg-secondary-105 rounded-md" />
      <div className="absolute inset-0 z-5 h-full w-full xl:w-102.75 2xl:w-[585.2px] bg-linear-to-bl from-transparent from-0% to-secondary-105 to-40% rounded-md" />
      <div className="absolute -top-px -right-px opacity-20 h-full w-full xl:w-102.75 2xl:w-[585.2px] bg-linear-to-tr from-transparent from-92% to-primary-600 to-100% rounded-md" />
      <div className="absolute -bottom-px -left-px opacity-20 h-full w-full bg-linear-to-bl from-transparent from-92% to-primary-600 to-100% rounded-md" />
    </>
  );
};

export default CornersGlow;

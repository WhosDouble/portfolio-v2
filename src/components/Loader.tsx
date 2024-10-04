const Loading = () => {
  //the loader component that sets off when the website first loads
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
      <div className="w-16 h-16 border-4 border-red-500 border-solid border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};
export default Loading;

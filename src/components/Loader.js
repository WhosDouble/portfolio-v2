import { jsx as _jsx } from "react/jsx-runtime";
const Loading = () => {
    //the loader component that sets off when the website first loads
    return (_jsx("div", { className: "fixed inset-0 flex justify-center items-center bg-black z-50", children: _jsx("div", { className: "w-16 h-16 border-4 border-red-500 border-solid border-t-transparent rounded-full animate-spin" }) }));
};
export default Loading;

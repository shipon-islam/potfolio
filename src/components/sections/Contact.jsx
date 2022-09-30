import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Heading from "../Heading";

export default function Contact() {
  const [userDetails, setuserDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const buttonRef=useRef(null)
  

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setuserDetails({ ...userDetails, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = userDetails;
    if (!name || !email || !message) {
      toast.warn("fill & try again!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      buttonRef.current.disabled=true;
      const mail = await emailjs.send(
        "service_vs3351g",
        "template_8vdc61f",
        userDetails,
        "user_0NEpiHFRwUkFLNiJNBPi0"
      );
      if (mail) {
        buttonRef.current.disabled=false;
        setuserDetails({
          name: "",
          email: "",
          message: "",
        });
        toast.success("Message sent successfuly ✔", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }

    
  };

  return (
    <div className="font-poppins ">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />

      <Heading title="contact me" subTitle="how to meet?" />
      <div className="flex flex-col md:flex-row ">
        <div data-aos="fade-right" data-aos-duration="1000" className="py-10"> 
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="735"
      height="780"
      fill="none"
      viewBox="0 0 735 780"
      className="w-[80%] xl:w-[60%] md:w-[50%] h-auto mx-auto"
    >
      <g id="undraw_online_messaging_re_qft3 1" clipPath="url(#clip0_4_37)">
        <path
          id="Vector"
          fill="#3F3D56"
          d="M734.736 172.947h-3.998V63.402A63.402 63.402 0 00667.336 0H435.249a63.402 63.402 0 00-63.402 63.402v600.974a63.403 63.403 0 0063.402 63.402h232.086a63.401 63.401 0 0063.402-63.402V250.923h3.999v-77.976z"
        ></path>
        <path
          id="screen"
          fill="#fff"
          d="M669.894 16.495h-30.295a22.49 22.49 0 01-2.159 21.043 22.486 22.486 0 01-18.668 9.948h-132.96a22.49 22.49 0 01-18.669-9.948 22.502 22.502 0 01-2.158-21.043h-28.296a47.35 47.35 0 00-47.347 47.348v600.092a47.347 47.347 0 0047.347 47.348h233.205a47.356 47.356 0 0033.48-13.868 47.344 47.344 0 0013.868-33.48V63.843a47.348 47.348 0 00-47.348-47.348z"
        ></path>
        <g id="bottombox">
          <path
            id="Vector_2"
            fill="#E6E6E6"
            d="M565.531 668.779a89.854 89.854 0 01-80.046-130.773 89.854 89.854 0 01103.504-45.817 89.858 89.858 0 0142.99 147.177l18.765 21.035-9.364 3.972c-14.487 6.145-28.663.166-36.619-4.606a89.98 89.98 0 01-39.23 9.012zm0-164.948a75.186 75.186 0 00-57.188 123.966 75.19 75.19 0 0093.332 17.158l4.009-2.203 3.727 2.652a39.411 39.411 0 0014.224 6.508l-11.808-13.236 5.176-4.865a74.463 74.463 0 0023.712-54.795 75.269 75.269 0 00-75.184-75.185z"
          ></path>
          <path
            id="Vector_3"
            fill="#fff"
            d="M648.005 579.016a82.44 82.44 0 10-42.82 72.328c5.701 4.056 19.609 12.147 33.348 6.319l-16.538-18.539a82.247 82.247 0 0026.01-60.108z"
          ></path>
          <path
            id="bottombox-line-1"
            fill="#0EA5E9"
            d="M581.986 562.153h-58.932v5.472h58.932v-5.472z"
          ></path>
          <path
            id="bottombox-line-2"
            fill="#E6E6E6"
            d="M625.768 581.085H523.054v5.472h102.714v-5.472z"
          ></path>
          <path
            id="bottombox-line-3"
            fill="#E6E6E6"
            d="M625.667 600.016H523.054v5.473h102.613v-5.473z"
          ></path>
        </g>
        <g id="topbox">
          <path
            id="topbox-circle"
            fill="#fff"
            d="M648.005 180.016a82.434 82.434 0 00-16.915-49.995 82.439 82.439 0 00-136.468 8.028 82.439 82.439 0 0011.687 99.319 82.445 82.445 0 0098.876 14.976c5.701 4.056 19.609 12.147 33.348 6.319l-16.538-18.539a82.247 82.247 0 0026.01-60.108z"
          ></path>
          <path
            id="topbox-line-1"
            fill="#0EA5E9"
            d="M581.986 163.153h-58.932v5.472h58.932v-5.472z"
          ></path>
          <path
            id="topbox-line-2"
            fill="#E6E6E6"
            d="M625.768 182.085H523.054v5.472h102.714v-5.472z"
          ></path>
          <path
            id="topbox-line-3"
            fill="#E6E6E6"
            d="M625.667 201.016H523.054v5.473h102.613v-5.473z"
          ></path>
          <path
            id="topbox-circle-inner"
            fill="#E6E6E6"
            d="M565.531 269.779a89.86 89.86 0 1166.448-29.413l18.765 21.035-9.364 3.972c-14.487 6.145-28.663.166-36.619-4.606a89.98 89.98 0 01-39.23 9.012zm0-164.948a75.186 75.186 0 00-57.188 123.966 75.19 75.19 0 0093.332 17.158l4.009-2.203 3.727 2.652a39.411 39.411 0 0014.224 6.508l-11.808-13.236 5.176-4.865a74.463 74.463 0 0023.712-54.795 75.267 75.267 0 00-75.184-75.185z"
          ></path>
        </g>
        <path
          id="topbox-dot"
          fill="#E6E6E6"
          d="M679.768 277.446c7.179 0 13-5.82 13-13 0-7.179-5.821-13-13-13-7.18 0-13 5.821-13 13 0 7.18 5.82 13 13 13z"
        ></path>
        <path
          id="Vector_4"
          fill="#E6E6E6"
          d="M679.768 676.446c7.179 0 13-5.82 13-13 0-7.179-5.821-13-13-13-7.18 0-13 5.821-13 13 0 7.18 5.82 13 13 13z"
        ></path>
        <path
          id="Vector_5"
          fill="#CCC"
          d="M1 779.785h381a1.002 1.002 0 00.707-1.707.997.997 0 00-.707-.293H1a.998.998 0 00-1 1 1 1 0 001 1z"
        ></path>
        <path
          id="man-koler"
          fill="#E6E6E6"
          d="M183.785 349.52l1.506-7.53s22.149-7.529 24.627 7.53h-26.133z"
        ></path>
        <path
          id="man-right-leg"
          fill="#9F616A"
          d="M226.294 764.098l14.521-.001 6.908-56.009-21.432.001.003 56.009z"
        ></path>
        <path
          id="man-right-shoes"
          fill="#2F2E41"
          d="M222.59 759.357l28.597-.001h.001a18.223 18.223 0 0118.224 18.224v.592l-46.821.002-.001-18.817z"
        ></path>
        <path
          id="man-left-leg"
          fill="#9F616A"
          d="M156.294 764.098l14.521-.001 6.908-56.009-21.432.001.003 56.009z"
        ></path>
        <path
          id="man-left-shoes"
          fill="#2F2E41"
          d="M152.59 759.357l28.597-.001h.001a18.223 18.223 0 0118.224 18.224v.592l-46.821.002-.001-18.817z"
        ></path>
        <path
          id="left-sholder"
          fill="#2F2E41"
          d="M162.703 381.143l-16.565-1.506-10.541 49.694 1.506 45.176 16.565 60.235 22.588-13.553-12.047-61.741-1.506-78.305z"
        ></path>
        <path
          id="man-pant"
          fill="#2F2E41"
          d="M152.218 529.471l3.708 31.623 3.483 73.788-8 109.958 28.611-1.535 14.024-114.446 8.564-52.706 12.047 60.235 7.53 112.94 29.364-2.353V635.991l.753-80.92-10.541-31.623-89.543 6.023z"
        ></path>
        <path
          id="backward"
          fill="#2F2E41"
          d="M213.902 351.026s-10.541-15.059-30.117-4.518l-9.035 12.047-28.612 21.082 6.024 70.776-7.53 88.846 106.917-1.505-18.07-88.847v-94.87l-19.577-3.011z"
        ></path>
        <path
          id="Vector_6"
          fill="#000"
          d="M155.926 404.632l-8.634 103.239 10.893-55.952-2.259-47.287z"
          opacity="0.25"
        ></path>
        <path
          id="man-head"
          fill="#9F616A"
          d="M211.649 329.926c14.654-8.011 20.039-26.384 12.029-41.038-8.011-14.654-26.384-20.04-41.038-12.029-14.654 8.011-20.04 26.384-12.029 41.038 8.01 14.654 26.384 20.04 41.038 12.029z"
        ></path>
        <path
          id="man-hair"
          fill="#2F2E41"
          d="M199.403 330.067a30.671 30.671 0 01-36.129-19.742 30.67 30.67 0 0116.061-37.909 35.86 35.86 0 0116.936-3.04c9.044.476 17.834 3.818 26.886 3.572l1.313 2.109 4.945-1.199 1.059 3.926 1.303-.045c2.333 4.336-1.421 10.544-6.345 10.491-1.949-.02-3.792-.833-5.698-1.241-1.907-.409-4.151-.307-5.466 1.133-1.708 1.871-.964 4.791-.608 7.299s-.534 5.887-3.066 5.969c-1.293.042-2.524-.886-3.795-.642-1.48.284-2.228 2.072-2.012 3.563.366 1.464.964 2.86 1.771 4.135 3.671 7.328.571 17.295-6.608 21.249"
        ></path>
        <g id="man-circle">
          <g id="midbox">
            <path
              id="midbox-circle"
              fill="#0EA5E9"
              d="M392.673 476.008c-9.513 5.706-26.463 12.855-43.783 5.508l-11.197-4.75 22.437-25.151a107.163 107.163 0 01-27.783-72.098 107.16 107.16 0 0197.052-106.57 107.159 107.159 0 01101.584 162.484 107.158 107.158 0 01-138.31 40.577z"
            ></path>
            <path
              id="midbox-inner"
              fill="#000"
              d="M529.967 378.959a98.616 98.616 0 00-89.895-98.223 99.665 99.665 0 018.715-.388 98.61 98.61 0 010 197.221c-2.933 0-5.833-.138-8.702-.389a98.615 98.615 0 0089.882-98.221z"
              opacity="0.1"
            ></path>
            <path
              id="midbox-line-1"
              fill="#fff"
              d="M453.419 359.294h-70.463v6.544h70.463v-6.544z"
            ></path>
            <path
              id="midbox-line-2"
              fill="#fff"
              d="M505.767 381.93H382.956v6.544h122.811v-6.544z"
            ></path>
            <path
              id="midbox-line-3"
              fill="#fff"
              d="M505.647 404.566H382.956v6.544h122.691v-6.544z"
            ></path>
          </g>
          <g id="right-hand">
            <path
              id="man-right-finger"
              fill="#9F616A"
              d="M335.652 491.192a11.115 11.115 0 01-9.341-1.026 11.108 11.108 0 01-5.212-7.82l-24.638-6.089.048-15.876 34.674 9.088a11.168 11.168 0 014.469 21.723z"
            ></path>
            <path
              id="finger-up-white"
              fill="#E6E6E6"
              d="M309.887 460.191l-4.143 23.736 10.384 1.812 4.144-23.735-10.385-1.813z"
            ></path>
            <path
              id="man-right-sholder"
              fill="#2F2E41"
              d="M226.291 359.856l7.188-5.819s14.506-1.008 14.244 14.37l23.21 72.604 44.528 15.774-6 31-63-24-32-53.04 11.83-50.889z"
            ></path>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_4_37">
          <path fill="#fff" d="M0 0H734.736V779.785H0z"></path>
        </clipPath>
      </defs>
    </svg>

        </div>
        <form
        data-aos="fade-left" data-aos-duration="1000"
          action=""
          className="w-[85%] xl:w-[380px] xl:mt-8 md:w-[300px] mx-auto md:mx-0 md:ml-auto"
        >
          <div>
            <label
              htmlFor="name"
              className="capitalize font-semibold pb-1 pl-1 inline-block"
            >
              name
            </label>
            <input
              className="outline-none block border-blue border-2 bg-transparent py-3 pl-2 w-full rounded-lg"
              type="text"
              name="name"
              onChange={handleChange}
              value={userDetails.name}
            />
          </div>
          <div className="my-6">
            <label
              htmlFor="email"
              className="capitalize font-semibold pb-1 pl-1 inline-block"
            >
              email
            </label>
            <input
              className="outline-none block border-blue border-2 bg-transparent autofill:bg-transparent py-3 pl-2 w-full rounded-lg"
              type="email"
              name="email"
              onChange={handleChange}
              value={userDetails.email}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="capitalize font-semibold pb-1 pl-1 inline-block"
            >
              message
            </label>
            <textarea
              className="outline-none block border-blue border-2 bg-transparent py-3 pl-2 w-full rounded-lg min-h-"
              type="text"
              name="message"
              onChange={handleChange}
              value={userDetails.message}
            ></textarea>
          </div>
          <button
          ref={buttonRef}          
            className="bg-blue block w-full
            disabled:bg-slate-600/40 disabled:text-blue/50 disabled:hover:shadow-none  font-2xl uppercase font-bold text-slate-900 py-3 mt-8 rounded-lg hover:contact-btn "
            onClick={handleSubmit}
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
}

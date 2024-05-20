import {
  FaFacebook,
  FaFacebookF,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";

export const Footer = () => {
  const footerImg =
    "https://towhidfoundation.com/wp-content/uploads/2023/12/Towhid-Foundation-Bangla-Logo-copy-01.svg";

  return (
    <footer className="footer min-h-80 bg-teal-500 w-full flex flex-col md:flex-row justify-center items-center px-10 py-20">
      <div className=" p-2 flex flex-col justify-center items-center text-md font-semibold">
        <img
          src={footerImg}
          alt="logo"
          className="h-20 md:h-40 shadow-md m-auto "
        />
        <br />
        <p className="text-center text-sm">
          All our activities are only for the service of humanity.
        </p>
      </div>

      <div className="p-2 flex flex-col justify-center items-center text-md font-semibold">
        <h3 className="text-white font-bold py-2 px-4 text-lg rounded text-center  ">
          Contact Us:
        </h3>

        <div className="flex flex-col md:flex-row  gap-2 border-b-2 p-1">
          <div className="border-2 p-2 rounded-md bg-teal-200 hover:bg-slate-100 shadow-md">
            <h3>Head Office</h3>
            <p>Email: XXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>Phone: +8801XXXXXXXXX</p>
            <p>Address: 123 Main St, Anytown, USA</p>
          </div>
          <div className="border-2 p-2 rounded-md bg-teal-200 hover:bg-slate-100 shadow-md">
            <h3>Training Center-1</h3>
            <p>Email: XXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>Phone: +8801XXXXXXXXX</p>
            <p>Address: 123 Main St, Anytown, USA</p>
          </div>
          <div className="border-2 p-2 rounded-md bg-teal-200 hover:bg-slate-100 shadow-md">
            <h3>Ambulanc & Dead body cleaning Center</h3>
            <p>Email: XXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>Phone: +8801XXXXXXXXX</p>
            <p>Address: 123 Main St, Anytown, USA</p>
          </div>
          <div className="border-2 p-2 rounded-md bg-teal-200 hover:bg-slate-100 shadow-md">
            <h3>Medicale Center</h3>
            <p>Email: XXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>Phone: +8801XXXXXXXXX</p>
            <p>Address: 123 Main St, Anytown, USA</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center m-auto gap-3">
          <h5 className=" bg-teal-200 hover:bg-slate-100 rounded-lg shadow-md text-center m-auto">
            ©2023 All right reserved by Towhid Foundation
          </h5>
          <div className="footer__social flex flex-row justify-center items-center gap-1 m-auto">
            <a
              href="https://www.facebook.com/your-facebook-page"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 hover:bg-blue-100 w-fit py-4 px-4 rounded-full shadow-md focus:outline-none focus:shadow-outline flex items-center"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.facebook.com/groups/your-facebook-group"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 hover:bg-blue-100 w-fit py-4 px-3 rounded-full shadow-md focus:outline-none focus:shadow-outline flex items-center"
            >
              <FaUsers className="mr-2" />
            </a>
            <a
              href="https://www.google.com/maps/place/your-location"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 hover:bg-blue-100 w-fit py-4 px-3 rounded-full shadow-md focus:outline-none focus:shadow-outline flex items-center"
            >
              <FaMapMarkerAlt className="mr-2" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center flex flex-col justify-center items-center m-auto">
        <div className="flex flex-col">
          <h3 className="text-white font-bold rounded text-lg">
            Important Links:
          </h3>
          <a href="#" className="hover:bg-white rounded-md p-1">
            Privacy Policy
          </a>
          <a href="#" className="hover:bg-white rounded-md p-1">
            Terms of Service
          </a>
          <a href="#" className="hover:bg-white rounded-md p-1">
            Help
          </a>
          <a href="#" className="hover:bg-white rounded-md p-1">
            FAQ
          </a>
          <a href="#" className="hover:bg-white rounded-md p-1">
            IT Team
          </a>
          <a href="#" className="hover:bg-white rounded-md p-1">
            Careers
          </a>
        </div>
      </div>
    </footer>
  );
};

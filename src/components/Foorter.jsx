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
    <footer className="footer">
      <div className="footer__container min-h-80 bg-teal-500 w-full flex flex-col md:flex-row justify-between items-center gap-1">
        
        <div className="footer__logo p-4 flex flex-col justify-center items-center text-md font-semibold">
          <img src={footerImg} alt="logo" className="h-20 mr-4 shadow-md" />
          <br />
          <p className="text-center text-lg">All our activities are only for the service of humanity.</p>
        </div>

        

        <div className="p-4 flex flex-col">

          <div className="flex flex-col justify-center items-center">
          <h3 className="text-white font-bold py-2 px-4 rounded text-lg">
            Important Link:
          </h3>
          <a href="#" className=" hover:bg-white p-2  rounded-md">Privacy Policy</a>
          <a href="#" className=" hover:bg-white p-2 rounded-md">Terms of Service</a>
          <a href="#" className=" hover:bg-white p-2  rounded-md">Help</a>
          <a href="#" className=" hover:bg-white p-2 rounded-md">FAQ</a>
          <a href="#" className=" hover:bg-white p-2  rounded-md">It Team</a>
          <a href="#" className=" hover:bg-white p-2 rounded-md">Careers</a>
          </div>

          <div className="footer__social p-4 flex flex-row gap-2">
          <a
            href="https://www.facebook.com/your-facebook-page"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-500 hover:bg-blue-100 w-fit text-lg font-bold py-1 px-2 rounded-full shadow-md focus:outline-none focus:shadow-outline flex justify-items-center items-center"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.facebook.com/groups/your-facebook-group"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-500 hover:bg-blue-100 w-fit text-lg font-bold py-1 px-2 rounded-full shadow-md focus:outline-none focus:shadow-outline flex justify-items-center items-center"
          >
            <FaUsers className="mr-2" />
          </a>
          <a
            href="https://www.google.com/maps/place/your-location"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-white text-blue-500 hover:bg-blue-100 w-fit text-lg font-bold py-1 px-2 rounded-full shadow-md focus:outline-none focus:shadow-outline flex justify-items-center items-center"
          >
            <FaMapMarkerAlt className="mr-2" />
          </a>
        </div>
        </div>

        <div className="footer__contact p-4 flex flex-col gap-1">
          <h3 className="text-white font-bold py-2 px-4 text-lg rounded text-center">
            Contact Us:
          </h3>

          <div className="flex flex-row  gap-2 border-b-2 p-1">
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
          <h5 className="text-center bg-teal-200 hover:bg-slate-100 rounded-lg shadow-md">
            ©2023 All right reserved by Towhid Foundation
          </h5>
        </div>

        
        
      </div>
    </footer>
  );
};

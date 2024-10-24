import React from "react";

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            {/* Svg o img */}
            <img src="/logo_pufi_footer.png" alt="" />
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 border-r">
            <nav className="list-none mb-10">
              <ul className="flex flex-col gap-[10px]">
                <li>
                  <a className="text-gray-900 hover:text-gray-800 font-semibold">
                    PUFF RAIN
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 hover:text-gray-800 font-semibold">
                    PUFI PUFF
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 hover:text-gray-800 font-semibold">
                    PUFI CART
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 hover:text-gray-800 font-semibold">
                    PUFI NAP
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 border-r">
            <nav className="list-none mb-10">
              <ul className="flex flex-col gap-[10px]">
                <li>
                  <a className="text-gray-900 hover:text-gray-800 font-semibold">
                    CONTACTO
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 hover:text-gray-800 font-semibold">
                    AYUDA
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 hover:text-gray-800 font-semibold">
                    COMO COMPRAR
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 hover:text-gray-800 font-semibold">
                    TERMINOS Y CONDICIONES
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col justify-evenly lg:w-1/4 md:w-1/2 w-full px-4 border-r">
            <p className="font-bold text-black text-center">
              COMPRA 100% SEGURA
            </p>
            <div className="flex flex-row justify-center">
              <img src="/qr_pufi.png" alt="" />
              <img src="/security_pufi.png" alt="" />
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <span className="text-gray-900 hover:text-gray-800 font-semibold">
              SIGUENOS EN
            </span>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-800">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-800">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="border border-solid border-[#E5E5E5]">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-[#CDCDCD] text-sm text-center sm:text-left">
            PUFI Copyright 2017 - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

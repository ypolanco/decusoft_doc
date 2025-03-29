import React from "react";

const Footer2 = () => {
  return (
    <footer className="relative z-10 bg-white pt-20 ">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap lg:mb-14">
          <div className="w-full px-4 md:w-2/3 lg:w-1/3">
            <div className="mb-12 w-full">
              <h4 className="text-3xl font-medium text-dark ">
                Please feel free to get in touch with us
              </h4>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-12 w-full">
              <div className="flex">
                <div className="mr-6 h-9 w-9 text-primary">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 0.984375C9.95312 0.984375 3.82812 6.89063 3.82812 14.1641C3.82812 19.6875 11.1562 28.4375 15.4766 33.1406C16.0234 33.7422 16.7344 34.0156 17.5 34.0156C18.2656 34.0156 18.9766 33.6875 19.5234 33.1406C23.8438 28.4375 31.1719 19.6875 31.1719 14.1641C31.1719 6.89063 25.0469 0.984375 17.5 0.984375ZM17.7188 31.5C17.6094 31.6094 17.4453 31.6094 17.2812 31.5C11.9766 25.7031 6.28906 18.1563 6.28906 14.1641C6.28906 8.25781 11.3203 3.44531 17.5 3.44531C23.6797 3.44531 28.7109 8.25781 28.7109 14.1641C28.7109 18.1563 23.0234 25.7031 17.7188 31.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.5 8.58594C14.2187 8.58594 11.5391 11.2656 11.5391 14.5469C11.5391 17.8281 14.2187 20.5625 17.5 20.5625C20.7812 20.5625 23.4609 17.8828 23.4609 14.6016C23.4609 11.3203 20.7812 8.58594 17.5 8.58594ZM17.5 18.1016C15.5312 18.1016 14 16.5156 14 14.6016C14 12.6875 15.5859 11.1016 17.5 11.1016C19.4141 11.1016 21 12.6875 21 14.6016C21 16.5156 19.4687 18.1016 17.5 18.1016Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="mb-4 text-lg font-semibold text-dark">
                    Our Location
                  </h5>
                  <p className="text-base text-body-color ">
                    401 Broadway, 24th Floor, Orchard Cloud View, London
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-12 w-full">
              <div className="flex">
                <div className="mr-6 h-9 w-9 text-primary">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.625 5.25H4.375C2.51562 5.25 0.929688 6.78125 0.929688 8.69531V26.4141C0.929688 28.2734 2.46094 29.8594 4.375 29.8594H30.625C32.4844 29.8594 34.0703 28.3281 34.0703 26.4141V8.64062C34.0703 6.78125 32.4844 5.25 30.625 5.25ZM30.625 7.71094C30.6797 7.71094 30.7344 7.71094 30.7891 7.71094L17.5 16.2422L4.21094 7.71094C4.26562 7.71094 4.32031 7.71094 4.375 7.71094H30.625ZM30.625 27.2891H4.375C3.82812 27.2891 3.39062 26.8516 3.39062 26.3047V10.1172L16.1875 18.3203C16.5703 18.5938 17.0078 18.7031 17.4453 18.7031C17.8828 18.7031 18.3203 18.5938 18.7031 18.3203L31.5 10.1172V26.3594C31.6094 26.9062 31.1719 27.2891 30.625 27.2891Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="mb-4 text-lg font-semibold text-dark ">
                    How Can We Help?
                  </h5>
                  <p className="mb-2 text-base text-body-color ">
                    info@yourdomain.com
                  </p>
                  <p className="text-base text-body-color ">
                    contact@yourdomain.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-stroke py-8 ">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full ">
              <div className="py-3 text-center">
                <p className="text-base text-body-color ">
                  © {new Date().getFullYear()} Yampiero Polanco
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;

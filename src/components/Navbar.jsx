/* eslint-disable react/no-unknown-property */
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar  shadow-sm bg-[#9538E2] w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // eslint-disable-next-line react/no-unknown-property
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              // eslint-disable-next-line react/no-unknown-property
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink  className={({ isActive }) =>
            `tab ${isActive ? 'tab-active bg-green-700 text-white' : 'bg-gray-200'}`
          }  to="/">
                <a>Home</a>
              </NavLink>
              <NavLink  className={({ isActive }) =>
            `tab ${isActive ? 'tab-active bg-green-700 text-white' : 'bg-gray-200'}`
          } to="/statics">
                <a>Statistics</a>
              </NavLink>
              <NavLink  className={({ isActive }) =>
            `tab ${isActive ? 'tab-active text-red-500' : 'bg-gray-200'}`
          } to="/dashboard">
                <a>Dashboard</a>
              </NavLink>
            </ul>
          </div>
          <a className=" text-xl text-white">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-2 text-white">
            <NavLink  className={({ isActive }) =>
            `tab ${isActive ? 'tab-active bg-green-700 text-white' : 'bg-gray-200'}`
          } to="/">
              <a>Home</a>
            </NavLink>
            <NavLink  className={({ isActive }) =>
            `tab ${isActive ? 'tab-active bg-green-700 text-white' : 'bg-gray-200'}`
          } to="/statistics">
              <a>Statistics</a>
            </NavLink>
            <NavLink  className={({ isActive }) =>
            `tab ${isActive ? 'tab-active bg-green-700 text-white' : 'bg-gray-200'}`
          } to="/dashboard">
              <a>Dashboard</a>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span>1</span>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end"></div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clip-path="url(#clip0_13_2159)">
            <path
              d="M16.2501 10.4767L10.0001 16.6667L3.75009 10.4767C3.33784 10.0755 3.01312 9.59334 2.79638 9.06052C2.57963 8.52771 2.47556 7.95579 2.4907 7.38077C2.50585 6.80576 2.63989 6.24011 2.88439 5.71944C3.12888 5.19878 3.47853 4.73437 3.91133 4.35548C4.34412 3.97658 4.85068 3.6914 5.3991 3.5179C5.94752 3.34439 6.52593 3.28631 7.09789 3.34733C7.66986 3.40834 8.223 3.58713 8.72248 3.87242C9.22196 4.15771 9.65696 4.54333 10.0001 5.00499C10.3447 4.54668 10.7802 4.16443 11.2793 3.88217C11.7785 3.5999 12.3305 3.4237 12.9009 3.36459C13.4712 3.30549 14.0477 3.36474 14.5941 3.53865C15.1405 3.71257 15.6451 3.99739 16.0764 4.3753C16.5077 4.75321 16.8563 5.21606 17.1004 5.7349C17.3446 6.25374 17.479 6.8174 17.4953 7.39058C17.5117 7.96377 17.4095 8.53416 17.1952 9.06604C16.9809 9.59792 16.6592 10.0798 16.2501 10.4817"
              stroke="#3A3A3A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_13_2159">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default Navbar;

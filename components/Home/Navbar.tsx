import { LinearGradient } from "react-text-gradients";

export default function Navbar() {
  return (
    <nav
      className="absolute top-0 w-full z-20 border-none"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="flex items-center justify-between py-3 px-8 w-full glow-blue">
        <a
          aria-current="page"
          href="/"
          className="router-link-active router-link-exact-active flex items-center"
        >
          <img
            src="/img/bean.png"
            alt=""
            style={{ maxWidth: "36px" }}
            className="mr-2"
          />
          <span className="text-white audiowide text-md">
          <LinearGradient gradient={["to left", "brown , #6F4E37"]} className="align-center">
         Soybeans
        </LinearGradient>
          </span>
        </a>
        <div className="flex items-center">
          
        </div>
      </div>
    </nav>
  );
}

/** 
 <nav className="fixed top-0 w-full z-20 border-lp-blue-15 bg-transparent border-b border-transparent bg-black/[0.15] border-b">
          <div className="flex items-center justify-between py-5 px-8 w-full">
            <a
              aria-current="page"
              href="/"
              className="router-link-active router-link-exact-active"
            >
              <img src="/logo.png" alt="" style={{ maxWidth: "200px" }} />
            </a>
            <div className="lg:flex hidden items-center gap-3">
              <div className="lg:flex items-center hidden border-white/[0.55] text-sm mr-2 px-1.5 py-1.5 h-9 gap-3">
                <div>
                  <a
                    aria-current="page"
                    href="/"
                    className="router-link-active router-link-exact-active text-base text-secondary-light"
                  >
                    Home
                  </a>
                </div>
                <div>
                  <a
                    aria-current="page"
                    href="/#info"
                    className="router-link-active router-link-exact-active text-base text-secondary-light"
                  >
                    Flywheel
                  </a>
                </div>
                <div>
                  <a
                    aria-current="page"
                    href="/#launch-section"
                    className="router-link-active router-link-exact-active text-base text-secondary-light"
                  >
                    Earn Yield
                  </a>
                </div>
                <div>
                  <a
                    aria-current="page"
                    href="/#guide"
                    className="router-link-active router-link-exact-active text-base text-lp-green-2"
                  >
                    Platform Features
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-5 mr-2">
                <a
                  href="https://t.me/PeapodsFinance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width={18}
                    height={17}
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className
                  >
                    <path
                      id="telegram"
                      d="M7.05161 10.9901L13.7223 16.0725C14.4836 16.5056 15.0329 16.2813 15.2226 15.3438L17.9379 2.14827C18.2158 0.998899 17.513 0.477413 16.7847 0.818384L0.840369 7.15858C-0.247967 7.6088 -0.241484 8.23498 0.642013 8.51393L4.73369 9.83102L14.2064 3.66807C14.6536 3.3884 15.0641 3.53862 14.7272 3.84702"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.dextools.io/app/en/ether/pair-explorer/0xae750560b09ad1f5246f3b279b3767afd1d79160"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width={18}
                    height={21}
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className
                  >
                    <path
                      id="dex"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.69378 1.71957C5.46078 2.33401 4.45202 2.85395 4.45223 2.8751C4.45278 2.92968 7.41147 4.36309 7.51648 4.3596C7.56425 4.35807 7.91079 4.20547 8.28652 4.02053L8.96978 3.68434L9.71599 4.05127L10.4622 4.41827L11.6842 3.89298C13.5255 3.10146 13.7167 3.01473 13.6867 2.98559C13.6469 2.94692 12.9865 2.60751 11.1947 1.7051C10.3287 1.26895 9.48825 0.841317 9.32689 0.754787C9.16556 0.668256 9.01153 0.598647 8.98463 0.599995C8.95772 0.601342 7.92681 1.10516 6.69378 1.71957ZM1.28585 4.39854L0.00231565 5.03277V7.81633C0.00231565 9.3473 0.0191698 10.5999 0.0398435 10.5999C0.0604456 10.5999 0.69195 10.338 1.44315 10.0179L2.80898 9.43598V6.50193L3.47641 6.84978C3.99073 7.1176 4.50535 7.38486 5.02028 7.65158L5.8967 8.10552L6.28668 7.93682C6.53126 7.83085 6.77536 7.72385 7.01895 7.61582C7.20719 7.53196 7.66927 7.33286 8.04576 7.1733C8.42226 7.01367 8.77078 6.85314 8.82019 6.81656C8.88584 6.76796 8.08534 6.34478 5.85938 5.25128C4.18149 4.42701 2.75484 3.75523 2.68904 3.75845C2.62325 3.76167 1.99182 4.04967 1.28585 4.39854ZM13.918 4.57664C13.0439 4.95417 12.328 5.27814 12.3272 5.29662C12.3264 5.31507 12.8029 5.58608 13.3861 5.89877C13.9692 6.21153 14.4463 6.48414 14.4463 6.50467C14.4463 6.52515 13.9303 6.76433 13.2997 7.03627C12.669 7.30815 11.0749 7.99684 9.75715 8.5667L5.3418 10.4759C4.23112 10.9563 3.22997 11.3892 3.11703 11.4381C0.848411 12.4206 0.224857 12.6932 0.139225 12.74C0.0531167 12.7871 0.0336127 13.0608 0.0182865 14.4345L0 16.073L1.1478 16.6324L2.29557 17.1919L3.88714 16.5048C4.76253 16.1269 5.47871 15.7979 5.47871 15.7736C5.47871 15.7495 5.31695 15.6487 5.11933 15.5495C4.92162 15.4503 4.51349 15.2308 4.21229 15.0616C3.91111 14.8924 3.61079 14.7371 3.54486 14.7165C3.47894 14.696 3.42597 14.66 3.42704 14.6366C3.42814 14.6132 4.129 14.2948 4.9844 13.9288C6.64587 13.2182 7.91735 12.6705 10.6471 11.4896C11.8677 10.9617 13.0885 10.434 14.3094 9.90675C15.3824 9.44343 16.63 8.90229 17.0818 8.70425L17.9033 8.34417L17.9215 6.68707L17.9399 5.03003L16.7757 4.45842C16.1354 4.14406 15.5881 3.88762 15.5594 3.88855C15.5308 3.88942 14.7921 4.19903 13.918 4.57664ZM17.5914 10.5548C17.4198 10.635 17.081 10.7851 16.8384 10.8883C16.5958 10.9916 16.1354 11.1903 15.8154 11.33L15.2335 11.5839L15.2202 13.0386C15.2129 13.8388 15.1821 14.4898 15.1518 14.4856C15.0829 14.4758 13.9924 13.9408 12.8961 13.3789C12.1049 12.9733 12.0552 12.9572 11.8693 13.0453C11.7618 13.0962 11.1194 13.3719 10.4417 13.6579C9.76398 13.9439 9.1874 14.1966 9.16028 14.2194C9.13323 14.2423 10.4972 14.9495 12.1914 15.7911L15.2717 17.3213L16.5875 16.6701C17.3111 16.312 17.9265 15.9854 17.9548 15.9443C18.0186 15.8519 18.0131 10.3964 17.9493 10.4038C17.924 10.4067 17.7629 10.4747 17.5914 10.5548ZM10.3048 16.9582C10.0765 17.0521 9.84836 17.1461 9.62024 17.2402C8.93137 17.5253 9.06637 17.5348 8.24682 17.1445C7.70097 16.8846 7.46568 16.8044 7.36355 16.8433C7.28695 16.8725 6.62765 17.1562 5.89834 17.4738C5.16908 17.7914 4.5471 18.0513 4.51616 18.0513C4.21019 18.0513 4.71887 18.342 6.68175 19.2892L8.98374 20.4L9.95231 19.9425C10.485 19.6909 11.5595 19.1871 12.3401 18.823C13.1206 18.4587 13.7496 18.1512 13.7378 18.1396C13.7259 18.1281 13.0719 17.8068 12.2844 17.4257L10.8524 16.7329L10.3048 16.9582Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="https://x.com/PeapodsFinance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width={18}
                    height={17}
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className
                  >
                    <path
                      id="x"
                      d="M0.0437997 0.0764771L6.99339 9.36857L0 16.9235H1.57406L7.6969 10.3089L12.6438 16.9235H18L10.6592 7.10883L17.1687 0.0764771H15.5947L9.95603 6.1682L5.4 0.0764771H0.0437997ZM2.35852 1.2358H4.81913L15.685 15.7642H13.2244L2.35852 1.2358Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="https://discord.gg/PeapodsFinance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0,0,256,256"
                    width={27}
                    height={28}
                    className
                  >
                    <g
                      fill="#ffffff"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth={1}
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit={10}
                      strokeDasharray
                      strokeDashoffset={0}
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(5.33333,5.33333)">
                        <path d="M39.248,10.177c-2.804,-1.287 -5.812,-2.235 -8.956,-2.778c-0.057,-0.01 -0.114,0.016 -0.144,0.068c-0.387,0.688 -0.815,1.585 -1.115,2.291c-3.382,-0.506 -6.747,-0.506 -10.059,0c-0.3,-0.721 -0.744,-1.603 -1.133,-2.291c-0.03,-0.051 -0.087,-0.077 -0.144,-0.068c-3.143,0.541 -6.15,1.489 -8.956,2.778c-0.024,0.01 -0.045,0.028 -0.059,0.051c-5.704,8.522 -7.267,16.835 -6.5,25.044c0.003,0.04 0.026,0.079 0.057,0.103c3.763,2.764 7.409,4.442 10.987,5.554c0.057,0.017 0.118,-0.003 0.154,-0.051c0.846,-1.156 1.601,-2.374 2.248,-3.656c0.038,-0.075 0.002,-0.164 -0.076,-0.194c-1.197,-0.454 -2.336,-1.007 -3.432,-1.636c-0.087,-0.051 -0.094,-0.175 -0.014,-0.234c0.231,-0.173 0.461,-0.353 0.682,-0.534c0.04,-0.033 0.095,-0.04 0.142,-0.019c7.201,3.288 14.997,3.288 22.113,0c0.047,-0.023 0.102,-0.016 0.144,0.017c0.22,0.182 0.451,0.363 0.683,0.536c0.08,0.059 0.075,0.183 -0.012,0.234c-1.096,0.641 -2.236,1.182 -3.434,1.634c-0.078,0.03 -0.113,0.12 -0.075,0.196c0.661,1.28 1.415,2.498 2.246,3.654c0.035,0.049 0.097,0.07 0.154,0.052c3.595,-1.112 7.241,-2.79 11.004,-5.554c0.033,-0.024 0.054,-0.061 0.057,-0.101c0.917,-9.491 -1.537,-17.735 -6.505,-25.044c-0.012,-0.024 -0.033,-0.042 -0.057,-0.052zM16.703,30.273c-2.168,0 -3.954,-1.99 -3.954,-4.435c0,-2.445 1.752,-4.435 3.954,-4.435c2.22,0 3.989,2.008 3.954,4.435c0.001,2.444 -1.751,4.435 -3.954,4.435zM31.324,30.273c-2.168,0 -3.954,-1.99 -3.954,-4.435c0,-2.445 1.752,-4.435 3.954,-4.435c2.22,0 3.989,2.008 3.954,4.435c0,2.444 -1.734,4.435 -3.954,4.435z" />
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <a
                href="https://docs.peapods.finance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="text-center rounded flex items-center justify-center gap-2 font-semibold px-3 py-1 h-9 text-sm px-3 py-2.5 text-base rounded rounded-full bg-lp-green-2 btn-primary text-black-2 rounded-full"
                >
                  <span>Documentation</span>
                </button>
              </a>
              <a href="/app" className>
                <button
                  type="button"
                  className="text-center rounded flex items-center justify-center gap-2 font-semibold px-3 py-1 h-9 text-sm px-3 py-2.5 text-base rounded rounded-full bg-lp-green-2 btn-primary text-black-2 rounded-full"
                >
                  <span>Platform</span>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black-2"
                  >
                    <g id="fluent:arrow-right-20-filled">
                      <path
                        id="Vector"
                        d="M11.265 3.20501C11.1196 3.0733 10.9284 3.00381 10.7324 3.01143C10.5363 3.01905 10.3511 3.10317 10.2164 3.24575C10.0816 3.38834 10.0081 3.57804 10.0116 3.77418C10.0151 3.97032 10.0953 4.15729 10.235 4.29501L15.474 9.25001H2.75C2.55109 9.25001 2.36032 9.32902 2.21967 9.46968C2.07902 9.61033 2 9.80109 2 10C2 10.1989 2.07902 10.3897 2.21967 10.5303C2.36032 10.671 2.55109 10.75 2.75 10.75H15.476L10.235 15.707C10.161 15.774 10.1012 15.8551 10.0589 15.9456C10.0167 16.036 9.99295 16.134 9.98907 16.2337C9.9852 16.3335 10.0013 16.433 10.0364 16.5265C10.0714 16.6199 10.1248 16.7054 10.1934 16.778C10.2619 16.8505 10.3443 16.9087 10.4356 16.949C10.5269 16.9893 10.6254 17.011 10.7252 17.0127C10.825 17.0145 10.9242 16.9963 11.0168 16.9593C11.1095 16.9223 11.1939 16.8671 11.265 16.797L17.683 10.727C17.8427 10.5766 17.9481 10.3776 17.983 10.161C18.0066 10.0525 18.0059 9.94018 17.981 9.83201C17.9448 9.6189 17.8402 9.42337 17.683 9.275L11.265 3.20501Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </button>
              </a>
            </div>
            <button className="flex lg:hidden text-secondary-light">
              <svg
                className="h-6 w-6 block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div
            className="fixed top-0 inset-x-0 transition transform origin-top xl:hidden z-50"
            style={{ display: "none" }}
          >
            <div className="rounded-lg shadow-md bg-gradient-9 ring-1 ring-black ring-opacity-5 overflow-hidden pb-5">
              <div className="py-5 px-8 flex items-center justify-between">
                <a
                  aria-current="page"
                  href="/"
                  className="router-link-active router-link-exact-active"
                >
                  <img src="/logo.png" alt="" style={{ maxWidth: "200px" }} />
                </a>
                <button>
                  <svg
                    className="h-6 w-6 text-secondary-light"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-3 border-t p-5 border-black gap-3">
                <div>
                  <a
                    aria-current="page"
                    href="/"
                    className="router-link-active router-link-exact-active text-base text-secondary-light"
                  >
                    Home
                  </a>
                </div>
                <div>
                  <a
                    aria-current="page"
                    href="/#info"
                    className="router-link-active router-link-exact-active text-base text-secondary-light"
                  >
                    Flywheel
                  </a>
                </div>
                <div>
                  <a
                    aria-current="page"
                    href="/#launch-section"
                    className="router-link-active router-link-exact-active text-base text-secondary-light"
                  >
                    Earn Yield
                  </a>
                </div>
                <div>
                  <a
                    aria-current="page"
                    href="/#guide"
                    className="router-link-active router-link-exact-active text-base text-lp-green-2"
                  >
                    Platform Features
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start gap-5 px-5">
                <div className="grid grid-cols-3 gap-3 w-full">
                  <a
                    href="https://docs.peapods.finance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:col-span-1 col-span-3"
                  >
                    <button
                      type="button"
                      className="text-center rounded flex items-center justify-center gap-2 font-semibold px-3 py-1 h-9 text-sm px-3 py-2.5 text-base rounded rounded-full bg-lp-green-2 btn-primary text-black-2 rounded-full w-full"
                    >
                      <span>Documentation</span>
                    </button>
                  </a>
                  <a href="/app" className="w-full md:col-span-1 col-span-3">
                    <button
                      type="button"
                      className="text-center rounded flex items-center justify-center gap-2 font-semibold px-3 py-1 h-9 text-sm px-3 py-2.5 text-base rounded rounded-full bg-lp-green-2 btn-primary text-black-2 rounded-full w-full"
                    >
                      <span>Platform</span>
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-black-2"
                      >
                        <g id="fluent:arrow-right-20-filled">
                          <path
                            id="Vector"
                            d="M11.265 3.20501C11.1196 3.0733 10.9284 3.00381 10.7324 3.01143C10.5363 3.01905 10.3511 3.10317 10.2164 3.24575C10.0816 3.38834 10.0081 3.57804 10.0116 3.77418C10.0151 3.97032 10.0953 4.15729 10.235 4.29501L15.474 9.25001H2.75C2.55109 9.25001 2.36032 9.32902 2.21967 9.46968C2.07902 9.61033 2 9.80109 2 10C2 10.1989 2.07902 10.3897 2.21967 10.5303C2.36032 10.671 2.55109 10.75 2.75 10.75H15.476L10.235 15.707C10.161 15.774 10.1012 15.8551 10.0589 15.9456C10.0167 16.036 9.99295 16.134 9.98907 16.2337C9.9852 16.3335 10.0013 16.433 10.0364 16.5265C10.0714 16.6199 10.1248 16.7054 10.1934 16.778C10.2619 16.8505 10.3443 16.9087 10.4356 16.949C10.5269 16.9893 10.6254 17.011 10.7252 17.0127C10.825 17.0145 10.9242 16.9963 11.0168 16.9593C11.1095 16.9223 11.1939 16.8671 11.265 16.797L17.683 10.727C17.8427 10.5766 17.9481 10.3776 17.983 10.161C18.0066 10.0525 18.0059 9.94018 17.981 9.83201C17.9448 9.6189 17.8402 9.42337 17.683 9.275L11.265 3.20501Z"
                            fill="currentColor"
                          />
                        </g>
                      </svg>
                    </button>
                  </a>
                  <button
                    type="button"
                    className="text-center rounded flex items-center justify-center gap-2 font-semibold px-3 py-1 h-9 text-sm px-3 py-2.5 text-base rounded rounded-full bg-lp-green-2 btn-primary text-black-2 rounded-full w-full md:col-span-1 col-span-3"
                  >
                    <span>Connect Wallet</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
 */

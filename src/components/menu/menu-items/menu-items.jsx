import { PAGES } from "../../../utils/pages.js";

export default function MenuItems() {

  const pages = PAGES.map((item) => (
            item.id === "home" ? (
            <li key={item.id} className="logo-container">
                GPS <br /> Gluten Free
                <svg width="30%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-menu">
                  <g id="logo-main" clipPath="url(#logoclip)">
                    <path id="ellipse-main" d="M8 0C4.13401 0 1 2.33333 1 6.66667C1 11 7 16 8 16C9 16 15 11 15 6.66667C15 2.33333 11.866 0 8 0Z" fill="#E9220C"/>
                    <path id="circle-main" d="M8 1.09998C11.0185 1.09998 13.5 3.6549 13.5 6.84998C13.5 9.97838 10.8516 12.1 8 12.1C5.14837 12.1 2.5 9.97838 2.5 6.84998C2.5 3.6549 4.98147 1.09998 8 1.09998Z" stroke="white"/>
                    <g id="wheat-main">
                      <path d="M11.1706 5.99338C11.5356 6.35759 11.7495 6.87326 11.7251 7.44921C11.7007 8.02414 11.4427 8.55062 11.046 8.93226C10.9587 9.01706 10.8231 9.02016 10.7428 8.93921C10.3778 8.575 10.1639 8.05932 10.1883 7.48439C10.2127 6.90843 10.4717 6.38297 10.8673 6.00135C10.9547 5.91553 11.0903 5.91243 11.1706 5.99338Z" fill="white" stroke="#E9220C" strokeWidth="0.2"/>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="logoclip">
                      <rect width="16" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
            </li>
            ) : (
            <li key={item.id}>
                <a href={item.link}>
                    {item.id}
                    <span className="underline"></span>
                </a>
            </li>
            )
        ))

  return (
    <>  
        {pages}
    </>
  )

};

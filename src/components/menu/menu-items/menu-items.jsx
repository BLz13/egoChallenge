import { PAGES } from "../../../utils/pages.js";

export default function MenuItems() {

    console.log(PAGES);

    const pages = PAGES.map((sections , i) => (
        <>
            <li className={`section-${i}-cnt`} key={`section-${i}`}>
                <ul>
                    {sections.map((item) => (
                        <li key={item.id}>
                            <a href={item.link}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </li>
            { i<2 && <hr /> }
        </>
    ));

  return (
    <>  
        {pages}
    </>
  )

};

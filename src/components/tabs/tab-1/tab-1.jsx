import './tab-1.scss';

import Filters from "../../gallery/filters/filters";
import Gallery from "../../gallery/gallery";

export default function Tab1 () {
    return (
        <main className='tab-cnt'>
            <h1>Descubrí todos los modelos</h1>
            <Filters />
            <Gallery />
        </main>
    )
} 
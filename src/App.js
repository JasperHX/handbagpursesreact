import React from 'react';
import './App.css';
import Button from './assets/components/Button';
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import Product from './assets/components/Product.js';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';
import Tile from "./assets/components/Tile";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <button>to the collection</button>
                <button>shop all bags</button>
                <button disabled={true}>pre-orders</button>
            </nav>
            <main>
                <Product
                    image={bag_1}
                    title="The handy bag"
                    price="&euro;400,-"
                    redtitle="Best Seller"
                    />
                <Product
                    image={bag_2}
                    title="The stylish bag"
                    price="&euro;250,-"
                    redtitle="Best Seller"
                    />
                <Product
                    image={bag_3}
                    title="The simple bag"
                    price="&euro;300,-"
                    redtitle="New Collection"
                />
                <Product
                    image={bag_4}
                    title="The trendy bag"
                    price="&euro;150,-"
                    redtitle="New Collection"
                />
            </main>
            <footer>
                <Tile
                    title="the brand"
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque optio reiciendis tempora veritatis voluptas. Aliquam deleniti esse et quos voluptatum."
                    />
                <Tile
                    image={brand}

                    />
                <Tile
                    image={our_story}
                    />
                <Tile
                    title="our story"
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis doloremque error exercitationem explicabo illum libero quas quos sapiente ullam!"
                    />
            </footer>
        </>

    );
}

export default App;




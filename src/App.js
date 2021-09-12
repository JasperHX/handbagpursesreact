import React from 'react';
import './App.css';
import Button from './assets/components/Button';
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
// import Product from "./assets/components/Products";
// import Product from './Products';

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

              {/*<Product*/}
              {/*    image={bag_1}*/}
              {/*    title=""*/}
              {/*    description=""*/}
              {/*/>*/}

              <article>
                  <span>Best Seller</span>
                  <img src={bag_1} alt="tas_1" />
                  <p>The Handy bag</p>
                  <h4>&euro;400,-</h4>
              </article>
              <article>
                  <span>Best Seller</span>
                  <img src={bag_2} alt="tas_2" />
                  <p>The stylish bag</p>
                  <h4>&euro;250,-</h4>
              </article>
              <article>
                  <span>New Collection</span>
                  <img src={bag_3} alt="tas_3"/>
                  <p>The simple bag</p>
                  <h4>&euro;300,-</h4>
              </article>
              <article>
                  <span>New Collection</span>
                  <img src={bag_4} alt="tas_4"/>
                  <p>The trendy bag</p>
                  <h4>&euro;150,-</h4>
              </article>
          </main>
      </>

  );
}

export default App;




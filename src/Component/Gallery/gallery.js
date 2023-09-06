import blackforst  from '../../resources/images/blackforrest.jpg'
import cupcake from "../../resources/images/cupcake.jpg"
import barista from "../../resources/images/barista.jpg"
import menu from "../../resources/images/2023-05-25 (1).jpg"
import './gallery.css'
import { useState } from 'react';
function Gallery(){

  const [gallery,setGallery]=useState([ 
    { srcs: blackforst,
  caption: 'Black Forest'
},
{ srcs: cupcake,
caption: 'Cup Cake'
},
{ srcs: barista,
caption: 'Barista'
},
{ srcs: menu,
caption: 'Bill Folder'
},

]);

  //  setGallery([...gallery, { srcs: blackforst,
  //   caption: 'Black Forest'
  // },
  // { srcs: cupcake,
  // caption: 'Cup Cake'
  // },
  // { srcs: barista,
  // caption: 'Barista'
  // },
  // { srcs: menu,
  // caption: 'Bill Folder'
  // },])
    return(
        <div className='whole'>
        <ul className="gallery" role="list">
         { gallery.map((value, index) => { return(<li key={index}>
            <figure tabindex="0">
              <img alt="" src={value.srcs} />
              <figcaption>{value.caption}</figcaption>
            </figure>
          </li>) })
          }
          {/* <li>
            <figure tabindex="0">
              <img alt="" src={cupcake} />
              <figcaption>Cup Cake</figcaption>
            </figure>
          </li>
          <li>
            <figure tabindex="0">
              <img alt="" src={barista} />
              <figcaption>Barista</figcaption>
            </figure>
          </li>
          <li>
            <figure tabindex="0">
              <img alt="" src={menu} />
              <figcaption>Bill Folder</figcaption>
            </figure>
          </li> */}
        </ul>
        
       <ul className="gallery" role="list">
         { gallery.map((value, index) => { return(<li key={index}>
            <figure tabindex="0">
              <img alt="" src={value.srcs} />
              <figcaption>{value.caption}</figcaption>
            </figure>
          </li>) })
          }
         </ul>
         <ul className="gallery" role="list">
         { gallery.map((value, index) => { return(<li key={index}>
            <figure tabindex="0">
              <img alt="" src={value.srcs} />
              <figcaption>{value.caption}</figcaption>
            </figure>
          </li>) })
          }
         </ul>
        <ul className="gallery" role="list">
          <li>
            <figure tabindex="0">
              <img alt="" src={blackforst} />
              <figcaption>Black Forest</figcaption>
            </figure>
          </li>
          <li>
            <figure tabindex="0">
              <img alt="" src={cupcake} />
              <figcaption>Cup Cake</figcaption>
            </figure>
          </li>
          <li>
            <figure tabindex="0">
              <img alt="" src={barista} />
              <figcaption>Barista</figcaption>
            </figure>
          </li>
          <li>
            <figure tabindex="0">
              <img alt="" src={menu} />
              <figcaption>Bill Folder</figcaption>
            </figure>
          </li>
        </ul>
      </div>
    )
}

export default Gallery;
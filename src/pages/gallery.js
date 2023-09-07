import blackforst  from '../resources/images/blackforrest.jpg'
import cupcake from "../resources/images/cupcake.jpg"
import barista from "../resources/images/barista.jpg"
import cake1  from '../resources/images/cake2.jpg'
import cake2 from "../resources/images/cake3.jpg"
import cake3 from "../resources/images/cake4.jpg"
import cake4  from '../resources/images/cake5.jpg'
import cake5 from "../resources/images/cake6.jpg"
import Tirammisu from "../resources/images/teramissu.jpg"
import Tirammisu2 from "../resources/images/teramissu2.jpg"
import coffe from "../resources/images/coffee.jpg"

import menu from "../resources/images/2023-05-25 (1).jpg"
import style from '../css/gallery.module.css'
import Navigation from '../Component/Navigation';
import Footer from '../Component/footer';
import { useState } from 'react';
function Gallery(){

  const [gallery,setGallery]=useState([ 
    { srcs: menu,
      caption: 'Bill Folder'
      },
      { srcs: coffe,
        caption: 'Chocholate Coffee'
        },
    { srcs: blackforst,
  caption: 'Black Forest'
},
{ srcs: cupcake,
caption: 'Cup Cake'
},
{ srcs: cake1,
  caption: 'Cake'
  },
  { srcs: cake2,
    caption: 'Cake'
    },
    { srcs: cake3,
      caption: 'Cake'
      },
      { srcs: cake4,
        caption: 'Cake'
        },
        { srcs: cake5,
          caption: 'Strawberry Cake'
          },
          { srcs: Tirammisu,
            caption: 'Tirammisu'
            }, 
            { srcs: Tirammisu2,
              caption: 'Tirammisu'
              }, 
{ srcs: barista,
caption: 'Barista'
},


]);

    return(
        <div>

          <Navigation/>
          <div className={style['cont']}>
          <ul className={style["gallery"]} role="list">
         { gallery.map((value, index) => { return(
          <> 
         <li key={index}>
            <figure tabindex="0">
              <img alt="" src={value.srcs} />
              <figcaption>{value.caption}</figcaption>
            </figure>
          </li>
          </>
          ) })
          }
           </ul>
        
        </div>
 <Footer/>
      </div>
    )
}

export default Gallery;
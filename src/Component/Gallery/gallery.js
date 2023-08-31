import blackforst  from '../../resources/images/blackforrest.jpg'
import cupcake from "../../resources/images/cupcake.jpg"
import barista from "../../resources/images/barista.jpg"
import menu from "../../resources/images/2023-05-25 (1).jpg"
import './gallery.css'
function Gallery(){

    return(
        <div>
        <ul class="gallery" role="list">
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
        <ul class="gallery" role="list">
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
        <ul class="gallery" role="list">
          <li>
            <figure tabindex="0">
              <img alt="" src={blackforst}/>
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
        <ul class="gallery" role="list">
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
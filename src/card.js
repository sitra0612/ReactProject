import './App.css';
function Card(){
    return(
        <section>
            <h2>Responsive Column Cards</h2>
<p>Resize the browser window to see the effect.</p>

<div class="row">
  <div class="column">
    <div class="card">
      <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Card 2</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 3</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 4</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
</div>
        </section>
    )
}


export default Card;
import './contact.css';
function Contact(){

    return(

        <div class="container">
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="topic">Address</div>
              <div class="text-one">Dire Dawa, Eshet</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt"></i>
              <div class="topic">Phone</div>
              <div class="text-one">+251 ------</div>
            </div>
            <div class="email details">
              <i class="fas fa-envelope"></i>
              <div class="topic">Email</div>
              <div class="text-one">------@gmail.com</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Send us a message</div>
            <p>If you have any appreciation or compliance, you can send us message from here. It's our pleasure to help you.</p>
          <form action="#">
            <div class="input-box">
              <input type="text" placeholder="Enter your name"/>
            </div>
            <div class="input-box">
              <input type="text" placeholder="Enter your email"/>
            </div>
            <div class="input-box message-box"> 
              <input type="text" placeholder="Enter your message"/>
            </div>
            <div class="button">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
        </div>
      </div> 
    )
}

export default Contact;
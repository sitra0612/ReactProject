
import styles from '../css/contact.module.css';
import '../css/contact.module.css';
import Navigation from '../Component/Navigation';
import Footer from '../Component/footer';
import { NavLink } from 'react-router-dom';
import {useState} from 'react';

function Contact() {
  const[name,updateName]=useState("");
  const [email,updateEmail]=useState("");
  const [message,updateMessage]=useState("");
  function upDateN(n){
     updateName(n.target.value);
  }
  function upDateE(e){
    updateEmail(e.target.value);
 }
 function upDateM(m){
  updateMessage(m.target.value);
}
  function submit(e){
    if(name!="" && e.target.value){
       alert(name + " ,your request is submitted successfully!");
       updateName("");
       updateEmail("");
       updateMessage("");
    }
    else{
      alert("You did not submit the request!");
    }
  }
  return (
    <>
      <Navigation/>
      <div>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <div className={styles["left-side"]}>
            <div className={styles["details"]}>
              <i className="fas fa-map-marker-alt"></i>
              <div className={styles["topic"]}>Address</div>
              <div className={styles["text-one"]}>Dire Dawa, Eshet</div>
            </div>
              <div className={styles["details"]}>
              <i className="fas fa-phone-alt"></i>
              <div className={styles["topic"]}>Phone</div>
              <div className={styles["text-one"]}>+251 ------</div>
            </div>
            <div className={styles["details"]}>
              <i className="fas fa-envelope"></i>
              <div className={styles["topic"]}>Email</div>
              <div className={styles["text-one"]}>------@gmail.com</div>
            </div>
          </div>
          <div className={styles["right-side"]}>
            <div className={styles["topic-text"]}>Send us a message</div>
            <p>
              If you have any appreciation or compliance, you can send us
              message from here. It's our pleasure to help you.
            </p>
            <form action="#">
              <div className={styles["input-box"]}>
                <input type="text" placeholder="Enter your name"  onChange={upDateN} value={name} />
              </div>
              <div className={styles["input-box"]}>
                <input type="text" placeholder="Enter your email" onChange={upDateE} value={email} />
              </div>
              <div className={styles["message-box"]}>
                <textarea type="text" placeholder="Enter your message" onChange={upDateM} value={message} />
              </div>
                <div className={styles["button"]}>
                <input type="button" value="Send Now"  onClick={submit}/>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
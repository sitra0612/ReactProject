import styles from './contact.module.css';
function Contact() {
  return (
    <div>
      
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <div className={styles["left-side"]}>
            <div className={styles["address details"]}>
              <i className={styles["fas fa-map-marker-alt"]}></i>
              <div className={styles["topic"]}>Address</div>
              <div className={styles["text-one"]}>Dire Dawa, Eshet</div>
            </div>
              <div className={styles["phone details"]}>
              <i className={styles["fas fa-phone-alt"]}></i>
              <div className={styles["topic"]}>Phone</div>
              <div className={styles["text-one"]}>+251 ------</div>
            </div>
            <div className={styles["email details"]}>
              <i className={styles["fas fa-envelope"]}></i>
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
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className={styles["input-box"]}>
                <input type="text" placeholder="Enter your email" />
              </div>
                <div className={styles["input-box"]}>
                <input type="text" placeholder="Enter your message" />
              </div>
                <div className={styles["button"]}>
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
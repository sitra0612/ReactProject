import styles from "./about.module.css";
import coffee from '../../resources/images/coffee.jpg'
import user1 from '../../resources/images/download (1).jpg'
import user2 from '../../resources/images/download (2).jpg'
import user3 from '../../resources/images/download.jpg'
function About(){

    return(
        <>

 <section className={styles.about}>
		<h1>About Us</h1>
		<p style={{fontWeight:'bold'}}>Chocolate Café is a leading Cafe...</p>
		<div className={styles['about-info']}>
			<div className={styles['about-img']}>
				<img src={coffee} alt="Coffee"/>
			</div>
			<div>
	<p>Welcome to our coffee and cake cafeteria! We are a family-owned business that has been serving delicious treats to our community for over 7 years. Our goal is to provide a cozy and welcoming atmosphere where you can enjoy a cup of coffee and a slice of cake with friends and family.

        Our team is passionate about coffee and baking, and we use only the finest ingredients to create our mouth-watering cakes and pastries. Whether you're in the mood for a classic chocolate cake or something more unique like our lavender honey cake, we have something for everyone.
        
        We believe in supporting local businesses and farmers, which is why we source our coffee beans from a nearby roaster and use seasonal produce in our baked goods whenever possible.
        
        At our cafeteria, we strive to create a warm and friendly environment where you can relax and unwind. We have comfortable seating areas both inside and outside, and we welcome you to bring your furry friends to our dog-friendly patio.
        
        Thank you for choosing us as your go-to spot for coffee and cake. We look forward to seeing you soon!</p>
				<button>Read More...</button>
			</div>
		</div>
	</section>

	<section className={styles.team}>
		<h1>Meet Our Team</h1>
		<div class={styles['team-cards']}>
			{/* <!-- Cards here --> */}
			{/* <!-- Card 1 --> */}
			<div className={styles.card}>
				<div className={styles['card-img']}>
					<img src={user1} alt="User 1"/>
				</div>
				<div className={styles['card-info']}>
					<h2 className={styles['card-name']}>Abel</h2>
					<p className={styles['card-role']}>Barista</p>
					<p className={styles['card-email']}>abel123@gmail.com</p>
					<p><button className={styles.button}>Contact</button></p>
				</div>
			</div>

			{/* <!-- Card 2 --> */}
			<div className={styles.card}>
				<div className={styles['card-img']}>
					<img src={user2} alt="User 2"/>
				</div>
				<div className={styles['card-info']}>
					<h2 className={styles['card-name']}>Almaz</h2>
					<p className={styles['card-role']}>cafeteria assistant</p>
					<p className={styles['card-email']}>almaz23@gmail.com</p>
					<p><button className={styles.button}>Contact</button></p>
				</div>
			</div>
			{/* <!-- Card 3 --> */}
			<div className={styles.card}>
				<div className={styles['card-img']}>
					<img src={user3} alt="User 3"/>
				</div>
				<div className={styles['card-info']}>
					<h2 className={styles['card-name']}>Yonas</h2>
					<p className={styles['card-role']}>service worker</p>
					<p className={styles['card-email']}>yoni12@gmail.com</p>
					<p><button className={styles.button}>Contact</button></p>
				</div>
			</div>
		</div>
	</section>
        </>
    )
}

export default About;
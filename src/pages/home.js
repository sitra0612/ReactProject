import style from '../css/home.module.css';
import Navigation from '../Component/Navigation';
import Footer from '../Component/footer';
function Home(){

    return(
<>
<Navigation/>
    <div className={style["content"]}>
            <h2>Chocolate cafe</h2>
            <p>Would you like to start the day with a nice coffee?</p>
    </div>
<Footer/>
</>
    )
}

export default Home;
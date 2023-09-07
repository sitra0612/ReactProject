
import About from "./pages/about";
import Home from './pages/home';
import Contact from './pages/contact';
import Gallery from './pages/gallery'
import NameDisplay from './NameDisplay';
import styles from "./css/about.module.css";
import user2 from "./resources/images/download (2).jpg"
import {useState} from 'react';
import './App.css';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
function App() {
  // let name=[
  //   {
  //     id:1,
  //     name: "john",
  //     age :12,
  //   },
  //   {
  //     id:2,
  //     name: "john",
  //     age :12,
  //   },
  //   {
  //     id:3,
  //     name: "john",
  //     age :12,
  //   },
  // ]

 
  const [number, setNumber]=useState(2);
  const [name, setName]=useState("");
  const [age, setAge]=useState(0);
  const [comment, updateComment]=useState([]);
  const [ipt, upDateInput]= useState('');
  const [like, setLike]=useState(0);
  const [rep, setRep]=useState("");

 

    function handle(){
    setNumber( number *2)
    
  }
  function updateName(p){
    setName(p.target.value);
    
  }
  function updateAge(a){
    setAge(a.target.value);
    
  }
  function display(){
   alert ('Welcome'+" " + name +
        "   you are  " + age +" years old"
    
   );
   
  }
  function updateIpt(i){
     upDateInput(i.target.value);
  }
   function addComment(e){
    updateComment( [...comment , ipt]);
    upDateInput("");
}
  
  function likes(){
   setLike(like+1);
  }

  function reply(r){
    setRep(r.target.value);
    console.log(rep);
  }

  return (
   <div >
    {/* <Navigation/>
    <About/>
    <Footer/> */}
  
    <BrowserRouter>
     <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/gallery" element={<Gallery />}/>

     </Routes>
   </BrowserRouter>

    {/* {
       name.map((val,idx)=>{
        return (<NameDisplay name={val.name} age={val.age} key={idx}/>
        
        )
       })
    } */}

{/* 
  <h2>Name:</h2><br/>
  <input type='text' onChange={updateName}/><br/>
  <h2>Age :</h2><br/>
  <input type='number'  onChange={updateAge}/><br/>
  <button onClick={display}>Display</button> */}
 
  {/* <div>
    {
      comment.length <=0 ?  (<h3>No comments</h3>) :
      //  (  comment.map((val,idx)=>{
    //   return(<h3 key={idx}>{val}</h3>)
    // }))

    comment.map((val,idx)=>{
        return( < >
        <div class={styles['team-cards']}>
          <div className={styles.card} key={idx}>
          <div className={styles['card-img']} key={idx}>
            <img src={user2} alt="User 2" key={idx} />
          </div>
          <div className={styles['card-info']} key={idx}>
          <h2 className={styles['card-name']} key={idx}>{name}</h2>
            <p className={styles['card-role']} >{'Comment: '}{ val}</p>

            <p className={styles['card-email']} >{like}  <button onClick={likes} >Like</button></p>  
           
          </div>
        </div>
        </div>
      </> )
      })


  }
  </div> */}

   {/* <label>Add Comment:</label> 
  <input type='text' onChange={updateIpt} value={ipt}/>
  <button onClick={addComment}>POST</button>
  <input type='text'  />
 
  <button className={styles.button} onClick={reply}>reply</button>
 <p>{"Reply: "}{rep}</p> */}
    </div>
  );
}

export default App;

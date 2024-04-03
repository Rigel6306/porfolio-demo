import myImg from '../images/my2.jpg'
import fb from '../images/facebook.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import bck1 from '../images/bck11.png'
const Home = () => {
    const text = ``
    return (
    <div className="homeContainer">
  
        
    <img className='bckImg' id='bckImg' src={bck1} alt="" height='280' width='315' />
        <div className="Home">
            <div className="intro">
                <h1 data-text="Hello... I am Charitha Iravana Jayabahu">Hello... I am Charitha Iravana </h1>
                <h3>Fullstack Developer</h3>
                <hr /><br />

                    <p>I am an experienced self taught MERN stack developer having high motivation to climb, the top of the ladder in the industry.
                     My passsion for knwoladge seeking does not limited to the  MERN technologies. But going deep down to the backend development  and
                    learn new technlogies keeps me alive.
                    Most of all, I am a friendly and matured individual  who is able to stick with a group of people and work well co-operated </p>
            </div>

            <div className="myImage">
                <img className='homeImg' src={myImg} alt="myimage" width={250} height={250} />
            </div>
        </div>

        <div className="appIcons">
            <a href="https://web.facebook.com/charitha.jayabahu/"><img src={fb} height={30} width={30} /></a> 
            <a href="https://www.linkedin.com/in//"><img src={linkedin} height={30} width={30} /></a> 
            <a href="https://web.github.com/"><img src={github} height={30} width={30} /></a> 
        </div>
    </div>
    );
}

export default Home;
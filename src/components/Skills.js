import js from '../images/js.png'
import reactImg from '../images/react.svg'
import nodeImg from '../images/nodeImg.svg'
import mongoImg from '../images/mongo.png'
const Skills = () => {

   

    return (<div className="skills">
        <h1 className="pageHead">My Skills</h1>
        <div className="skillContainer">
            <div className="skillCard">
                <div className="imgbox"><img src={js} width={150} height={150} alt="" /></div>
                 <div className="content">
                    <h1>Java Script</h1>
                    <p>Profound knowladge in javascript including Promises,Callbacks,Async and Await, Error handling, DOM manipulation etc  </p>
                    <div className="skillProgress">
                        <div className="skillBar" id='skill1'> 90%</div>
                    </div>
                </div>
            </div>
            <div className="skillCard">
                <div className="imgbox">
                    <img src={nodeImg} width={150} height={150} alt="" />
                </div>
                <div className="content">
                    <h1>Node Js</h1>
                    <p> Good knowladge in Back-End Development using NodeJs Including Express framework,JWT Authentication, Package management, source controll etc </p>
                    <div className="skillProgress">
                        <div className="skillBar " id='skill2'> 80%</div>
                    </div>
                </div>
            </div>

            <div className="skillCard">
                <div className="imgbox">
                    <img src={reactImg} width={150} height={150} alt="" />
                </div>
                <div className="content">
                    <h1>React/Redux</h1>
                    <p>Excellent Knowladge in React framework and redux library. deep understanding about both the functional and class based components building, reusing, routing, performence etc</p>
                    <div className="skillProgress">
                        <div className="skillBar" id='skill3'> 80%</div>
                    </div>
                </div>
            </div>

            <div className="skillCard">
                <div className="imgbox">
                    <img src={mongoImg} width={150} height={150} alt="" />
                </div>
                <div className="content">
                    <h1>Mongo DB</h1>
                    <p>Hands on knowladge in MongoDB with complex query writing, good understanding about collections, JSON, Indexing, Embedding and Linking </p>
                    <div className="skillProgress">
                        <div className="skillBar" id='skill4'> 70%</div>
                    </div>
                </div>
            </div>


        </div>
    </div>);
}

export default Skills;
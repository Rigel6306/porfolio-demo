import {useState,useEffect} from 'react';
import emailjs from '@emailjs/browser'
// require('dotenv').config();
const Contact = () => {

    const [contactForm,setContactForm]= useState ({
        name:'',
        email:'',
        mobile:'',
        message:''
    })

    const handleSubmit = (e)=>{
             e.preventDefault();
                console.log('submit event fired', contactForm)
                emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID,'.cForm',process.env.REACT_APP_PUBLIC_KEY)
                setContactForm({name:'',mobile:'',email:'',message:''})
    }
        
    return ( <div className="contacts">
        <h1 className="pageHead">Contacts</h1>
          <div className="contactContainer">
               <div className="contactsCard">
                <h4 className="contactsHeading">Contact Me</h4>
                <div className="contactInfo">
                    <table className="myContacts">
                        <tbody>
                            <tr>
                                <th>Address </th>
                                <td>No21, PoliceKanda, Diyatalawa.</td>
                            </tr>
                            <tr>
                                <th>E- Mail </th>
                                <td>charitha1@live.com</td>
                            </tr>
                            <tr>
                                <th>Mobile</th>
                                <td>+94 77 3700 779</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
               </div>
               <div className="contactForm">
                        <form className='cForm' onSubmit={handleSubmit}>
                        <table className="contactTable">
                        
                                <tbody>
                                    <tr>
                                        <td><label htmlFor="name" >Your Name</label></td>
                                        <td><input type="text" name="name" value={contactForm.name} onChange={(e)=>{setContactForm({...contactForm,name:e.target.value})}} id="name"placeholder="Enter Your Name" required/></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="number"> Your Contact Number</label></td>
                                        <td><input type="tel" name="number" autoComplete="false" value={contactForm.number} onChange={(e)=>setContactForm({...contactForm,mobile:e.target.value})} id="number" placeholder="Enter Your Mobile Number" maxLength={16} pattern="[0-9]{10}" required/></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="number"> Your Email Address</label></td>
                                        <td><input type="email" value={contactForm.email} onChange={(e)=>setContactForm({...contactForm,email:e.target.value})} name="email" placeholder="Enter Your E-Mail" id="email" required/></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="message"> Your Message</label></td>
                                        <td><textarea name="message" id="message" value={contactForm.message} onChange={(e)=>setContactForm({...contactForm,message:e.target.value})} cols="21" placeholder="Enter Your Message Here" rows="5" required></textarea></td>
                                    </tr>

                                      
                                </tbody>
                        </table>
                        <button type='submit' className="submit" >Submit</button>
                        </form>
               </div>
            </div>

    </div> );
}
 
export default Contact;
import { useEffect } from "react";
import "./contact.scss";
import {FaHandshake} from "react-icons/fa";


export default function Contact({progress, setProgress}) {

  useEffect(()=>{
    console.log("i am from contact");
    setProgress(100);
  },[setProgress, progress]);

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contactIcon"><FaHandshake/></div>
        <h3>Get in touch today!</h3>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p> */}
        <form
          className="formContainer"
          action="https://formspree.io/f/xdoragno"
          method="POST"
        >
          <div className="formElements">
            <div className="formRow">
              <label className="contactLabel" htmlFor="Name">
              Name<span className="impMark">*</span>
              </label>
              <input className="contactInput" type="text" name="Name" required/>
            </div>

            <div className="formRow">
              <label className="contactLabel" htmlFor="Subject ">
                Subject<span className="impMark">*</span>
              </label>
              <input className="contactInput" type="text" name="Subject " required/>
            </div>

            <div className="formRow">
              <label className="contactLabel" htmlFor="Work Mail">
                Work Mail<span className="impMark">*</span>
              </label>
              <input className="contactInput" type="email" name="Work Mail" required/>
            </div>

            <div className="formRow">
              <label className="contactLabel" htmlFor="name">
                Message<span className="impMark">*</span>
              </label>
              <textarea className="contactMessage" rows="4" name="name" placeholder="Type Your Message here" required/>
            </div>

            <div className="form-btn">
              <button>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

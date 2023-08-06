import "./contact.scss";
import {FaHandshake} from "react-icons/fa"

export default function Contact() {
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
              <input className="contactInput" type="text" name="Name" />
            </div>

            <div className="formRow">
              <label className="contactLabel" htmlFor="Subject ">
                Subject<span className="impMark">*</span>
              </label>
              <input className="contactInput" type="text" name="Subject " />
            </div>

            <div className="formRow">
              <label className="contactLabel" htmlFor="Work Mail">
                Work Mail<span className="impMark">*</span>
              </label>
              <input className="contactInput" type="email" name="Work Mail" />
            </div>

            <div className="formRow">
              <label className="contactLabel" htmlFor="name">
                Message<span className="impMark">*</span>
              </label>
              <textarea className="contactMessage" rows="4" name="name" placeholder="Type Your Message here" />
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

import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <h3>Get in touch today!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <form className="formContainer" action="https://formspree.io/f/xdoragno" method="POST">
      
          <label htmlFor="Name">Name</label>
          <div>
            <input type="text" name="Name" />
          </div>
          <label htmlFor="Subject ">Subject</label>
          <div>
            <input type="text" name="Subject " />
          </div>
          <label htmlFor="Work Mail">Work Mail</label>
          <div>
            <input type="email" name="Work Mail" />
          </div>
          <label htmlFor="name">Message</label>
          <div>
            <textarea name="name" placeholder="Type Your Message here" />
          </div>

          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

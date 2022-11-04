import "./App.css";



function Contact() {
  return (
    <div className="container">
      <form>
        <input id="first_name" placeholder="First name"/>
        <input id="last_name" placeholder="Last name"/>
        <input id="message" />
        <button id="btn_submit">submit</button>
      </form>
    </div>
  );
}

export default Contact;

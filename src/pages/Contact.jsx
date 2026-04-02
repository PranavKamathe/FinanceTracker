function Contact(){

  return(

    <div style={{padding:"40px"}}>

      <h1>Contact Us</h1>

      <p>We would love to hear from you.</p>

      <form style={{marginTop:"20px"}}>

        <input placeholder="Enter your Name" /><br/><br/>

        <input placeholder="Enter your Email" /><br/><br/>

        <input placeholder="Contact Number" /><br/><br/>

        <textarea placeholder="Your Message"></textarea><br/><br/>

        <button>Send Message</button>

      </form>

      <h3 style={{marginTop:"30px"}}>Company Information</h3>

      <ul>
        <li>Company: Finance Tracker Pvt Ltd</li>
        <li>Location: Pune, India</li>
        <li>Email: support@financetracker.com</li>
        <li>Helps users manage financial data easily</li>
      </ul>

    </div>

  )

}

export default Contact
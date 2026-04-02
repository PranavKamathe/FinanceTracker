function Profile(){

  const role = "Viewer"

  return(

    <div style={{padding:"40px"}}>

      <h1>User Profile</h1>

      <div style={{marginTop:"20px"}}>

        <p><b>Name:</b> Pranav Kamathe</p>

        <p><b>Email:</b> pranavkamathe198@gmail.com</p>

        <p><b>Role:</b> {role}</p>

        <p><b>Location:</b> Pune, Maharashtra</p>

        <p><b>Interest:</b> Software Engineering & Web Development</p>

      </div>

    </div>

  )

}

export default Profile
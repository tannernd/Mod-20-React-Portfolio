const styles = {
    imageCropper: {
        width: "200px",
        height: "200px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "50%",
        border:"5px solid black"
      },      
      img: {
        display: "inline",
        margin: "0 -60px",
        height: "100%",
        width: "auto"
      }
  };

function AboutPage() {
    return (
    <div className="container-fluid mb-3">
        <div className="row">
            <h1>
                About Me
            </h1>
        </div>
        <div className="row">
            <div className="col-md-3 d-flex justify-content-center">
                <div style={styles.imageCropper}>
                    <img style={styles.img} src="/images/IMG_0243.JPG" /> 
                </div>  
            </div>
            <div className="col-md-9">
                <p>Passionate software engineer with a knack for turning ideas into innovative solutions. I thrive in the dynamic world of technology, where problem-solving and creativity meet. With a strong foundation in computer science and years of hands-on experience, Some of my specific skills include: Node.js, React.js, Express.js, JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, Handlebars, jQuery, PHP, Bootstrap, Databases (Oracle, MySQL) and experience in other programming languages, frameworks, and npm packages.</p>
                <p>I've had the privilege of working on diverse projects, from developing web applications to creating anywhere, anytime applications regardless of internet connectivity. I'm dedicated to staying at the forefront of emerging technologies and methodologies, ensuring that I can deliver cutting-edge solutions for every challenge that comes my way. </p>
                <p>Collaboration, communication, and a commitment to excellence are at the core of my work ethos. Let's connect and explore how we can drive positive change together in the ever-evolving realm of software development.</p>
            </div>
        </div>
    </div>
    )
}

export default AboutPage;
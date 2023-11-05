import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



function Project({projects}) {
    const [isShown, setIsShown] = useState(false);
    const [isHover, setIsHover] = useState(false);

    
    const styles = {
        overlay: {
            position:"absolute",
            top:"10px",
            left:"20px",
            maxWidth:"180px"
        },
        imgFade:{
            opacity: isHover ? "0.2" : "1",
            border:"2px solid black"
        }
    };
    
    const handleMouseEnter = () => {
        setIsHover(true);
        setIsShown(true);
     };
     const handleMouseLeave = () => {
        setIsHover(false);
        setIsShown(false);
     };
    return (
        <div className="col m-3 position-relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <img style={styles.imgFade} src={projects.image}             
            />
            {isShown && (
         <div>
            <span style={styles.overlay} ><a href={projects.deployed} target='_blank'><h5 className='d-inline me-3'>{projects.name}</h5></a>
            <a style={{color:"black"}}href={projects.github} target='_blank'><FontAwesomeIcon icon={faGithub} size="2x" /></a></span>
        </div>
      )}           
        </div>
    )
}

export default Project; 
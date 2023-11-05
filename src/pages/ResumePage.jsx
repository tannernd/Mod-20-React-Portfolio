import NateResume from '../../src/assets/files/Nate_Tanner_Resume_20231004.pdf';
import Header from '../components/Resume/Header';
import Experience from '../components/Resume/Experience';
import Education from '../components/Resume/Education';
import Resume from '../../src/assets/data/resume.json';

export default function ResumePage() {
    return (
        <div className="container-fluid mb-3">
            <h1>Resume</h1>
            <p>Download <a href={NateResume} download="NateResume" target='_blank'>Nate's Resume Here</a></p>
            <div className='mx-5'>
                <Header header={Resume.header} />
                <Experience experience={Resume.experience} /> 
                <Education education={Resume.education} />                
            </div>
        </div>
    )
}
import Project from '../components/Project';
import Projects from '../assets/data/projects.json';

export default function PortfolioPage() {
    return (
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
            {Projects.projects.map((projects, index)=>{
                return (
                    <div key={index}>
                    <Project projects={projects}/>
                    </div>
                )
            })}
        </div>
    )
}
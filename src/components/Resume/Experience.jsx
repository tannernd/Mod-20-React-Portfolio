function Experience({experience}) {
    return (
        <div>
            <h3 className="text-center">Experience</h3>
            {experience.map((experience, index) => {
                return (
                    <div key={index}>
                        <div className="row row-cols-1 row-cols-sm-2">
                        <div className='col'>
                        <h5 key={index}>{experience.company}, {experience.location}</h5>
                        </div>
                        <div className='col text-end'>
                        <h5 key={index}>{experience.dates}</h5>
                        </div>
                        </div>
                        {experience.roles.map( (roles, index) =>{
                            return (
                                <div key={index}>
                                <p>{roles.title}</p>
                                <ul>
                                {roles.duties.map( (duties, index) =>{
                                    return (
                                        <li key={index}>{duties}</li>
                                    )
                                })}                                    
                                </ul>
                                </div>
                            )
                        } )}                        
                    </div>
                )
            })}           
        </div>
    )
}

export default Experience;
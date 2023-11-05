function ResumeHeader({header}) {
    return (
        <div>
            <h1 className="text-center">{header.name}</h1>
            <h4 className="text-center">{header.title}</h4>
            <p className="text-center">Phone: {header.phone} | Email: {header.email} | {header.location}</p>
            <h3 className="text-center">Professional Summary</h3>
                <p>{header.summary}</p>
                <h3 className="text-center">Technical Skills</h3>
                <p>{header.skills}</p>
                
        </div>   
    )
}

export default ResumeHeader;
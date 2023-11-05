function Education({education}) {
    return (
        <div>
            <h3 className="text-center">Education</h3>
            {education.map((education, index) => {
                return (
                    <div key={index}>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                        <div className="col fw-bold">{education.degree}</div>
                        <div className="col">{education.school}, {education.location}</div>
                        <div className="col text-end">{education.graduated}</div>
                    </div>
                    <hr className="d-block d-sm-block d-md-block d-lg-none"></hr>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Education;
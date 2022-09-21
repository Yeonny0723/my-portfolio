const TimeLine = ({date, title, content}) => {
    return (
        <li className="timeline-item">
            <div className="timeline-info">
                <p style={{fontSize: "0.7rem"}}>{date}</p>
            </div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
                <h5 className="timeline-title">{title}</h5>
                <span>{content}</span>
            </div>
        </li>
    )
}

export default TimeLine
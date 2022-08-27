const TimeLine = ({date, title, content}) => {
    return (
        <li className="timeline-item">
            <div className="timeline-info">
                <span>{date}</span>
            </div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
                <h3 className="timeline-title">{title}</h3>
                <span>{content}</span>
            </div>
        </li>
    )
}

export default TimeLine
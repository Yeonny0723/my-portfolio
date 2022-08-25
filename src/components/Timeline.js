const TimeLine = ({date, title, content}) => {
    return (
        <li class="timeline-item">
            <div class="timeline-info">
                <span>{date}</span>
            </div>
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <h3 class="timeline-title">{title}</h3>
                <p>{content}</p>
            </div>
        </li>
    )
}

export default TimeLine
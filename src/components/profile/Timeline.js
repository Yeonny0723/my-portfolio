import styled from "styled-components";
import { TEXT_PINK, INACTIVE } from "../styles/Variables";

const TimeLine = ({ data }) => {
  return (
    <>
      {data.map((exp, idx) => {
        const { date, title, contents } = exp;
        return (
          <TimelineItemStyle key={idx}>
            <div className="timeline-info">
              <small>{date}</small>
            </div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h5 className="timeline-title">{title}</h5>
              <ul>
                {contents.length === 1
                  ? contents
                  : contents.map((content, idx) => (
                      <li key={idx}>
                        <span>{content}</span>
                      </li>
                    ))}
              </ul>
            </div>
          </TimelineItemStyle>
        );
      })}
    </>
  );
};

const TimelineItemStyle = styled.div`
  padding-left: 4vw;
  position: relative;
  padding-bottom: 1.5vh;
  & > div {
    margin-bottom: 1.2vh;
  }
  &:hover .timeline-marker:before {
    background: transparent;
    border: 3px solid ${TEXT_PINK};
  }
  .timeline-marker:before {
    width: min(1.2vh, 15px);
    height: min(1.2vh, 15px);
    background: ${TEXT_PINK};
    border: 3px solid transparent;
    border-radius: 100%;
    content: "";
    display: block;
    position: absolute;
    top: 4px;
    left: 0;
    transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
  }
  .timeline-marker:after {
    content: "";
    width: 1px;
    background: ${INACTIVE};
    display: block;
    position: absolute;
    top: 36px;
    bottom: 15px;
    left: min(1vh, 9px);
  }
  .timeline-content {
    li {
      line-height: 1.3;
    }
  }
`;

export default TimeLine;

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Michigan
          </h3>
          <p> Bachelor of Engineering Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022-2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Internship - Riot Games
          </h3>

          <p>
          Developed and deployed an extensible system and framework that automatically monitors Riot’s environments for out-of-compliance items in the cyber security space with Golang, React, Javascript and SQL.
          </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022-2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stach Engineer - M3 Lab Univ. Michigan
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ann Arbor, MI
          </h4>
          <p>Developed Morality Multiplayers Games for psychological study in Typescript, Python, SQL, Firebase, AWS</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Incoming Software Engineer Internship - ITS
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ann Arbor, MI
          </h4>
          <p>
            Will join software internship program this summer in Information Technology and Servive
            Department in WeMoAd team and develop cool stuff in Angular, Flask, Django, AWS, Kubernetes, etc.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;

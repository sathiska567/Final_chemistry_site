// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ClassDetails.css";
import timeLineElements from "./Details.js";
import "react-vertical-timeline-component/style.min.css";
import time from "../../../public/time.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function ClassDetails() {
  return (
    <>
      <div className="ClassDetails_main_div">
        <h1 className="classesTitle">
          <span className="FirstLetterEffect">C</span>lass Details
        </h1>
        <div className="col-sm-12">
          <br />
          <br />
          <VerticalTimeline className="VerticalTimeline ClassDetails_VerticalTimeline">
            {timeLineElements.map((element) => {
              return (
                <VerticalTimelineElement
                  className="VerticalTimelineElement"
                  key={element.key}
                  date={element.date}
                  icon={
                    <img
                      className="time"
                      src={time}
                      style={{ width: "50px" }}
                    />
                  }
                >
                  <h5 className="verticale-timeline-elements-subtitle">
                    {element.date}
                  </h5>

                  <p className="description">{element.description}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>

        {/* <div className="col-sm-1">
            <img src={sideImage}  />
          </div> */}
      </div>
    </>
  );
}

import React from 'react'
import './ClassDetails.css'
import timeLineElements from './Details.js'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
// import EventNoteIcon from '@mui/icons-material/EventNote';
import location from '../../assets/img/location.svg'


export default function ClassDetails() {

  return (

    <>
        
      <div className="ClassDetails_main_div">
      
        <div className="row">
          <h1 className='ClassDetails_main_div_header'>Class Details</h1>
          <div className="col-sm-12">
            <br /><br /><VerticalTimeline className="VerticalTimeline ClassDetails_VerticalTimeline">
              {
                timeLineElements.map(element => {

                  return (
                    <VerticalTimelineElement
                      className="VerticalTimelineElement"
                      key={element.key}
                      date={element.date}
                      iconStyle={{backgroundColor:"red"}}
                      icon={<img src={location} style={{paddingLeft:"10px",width:"50px"}} />}
                      
                    >


                      <h5 className="verticale-timeline-elements-subtitle">{element.date}</h5>

                      <p className="description">{element.description}</p>


                    </VerticalTimelineElement>
                  )
                })
              }
            </VerticalTimeline>
          </div>

          {/* <div className="col-sm-1">
            <img src={sideImage}  />
          </div> */}
        </div>



      </div>


    </>

  )
}

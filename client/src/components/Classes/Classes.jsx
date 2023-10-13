/* eslint-disable no-unused-vars */
import React from 'react';
import classModule from '../Classes/Classes.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Classes = () => {
  return (
    <div>
      <div className={classModule.trapezoidClasses}>
        <h1 className={classModule.classesTitle}><span className={classModule.FirstLetterEffect}>C</span>lasses</h1>
        <div className={classModule.CardContainer}>
          <div>
            <Card className={classModule.classesVideoCard}>
              <Card.Img variant="top" className={classModule.cardImage} src="../../../public/zoom.png" />
              <Card.Body>
                <Card.Title className={classModule.CardContainerTitle}>Live Classes</Card.Title>
                <Card.Text className={classModule.CardContainerText}>
                  Click below button to attend to the class
                </Card.Text>
                <Button variant="primary" className={classModule.CardContainerButton}>Zoom Link</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className={classModule.classesVideoCard}>
              <Card.Img variant="top" className={classModule.cardImage} src="../../../public/reco.svg" />
              <Card.Body>
                <Card.Title className={classModule.CardContainerTitle}>Recordings</Card.Title>
                <Card.Text className={classModule.CardContainerText}>
                  Click below button to open recordings
                </Card.Text>
                <Button variant="primary" className={classModule.CardContainerButton}>Open Recordings</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

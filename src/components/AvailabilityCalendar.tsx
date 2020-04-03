import React, { Component } from 'react';
import {  IonGrid, IonRow, IonCol} from '@ionic/react';
import Calendar from 'react-calendar';
import './AvailabilityCalendar.css';
import TimeSlot from './TimeSlot';

class AvailabilityCalendar extends Component {
constructor(props: Date){
  super(props);
  this.state={
    date: new Date(),
  }

}

  render() {
    return (

      <div className="calendarContainer">
      <Calendar/>
        <div className="header">
          <h1>Choose your preferred availability</h1>
        </div>

        <div className="key">
          <span className='preferredTimeColor'> preferred</span>
          <span className='secondaryTimeColor'> rather not</span>
          <span className='notAvailableTimeColor'> not available</span>
        </div>



        <IonGrid>
          <IonRow>
            <IonCol>
              <div>
                DAY
              </div>
            </IonCol>
            <IonCol>
              <div>
                TIME
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div>
                Monday
              </div>
            </IonCol>
            <IonCol>
              <div>
                <TimeSlot/>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div>
                Tuesday
              </div>
            </IonCol>
            <IonCol>
              <div>
                <TimeSlot/>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div>
                Wednesday
              </div>
            </IonCol>
            <IonCol>
              <div>
                <TimeSlot/>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div>
                Thursday
              </div>
            </IonCol>
            <IonCol>
              <div>
                <TimeSlot/>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div>
                Friday
              </div>
            </IonCol>
            <IonCol>
              <div>
                <TimeSlot/>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div>
                Saturday
              </div>
            </IonCol>
            <IonCol>
              <div>
                <TimeSlot/>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div>
                Sunday
              </div>
            </IonCol>
            <IonCol>
              <div>
                <TimeSlot/>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

      </div>

    );
  };
  }




export default AvailabilityCalendar;

import React, { Component } from 'react';
import { IonContent, IonIcon} from '@ionic/react';
import Calendar from 'react-calendar';
import './AvailabilityCalendar.css';
import { tabletPortraitOutline } from 'ionicons/icons';


class TimeSlot extends Component {




  render() {
    return (
      <div>
      <IonContent scrollEvents={true} scrollX={true}>
        <IonIcon icon={tabletPortraitOutline} />
        <IonIcon icon={tabletPortraitOutline}/>
        <IonIcon icon={tabletPortraitOutline}/>
        <IonIcon icon={tabletPortraitOutline}/>
        <IonIcon icon={tabletPortraitOutline}/>
        <IonIcon icon={tabletPortraitOutline}/>
        <IonIcon icon={tabletPortraitOutline}/>
        <IonIcon icon={tabletPortraitOutline}/>
        <IonIcon icon={tabletPortraitOutline}/>
        <IonIcon icon={tabletPortraitOutline}/>
        <IonIcon icon={tabletPortraitOutline}/>
        </IonContent>
      </div>

    );
  };
  }




export default TimeSlot;

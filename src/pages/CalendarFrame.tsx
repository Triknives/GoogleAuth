import React from 'react';
import { IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonAvatar, 
  IonList, 
  IonItem,
  IonLabel,
} from '@ionic/react';
import './CalendarFrame.css';

const CalendarFrame: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Example Scheduler</IonTitle>
        </IonToolbar>
        <IonItem lines='none' className='meetingAvatarItem'>
          <IonAvatar className="meetingAvatar"><img src='https://randomuser.me/api/portraits/thumb/men/69.jpg' alt='avatar1' /></IonAvatar>
          <IonAvatar className="meetingAvatar"><img src='https://randomuser.me/api/portraits/thumb/men/76.jpg' alt='avatar2' /></IonAvatar>
          <IonAvatar className="meetingAvatar"><img src='https://randomuser.me/api/portraits/thumb/men/77.jpg' alt='avatar3' /></IonAvatar>
          <IonAvatar className="meetingAvatar"><img src='https://randomuser.me/api/portraits/thumb/men/78.jpg' alt='avatar3' /></IonAvatar>
        </IonItem>
      </IonHeader>
      <IonList lines='none' className='timeHeader'>
          <IonItem>
            <h3 slot='start'>Month</h3>
            <h2 slot='end'>9am</h2><h2 slot='end'>10am</h2><h2 slot='end'>11am</h2>
          </IonItem>
        </IonList>
      <IonContent>
        <IonList className='timeContent'>
            <IonItem><IonLabel slot='start'>1</IonLabel></IonItem>
            <IonItem><IonLabel slot='start'>2</IonLabel></IonItem>
            <IonItem><IonLabel slot='start'>3</IonLabel></IonItem>
            <IonItem><IonLabel slot='start'>4</IonLabel></IonItem>
            <IonItem><IonLabel slot='start'>5</IonLabel></IonItem>
            <IonItem><IonLabel slot='start'>6</IonLabel></IonItem>
            <IonItem><IonLabel slot='start'>7</IonLabel></IonItem>
            <IonItem><IonLabel slot='start'>8</IonLabel></IonItem>
            <IonItem><IonLabel slot='start'>9</IonLabel></IonItem>
            <IonItem><IonLabel slot='start'>10</IonLabel></IonItem>
            <IonItem><IonLabel slot='start'>11</IonLabel></IonItem>
            <IonItem><IonLabel slot='start'>12</IonLabel></IonItem>
            <IonItem><IonLabel slot='start'>13</IonLabel></IonItem>
            <IonItem><IonLabel slot='start'>15</IonLabel></IonItem>
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default CalendarFrame;

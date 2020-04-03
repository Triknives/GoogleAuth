import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import AvailabilityCalendar from '../components/AvailabilityCalendar';
import './ReactCalendar.css';

const ReactCalendar: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>React Calendar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">React Calendar</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AvailabilityCalendar  />
      </IonContent>
    </IonPage>
  );
};

export default ReactCalendar;

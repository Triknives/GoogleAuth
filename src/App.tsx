import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { calendarOutline, logoReact, logoGoogle, pencilSharp } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import CalendarFrame from './pages/CalendarFrame';
import ReactCalendar from './pages/ReactCalendar';
import Api from './pages/Api';
import Canvas from './pages/Canvas';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/ReactCalendar" component={ReactCalendar} exact={true} />
          <Route path="/SlidingCalendar" component={CalendarFrame} exact={true} />
          <Route path="/API" component={Api} />
          <Route path="/Canvas" component={Canvas} />
          <Route path="/" render={() => <Redirect to="/ReactCalendar" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="ReactCalendar" href="/ReactCalendar">
            <IonIcon icon={logoReact} />
            <IonLabel>React Calendar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="SlidingCalendar" href="/SlidingCalendar">
            <IonIcon icon={calendarOutline} />
            <IonLabel>Sliding Calendar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="API" href="/API">
            <IonIcon icon={logoGoogle} />
            <IonLabel>API</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Canvas" href="/Canvas">
            <IonIcon icon={pencilSharp} />
            <IonLabel>Canvas</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

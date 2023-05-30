import { IonContent, IonLabel, IonToggle } from '@ionic/react';
import { StatusBar } from '@capacitor/status-bar';
import React, { useState } from 'react';

const StatusBarPage: React.FC = () => {
    const [toggleValueShow, setToggleValueShow] = useState(true);

    const handleToggleChangeShow = (event: CustomEvent) => {
    const isChecked = event.detail.checked;
    setToggleValueShow(isChecked);

    if (isChecked) {
      showStatusBar();
    } else {
      hideStatusBar();
    }
    };

    const hideStatusBar = async () => {
    await StatusBar.hide();
    };

    const showStatusBar = async () => {
    await StatusBar.show();
    };

  return (
    <IonContent className="ion-text-center">
        <IonLabel>
            <br /> <strong>@capacitor/status-bar</strong> <br />
            The StatusBar API Provides methods for configuring 
            the style of the Status Bar, along with showing or hiding it. <br /> <br />
        </IonLabel>

        <IonToggle checked={toggleValueShow} onIonChange={handleToggleChangeShow}>Show</IonToggle>
      
    </IonContent>
  )
}

export default StatusBarPage;
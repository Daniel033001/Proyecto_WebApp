import { Browser } from '@capacitor/browser';
import React, { useState } from 'react';
import { IonContent, IonButton, IonLabel, IonAlert } from '@ionic/react';

const BrowserPage: React.FC = () => {
    const openCapacitorSite = async () => {
        await Browser.open({ url: 'https://www.ejemplos.co/chistes-graciosos/' });
    };

    const [handlerMessage, setHandlerMessage] = useState('');

  return (
    <IonContent className="ion-text-center">
        <IonLabel>
            <br /> <strong>@capacitor/browser</strong> <br />
            The Browser API provides the ability to open an in-app browser 
            and subscribe to browser events. <br /> <br />
        </IonLabel>

        <IonButton id="present-alert">Open Site</IonButton>

        <IonAlert
            header="This link will open another window"
            trigger="present-alert"
            buttons={[
            {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                setHandlerMessage('Try again');
                },
            },
            {
                text: 'OK',
                role: 'confirm',
                handler: () => {
                    openCapacitorSite()
                },
            },
            ]}
        />
      <p>{handlerMessage}</p>
      
    </IonContent>
  )
}

export default BrowserPage;
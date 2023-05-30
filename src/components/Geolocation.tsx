import { IonContent, IonLabel, IonItem } from '@ionic/react';
import { Geolocation } from '@capacitor/geolocation';
import React, { useState, useEffect } from 'react';

const GeolocationPage: React.FC = () => {
    const [currentPosition, setCurrentPosition] = useState<any>(null);

    useEffect(() => {
        printCurrentPosition();
    }, []);

    const printCurrentPosition = async () => {
        try {
            const coordinates = await Geolocation.getCurrentPosition();
            setCurrentPosition(coordinates);
          } catch (error) {
            console.log('Error al obtener la posición actual:', error);
          }
    };

  return (
    <IonContent className="ion-text-center">
        <IonLabel>
            <br /> <strong>@capacitor/geolocation</strong> <br />
            The Geolocation API provides simple methods for getting 
            and tracking the current position of the device using GPS, 
            along with altitude, heading, and speed information if available. <br /> <br />
        </IonLabel>

        <IonItem>
            <IonLabel>
                <h1>Current Position</h1>
                {currentPosition && (
                    <IonLabel>
                    Latitude: {currentPosition.coords.latitude}
                    <br />
                    Longitude: {currentPosition.coords.longitude}
                    </IonLabel>
                )}
            </IonLabel>
        </IonItem>
      
    </IonContent>
  )
}

export default GeolocationPage;
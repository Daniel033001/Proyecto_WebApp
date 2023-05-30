import { IonContent, IonCard, IonLabel, IonCardHeader, IonCardContent, IonCardTitle, IonButton } from '@ionic/react';
import { Device } from '@capacitor/device';
import React, { useState, useEffect } from 'react';

const DevicePage: React.FC = () => {
    const [deviceInfo, setDeviceInfo] = useState('');
    const [batteryInfo, setBatteryInfo] = useState('');

    useEffect(() => {
        logDeviceInfo();
        logBatteryInfo();
    }, []);

    const logDeviceInfo = async () => {
        const info = await Device.getInfo();
        setDeviceInfo(JSON.stringify(info));
    };

    const logBatteryInfo = async () => {
        const info = await Device.getBatteryInfo();
        setBatteryInfo(JSON.stringify(info));
    };

  return (
    <IonContent className="ion-text-center">
        <IonLabel>
            <br /> <strong>@capacitor/device</strong> <br />
            The Device API exposes internal information about the device, 
            such as the model and operating system version, along with user 
            information such as unique ids. <br /> <br />
        </IonLabel>

        <IonCard>
        <IonCardHeader>
            <IonCardTitle>General Information</IonCardTitle>
        </IonCardHeader>
        <IonCardContent> {deviceInfo} </IonCardContent>
        </IonCard>

        <IonCard>
        <IonCardHeader>
            <IonCardTitle>Battery Information</IonCardTitle>
        </IonCardHeader>
        <IonCardContent> {batteryInfo} </IonCardContent>
        </IonCard>
       
      
    </IonContent>
  )
}

export default DevicePage;
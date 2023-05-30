import { IonCard, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Toast } from '@capacitor/toast';
import React, { useState, useEffect } from 'react';
import { Geolocation } from '@capacitor/geolocation';
import { language } from 'ionicons/icons';
import { Network } from '@capacitor/network';
import {IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from './ExploreContainer';
import './Tab1.css';

const toast: React.FC = () => {
  const [cordenadas, setCordenadas] = useState<any>(null);
  const [latitud, setLatitud] = useState<any>(null);
  const [altitud, setAltitud] = useState<any>(null);
  const [network, setNetwork] = useState<boolean>(false);
  const [tipoConexion, setTipoConexion] = useState<any>(null);
  useEffect(()=>{
    printCurrentPosition();
  },[]);
  useEffect(()=>{
   logCurrentNetworkStatus();
  },[]);
  const printCurrentPosition = async () => {
    const position = await Geolocation.getCurrentPosition();
    setCordenadas(position);
    setLatitud(position.coords.latitude)
    setAltitud(position.coords.altitude)
  };
  Network.addListener('networkStatusChange', status => {
    console.log('Network status changed', status);
  });
  
  const logCurrentNetworkStatus = async () => {
    const status = await Network.getStatus();
    setNetwork(status.connected)
    setTipoConexion(status.connectionType)
    console.log('Network status:', status);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardTitle>Coordendas</IonCardTitle>
        <IonLabel>{cordenadas
        && (
          <IonLabel>Latitud : {latitud}<br />Altitud : {latitud} </IonLabel>
        )
        }</IonLabel>
        </IonCard>

        <IonCard>
          <IonCardTitle>Network</IonCardTitle>
        <IonLabel>{cordenadas
        && (
          <IonLabel>Estado de conexion: {network} {
            <h1>ON</h1>
          }<br></br> 
          Tipo de conexion: {tipoConexion}</IonLabel>
        )
        }</IonLabel>
        </IonCard>
        <button onClick={showHelloToast}>Mostrar Toast</button>
        <ExploreContainer name="Tab 1 page" />
    
      </IonContent>
    </IonPage>
    
  );
  
};


const showHelloToast = async () => {
  await Toast.show({
    text: 'Hello!',
  });
};

const printCurrentPosition = async () => {
  var latitud;
  var altitud;
  const position = await Geolocation.getCurrentPosition();
  const { coords } = position;
  latitud=coords.latitude;
  altitud=coords.altitude;
  <IonCard>
    <IonCardHeader>
      <IonCardTitle>Coordenadas</IonCardTitle>
      <IonCardSubtitle>Geolocalizacion</IonCardSubtitle>
    </IonCardHeader>
    {altitud}
    {latitud}
  </IonCard>
  
};




export default toast;
import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle } from '@ionic/react';
  
  import { useLocation } from 'react-router-dom';
  import { clipboard, earth, megaphone, phonePortrait, pulse, wifi} from 'ionicons/icons';
  import './Menu.css';
  
  interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
  }
  
  const appPages: AppPage[] = [
    {
        title: 'Browser',
        url: '/page/Browser',
        iosIcon: wifi,
        mdIcon: wifi
    },
    {
        title: 'Device',
        url: '/page/Device',
        iosIcon: phonePortrait,
        mdIcon: phonePortrait
    },
    {
        title: 'Screen Reader',
        url: '/page/Screen-Reader',
        iosIcon: megaphone,
        mdIcon: megaphone
    },
    {
        title: 'Geolocation',
        url: '/page/Geolocation',
        iosIcon: earth,
        mdIcon: earth
    },
    {
        title: 'Status Bar',
        url: '/page/Status-Bar',
        iosIcon: pulse,
        mdIcon: pulse
    },
    {
        title: 'Clipboard',
        url: '/page/Clipboard',
        iosIcon: clipboard,
        mdIcon: clipboard
    }
    ,
    {
      title: 'mensaje',
      url: '/page/mensaje',
      iosIcon: clipboard,
      mdIcon: clipboard
  }
  ];

  
  const Menu: React.FC = () => {
    const location = useLocation();
  
    return (
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>Plugins</IonListHeader>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };
  
  export default Menu;
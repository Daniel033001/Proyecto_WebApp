import { ReactElement } from 'react';
import { IonIcon } from '@ionic/react';
import { thumbsUp } from 'ionicons/icons';
import './ExploreContainer.css';
import Browser from '../components/Browser';
import Device from '../components/Device';
import ScreenReader from '../components/Screen-Reader';
import Geolocation from '../components/Geolocation';
import StatusBar from '../components/Status-Bar';
import Clipboard from '../components/Clipboard';
import mensaje from '../components/mensaje';
interface ContainerProps {
  name: string; 
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  let pagina: ReactElement;
  switch (name.toLowerCase()) {
    case 'browser':
      pagina = <Browser/>;
      break;  
    case 'device':
      pagina = <Device/>;
      break;   
    case 'screen-reader':
      pagina = <ScreenReader/>;
      break;  
    case 'geolocation':
      pagina = <Geolocation/>;
      break;  
    case 'status-bar':
      pagina = <StatusBar/>;
      break;
    case 'clipboard':
      pagina = <Clipboard/>;
      break; 
    default:
      pagina = (
        <div className="container">
          <p>This app has the objetive of showing the functionality of some ionic plugins</p> <br />
          <IonIcon icon={thumbsUp} size="large"></IonIcon>
        </div>
      )
      break;
  }

  return pagina
};

export default ExploreContainer;
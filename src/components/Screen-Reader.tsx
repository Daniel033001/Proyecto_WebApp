import { IonContent, IonLabel, IonButton } from '@ionic/react';
import { ScreenReader } from '@capacitor/screen-reader';

const ScreenReaderPage: React.FC = () => {
      
    const sayHello = async () => {
        await ScreenReader.speak({ value: 'Ah, ha, ha, ha, stayin alive, stayin alive' });
    };

  return (
    <IonContent className="ion-text-center">
        <IonLabel>
            <br /> <strong>@capacitor/screen-reader</strong> <br />
            The Screen Reader API provides access to TalkBack/VoiceOver/etc. 
            and provides simple text-to-speech 
            capabilities for visual accessibility. <br /> <br />
        </IonLabel>

        <IonButton onClick={sayHello}>Sing</IonButton>
      
    </IonContent>
  )
}

export default ScreenReaderPage;
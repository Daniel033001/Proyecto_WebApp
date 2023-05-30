import { IonButton, IonContent, IonLabel, IonToast } from '@ionic/react';
import { Clipboard } from '@capacitor/clipboard';
import React, { useState, useEffect } from 'react';

const ClipboardPage: React.FC = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        writeToClipboard();
    }, []);

    const writeToClipboard = async () => {
        await Clipboard.write({
          string: "You are using clipboard plugin!"
        });
    };
      
    const checkClipboard = async () => {
        const { type, value } = await Clipboard.read();
        setText(value);
    };

  return (
    <IonContent className="ion-text-center">
        <IonLabel>
            <br /> <strong>@capacitor/clipboard</strong> <br />
            The Clipboard API enables copy and pasting to/from the system clipboard. <br /> <br />
        </IonLabel>

        <IonButton onClick={checkClipboard} id="open-toast">Copy Text</IonButton> <br /> <br />

        <IonLabel>{text}</IonLabel>

        <IonToast trigger="open-toast" message="Text copied to clipboard" duration={3000}></IonToast>

    </IonContent>
  )
}

export default ClipboardPage;
import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonItem,
    IonCheckbox,
    IonBreadcrumbs,
    IonBreadcrumb,
    IonIcon,
    IonToolbar,
    IonButtons,
    IonBackButton
  } from '@ionic/react';
  import './Ensalada_col.css';
  import { fastFood, home } from 'ionicons/icons';
  
  const Ensalada_col: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/home"></IonBackButton>
        </IonButtons>
          <IonTitle>Ensalada de Col</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonBreadcrumbs>
        <IonBreadcrumb href="/home">
          Home
          <IonIcon slot="end" icon={home}></IonIcon>
        </IonBreadcrumb>
        <IonBreadcrumb href="/Ensalada_col">
          Ensalada de Col
          <IonIcon slot="end" icon={fastFood}></IonIcon>
        </IonBreadcrumb>
      </IonBreadcrumbs>
      <IonContent className="ion-padding">
        <img alt="Ensalada de Col" src="Ensalada_col.webp" />
        <h1>Ingredientes:</h1>
        <p>• 2 Tazas Col Morada cortada en tiras</p>
        <p>• 2 Tazas Col Blanca cortada en tiras</p>
        <p>• 1 Taza Zanahoria rallada</p>
        <p>• 1/4 Taza Leche Evaporada LA LECHERA®</p>
        <p>• 1/2 Taza Mayonesa con Limón MAGGI®</p>
        <p>• 5 Cucharaditas Vinagre Blanco</p>
        <p>• 1 Cucharada Sazonador Maggi Natusabor®</p>
        <p>• 2 Unidades Manzana Verde picada en cubos pequeños</p>
        <h1>Preparación:</h1>

        <IonCheckbox labelPlacement="end"></IonCheckbox><b>    1.</b> Coloca la leche evaporada La Lechera® en un recipiente amplio, la Mayonesa con Limón Maggi®, el vinagre de blanco y el sazonador Maggi® Natusabor. Mezcla bien y reserva.
        <br /><br /><br />

        <IonCheckbox labelPlacement="end"></IonCheckbox><b>    2.</b> En una ensaladera, coloca las variedades de col, la zanahoria, añade la manzana y mezcla bien.
        <br /><br /><br />
        
        <IonCheckbox labelPlacement="end"></IonCheckbox><b>    3.</b> Baña la preparación anterior con el aderezo preparado en el paso 1. Mezcla bien, cubriendo todo con el aderezo, rectifica con una pizca de sal y pimienta al gusto. Deja reposar en refrigeración 10 minutos antes de servir.
      </IonContent>
    </IonPage>
  );
  };
  
  export default Ensalada_col;
  
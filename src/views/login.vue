<template>
    <ion-page>
        <ion-header>
          <ion-toolbar>
          <ion-title>Login</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-item class="ion-margin-button" lines="none">
        <ion-input 
           label="Usuario" 
           label-placement="floating" 
           fill="outline" 
           placeholder="Enter text">
        </ion-input>
        </ion-item>
        <ion-item class="ion-margin-button" lines="none">
        <ion-input 
           label="Contraseña" 
           label-placement="floating" 
           fill="outline" 
           placeholder="Enter text">
        </ion-input>
        </ion-item>
        <ion-item class="ion-margin-button" lines="none">
            <ion-button expand="block" fill="outline">Login</ion-button>
        </ion-item>
        </ion-content>
    </ion-page>

</template>
<script lang="ts" setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonButton } from '@ionic/vue';
</script>
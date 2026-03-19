
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Menu</ion-title>
                <ion-buttons slot="end">
                    <ion-button fill="solid" @click="router.push({ name: 'Registro' })">Registrarse</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding"> 

          <ion-item lines="none">  
          <ion-input 
             label="Usuario" 
             label-placement="floating"
             class="ion-margin-top" 
             fill="outline" 
             v-model="userStore.login.username"
             placeholder="Enter text">
         </ion-input>
            </ion-item>

            <ion-item lines="none">
         <ion-input 
             label="Contraseña" 
             label-placement="floating"
             class="ion-margin-top" 
             fill="outline"
             v-model="userStore.login.password" 
             placeholder="Enter text" 
             type="password">
        </ion-input>
        </ion-item>
        <ion-item class="ion-margin-bottom" lines="none">
            <ion-button slot="end" size="default" @click="handleLogin">Ingresar</ion-button>
        </ion-item>
        </ion-content>
    </ion-page>

</template>
<script lang="ts" setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonButton, IonButtons} from '@ionic/vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

function handleLogin() {
    userStore.$login().then( res => {
        console.log(res);
       
    }).catch( error => {
        console.error('Login failed:', error);
    });
}
</script>
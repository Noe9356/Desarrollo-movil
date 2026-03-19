<template>
    <h1>Hello world</h1>

    <div class="card">
        <button type="button" @click="sumar()">count is {{ userStore.count }}</button>
        <p>
            Edit <code>components/HelloWorld.vue</code> to test HMR.
        </p>
        <a href="/bye-bye-world">Link a Bye Bye World </a><br>
        <RouterLink to="/bye-bye-world">Router Link a Bye Bye World </RouterLink><br>
        <p>&nbsp;</p>
    <button type="button" @click="userStore.$getChisteChuckNorris()">Chiste de Chuk Norris</button>
    
    </div>
</template>
<script setup lang="ts">
import { useUserStore } from '../stores/user';

const userStore = useUserStore();

function sumar() {
    userStore.$sumar();
}
</script>
<script>
/* Come faccio ad utilizzare un componente dentro un altro?
        Si seguono 3 passaggi:
        1) Importazione del componente
        2) Dichiarazione del componente all'interno dell'oggetto
        3) Utilizzo del componente    
*/
import axios from 'axios'; // importo elemento axios

export default {
    data(){
        return{
            
        }
    },
    components: {
       
    },
   
    methods: {

    },
    mounted(){ //montarlo
        
    }
}


</script>

<template>
    <main>
        <router-view></router-view>
    </main>
</template>

<style lang="scss" scoped>
    @use'../assets/SCSS/main.scss';

    
</style>

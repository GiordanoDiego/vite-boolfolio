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
   <div class="row">
        <div class="col">
            <h1>
                Home page
            </h1>
        </div>
   </div>
</template>

<style lang="scss" scoped>
    @use'../assets/SCSS/main.scss';

   
</style>

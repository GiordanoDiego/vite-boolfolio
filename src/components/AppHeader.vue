<script>
/* Come faccio ad utilizzare un componente dentro un altro?
        Si seguono 3 passaggi:
        1) Importazione del componente
        2) Dichiarazione del componente all'interno dell'oggetto
        3) Utilizzo del componente    
*/


export default {
    data(){
        return {
            
        }
        
    },
   
    methods: {

    }
}

</script>

<template>
     <header>
        <div class="my_container">
            <ul>
                <li>
                    <router-link :to="{ name: 'home' }" class = ""> Home </router-link>
                </li>

                <li>
                    <router-link :to="{ name: 'projects.index' }" class = ""> Projects </router-link>
                </li>
            </ul>
        </div>
     </header>
</template>

<style lang="scss" scoped>
    @use'../assets/SCSS/main.scss';
    @use '../assets/SCSS/header.scss';
</style>

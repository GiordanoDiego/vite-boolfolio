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
            project:null
        }
    },
    created(){ //montarlo
        this.getProject();
    },
    methods: {
        getProject(){
            axios
            .get('http://127.0.0.1:8000/api/projects/' + this.$router.params.slug)
            .then((response) => {

                if(response.data.succes){
                    this.project = response.data.results;
                }else{
                    this.$route.push({ name:'not-found' })
                }
            });
        }
    }
}


</script>

<template>
    <div v-if="project != null">
        <h5>
            {{ project.id }} - 
            {{ project.title}}
        </h5>
        <div>
            Tipo: {{ project.type.name }}
        </div>
        <div>
            <ul>
                <li v-for="technology in project.technologies" :key="project.id">
                    {{ technology.title }}
                </li>
            </ul>
        </div>                       
    </div>
</template>

<style lang="scss" scoped>
    @use'../assets/SCSS/main.scss';

   
</style>

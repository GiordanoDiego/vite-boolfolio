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
            projects: []
        }
    },
    components: {
       
    },
   
    methods: {

    },
    mounted(){ //montarlo
        axios.get('http://127.0.0.1:8000/api/projects')
        .then((response) => {
            this.projects = response.data.results.data;
            console.log(this.projects);
        });
    }
}


</script>

<template>
    <main>
        <div class="my_container">
            <div class="row">
                <div v-for="project in projects" :key="project.id" class="col project_container">
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
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    @use'../assets/SCSS/main.scss';

    .project_container{
        border: 1px solid black;
    }
</style>

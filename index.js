Vue.createApp({
    data() {
        return {
            playerLife: 100,
            computerLife: 100,
        };
    },

   methods: {
       attackPlayer(){
            atk=10;
            atkMagic=25;

       },

       attackComputer(){
            atk=10;
            atkMagic=25;

       },

       seSoigner(){
            item=25;
       },

       abandonner(){

       },
           
    },
      
   computed: {

watch: {
        
}).mount('#monApp')
Vue.createApp({
    data() {
        return {
            playerLife: 100,
            computerLife: 100,
            countAttackPlayer: 0,
            countAttackComputer: 0,
            countItemPlayer: 0,
            countItemComputer:0,
            text: "Vous venez d'abandonner"
          
        };
    },

   methods: {
       attackPlayer(){
      
            atk=10; // au bout de 2 fois l'attaque magique se déclenchera
           
            this.computerLife = this.computerLife - atk; // Computer 90 de vie
            this.countAttackPlayer++;
            console.log(this.countAttackPlayer); //-> Le computer doit attaquer
            if (this.countAttackPlayer <= 3){
                this.attackComputer();                      
                console.log(this.computerLife);  
            }
   
            /*
            if (this.countAttackPlayer === 3){

            }
           // else if (this.countAttackPlayer )
            else{
                console.log('rien');
            }
            console.log(this.computerLife);
            /*           
            if (countAttack <=2){
                computerLife = computerLife - atk;
            }
            else{
                computerLife = computerLife - atkMagic;
            }
            */
       },
        attackMagicPlayer(){

            if(this.countAttackPlayer === 3){
                atk=25; // au bout de 2 fois l'attaque magique se déclencher
                this.computerLife = this.computerLife - atk; // Computer 90 de vie
                console.log(this.countAttackPlayer); //-> Le computer doit attaquer
                this.countAttackPlayer = 0;
                this.attackComputer();                      
                console.log(this.computerLife);  
               
            }
        },

       attackComputer(){
            atk=10;
          
            atk=10; // au bout de 2 fois l'attaque magique se déclenchera
            atkMagic=25; // l'attaque Magic se déclenchera au bout de 3 attaques basiques ?!..
            this.playerLife -= atk; // Computer 90 de vie
            this.countAttackComputer++; //-> Le player doit attaquer
            console.log(this.countAttackComputer);
            console.log(this.playerLife);
        },

        attackMagicComputer(){
            atkMagic=25;
            if (this.countAttackPlayer === 2){
               this.playerLife -= atkMagic;
            }
        },

        seSoignerPlayer(){
           //condition à ajouter 
           if(this.countItemPlayer <= 1) {
            item=25;
            this.playerLife += item; // rajouter de la vie
            this.countItemPlayer++; // Compteur à incrémenter jusqu a == 2 si > plus d'Item de vie 
            console.log(this.countItemPlayer); //ok
            console.log(this.playerLife); //ok
        } 

       },
       seSoignerComputer(){
           //condition à ajouter 
           if(this.countItemPlayer <= 1) {
            item=25;
            this.playerComputer += item; // rajouter de la vie
            this.countItemPlayer++; // Compteur à incrémenter jusqu a == 2 si > plus d'Item de vie 
           }
        },

        generateRandomInt(max){
            if(this.countAttackPlayer > 1){
           
                aleatoire = math.floor(Math.random() * max);
                return aleatoire;
        }
            else if (aleatoire >= 5 ) {
                this.seSoignerComputer();
                console.log(this.computerLife)
            }
        },

        win(){
            if (this.playerLife <= 0) {
                alert("You lose !!!!");
            } else if (this.computerLife <= 0) {
                alert("You win !!!!")
            }
            
        },
     

       abandonner(){
           this.playerLife= 100;
           this.computerLife= 100;
           this.countAttackPlayer= 0;
           this.countAttackComputer= 0;
           this.countItemPlayer= 0;
           this.countItemComputer=0;
           return this.text;
        
        },
        
    },
    computed: {

    }
  
        
}).mount('#monApp')
const CartPageComponent = {

    template: `
      <div class="row">
      <h1>Varukorg</h1>
        <cart class="col-12"></cart>
        <div class="col-12">
        <label for="first-name">Förnamn:</label>
        <input name="first-name" v-model="firstName"></input>
        <button v-on:click="pay">Betala</button>
        </div>
        </div>
    `, 
    data() {
      return{
        firstName: 'namn'
      }
    }, 
    methods: {
      pay: ()=>{
        console.log('pay');
        http.post('/rest/pay', {}).then(response => {
          console.log(response);   
        }).catch(error => {
          console.error(error);
          // this.loading = false;
          // this.message = 'Error 2';
        });
      }
    }
  
  }
  
 

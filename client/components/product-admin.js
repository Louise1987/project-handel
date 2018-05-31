const ProductAdminComponent = {
    template: `
      <div>
        <form @submit.prevent="submit">
        <h2>Skapa en produkt</h2>
          <label>Namn
            <input type="text" v-model="name" :disabled="loading" required />
          </label>
          <label>Beskrivning
            <input type="password" v-model="description" :disabled="loading" />
            </label>
          <label>Pris
          <input type="password" v-model="price" :disabled="loading" />
          </label>
          <label>Artikelnummer
          <input type="password" v-model="artnr" :disabled="loading" />
          </label>
          <label>Moms
          <input type="password" v-model="vat" :disabled="loading" />
          </label>
          
          <button type="submit" :disabled="loading">Spara</button>
          <br/>
          
          <span v-if="message">{{message}}</span>
        </form>
      </div>
    `,
    data() {
      return {
        name: '',
        description: '',
        price: 0,
        vat: 0.25,
        artnr: '',
        message: '',
        loading: false
      };
    },

    methods: {
      submit() { // save product
        this.loading = true;
        http.post('/rest/products', { //här gör vi samma sak som i postman
        name: this.name,
        description: this.description,
        price: this.price,
        vat: this.vat,
        artnr: this.artnr,
        }).then(response => {
          console.log(response);
          this.loading = false;
          if(response.data.name) {
            this.message = 'Product saved';
          } else {
            this.message = 'Failed product saved';
          }
        }).catch(error => {
          this.loading = false;
          this.message = 'Save Failed';
        });
      }
    }

   }
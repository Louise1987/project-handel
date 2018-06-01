const CategoryAdminComponent = {
    template: `
      <div>
        <form @submit.prevent="submit">
        <h2>Skapa en produkt categori</h2>
          <label>Namn
            <input type="text" v-model="name" :disabled="loading" required />
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
        message: '',
        loading: false
      };
    },

    methods: {
      submit() { // save category
        this.loading = true;
        http.post('/rest/category', { //här gör vi samma sak som i postman
        name: this.name,
        
        
        
        }).then(response => {
          console.log(response);
          this.loading = false;
          if(response.data.name) {
            this.message = 'Category saved';
          } else {
            this.message = 'Failed category saved';
          }
        }).catch(error => {
          this.loading = false;
          this.message = 'Save Failed';
        });
      }
    }

   }
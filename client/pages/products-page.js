const ProductsPageComponent = {

  template: `
    <div class="row">
      <div class="col-12 card-body">
        <h1>Product page</h1>
        <product class="col-4"
          v-for="item in products"
          v-bind:item="item"
          v-bind:key="item._id">
        </product>
      </div>
    </div>
  `,
  created(){
    // ladda in litta data
    http.get('/rest/products/').then(response => {
      console.log('products', response.data)
      this.products = response.data;
    }).catch(e => {
      console.error(e);
    });
  },
  data(){
    return {
      products: []
    }
  }
}

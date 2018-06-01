const ProductsPageComponent = {

  props:["slice"],

  template: `
    <div class="row">
    <input v-if="!slice" type="search" title="Sök produkt" v-model="searchString">
    <h1 v-if="!slice">Product page</h1>
      <div class="col-12 card-body">
      <div id="categories">
        
        <product class="col-4"
          v-for="item in categoryFilteredProducts"
          v-bind:item="item"
          v-bind:key="item._id">
        </product>
      </div>
    </div>
    </div>
  `,
  created(){
    http.get('/rest/products').then((response) => {

      if(this.slice){
        console.log(this.slice);
        this.products = response.data.splice(- Number(this.slice));
        } else {
          this.products = response.data;
      }

      http.get('/rest/category').then((response) =>{
        this.categories = response.data;
        console.log("Produkterna finns" + this.categories);
        
      });

      console.log('products', response.data)
    }).catch(e => {
      console.error(e);
    });
  },
  data(){
    return {
      products: [],
      searchString:'',
      categories: []
    }
  },
  computed:{
    filterProducts: function(){
      let fp=[]
      for(let prod of this.products){
        if(prod.name.includes(this.searchString)){
          fp.push(prod)
        }
      }
      return fp
    },
    categoryFilteredProducts: function(){
     return this.products.filter((product)=>{
       if(!this.$route.params.category){return true}
      for(let category of product.categories){
        console.log(category.name, this.$route.params.category)
        if(category.name == this.$route.params.category){
          return true; // found matching category
          
      }
    }
  });
}
}
}

  

const MenuComponent = {
    
    template: `
      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Hem</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Produkter</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/cart">Varukorg</router-link>
      </li>
      <li class="nav-item">
      <router-link class="nav-link" to="/login">Logga in</router-link>
    </li>
    <li class="nav-item">
    <router-link class="nav-link" to="/admin">Admin</router-link>
  </li>   

  <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categorier
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <router-link class="dropdown-item" to="/products">All</router-link>
         
          <category class="dropdown-item"
          v-for="item in category"
          v-bind:item="item"
          v-bind:key="item._id"
          ></category>
       
        </div>
      </li>
      </ul>
    `,
    data(){
      return {
        category:[]
      };
    },
    async created(){
      let category = await http.get('/rest/category');
      if(category.data){
        this.category = category.data;
      }
    }
  }
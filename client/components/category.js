const CategoryComponent = {

    props: ['item'],
  
    template: `
      <router-link :to="'/products/' + item.name">
        <h2>{{item.name}}</h2>
      </router-link>
    `
    
  }
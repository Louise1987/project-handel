const HomePageComponent = {

  template: `
    <div class="row">
    <h1>The News</h1>
      <hello class="col-12"></hello>
      <div class="row">
      <products-page v-bind:slice="3"></products-page>      
      </div>
    </div>
  `,
  created(){
    console.log(768);
  }
}
const HelloComponent = {

  template: `
    <div class="card-body">
      <h1>{{title}}</h1>
      <p>{{description}}</p>
    </div>
  `,
  data(){
    return{
      title: "Welcome to The Store with the latest News",
      description: "Select your magazine"
    }
  }

}
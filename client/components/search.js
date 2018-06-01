

// Search modules
const SearchComponent = { 
   template: `
    <form>
    <input type="text" id="search" onkeyup="submit()" placeholder="search for product" title="Sök produkt">
    <input type="submit" value="Sök">
    </form>
    `,
    data() {
        return{
            id:'',
            name:'',
            price:'',
            artnr:'',
            loading: false,
            user:{}
        };
    },
    created(){
        http.get('/rest/search').then(response =>{
        console.log('/rest/product',response);
        this.product = response.data;
        }).catch(e => {
            console.error(e);
        });
    
            
    },
    methods: {
        submit() {  //Search
            var input, filter, 
            input = document.getElementById("search");
            filter = input.value.toUpperCase();
            for (i = 0; i < tr.length; i++) {
                
                
                if (input.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    input[i].display = "Sökträff";
                } else {
                    input[i].display = "Ingen sökträff";
                }
                }       
            }
        }
}
    




      
      

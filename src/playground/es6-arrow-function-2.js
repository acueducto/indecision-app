// arguments object - no longer bound with arrow functions

const add = (a, b) =>{
    //console.log(arguments)  
    return a + b;
    }
    console.log(55, 1, 500)
    
    // this keyword  - no longer bound
    
    const user = { 
    name: 'Alberto',
    cities: ['CDMX', 'Chicago', 'Brisbane'],
    printPlacesLived(){
      return this.cities.map((city) => this.name + ' has live in ' + city);
    }
};
 console.log(user.printPlacesLived());

 const multiplier = {
     numbers : [3, 5, 8],
     multiplyBy: 2,
     multiply(){
         return this.numbers.map((number)=> this.multiplyBy *  number)
     }
 }

 console.log(multiplier.multiply());
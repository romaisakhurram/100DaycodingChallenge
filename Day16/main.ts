
//Day 16
//Q46
let laptop  = {
    make : "Dell",
    model : "cori i9 " ,
    year : 2020,
    describelaptop : function () {
      console.log(`This laptop is a ${this.make}, ${this.model} and ${this.year}`); 
    },
  };
  laptop.describelaptop()
  
  //Q47
  let laptops = [
  {
      make : "hp",
      model : "XPS 15",
      year : 2023,
  },
  {
      make : "Dell",
      model : "spectra 360",
      year : 2022,
  
  },
  {
      make : "hp",
      model : "Mac book pro",
      year : 2021,
  }
  ];
  
  let [laptop1 , laptop2] = laptops;
  console.log(laptop1);
  console.log(laptop2);
  
  //Q48
  let setPrice1 = [ 500000 , 200000 , 1000 ]
  let setPrice2 = [ 700000 , 300000 , 900000]
  let combined_price = [ ...setPrice1 , ...setPrice2] .sort()
  console.log(combined_price);
  
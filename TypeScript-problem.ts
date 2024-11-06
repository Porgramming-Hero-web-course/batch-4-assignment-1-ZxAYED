//  problem 1
console.log('started script');
 type ArrayOfNumber =number[]
const array:ArrayOfNumber =[1,2,3,4,5,6]
let sum =0
 const sumArray=():number=>{
  
 array.forEach((i)=> sum =sum+i)

 return sum

 }
console.log(sumArray());

//   description : to summerize all numbers i firstly dceclair the sum initial value . then in a sumArray function using forEach method   . i can use map method too. but i prefer forEach as i have to write maps while developing . after the value i have to return the value as mentioned in the question.


//  problem 2.
 const array2:ArrayOfNumber = [ 123,1231,1,1,22,22,22,3,4,4,4,5,5,6,6,6,6,1]

function removeDuplicates():ArrayOfNumber {
   let newArray:ArrayOfNumber =[]
  array2.map((i)=> {
   if(!newArray.includes(i))
   newArray.push(i)

})

   return newArray
}

console.log(removeDuplicates());

// description:  wasted  alot time investing finding the suitable atrribute  for the solution. i figured out that i can work with filter option  then i used if method to compare with my newly created  empty array . then i can use index of or includes the old lvl 1 method that i forgot name but i knew something like this exist . afterwards i compare the value with newly created array to the old one and it creats the new array i need

//  problem -3 

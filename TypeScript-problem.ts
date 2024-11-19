//  problem 1
console.log('started Typescript');
 type ArrayOfNumber =number[]
// const array:ArrayOfNumber =[1,2,3,4,5,6]
let sum =0
 const sumArray=(array:number[]):number=>{
  
 array.forEach((i)=> sum =sum+i)

 return sum

 }
console.log(sumArray([1,2,3,4,5,6]));


//  problem 2.
 

function removeDuplicates(array2:number[]):ArrayOfNumber {
   let newArray:ArrayOfNumber =[]
  array2.map((i)=> {
   if(!newArray.includes(i))
   newArray.push(i)

})

   return newArray
}

console.log(removeDuplicates([ 123,1231,1,1,22,22,22,3,4,4,4,5,5,6,6,6,6,1]));



//  problem -3 
 const countWordOccurrences=(sentence:string,word:string):number=>{
const splitSentence = sentence.toLowerCase().split(' ')

const filteredArray = splitSentence.filter((i)=>i===word.toLowerCase())

const result = filteredArray.length
return result




 }
 console.log(countWordOccurrences(' Keno ei nisshongota,  keNo ei mounota ', 'KENO'));


//   problem 4
interface Circle {
   shape : 'circle',
   radius:number
}
interface Rectangle {
   shape:'rectangle' ,
   height: number,
   width:number
}
 type UnionType = Circle | Rectangle

  const calculateShapeArea =(params:UnionType):number=>{
   if(params.shape ==="circle"){
      return 3.1416*params.radius*params.radius
   }
   if(params.shape==='rectangle'){
      return params.height *params.width
   }
   else{
     console.log('Invalid input');
   }
  }
  const circleArea =calculateShapeArea({shape:"circle", radius:1})
  console.log(circleArea);
  const rectangleArea =calculateShapeArea({shape:"rectangle", height:2,width:6})
  console.log(rectangleArea);

//   problem 5

function getProperty <T,Q extends keyof T>(obj:T,key:Q){
   return obj[key]
}
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));


// problem 7

class Car {
   make: string;
   model: string;
   year: number;

   constructor(make: string, model: string, year: number) {
       this.make = make
       this.model = model
       this.year = year
   }

   getCarAge(): number {
       
       return 2024 - this.year
   }
}


const car = new Car("Honda", "Civic", 2000)
console.log(car.getCarAge())

// problem 6 
interface Profile {name:string,age:number,email:string}
const myProfile:Profile = { name: "Alice", age: 25, email: "alice@example.com" };

const updateProfile =(profile:Profile,updated:Partial<Profile>):Profile=>{

   return { ...profile, ...updated}
}

console.log(updateProfile(myProfile, { age: 100 }));


// problme -8 
function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    const objKeys = Object.keys(obj)  
   if(keys.every(key => objKeys.includes(key))){
      return true
   }
   return false

}
console.log(validateKeys(person,['name','age'])); 
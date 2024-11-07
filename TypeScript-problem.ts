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
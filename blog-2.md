How to handle asynchronous operations using async/await over callback/promise TypeScript.

Ans :
There are effective 3 ways to handle async operations in  js or ts. now i will breakdown those 3  as sequenced.

1.Callback: Using  Callback method i need to create a function in an another function as an argunment. its an old method and not so effective like others . its very complex , not so fast readable  , not so hygiene method like the others . In callback function we need to use setTimeOut function for fecthing data or async operation. so its not so optimised like others and can take more time then default data loading .

 heres an example of this.

 const CallbackFunction =(callbacks:(data:'string',error:"string")=>{
    setTimeOut(()=>{
        const showKela =" kelaaaa"
    },2000)
    if(error){
        alert(' Cant show kela , error occured')
    }
 })

 2.Promise:Before Es6 callbacks were used to fetch data. After promise was introduced it was used widely among the developers . Its effective easy  and can be used to fetch data smoothly . Its more readable than callbacks , easy to handle ,surely return  succeed / pending / rejected . Based on that returning data or info a developer can understand easily and can handle error if occures.
 To write a promise we need a new constructor as well as a Promise   constructor as an argument . Promise can be used in Timeout operation, async , data fecthing , api calling , data read or write etc. 

 Heres an example of using promise.
  const FetchData = new Promise ((res,rej)=>{
    const Data =fetch('www.kelakhao.com')
    .then(res=res.json)
    if(!res.response){
        throw new Error('error , net issue')
    }
    .then(data=>esolve(data))
    .catch(error=>reject(error))
  })

  3.Async /Await : AFter the release of es8, Async await was introduced and accepted by all devs. ITs built on top of  promise but handles datas more easily creates a very readable code for devs to rewiew or to write. Nowadays to handle async operations , async await is widely used . To write an async await function we have to declair first that its a async function and in the function when we are going to do some async operation there we will have to write await function .Async function always returns a promise thats a guarentee will return resolve or reject.  Using await keyword  will execute the operation and wait untill the data is resolved . To handle more effectively , we can use try catch method in async operation to create more readable and can be handled errors easily .
  heres an example of Async await method:
  async const fetchData = ()=>{
    try{
        const data = await fetch('www.kelakhao.com')
        .then(res=res.json)
        .then(data=res.data)
    }
    catch(error){
        console.log(error)
    }
  }
The reason to handle with async await is better then others is :
1. Readable manner.
2. Easy to write , not so complex like others.
3. Optimises the operation handling.




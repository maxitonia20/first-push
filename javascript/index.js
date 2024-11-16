
console.log(123456789)
alert(739489849488)
prompt(3434643)

console.log("my name is max")
console.log("my mums name is alis")
console.log("58"+ "8")
console.log(true)
console.log(null)
const subtract= "57; 10;"
console.log (subtract)

var carname="mercedes"
console.log(carname)
var americanpresident="joe biden"
console.log(americanpresident)
var electronicsname="television"
console.log(electronicsname)
 
var myname="my name is max i love coding"
console.log(myname)
let greeting= "hello there"
console.log(greeting)

const greet ="const:good moring"
console.log (greet)

 let person = prompt ("pleas enter your name")
console.log(person)
 let email = prompt("enter my email")
console.log( email)




 const firstname = "max"
 const secondname = "jonney"
 const lastname = "Bassey"
 const number =49332
 constnum2 = 4334323

 // const empty = ""

 //const fullname = firstname + secondname + lastname
 // console.log (fullname)
 // concat()

console.log (lastname.indexOf(4))
console.log (lastname [3])

 console.log (firstname .concat(secondname, lastname,",num2"))


 // string lengtht and slicing
 //srring lengtht for getting the length of a string
 console. log (firstname.length)

 // sring slince for cutting out some part of the string to form a new string 
 // it takes majority two parameters :where the string should start and where the string should end
 console .log(secondname.slice(0,5))
 // console.log (secondname.slice(1,4))

 const longestname= "pneumonoultramicroscopicsilicovolcanoconiosis"

 console.log (longestname[15] +  longestname[12] +longestname[6]+ longestname [18] + longestname[2]+ longestname[9]+ longestname[17] + longestname[11])
console.log( longestname [15] + longestname [5] + longestname [1] + longestname[30] + longestname [14] + longestname[6] + longestname[14] + longestname[2] +longestname[1] + longestname [19] + longestname[2])



//string template literals
// Afunction in javascript used in combining a srting and a variable
// symbolized using a backtick,
const promn = prompt("What is your name")
console.log (`may name is ${promn}`)  

let animalname= "antelope"


function add1 (a,b){
    return a + b;
}

const result = add1(3,7) ; 
console.log (result);


//Arithematic oparators
//Addition(+)
// Subtraction (-)
// Multiplication (*)
//Division (/)
// Exponential (**)
// Modulus (%)
// Incrment (++)

let n=5
n++
console.log (n)

let m=4
m+=6
console.log (m)

let z=6
z++
console.log(z)

//Degrement (--)
let p=5
p--
console.log (p)

let u=7
u-=8
console.log (u)

// Random number
//How to generate random numbers in java script 
console.log (Math.random())

Math.floor(), // convert it the nearest lowest number
console.log (Math.floor(Math.random()*8))
console.log(Math.ceil(Math.random() * 8))     

//Decision making 
const condition =10
if(condition>=4){
    console.log ("n in sot a number ")
}
else if (condition > 4 && condition <14){
    console.log (" Nis a number less thsn 14")
}

let time = prompt("what is time") 
if (time < 12){
    console.log("good morning")
}

else if (time <12 && time <18){
    console.log ("good evning")
}

else if (time <18 && time <24){
    console.log ("good night")
}

else{
    console.log ("this time does not exist")
}
// conditio
  
  
let ran = (Math.random())
alert(ran)

let promo =prompt ("inpute on time code here")

if (promo == ran){
    console.log ("log in succesful")
} 
else{
console.log('sorry, you do not have access to this site')
}
  
const david =true
const max =true
const joy =true
if (david && max && joy){
    console.log("All are true")
}
else{
    console.log("One is sturbbon")

}

const mathew =true
const felix =false
const mercy =false
if (mathew || felix || mercy){
    console.log("All are true")
}
else{
    console.log("One is sturbbon")

}


const peter =true
const solomon =true
const bomex =false
if (peter || !solomon ||! bomex){
    console.log("All are true")
}
else{
    console.log("One is sturbbon")

}

//Array - is a collaction of multiple data into a single variable.The  array is denoted using the square brecket []

const arr =["philip", "solomon", "chidi", "3254", "bomex"]
console.log(arr)
console.log (arr[0])
console.log (arr [2])
console.log (arr [3])
arr[1]="vivian"
console.log (arr)
arr[4]= "iyke"
console.log(arr)
arr.slice(4)
console.log (arr)
arr.pop()
console.log (arr)
arr.push("4")
console.log (arr)
arr.shift()
console.log (arr)
arr.unshift()
console.log(arr)

arr.splice(1,)
console.log(arr)
let car=["mercedese", "honda"," g wagon", "ford"]
car.splice(1,2, "cherokee", "hybrid")
console.log (car)

let part= ["fuse"," relay","module","radio"]
let fru = part.slice(0, 2)
console.log(fru)








//Math.random is used to generate a random number.
//Math. ceil and Math. floor is use to convert Math. random number
console.log (Math.random())
console.log(Math.floor (Math.random() *1000000))  
console.log (Math.ceil(Math.random() *1000000))


//The Array Include checks if and array contain a specific element or not.
// how to defined array incude 

const course=[ "english", "mathematics", "biology","economics"];
const check = course.includes("biology")
console.log(check)

let languages=['html','css','javascript']
const check1= languages.includes('tilwind')
console.log (check1)


//The array reverse method reverse the order of the an element in an array.
const original_array   = ["1","2","3","4","5"]
console.log (original_array )

const numbers  = ["1","2","3","4", "5"]
const reverse = numbers.reverse ()
console.log(reverse)




// Javascript objects.
//it is symbolized using the {}
const persons = {
    name: "david",
     age: "23", 
     Address:"river state",
     adult: false
}

console.log(persons.name)
console.log(persons.age)
console.log (persons.Address)

persons.name ="maxwell"
console.log(persons.name)
persons.address = "akwaibom"
console.log (persons .address)

if (persons.adult === true) {
console.log  (" david is an adult")
}else{
    console.log("david is not an adult")

}


let cars = [
    car1={
   make:"cyber truck",
   models:"2020 models",
   speed:  "240km/h"   
    },
     car2={
        makes:"toyots ",
        model:"2024",
        speed:"240km/h"


    },

    car3={
        makes:"bugati ",
        model:"2017",
        speed:"280km/h"


    },

    car4={
        makes:"benz ",
        model:"2024",
        speed:"250km/h"

    }
    
]

console.log(cars[0]. speed)
console.log(cars[1])
console.log(cars[2])
console.log(cars[3])


//Javascript loops
for( j= 0; j < 10; j++) {
    console.log(j)
}

const populerArtist = [
   { img: "url.../",
    title: "asake",
    desc:"Artist"
   }
]

for(i = 0; i < cars.length; i++){
    console.log(cars[i])    
}


// while loops is use when the variable is not known or unsure
// for loops in when the variable in known
let g = 2
while (g < 20 ){
    console.log (g);
    g++
}

// Functions in Javascript
// Function
function addNumber(){
    console.log(3 + 5)
}
addNumber();

//function addName(){
  //  console.log ("maxwell james")
//}
//addName ();



 //const hd = doCument.getElementById("hd")
 //const btn = doCument.getElementById("btn")
 //const button = doCument.getElementById("button")
 
 
 //header.textContent = 90

//button.addEventListener("click", function(){
//header.textContent++
// } )

 
 
 //btn.addEventListener("click", function(){
   //header.textContent--
 //} )
 //parameter is a varibale that you can use letter
 // it act as place olders or space that can fill in some text letter
 //function multiply(a,b){
   // console.log(a + b)
 //}
 //multiply(2,5)

 // Create a functions that has two number
 //const hd = duCument.getElementById("hd")
 //const hd1 = document.getElementById("hd1")
 //const hd2 = document.getElementById("hd2")
 //const hd3 = document.getElementById("hd3")

 
 //const hd4 = document.getElementById("hd4")
 //const hd5 = document.getElementById("hd5")
 //const hd6 = document.getElementById("hd6")


 //hd3.textContent = 0    
 //function add(a,b){
   // hd1.textContent = a
   // hd2.textContent = b
    //hd3.textContent = a + b;    
 //}
 //add(100,100) 
 //hd6. textcontent = 0
 //function addNumbers (c,d){
    //hd4.textContent =c
   // hd5.textContent = d
   // hd6.textcontent = c + d
// }
// addNumbers(0,1,)

 //let Addition=0;
 //let isAdding= true;
// const button1 = document.getElementById("button1")
 //const button2 = document.getElementById("button2")
//const hd4=document.getElementById("hd4")
//const hd5=document.getElementById("hd5")
//const hd6=document.getElementById("hd6")
//function addNumbers(a,b){
   // hd4.textContent=a
   // hd5.textContent=b
   // hd6.textContent=a+b
    //console.log(a + b)

//}

//function subtractNumbers(a,b){
 //   hd4.textContent =a 
 //   hd5.textContent = b 
  //  hd6.textContent = a - b
  //  console.log (a -b )
//}

//button1.addEventListener("click", function(){
//addNumbers (5, 5)
//})

//button2. addEventListener( "click", function (){
    //subtractNumbers(11,7)
//})

//argument is when the falue is being call upon
//Javascript Higher order function 
// it is a function that accept other functions as and an argument



    




//this is paremeter ( a place holder)
function createNumber(callback){
console.log ("hello")
 return callback();
}

//this is the (argument)
function anotherfunction(){
    console.log ("we are learning")
}
createNumber(anotherfunction)
 

//function returnKey(){
 //   return "hello"
 //}

 //console.log (returnKey());
 

const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const hd7 = document.getElementById("hd7")
const hd8 = document.getElementById("hd8")
const hd9 = document.getElementById("hd9")

 function multiplyNumbers (d,e){
    hd7 . textContent = d
    hd8 . textContent = e
    hd9 . textContent = e * d
    console.log ( d, e)
 }
 
 function divdeNumbers ( f,g){
    hd7.textContent = f
    hd8.textContent = g
    hd9.textContent = f/g
    console.log (f, g)
 }

 button3. addEventListener( "click", function(){
multiplyNumbers (20, 20)
 })
 button4. addEventListener*("click", function(){
divideNumbers (100,10)
 })


 
 

 // Variable 
 // Arrow Function
 // Implicit return in Arrow function
 // Variable scope in javascript it is wewre you divine your variable and understand

 // Var outside a {} qulibracket is call global 
// block variable is a variable divind inside {} bracket and its call local block variables
 const variable = "hello"
 function greetName(){
    let time = 12
    if(time<=12){
        var timee2 = 23
       console.log(timee2)
    }else{
        console.log(timee2 + 1)
        console.log("no greet")
    }
        console.log (timee2)
    
 }

 greetName();

 //the syntax of arrow function is diffrenct
 const fnxName = () => void
    console.log("arrow function")
    fnxName();

   // assignment
   // const classes = {
       // person1: {
           // name:"joy", desc: "she is..."
       // }
        
    //}
    //assignment arrey of object promt a user to inpute number beetween 0 and 5
    const classes = [
       { name: "joy",desc: "she is..."},
        {name: "chief", desc: "he is..."},
       { name:" maxwell", desc:"he is..."},
        {name: "Triumph",desc: "he is...."},
    ]
 


const personality = [
 { name: "joy",
 Age: "25 years",
 Hight:"tall ",
 complaxtion: "dark",
 relationship: " married"
 },

 personnality2 = {
 name: "chief",
 age: " 40 years old",
Hight:  " tall",
complaxtion: "fair",
relationship: "unknown"
 },
 personality3 = {
 name: "maxwell",
 age: "70 years old",
 Hight: " ofcouse tall",
 complaxtion: " fair",
 relationship: " single",
 },
 personality4 = {
 name: "Triumph",
 age: "20 years old",
 Hight: "  tall",
 complaxtion: " litlle fair",
 relationship: " unknown",
 },
 personality5 = {
 name: "favour",
 age: "19 years old",
 Hight: " ofcouse average hight",
 complaxtion: " fair",
 relationship: " is like married",
},
]

console.log(personality[2])

// map function 
// map function method: is a javascript function that literat over and array and execuit a provided function on each of the element.
// its dosent modified the array.

const fruits =["mango", "orange", "pineapple","indomie","watermelonm"]

fruits .map(function(element, dex, ray){
    return element;
})
//console.log(fruit);
console.log(fruits);


const personality1 = [
    { name: "joy",
    Age: "25 years",
    Hight:"tall ",
    complaxtion: "dark",
    relationship: " married"
    },
   
     {
    name: "chief",
    age: " 40 years old",
   Hight:  " tall",
   complaxtion: "fair",
   relationship: "unknown"
    },
      {
    name: "maxwell",
    age: "70 years old",
    Hight: " ofcouse tall",
    complaxtion: " fair",
    relationship: " single",
    },
    {
    name: "Triumph",
    age: "20 years old",
    Hight: "  tall",
    complaxtion: " litlle fair",
    relationship: " unknown",
    },
    {
    name: "favour",
    age: "19 years old",
    Hight: " ofcouse average hight",
    complaxtion: " fair",
    relationship: " is like married",
   },
   ]
   personality1 .map(function(element, dex, ray){
    return element;
})
   console.log(personality1)



// fine function
// an array function that cheacks for first element that satisfies a conition
const num = [2,3,4,5,6,7,10]
//const fin = num.find((num) =>{
    //return num > 5
//})
//console.log (fin)

const fin = num. find(function(element, index, array){
    return element > 5
})
console.log (fin)

const nums = [2,3,4,5,6,7,10]
const fill = nums.find (function(element, index, array){
    return element < 5
})
console.log (fill)
const ask = prompt("search for name")
const fil = personality1.filter(function(elem){
    if (ask === elem.name){
        return elem.relationship;
    }
})
console.log (fil)

const asks = prompt("search for name")
const fils = personality1.filter( function(elem){
    if (ask ===elem.name){
       // return elem.desc
       console.log(elem.age)

    }
})

console.log (fil)
//filter function
//Array distructuring
// object distructouring
// spread in objects array literal and function calls

function para(...re){
    console.log(...re)
}
para(2, 5,6,5,84,38)

const num1 = [2,3,4,5,6,7,10]
//console.log(...num1)
const num2 = [4, 5, 12, 45]
console.log(...num1, ...num2)

//reset params
// Array destructuring
const vehicle = ['mustang', ' f 150',' expendition']

// old way 
// console.log ( vehicle [0])
// console.log ( vehicle [1])
// console.log ( vehicle [2])
//end of old way

// new way
 const  [aa , bb ,cc ] = vehicle
 console.log (aa)
 console.log ( bb)
 console.log (cc)


 // object destructoring
 const pep = {name: "joy", 
    desc: "she is not okay"
}
const { name, desc} =pep
console.log (name)
console.log( desc)

// assignment destructure this
const user = {
id : 1, 
 profile:{
 username : "johndoe", 
 location : "new york"
}
}
console.log (user.profile.username);
console.log (user.profile.location);


// Destructuring parameter 
// without destructuring
//function greett(user){
   // console.log(`Hello ${user.name} your age is ${user.age}`)
//}
//const use = greett({name:"vivian", age: 20})
//console.log (user)

//with destructuring
//function greet2({name,age}){
   // return `hello ${name} your age is ${age}`
    //console.log//  (`hello ${name} your age is ${age}`)
//}
//const user2 = greet2({name: "Vicky", age: 30})
//console.log (user2)

// defult parameter
function greet3(names ="vicky1",age = 30){
    return `hello ${names} your age is ${age}`
}
console.log(greet3())



// Reduce function: a javascript methon that iterates through each element in an array 
//and applies a callback function, accumulating a single output,mostly used for summing array, flattening array etc
//reduce function take 2 propery its calld accumulator

const red = [2 ,4 ,6 ,7]
const red2 = red.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
},4)
console.log (red2)


//React/  geet it is a vasion control system that help you keep track



  






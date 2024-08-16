const Person=require('./basic5')
const { time } = require("console")
const { runInThisContext } = require("vm")


var marks=[12,13,15,25,35]
console.log(marks[2])
console.log(marks.length)

console.log(marks.push(23))

console.log(marks)

console.log(marks.pop());

console.log(marks)

console.log(marks.indexOf(35))
console.log("***************************************************")
var sum=0
for(let i=0;i<marks.length;i++)
{
    sum=sum+marks[i]
    
}
console.log(sum)

console.log("********Reduce function******************")
 
let final=marks.reduce((sum,marks)=>sum+marks,0)
  console.log(final)


console.log(marks.reverse())

//console.log(marks.findIndex(35))

console.log(marks.slice(1,5))

console.log(marks.includes(13))

let number=[12,10,18, 11, 24]
let number1= number.sort()
console.log(number1)

let sortevent= number.map(number=>number*3)
console.log(sortevent)
let sum1=sortevent.reduce((sum,sortevent)=>sum+sortevent,0)
console.log(sum1)

let str="TEST "
console.log(str.length)
console.log(str.includes('S'))
console.log(str.trim())
console.log(str.charAt(2))

let day="SUCHETA"
let day1=parseInt(day)
console.log(day1)

let day2= '22'
let day3='30'
let daydiff= parseInt(day3) - parseInt(day2)
console.log(daydiff)

let person={
  firstname:'sucheta',
  lastname:'Vyavahare',
  age:45
  // fullname: function(){

  //   //this.firstname + this.lastname
  //   console.log(this.firstname + this.lastname)
  // }

}
//console.log(person.fullname())
console.log(person.firstname)
person.gender ='female'
console.log(person)

delete person.gender
console.log(person)

person.address='Pune'
console.log(person)

delete person.address
console.log(person)

for(let key in person)
{
  console.log(person[key])
}

let person3=new Person('seema','test')
console.log(person3.firstname)
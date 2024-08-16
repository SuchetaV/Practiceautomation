module.exports=class Person{

firstname='sucheta'
lastname='Vyavahare'

get location()
{

    return 'canada'
}
get address()
{
    return 'ABC Street 3737'
}

  constructor(firstname, lastname)
  {
 this.firstname=firstname,
 this.lastname=lastname
  
 }
}

let person=new Person("chris","Jones")
let person1=new Person("Pal","Peter")
console.log(person1)
console.log(person)
console.log(person.firstname)
console.log(person.location)
console.log(person.address)
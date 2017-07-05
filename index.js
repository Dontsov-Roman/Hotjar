Array.prototype.sortByAge = sortByAgePrototype;

let arr = [
  {
    name: "Vasya",
    age: 15
  },
  {
    name: "Petya",
    age: 13
  },
  {
    name: "Alex",
    age: 65
  },
  {
    name: "Lesha",
    age: 64
  }
];

function sortByAge(a, b){
	return a.age - b.age;
}

function sortByAgePrototype(){
	if(this.sort)
  	this.sort(sortByAge);
	return this;
}

console.log(arr.sortByAge());

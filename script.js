//complete this code
class Animal {
	constructor(species){
		this._species=species;
	}
	 get species() {
    return this._species;;
  }

	makeSound(){
		console.log(`The ${species} makes a sound`);
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
	makeSound() {
    console.log(`sound the ${species} makes`); // Corrected to use the getter method
  }
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
	makeSound() {
    console.log(`sound the ${species} makes`); 
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

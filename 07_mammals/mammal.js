var Mammal = function(name){
	this.name = name;
	this.offspring = [];
};

Mammal.prototype.sayHello = function(){
	return "My name is " + this.name + ", I'm a Mammal"
};

Mammal.prototype.haveBaby = function(){
	var child = new Mammal("Baby " + this.name);
	this.offspring.push(child);
	return child;
	//Can this be done w.o defining var child?
};

var Cat = function(name, color){
	Mammal.call(this, name);
	this.color = color;
	//**QUESTION: Why are we calling the Mammal Constructor Function when we're also supposed to
	//have the Cat constructor function inhereit from the Mammal Constructor function
	//using the Object.create method?
	//Aren't the two methods (a. calling constructor vs. b. using Object.create) mutually exlucisve?
};

Cat.prototype.haveBaby = function(color){
	var child = new Cat("Baby " + this.name, color);
	this.offspring.push(child);
	return child;
	//Can this be done w.o defining var child?
};
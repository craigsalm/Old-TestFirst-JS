describe("Mammal class", function() {
  var myMammal;

  beforeEach(function() {
    myMammal = new Mammal("Joe");
  });

  it("should take name as a parameter", function() {
    expect(myMammal.name).toEqual("Joe");
  });

  it("should have an array called offspring", function() {
    expect(myMammal.offspring).toEqual([]);
  });

  it("should have a sayHello function on it's prototype", function() {
    expect(myMammal.sayHello()).toEqual("My name is Joe, I'm a Mammal");
    // these functions should be on Mammal.prototype
    expect(myMammal.hasOwnProperty("sayHello")).toEqual(false);
  });

  it("should have a haveBaby function", function() {
    child = myMammal.haveBaby()
    expect(child.name).toEqual("Baby Joe");
    expect(myMammal.offspring).toEqual([child]);

    // these functions should be on Mammal.prototype
    expect(myMammal.hasOwnProperty("haveBaby")).toEqual(false);
  });
});


// Cat's are going to inherit from Mammal's, all the capabilities that
// Mammals have, Cat's will also have.
describe("Cat class", function() {
  var cat;

  beforeEach(function() {
    spyOn(Mammal, 'call').andCallThrough();
    cat = new Cat("Garfield", "yellow");
  });

  // TEST FOR Mammal.call() in Cat, spy in beforeEach
  it("calls the Mammal Constructor", function() {
    // Inside the Cat constructor function, you should also call `Mammal.call`
    // and use the Mammal constructor function to create the basic parts of `Cat`
    expect(Mammal.call).toHaveBeenCalled();
  });

  it("should have a name, color in its constructor", function() {
    expect(cat.name).toEqual("Garfield");
    expect(cat.color).toEqual("yellow");
  });

  it("should have an array called offspring from the Mammal constructor", function() {
    expect(cat.offspring).toEqual([]);
  });

  // it("should inherit all methods from Mammal", function() {
  //   expect(typeof Cat.prototype.haveBaby).toEqual("function");
  //   expect(Cat.hasOwnProperty('toString')).toEqual(false);
  // });

  // Here we're testing that you're using `Object.create` instead of `new`
  // That's because if you used `new Mammal()` then you'd have
  it("should use Object.create inherits methods from Mammal", function() {
    expect(Cat.prototype.offspring).toEqual(undefined);
  });

  it('should have its prototype object have a constructor property that points back to Cat', function() {
    expect(Cat.prototype.constructor).toEqual(Cat);
  });


  // Even though Cat inherits a lot of things from Mammal, we can override methods
  // that we want to do different things.
  it("should have it's own haveBaby method that takes only a color", function() {
    green_cat = cat.haveBaby("green");
    expect(cat.offspring).toEqual([green_cat]);
    expect(green_cat.name).toEqual("Baby Garfield");
    expect(green_cat.color).toEqual("green");

  });

  it("the cat haveBaby is actually a Cat and not a Mammal", function() {
    blue_cat = cat.haveBaby("blue");
    expect(blue_cat instanceof Cat).toEqual(true);
    expect(blue_cat.constructor).toEqual(Cat);
  });

});

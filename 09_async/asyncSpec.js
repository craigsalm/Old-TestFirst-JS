var futureMaker = function() {
  return new Future(function(resolve, reject) {
    setTimeout(function() {
      resolve("in the future");
    }, 100);
  });
};

futureMaker.then(function(output) {
  // expect output to be 100;
}, );

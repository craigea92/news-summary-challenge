var test = { constructorName: "", description: "" };

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error( "[ " + test.constructorName +" ] "+ test.description + " is not truthy");
    } else {
      return console.log( "[ " + test.constructorName +" ] "+  test.description + "!")
    }
  }
};
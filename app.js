(function() {

  return {
    events: {
      'app.created':'exampleFunction'
    },

    exampleFunction: function() {

      // this.store('key') // getter
      // this.store('key', dataObject) // setter

      // Set variable exampleVariable to object with {key}:{value} pair
      var exampleVariable = {
          'exampleKey': 'exampleValue'
      };

      this.store('exampleKey', exampleValue); // set value of 'exampleKey' to 'exampleValue' - save to localStorage
      console.log(this.store('exampleKey')); // get value of 'exampleKey' - print to console
      
    }
  };

}());

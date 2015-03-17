(function() {

  return {
    events: {
      'app.activated':'doSomething'
    },

    doSomething: function() {

      // this.store('key') // getter
      // this.store('key', dataObject) // setter

      var OAuthBearerToken = {
          'Bearer': 'token_goes_here'
      };

      this.store('Bearer', OAuthBearerToken); // setter
      console.log(this.store('Bearer')); // getter
      
    }
  };

}());

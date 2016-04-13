if (Meteor.isClient) {
    AutoForm.debug()
}


var autoFormHooksObject = {

  // Called when any submit operation succeeds
  onSuccess: function(formType, result) {
    Router.go('/');
  },

  onSubmit: function(doc){
      Accounts.createUser({username: doc.username, password: doc.password, profile:{name: doc.profile.fname + " "+ doc.profile.lname}},
        function (err) {
          if (err){
            console.log(err);
          }
          else {
            var user = Accounts.find(doc.username);
            user.profile.name = doc.profile.name;
            user.profile.lastName = doc.profile.lastName;
            return this.done();
          }
        });
  }

  // Called when any submit operation fails
  //onError: function(formType, error) {},
};


AutoForm.hooks({
  registerUser: autoFormHooksObject
})

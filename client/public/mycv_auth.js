Template.navbar.events({
    'click .btn-logout':function(){
        Meteor.logout();
        Router.go('/logout');
    }
});



Template.login.events({
    'submit .login-form': function (event) {
        event.preventDefault();


        var email = event.target.username.value;
        var password = event.target.password.value;
        console.log("Login with username:["+email+"]["+password+"]")
        Meteor.loginWithPassword(email,password,function(err){
            if(!err) {
                Router.go('/');
            }
            else console.log(err);
        });
    },
    'click .btn-register':function(event){
        event.preventDefault();
        Router.go('/register');
    },
    'click .btn-facebook':function(event){
        event.preventDefault();
        Meteor.loginWithFacebook(function(err){
            if(!err) {
                Router.go('/');
            }
            else
              console.log("skerr: "+ err);
        });
    },
    'click .btn-twitter':function(event){
        event.preventDefault();
        Meteor.loginWithTwitter(function(err){
            if(!err) {
                Router.go('/');
            }
            else
              console.log("skerr: "+ err);
        });
    },
    'click .btn-google':function(event){
        event.preventDefault();
        Meteor.loginWithGoogle(function(err){
            if(!err) {
                Router.go('/');
            }
            else
              console.log("skerr: "+ err);
        });
    }
});



Template.register.helpers({
    error:function(){
        return "prova";
    }
});

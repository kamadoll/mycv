//  Server


  Meteor.startup(function () {

    // Admin functions need access to our user tables
    Houston.add_collection(Meteor.users);
    Houston.add_collection(Houston._admins);

    // code to run on server at startup
      Modules.server.configureServices();
  });

// Social Login Configs
// Social Login Configs
const services = Meteor.settings.private.oAuth;

const configure = function(){
  if ( services ) {
    for( var service in services ) {
      ServiceConfiguration.configurations.upsert( { service: service }, {
        $set: services[ service ]
      });
    }
  }
};

Modules.server.configureServices = configure;

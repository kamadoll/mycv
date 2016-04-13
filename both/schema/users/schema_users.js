UserSchema = {};

SimpleSchema.debug = true;

UserSchema.UserCountry = new SimpleSchema({
    name: {
        type: String
    },
    code: {
        type: String,
        regEx: /^[A-Z]{2}$/
    }
});

UserSchema.UserProfile = new SimpleSchema({
    name: {
        type: String,
        label: "Full Name",
        optional: true
    },
    fname: {
      type: String,
      label: "First Name",
      optional: true
    },
    lname: {
        type: String,
        label: "Last Name",
        optional: true
    },
    birthday: {
        type: Date,
        label: "Date of birth",
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['Male', 'Female','Other','Unspecified'],
        optional: true
    },
    country: {
        type: UserSchema.UserCountry,
        optional: true
    }
});

UserSchema.User = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/,
        optional: true
    },
    emails: {
        type: [Object],
        // this must be optional if you also use other login services like facebook,
        // but if you use only accounts-password, then it can be required
        optional: true
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    password: {
      type: String,
      autoform: {
        afFieldInput: {
          type: 'password'
        }
      },
      optional: true
    },
    createdAt: {
        type: Date,
        label: "Date profile created",
        denyUpdate: true,
        autoValue: function() {
          if ( this.isInsert ) {
            return new Date;
          }
        }
    },
    updatedAt: {
      type: Date,
      label: "Date profile updated",
      autoValue: function() {
        if ( this.isUpdate ) {
          return new Date;
        }
      },
      optional: true
    },
    profile: {
        type: UserSchema.UserProfile,
        optional: true
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // In order to avoid an 'Exception in setInterval callback' from Meteor
    heartbeat: {
        type: Date,
        optional: true
    }
});

Meteor.users.attachSchema(UserSchema.User);

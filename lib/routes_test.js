// Used by iron:router

Router.route('hello2', {
    path: '/test/:_id/:note?',
    template: 'hello2',
    data: function(){
      //console.log("["+this.params._id + "]["+ this.params.note+"]");
      _id = this.params._id;
      templateData = {
          _id: _id,
          note: this.params.note
      };
      return templateData;
    }
});

Router.route('/test', function () {
    this.render('hello');
});

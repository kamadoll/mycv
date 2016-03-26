// Used by iron:router
Router.configure({
    // options go here
        layoutTemplate: 'main'
});


/**
 * Auth stuff
 */
Router.route('/register', function () {
    this.render('register');
});

Router.route('/login', function () {
    this.render('login');
});

Router.route('/', function () {
    this.render('home');
});

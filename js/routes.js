angular.module('app.routes', []).config(function($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider.state('tabs.home', {
        url: '/home',
        views: {
            'home-tab': {
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            }
        }
    }).state('tabs.create', {
        url: '/create',
        views: {
            'create-tab': {
                templateUrl: 'templates/create.html',
                controller: 'createCtrl'
            }
        }
    }).state('tabs.details', {
        url: '/details/:poemId',
        views: {
            'home-tab': {
                templateUrl: 'templates/details.html',
                controller: 'detailsCtrl'
            }
        }
    }).state('tabs.profile', {
        url: '/profile',
        views: {
            'profile-tab': {
                templateUrl: 'templates/profile.html',
                controller: 'profileCtrl'
            }
        }
    }).state('tabs', {
        url: '/tab',
        templateUrl: 'templates/tabs.html',
        abstract: true
    })
    $urlRouterProvider.otherwise('/tab/home');
});
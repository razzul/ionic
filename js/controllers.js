angular.module('app.controllers', [])

.controller('homeCtrl', 
    function($scope, Poems) {
        $scope.list = Poems.all();
        $scope.star = function(poem) {
            Poems.star(poem);
        };
    }
)

.controller('createCtrl', 
    function($scope, Poems, Translate, $ionicPopup, $location) {
        $scope.poem = {"title":"", "details":""};
        $scope.add = function(){
            var poem = Poems.add($scope.poem);
            $scope.poem = {"title":"", "details":""};
            console.log(poem);
            $scope.showAlert(poem);
            
        }
        $scope.showAlert = function(poem) {
           var alertPopup = $ionicPopup.alert({
             title: 'সফলভাবে তৈরি',
             template: poem.title +' সৃষ্টি হয় পরীক্ষা করার জন্য এখানে ক্লিক করুন'
           });

           alertPopup.then(function(res) {
             $location.path('/tab/details/'+poem.id);
           });
        };
        $scope.translateDetails = function(text) {
            this.poem.details = Translate.run(text);
        };
        $scope.translateTitle = function(text) {
            this.poem.title = Translate.run(text);
        };
        
        
    }
)

.controller('detailsCtrl', 
    function($scope, $stateParams, Poems) {
        $scope.details = Poems.get($stateParams.poemId);
    }
)

.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {}
])

.controller('side-menu21Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {}
])
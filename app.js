var app = angular.module('app',[]);

app.controller('IndexCtrl', function($scope){
    $scope.todos = [];
    $scope.newTodo = '';
    $scope.addTodo = function() {
        $scope.todos.push({
            todo: $scope.newTodo,
            done: false
        });

        $scope.newTodo ='';
    }

    $scope.done = function(todo) {
        todo.done = !todo.done;
    }
});
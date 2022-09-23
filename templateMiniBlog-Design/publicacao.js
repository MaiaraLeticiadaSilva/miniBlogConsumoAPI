angular.module('blog', []);
angular.module('blog').controller('Rest', function($scope, $http, $location){
    var absUrl=$location.absUrl();
    var endereco=absUrl.split('#/');
    console.log(endereco);
    $http.get('https://api-fake-blog.herokuapp.com/postagem/'+url[1]).success(function(data){
        $scope.publicacao=data;
        console.log(data);
    })
});
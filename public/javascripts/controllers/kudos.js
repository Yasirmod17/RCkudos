var myApp = angular.module('kudosApp', [])

myApp.controller('kudosController_1',['$scope', '$http',
  function($scope,$http){
    
    $scope.kudosBody = ""
    $scope.sentOrNah = "Not sent"
    $scope.submitKudos = function(){
    	console.log($scope.kudosBody)
      var content= $scope.kudosBody
      var myJson = {content: content}
      console.log(myJson)
    	 $http.post('postKudos',myJson)
    	 .then(
    	 	function(response){
    	 		console.log("SENT!!!")
          console.log(response)
          $scope.kudosBody = ""
          Materialize.toast('Kudos Posted!', 4000) // 4000 is the duration of the toast
    	 		$scope.sentOrNah = response.data
    	 	},
    	 	function(response){
    	 		console.log(response);
        		console.log("THERE WAS AN ERROR")
            $scope.sentOrNah = "Sorry Kudos Agent is unavailable"
      		
      		})
    }

  }]);


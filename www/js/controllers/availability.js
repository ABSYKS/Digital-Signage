angular.module('availability', [])

  .controller('AvailabilityCtrl', function ($scope, $state, BookingData, RoomData, TimeData) {
    $scope.goSetTime = function() {
      $state.go("tab.config");
    };

    $scope.checkIn = function() {
      $state.go("tab.checkIn");
    };

    $scope.checkOut = function() {
      $state.go("tab.checkOut");
    };

    $scope.room = RoomData.getRoom();

    var time = TimeData.getTime();
    console.log(time);
    $scope.isAvailable = RoomData.isAvailable(time);
    $scope.currentBooking = RoomData.getCurrentBooking(time);
    

    console.log($scope.currentBooking);

    if($scope.isAvailable) {
      $scope.displayState = "Available";
    }
    else {
      $scope.displayState = $scope.currentBooking.owner;
    }

    $scope.nextBooking = RoomData.getNextBooking(time);
  });



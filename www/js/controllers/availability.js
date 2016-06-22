angular.module('availability', [])

  .controller('AvailabilityCtrl', function ($scope, $state, BookingData, RoomData, TimeData) {
    $scope.goSetTime = function() {
      $state.go("tab.config");
    };

    $scope.checkIn = function() {
      BookingData.checkIn($scope.currentBooking);
    };

    $scope.checkOut = function() {
      BookingData.checkOut($scope.currentBooking);
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



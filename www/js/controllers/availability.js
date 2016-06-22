angular.module('availability', [])

  .controller('AvailabilityCtrl', function ($scope, $state, BookingData, RoomData, TimeData) {
    $scope.goSetTime = function() {
      $state.go("tab.config");
    };

    $scope.bookings = BookingData.all();

    var time = TimeData.getTime();
    $scope.isRoomAvailable = RoomData.isAvailable(time);
    $scope.currentBooking = RoomData.getCurrentBooking(time);

    if($scope.isAvailable) {
      $scope.displayState = "Available";
    }
    else {
      $scope.displayState = $scope.currentBooking.owner;
    }

    $scope.nextBooking = RoomData.getNextBooking(time);
  });



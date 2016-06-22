angular.module('availability', [])

  .controller('AvailabilityCtrl', function ($scope, BookingData, RoomData, TimeData) {

    $scope.bookings = BookingData.all();
    $scope.room = RoomData.getRoom();
    var time = TimeData.getTime();
    $scope.isAvailable = RoomData.isAvailable(time);

    $scope.currentBooking = RoomData.getCurrentBooking(time);

    if($scope.isAvailable) {
      $scope.displayState = "Available";
    }
    else {
      $scope.displayState = $scope.currentBooking.owner;
    }

    $scope.nextBooking = RoomData.getNextBooking(time);
    $scope.checkedIn = BookingData.isCheckedIn($scope.currentBooking);
  });



angular.module('availability', [])

  .controller('AvailabilityCtrl', function ($scope, BookingData, RoomData, TimeData) {
    $scope.bookings = BookingData.all();

    var time = TimeData.getTime();
    $scope.isRoomAvailable = RoomData.isAvailable(time);
    $scope.currentBooking = RoomData.getCurrentBooking(time);
    $scope.nextBooking = RoomData.getNextBooking(time);
  });



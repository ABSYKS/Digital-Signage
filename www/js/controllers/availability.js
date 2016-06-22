angular.module('availability', [])

  .controller('AvailabilityCtrl', function ($scope, BookingData, TimeData, RoomData) {
    $scope.testBooking = BookingData.getBooking(0);
    $scope.now = TimeData.now();
    $scope.bookings = BookingData.all();
    
    $scope.isRoomAvailable = RoomData.isAvailable(TimeData.now());
    $scope.currentBooking = RoomData.getCurrentBooking(TimeData.now())

  });



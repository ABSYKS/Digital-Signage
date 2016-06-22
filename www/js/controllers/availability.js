angular.module('availability', [])

  .controller('AvailabilityCtrl', function ($scope, BookingData, RoomData, TimeData) {
    TimeData.setTime(new Date("2012-04-23T19:31:00"));
    TimeData.setTestMode(true);
    
    $scope.bookings = BookingData.all();
    
    var time = TimeData.getTime();
    $scope.isRoomAvailable = RoomData.isAvailable(time);
    $scope.currentBooking = RoomData.getCurrentBooking(time);
    $scope.nextBooking = RoomData.getNextBooking(time);
  });



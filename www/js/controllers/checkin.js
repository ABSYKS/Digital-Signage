angular.module('checkIn', [])

  .controller('CheckInCtrl', function ($scope, $location, BookingData, RoomData, TimeData) {
    $scope.checkIn = BookingData.checkIn(RoomData.getCurrentBooking(TimeData.getTime()));
    $location.path("/availability");
  })
  .controller('CheckOutCtrl', function ($scope, $location, BookingData, RoomData, TimeData) {
    $scope.checkOut = BookingData.checkOut(RoomData.getCurrentBooking(TimeData.getTime()));
    $location.path("/availability");
  });

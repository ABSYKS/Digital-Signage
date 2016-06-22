angular.module('checkIn', [])

  .controller('CheckInCtrl', function ($scope, $state, BookingData, RoomData, TimeData) {
    $scope.checkIn = BookingData.checkIn(RoomData.getCurrentBooking(TimeData.getTime()));
    
    $state.go("tab.dash");
  })
  .controller('CheckOutCtrl', function ($scope, $state, BookingData, RoomData, TimeData) {
    $scope.checkOut = BookingData.checkOut(RoomData.getCurrentBooking(TimeData.getTime()));
    $state.go("tab.dash");
  });

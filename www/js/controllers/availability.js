angular.module('availability', [])

  .controller('AvailabilityCtrl', function ($scope, $state, BookingData, RoomData, TimeData) {
    $scope.goSetTime = function() {
      $state.go("tab.config");
    };

    $scope.checkIn = function() {
      BookingData.checkIn($scope.currentBooking);
      $scope.reload();
    };

    $scope.checkOut = function() {
      BookingData.checkOut($scope.currentBooking, $scope.time);
      $scope.reload();
    };

    $scope.bookRoom = function() {
      $state.go("tab.book");
    };

    $scope.room = RoomData.getRoom();

    $scope.reload = function() {
      var time = TimeData.getTime();
      $scope.time = time;
      $scope.isAvailable = RoomData.isAvailable(time);
      $scope.currentBooking = RoomData.getCurrentBooking(time);

      if ($scope.isAvailable) {
        $scope.displayState = "Available";
      }
      else {
        $scope.displayState = $scope.currentBooking.owner;
      }

      $scope.nextBooking = RoomData.getNextBooking(time);
    };

    $scope.time = TimeData.getTime();

    $scope.reload(); //inital load

  });



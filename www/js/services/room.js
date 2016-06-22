angular.module('room', [])
  .factory('RoomData', function (BookingData) {
    var rooms = [{
      id: 0,
      name: 'Room1',
      bookings: BookingData.all()
    }];

    return {
      getCurrentBooking: function (timeStamp) {
        var that = this;
        return rooms[0].bookings.filter(function (booking) {
          return BookingData.isRunning(booking, timeStamp);
        });
      },

      isAvailable: function (timeStamp) {
        var filteredBookings = this.getCurrentBooking(timeStamp);
        return filteredBookings.length == 0;
      }
    }
  });

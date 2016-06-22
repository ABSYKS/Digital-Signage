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

      getFutureBookings: function (timeStamp) {
        return rooms[0].bookings.filter(function (booking) {
          return booking.startTime > timeStamp;
        });
      },

      getNextBooking: function (timeStamp) {
        var futureBookings = this.getFutureBookings(timeStamp);
        var sortedBookings = futureBookings.sort(function(bookingA, bookingB) {
          return bookingA.startTime - bookingB.startTime;
        });

        if (sortedBookings.length > 0) {
          return sortedBookings[0];
        }

        return null;
      },

      isAvailable: function (timeStamp) {
        var filteredBookings = this.getCurrentBooking(timeStamp);
        return filteredBookings.length == 0;
      }
    }
  });

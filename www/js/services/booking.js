angular.module('booking', [])

  .factory('BookingData', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var bookings = [{
      id: 0,
      startTime: new Date('2012-04-23T18:25:00'),
      endTime: new Date('2012-04-23T19:25:00'),
      owner: 'James',
      checkedIn: false
    }, {
      id: 1,
      startTime: new Date('2012-04-23T14:30:00'),
      endTime: new Date('2012-04-23T15:30:00'),
      owner: 'James',
      checkedIn: false
    }, {
      id: 2,
      startTime: new Date('2012-04-23T12:00:00'),
      endTime: new Date('2012-04-23T13:15:00'),
      owner: 'James',
      checkedIn: false
    }];

    return {
      all: function () {
        return bookings;
      },

      isRunning: function (booking, timeStamp) {
        return booking.startTime < timeStamp && booking.endTime > timeStamp;
      },

      bookingStartsSoon: function (booking, timeStampNow) {
        if (this.isRunning(booking, timeStampNow)) {
          return false;
        } // if a booking is running it can't be upcoming
        return this.comingSoon(booking.startTime, timeStampNow);
      },

      bookingEndsSoon: function (booking, timeStampNow) {
        if (booking.startTime < timeStampNow && booking.endTime > timeStampNow) {
          return this.comingSoon(booking.endTime, timeStampNow);
        }
        return false;
      },

      comingSoon: function (timeStamp, timeStampNow) {
        return (timeStamp - 3600) > timeStampNow;
      },

      getBooking: function (bookingId) {
        for (var i = 0; i < bookings.length; i++) {
          if (bookings[i].id === parseInt(bookingId)) {
            return bookings[i];
          }
        }
        return null;
      }
    };
  })

  .factory('TimeData', function () {
    return {
      now: function () {
        return new Date("2012-04-23T18:31:00");
      },
    }
  });

function Booking(pa){
  this.pa = pa;

}

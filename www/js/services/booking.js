angular.module('booking', [])

  .factory('BookingData', function () {
    var idCount = 2;
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
      startTime: new Date('2012-04-23T20:00:00'),
      endTime: new Date('2012-04-23T21:15:00'),
      owner: 'James',
      checkedIn: false
    }, {
      id: 3,
      startTime: new Date('2012-04-23T14:30:00'),
      endTime: new Date('2012-04-23T15:30:00'),
      owner: 'James',
      checkedIn: false
    }, {
      id: 4,
      startTime: new Date('2016-06-22T17:30:00'),
      endTime: new Date('2016-06-22T18:00:00'),
      owner: 'John',
      checkedIn: false
    }, {
      id: 5,
      startTime: new Date('2016-06-22T18:00:00'),
      endTime: new Date('2016-06-22T18:30:00'),
      owner: 'Brian',
      checkedIn: false
    }, {
      id: 6,
      startTime: new Date('2016-06-22T18:30:00'),
      endTime: new Date('2016-06-22T23:00:00'),
      owner: 'Julie',
      checkedIn: false
    }, {
      id: 7,
      startTime: new Date('2016-06-22T09:30:00'),
      endTime: new Date('2016-06-22T10:00:00'),
      owner: 'Jack',
      checkedIn: false
    }, {
      id: 8,
      startTime: new Date('2016-06-24T10:30:00'),
      endTime: new Date('2016-06-24T11:00:00'),
      owner: 'Simon',
      checkedIn: false
    }];

    return {
      all: function () {
        return bookings;
      },

      isRunning: function (booking, timeStamp) {
        return booking.startTime <= timeStamp && booking.endTime > timeStamp;
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
      },

      checkIn: function (booking) {
        booking.checkedIn = true;
      },

      checkOut: function (booking) {
        booking.checkedIn = false;
        booking.endTime = new Date();
      },

      isCheckedIn: function(booking) {
        return booking.checkedIn;
      },

      getNextId: function() {
        return idCount++;
      },

      add: function (startTime, endTime, owner) {
        var newBooking = {
          id: this.getNextId(),
          startTime: startTime,
          endTime: endTime,
          owner: owner,
          checkedIn: false
        }
        bookings.push(newBooking);
      }
    };
  });



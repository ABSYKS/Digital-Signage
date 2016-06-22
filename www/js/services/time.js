angular.module('time', [])
  .factory('TimeData', function () {
    var testMode = true;
    var time;

    return {
      setTime: function (time) {
        this.time = time;
      },

      getTime: function () {
        if (this.testMode) {
          return this.time;
        }

        return new Date();
      },
      
      setTestMode: function(enable) {
        this.testMode = enable;
      }
    }
  });

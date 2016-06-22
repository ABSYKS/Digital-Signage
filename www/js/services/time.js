angular.module('time', [])
  .factory('TimeData', function () {
    var testMode = false;
    var time;

    return {
      setTime: function (time) {
        this.time = time;
      },

      getTime: function () {
        if (this.testMode) {
          console.log("it's all aboyut time: " + this.time);
          return this.time;
        }

        return new Date();
      },

      setTestMode: function(enable) {
        this.testMode = enable;
      }
    }
  });

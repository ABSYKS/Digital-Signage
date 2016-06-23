angular.module('config', [])

  .controller('ConfigCtrl', function ($scope, $state, TimeData) {
    $scope.setTime = function() {
      var stamp = $scope.form.date + "T" + $scope.form.time;
      console.log('stamp:'+stamp);
      TimeData.setTime(new Date(stamp));
      TimeData.setTestMode(true);
      $state.go("tab.dash");
    };

    var currentTime = TimeData.getTime();
    $scope.form = {
      date: '2016-06-22',
      time: '17:30:00'
    };
  });

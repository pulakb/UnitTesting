angular.module('myApp.myServices', [])
    .factory('notificationsArchive', function () {
        var archivedNotifications = [];
        return {
            archive: function (notification) {
                archivedNotifications.push(notification);
            },
            getArchived: function () {
                return archivedNotifications;
            },
            emptyArchived: function () {
                (archivedNotifications.length > 0) ? (archivedNotifications.length = 0) : null;
            }
        }
    })
    .factory('httpBasedService', function ($http) {
        return {
            sendMessage: function (msg) {
                return $http.get('somthing.json?msg=' + msg)
                            .then(function (result) {
                                return result.data;
                            });
            }
        };
    })
    .factory('foo', function () {
        return {
            bar: function(msg) {
                // do something here.
            }
        };
    })
    .factory('myService', function (foo) {
        return {
            test: function(msg) {
                foo.bar(msg);
            }
        };
    })
    .factory('users', function ($http) {
        return {
            get: function () {
                return $http.get('/data/users.json')
                            .then(function(response){
                                return response.data;
                            });
            }
        };
    });
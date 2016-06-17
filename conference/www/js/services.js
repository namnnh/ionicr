angular.module('starter.services', ['ngResource'])

    .factory('Session1', function ($resource) {
        return $resource('http://localhost:5000/sessions/:sessionId');
    })

    .service('LoginService', function ($q) {
       
            this.loginUser= function (name, pw) {
                var deferred = $q.defer();

                if (name == 'user' && pw == 'secret') {
                    deferred.resolve('Welcome ' + name + '!');
                } else {
                    deferred.reject('Wrong credentials.');
                }
                return deferred.promise;

        }
    });
(function() {
    'use strict';
    angular
        .module('app')
        .factory('dataservice', dataservice);
    dataservice.$inject = ['$http', 'envConfig'];
    /* @ngInject */
    function dataservice($http, envConfig) {
        var service = {
            searchForRecals: searchForRecals
        };
        return service;
        ////////////////
        function searchForRecals(params, page) {
            return $http({
                url: envConfig.restServiceBaseURL,
                method: "GET",
                params: {
                    searchTerm: params.searchTerm,
                    status: params.status,
                    classification: params.classification,
                    state: params.state,
                    page: page
                }
            })
                .success(searchComplete)
                .error(searchFailed);

            function searchComplete(response) {
                return response;
            }

            function searchFailed(error) {
                console.log('search failed:  ' + error.data);
            }
        }
    }
})();
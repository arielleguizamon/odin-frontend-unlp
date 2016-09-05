angular.module('store-directives-dataset')
.directive("resultResources", function() {
    return {
        restrict: "E",
        templateUrl: "directives/datasets/result-resources.html",
        controller: function($scope) {
            $scope.toggleDropdown = function(event) {
                if ($(event.target).next().hasClass('dataset-additional-info-table-inactive')) {
                    $(event.target).next().addClass('dataset-additional-info-table-active');
                    $(event.target).next().removeClass('dataset-additional-info-table-inactive');
                    $(event.target).addClass('dataset-additional-info-active');
                } else {
                    $(event.target).next().addClass('dataset-additional-info-table-inactive');
                    $(event.target).next().removeClass('dataset-additional-info-table-active');
                    $(event.target).removeClass('dataset-additional-info-active');
                }
            };

            $scope.toggleDropdownInverse = function(event) {
                if ($(event.target).prev().prev().hasClass('dataset-additional-info-table-inactive')) {
                    $(event.target).prev().prev().addClass('dataset-additional-info-table-active');
                    $(event.target).prev().prev().removeClass('dataset-additional-info-table-inactive');
                    $(event.target).addClass('dataset-additional-info-active');
                } else {
                    $(event.target).prev().prev().addClass('dataset-additional-info-table-inactive');
                    $(event.target).prev().prev().removeClass('dataset-additional-info-table-active');
                    $(event.target).removeClass('dataset-additional-info-active');
                }
            };

            $scope.type_resource = 'charts';
            $scope.toogleTypeResource = function(type, obj) {
                obj.type_resource = type;
            }

            $scope.toggleResourceSelected = function(obj, resource) {
                obj.resource_selected = resource;
            }

            $scope.toogleTypeChart = function(type, obj) {
                obj.type_chart = type;
            };

            $scope.center = {
                lat: -34.603722,
                lng: -58.381592,
                zoom: 13
            };
        },
        controllerAs: "resources"
    };
});
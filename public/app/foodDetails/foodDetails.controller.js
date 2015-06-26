(function() {
    'use strict';
    angular
        .module('app')
        .controller('FoodDetailsCtrl', FoodDetailsCtrl);
    FoodDetailsCtrl.$inject = ['resultDataStoreService'];
    /* @ngInject */
    function FoodDetailsCtrl(resultDataStoreService) {
        var self = this;

        self.selectedFoodItem = resultDataStoreService.getSelectedItem();
        self.formatResultDate = formatResultDate;
        self.getClassName = getClassName;
        self.getClassDescription = getClassDescription;
        self.getClassStyle = getClassStyle;

        console.log(self.selectedFoodItem);

        function formatResultDate(resultDate) {
            var dateNums = resultDate.split('');
            dateNums.splice(4, 0, '-');
            dateNums.splice(7, 0, '-');
            return dateNums.join('');
        }

        function getClassName(classCode){
            var className;
            if (classCode=='Class I'){
                className = 'Dangerous or Defective';
            }
            else if (classCode=='Class II'){
                className = 'Threat or Sickness';
            }
            else if (classCode=='Class III'){
                className = 'Labeling or Legal';
            }
            return className;
        }

        function getClassDescription(classCode){
            var classDescription;
            if (classCode=='Class I'){
                classDescription = 'A dangerous or defective product that predictably could cause serious health problems or death.';
            }
            else if (classCode=='Class II'){
                classDescription = 'This product might cause a temporary health problem, or pose only a slight threat of a serious nature.';
            }
            else if (classCode=='Class III'){
                classDescription = 'This product is unlikely to cause any adverse health reaction, but violates FDA labeling or manufacturing laws.';
            }
            return classDescription;
        }

        function getClassStyle(classCode){
            var classStyle;
            if (classCode=='Class I'){
                classStyle = 'bk-clr-one';
            }
            else if (classCode=='Class II'){
                classStyle = 'bk-clr-two';
            }
            else if (classCode=='Class III'){
                classStyle = 'bk-clr-three';
            }
            return classStyle;
        }
    }
})();
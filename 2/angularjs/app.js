(function() {
    'use strict';
    
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject=['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){


        var Buy=this;
      
        Buy.items=ShoppingListCheckOffService.getToBuyItems();


       
        Buy.buyItem=function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var Bought=this;
        
        Bought.items=ShoppingListCheckOffService.getBoughtItems();


        
    }

    function ShoppingListCheckOffService(){
        var service=this;
        var toBuy=[
            { itemName: "Milk", itemQuantity: "2 Gallons" },
            { itemName: "Eggs", itemQuantity: "2 dozens" },
            { itemName: "Muffins", itemQuantity: "10 pieces" },
            { itemName: "Orange", itemQuantity: "5 pieces" },
            { itemName: "bananas", itemQuantity: "8 pieces" }
        ];

        var alreadyBoughtItems=[];
        
        service.buyItem=function(itemIndex){
            var item=toBuy[itemIndex];

            alreadyBoughtItems.push(item);
            toBuy.splice(itemIndex,1);
        };

        service.getToBuyItems=function() {
            return toBuy;
        }
        service.getBoughtItems=function(){
            return alreadyBoughtItems;

        }
    }
    

})();
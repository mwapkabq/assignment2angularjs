(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyCtrl = this;

    toBuyCtrl.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyCtrl.buyItem = function (index) {
      ShoppingListCheckOffService.buyItem(index);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;

    boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    // Initial list of "to buy" items
    var toBuyItems = [
      { name: "Cookies", quantity: 10 },
      { name: "Chips", quantity: 5 },
      { name: "Soda Bottles", quantity: 3 },
      { name: "Apples", quantity: 6 },
      { name: "Cereal Boxes", quantity: 2 }
    ];

    var boughtItems = [];

    service.buyItem = function (index) {
      var item = toBuyItems[index];
      toBuyItems.splice(index, 1);
      boughtItems.push(item);
    };

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };
  }

})();

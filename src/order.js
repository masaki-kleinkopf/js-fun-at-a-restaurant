
function takeOrder(order, orderList){
  if(orderList.length < 3) {
  return orderList.push(order)
};
};

function refundOrder(orderNum, orderList){
  for (var i = 0; i<orderList.length; i++){
    if (orderNum === orderList[i].orderNumber){
      orderList.splice(i,1);
      }
  }
}

function listItems(orders){
  var orderNames = "";
  for (var i = 0; i < orders.length; i++){
    if (i === orders.length -1){
      orderNames +=`${orders[i].item}`
    }else{
    orderNames += `${orders[i].item}, `
  }
  }
  return orderNames
}

function searchOrder(ordersList, order){
  var trueFalse = 0
  for (var i = 0; i<ordersList.length;i++){
    if (ordersList[i].item === order){
      trueFalse++
    }
  };
  if (trueFalse === 1){
    return true;
  }else {
    return false;
  }
};
//wondering how to refactor this...

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}

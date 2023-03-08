const order = {
  customer: {
    address: {
      city: {}
    }
  }
};

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// } else if (order && order.customer && order.customer.address && order.customer.address.city){
//   console.log('City is already declared');
// }

let condition = order && order.customer && order.customer.address && !order.customer.address.city ? 'City is required' : 'City is already declared';

console.log(condition);
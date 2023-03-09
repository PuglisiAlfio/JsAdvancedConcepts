const order = {
  customer: {
    address: {

    }
  }
};

if (order?.customer?.address) {
  console.log('City is required');
 } else {
  console.log('niente da fare');
 }


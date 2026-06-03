import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practise.js';

Promise.all([
    loadProductsFetch(),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })
]).then((value)=>{
    console.log(value);
    renderOrderSummary();
    renderPaymentSummary();
});



/*
loadProducts(()=>{
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/
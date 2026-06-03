import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practise.js';


async function loadPage(){
    try{
        //throw 'error1';

        await loadProductsFetch();

        const value=await new Promise((resolve,reject)=>{
            //throw 'error2';
            loadCart(()=>{
                //reject('error3');
                resolve('value3');
            });
        });
    }catch(error){
        console.log('Unexpected error. please try again later.');
        console.log(error);
    }
    renderOrderSummary();
    renderPaymentSummary();
}

loadPage();
/*
loadPage().then((value)=>{
    console.log('next step');
    console.log(value);
});
/*
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
*/


/*
loadProducts(()=>{
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/
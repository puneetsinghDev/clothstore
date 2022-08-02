// import axios from 'axios';

// import Shopify from "@shopify/shopify-api";

var axios = require('axios');


export const test2  = async () => {
  console.log("test2 file");
  

  
  // let url = process.env.HOST

  // const api_url = "https://api.publicapis.org/entries"

  // const res = await axios.get(api_url, {

  //     //body: body,

  //     variables: null,

  //     crossDomain: true

  //   }, {

  //       headers: {

  //         'Content-Type': 'application/json',

  //       }

  //     })

  // return res.data.entries;



  // let url = process.env.HOST

  // const body = {
  //     product:{
  //         "title": "puneetREst",
  
  //             "handle" : "puneet",
  
  //             "body_html" : "<strong>Good Collection</strong>",
  
  //             "variants" : [
  
  //                 {
  
  //                 "price" : 550,
  
  //                 "sku" : 6,
  
  //                 "compare_at_price" : 540
  
  //                 }
  
  //                 ]
  
  //     }
  // }
  
  
  
  //   const api_url ="https://408e0dee92a839c0862dd6e04ea25f68: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@dev-store-data.myshopify.com/admin/api/2022-07/products.json"
  //   const res = await axios.get(api_url, {
       
  //         body: body,
  //         variables: null,
  //         crossDomain: true
  //       }, {
  //           // headers: {
  //           //   'Content-Type': 'application/json',
  //           //   'X-Shopify-Access-Token': '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',
    
  //           // }
  //         })



  // var axios = require('axios');

  var data = JSON.stringify({
  
    "product": {
  
      "title": "Black + Decker 19” Stackable Caddy and Organizer",
  
      "body_html": "<p>Black + Decker 19” Stackable Caddy and Organizer</p>",
  
      "vendor": "BLACK+DECKER",
  
      "product_type": "",
   
      "variants": [
  
        {
  
          "title": "Default Title",
  
          "price": "86.00",
  
          "sku": "BDST19900FF",
  
          "inventory_policy": "deny",
  
          "compare_at_price": "136.00",
  
          "option1": "Default Title",
  
          "inventory_quantity": 30
  
        }
  
      ]
  
    }
  
  });
  
  
  
  var config = {
  
    method: 'post',
  
    url: 'https://dev-store-data.myshopify.com/admin/api/2021-10/products.json',
  
    headers: { 
  
      'X-Shopify-Access-Token': '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', 
  
      'Content-Type': 'application/json'
  
    },
  
    data : data
  
  };
  
  
  
  axios(config)
  
  .then(function (response) {
  
    console.log(JSON.stringify(response.data));
  
  })
  
  .catch(function (error) {
  
    console.log(error);
  
  });






  console.log("done")


  return 123;


}
 import axios from 'axios';

  export const test  =  async (excel_data) => {
    

//  let url = process.env.HOST

//   const api_url = "https://api.publicapis.org/entries"

//   const res = await axios.get(api_url, {

//       //body: body,

//       variables: null,

//       crossDomain: true

//     }, {

//         headers: {

//           'Content-Type': 'application/json',

//         }

//       })

//   return res.data.entries;








let url = process.env.HOST

const body = {
    product:{
        "title": "puneet",

            "handle" : "puneet",

            "body_html" : "<strong>Good Collection</strong>",

            "variants" : [

                {

                "price" : 550,

                "sku" : 6,

                "compare_at_price" : 540

                }

                ]

    }
}



  const api_url = "https://dev-store-data.myshopify.com/admin/api/2022-07/products.json"
  const res = await axios.get(api_url, {
     
        body: body,
        variables: null,
        crossDomain: true
      }, {
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': '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',
  
          }
        })



    
  

  return "done";
















        // return "!!Upload Complted!!" ;
      
  }
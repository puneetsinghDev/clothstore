import { gql, useMutation } from "@apollo/client";
const ADD_NEW_PRODUCT = gql`

mutation productCreate($input: ProductInput!) {

    productCreate(input: $input) {
      product {
        title
        handle
        variants(first: 1) {
          edges {
            node {
              sku
              price
              compareAtPrice  
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }

  }`;

export default function Addproduct_test() {

    console.log("iam in");
    
  const [productCreate, {data,loading,error}] = useMutation(ADD_NEW_PRODUCT, { 
   
    variables: {
    
        input: {
          title: "puneettests",
          handle: "puneet1",
          variants: {   
            price: 6,
            sku: "10",
            compareAtPrice: 4
          }
        }
      },
  });
 
    if(loading) return 'Submitting....';
    if(error) return `Submission error ! ${error.message}`;
    if(data) return `Product Added Successfully!`;
 
  return (

    <div>

       <button onClick={productCreate }>add</button>

    </div>

  )

}




import axios from "axios";


async function getProducts(offset) {
    
 const response =  await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=9`)

 return response.data
}

async function getSingleProduct(id) {
    try {
        const response =  await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)

        return response.data
    } catch (error) {
       return null 
    }
   
   
   }

export default {getProducts,getSingleProduct}
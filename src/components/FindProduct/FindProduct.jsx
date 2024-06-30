import React,{useState} from 'react';
import api from '../../Api/Products'
import Product from '../Product/Product';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import s from '../Store/Store.module.css'
const FindProduct = () => {
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(false);
    async function fetchSingleProduct(e) {
        e.preventDefault()

const inputValue = e.currentTarget.elements.id.value
try {
    setLoading(true)
    const product = await api.getSingleProduct(+inputValue)
    console.log(product);
if(Array.isArray(product) || product===null){
    Notify.failure('Product is not defined!')
setProduct(null)

return
}
    setProduct(product)
   
} catch (error) {
    
}finally{
    e.target.elements.id.value = ''
    setLoading(false)
}
 
    }


    return (
        <div>
            <form action="submit" onSubmit={fetchSingleProduct}>
          <input name='id' type="number" />
          <button  type="submit">Find</button>
          </form>

          {product ? <Product data={product}/>: 'No product yet!'}
          {loading && <div className={s.loaderWrap}> <span className={s.loader}></span></div>}
        </div>
    );
}

export default FindProduct;

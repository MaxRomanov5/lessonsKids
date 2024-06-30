import React,{useState,useEffect} from 'react';
import api from '../../Api/Products'
import Product from '../Product/Product';
import s from './Store.module.css'
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const Store = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);
const [offset, setOffset] = useState(0);
const [buttonHide, setButtonHide] = useState(true);

function loadMore() {
    setOffset(offset+9)
    
}

useEffect(() => {
    
    async function loadMoreProducts () {

        try {
            setLoading(true)
            const res = await api.getProducts(offset)
            if(res.length<9){
setButtonHide(false)
Notify.warning('You reached the end!')
            }
            const newArray = [...products,...res]
            setProducts(newArray)
        } catch (error) {
            
        } finally{
setLoading(false)
        }
  
    }  
    loadMoreProducts()


}, [offset]);



useEffect(() => {
    async function fetchProducts () {

        try {
            setLoading(true)
            const res = await api.getProducts(offset)
            setProducts(res)
        } catch (error) {
            
        } finally{
setLoading(false)
        }
  
    }  
fetchProducts()
}, []);



    return (
        <>
            <h1>Product Page</h1>
          {loading && <div className={s.loaderWrap}> <span className={s.loader}></span></div>}
            {products.length>0 ? <div><ul className={s.productList}>
                {products.map((dataProduct)=>{
                    return <Product key={dataProduct.id} data={dataProduct} />
                })

                }
            </ul>
            {buttonHide && <button onClick={loadMore} className={s.btn}>Load More</button>}
            </div>:'No products yet!'}

        </>
    );
}

export default Store;

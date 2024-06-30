import React from 'react';
import s from './Product.module.css'
const Product = ({data}) => {

    const {price,title,description,id,category:{name,image}}= data
    return (
        <li className={s.productWrap}>
<h2>Name: {title}</h2>
<p>Id: {id}</p>
<p>Price: {price}</p>

<h3>Category</h3>
<p>Name: {name}</p>
<img className={s.productImg} src={image} alt="category img" />
<p>Description: {description}</p>
        </li>
    );
}

export default Product;

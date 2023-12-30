import React, { useState } from 'react'
import { popularProducts } from '../data'
import styled from 'styled-components';
import Product from './Product';

const Container=styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`;

const Products = ({cat,filters,sort}) => {
  // console.log(cat,filters,sort);
  const [products,setProducts]=useState([]);
  return (
    <Container>
        {popularProducts.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products
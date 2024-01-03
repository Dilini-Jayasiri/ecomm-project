import { addToCart, emptyCart, removeFromCart } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector} from 'react-redux'
import { useEffect } from 'react';

function Main() {
  const dispatch =  useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component",data)
  // const product = {
  //   name:"i phone",
  //   catogory:"mobile",
  //   price:"100k",
  //   color:"red"
  // }

  useEffect(()=>{
    dispatch(productList())
  },[])

  return (
    <div>
      {/* <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
      <div>
      <button onClick={() => dispatch(removeFromCart(product.name))}>Remove From cart</button>
      </div>*/}
      <div>
      <button onClick={() => dispatch(emptyCart())}>Emptycart</button>
      </div> 
      <div className='product-container'>
        {
          data.map((item)=>(
             <div className='product-item'>
              <img src={item.photo} alt=""/>
              <div>Name: {item.name}</div>
              <div>Color: {item.color}</div>
              <div>Price: {item.price}</div>
              <div>Category: {item.category}</div>
              <div>Brand: {item.Brand}</div>
              <div>
                <button onClick={() => dispatch(addToCart(item))}>Add to cart</button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove to cart</button>
              </div>
          </div>))
        }
      </div>
    </div>
  );
}

export default Main;

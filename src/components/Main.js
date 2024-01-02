import { addToCart, emptyCart, removeFromCart } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector} from 'react-redux'

function Main() {
  const dispatch =  useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component",data)
  const product = {
    name:"i phone",
    catogory:"mobile",
    price:"100k",
    color:"red"
  }
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
      <div>
      <button onClick={() => dispatch(removeFromCart(product.name))}>Remove From cart</button>
      </div>
      <div>
      <button onClick={() => dispatch(emptyCart())}>Emptycart</button>
      </div>
      <div>
      <button onClick={() => dispatch(productList())}>Call Product List</button>
      </div>
    </div>
  );
}

export default Main;

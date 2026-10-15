
import { getProducts } from '../data/product';
import ProductCard from '../components/ProductCard';

function Home() {
  const products = getProducts();
  return (
    <div className='flex flex-col gap-10 bg-gray-200'>
          <div className='flex flex-col text-center mt-10 gap-4'>
            <h1 className='text-2xl font-bold'>Welcome to ShopCart</h1>
            <p className='text-sm text-gray-500'>Discover Amazing products at great prices</p>
          </div>
          <div className='flex flex-col gap-5'>
                <h1 className='font-semibold text-xl'>Our Products</h1>
                <div className='grid grid-cols-3 gap-10 '>
                    {products.map((product)=>(
                      <ProductCard  product={product} key={product.id}/>
                    ))}
                </div>

          </div>
    </div>
  )
}

export default Home
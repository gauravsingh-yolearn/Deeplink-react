import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 style={{ marginBottom: 20 }}>Products</h1>

      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.thumbnail} width={120} alt={product.title} />

          <h3>{product.title}</h3>
          <p>₹ {product.price}</p>

          <Link to={`/product?id=${product.id}`}>
            <button className="button">View Details</button>
          </Link>

          <button
            className="button"
            onClick={() => addToCart(product)}
            style={{ marginLeft: 10 }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

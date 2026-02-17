import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface ProductDetail {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export default function Product() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('id');

  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;

    fetch(`https://dummyjson.com/products/${productId}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p>Loading...</p>;

  if (!product) return <p>Product not found</p>;

  return (
    <div className="card">
      <img src={product.thumbnail} width={200} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>₹ {product.price}</p>
    </div>
  );
}

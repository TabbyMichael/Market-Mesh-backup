import React from 'react';
import { Card, CardContent } from './Card';
import { Button } from './Button';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  currency: string;
  image: string;
  seller: string;
  onAddToCart?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  currency,
  image,
  seller,
  onAddToCart,
}) => {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(price / 100);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      <CardContent>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">by {seller}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(price, currency)}
          </span>
          <Button onClick={onAddToCart} size="sm">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

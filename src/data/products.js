// src/data/products.js

export const products = [
  {
    id: "1",
    name: "Classic Leather Watch",
    description:
      "Handcrafted Italian leather strap with Swiss movement. A timeless accessory for every occasion.",
    price: 249.99,
    originalPrice: 329.99,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
    category: "Accessories",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Minimalist Sneakers",
    description:
      "Premium white leather sneakers with cushioned sole. Effortless style meets all-day comfort.",
    price: 189.99,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
    category: "Footwear",
    rating: 4.6,
    reviews: 89,
  },
  {
    id: "3",
    name: "Aviator Sunglasses",
    description:
      "Polarized lenses with titanium frame. UV400 protection with unmatched clarity.",
    price: 159.99,
    originalPrice: 199.99,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    category: "Accessories",
    rating: 4.7,
    reviews: 203,
    badge: "Sale",
  },
  {
    id: "4",
    name: "Leather Bifold Wallet",
    description:
      "Full-grain leather wallet with RFID protection. Slim profile with ample card storage.",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
    category: "Accessories",
    rating: 4.5,
    reviews: 67,
  },
  {
    id: "5",
    name: "Canvas Weekender Bag",
    description:
      "Waxed canvas with leather trim. Perfect for weekend getaways and overnight trips.",
    price: 219.99,
    originalPrice: 279.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    category: "Bags",
    rating: 4.9,
    reviews: 45,
    badge: "New",
  },
  {
    id: "6",
    name: "Merino Wool Scarf",
    description:
      "Luxuriously soft merino wool in a versatile neutral tone. Lightweight warmth for any season.",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&q=80",
    category: "Apparel",
    rating: 4.4,
    reviews: 156,
  },
  {
    id: "7",
    name: "Ceramic Pour-Over Set",
    description:
      "Handmade ceramic dripper with thermal carafe. Elevate your morning ritual.",
    price: 94.99,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    category: "Lifestyle",
    rating: 4.8,
    reviews: 92,
    badge: "Trending",
  },
  // Change the image property for id: "8" to this:
{
  id: "8",
  name: "Wireless Earbuds Pro",
  description: "Active noise cancellation with 30-hour battery. Crystal clear audio in a compact design.",
  price: 149.99,
  originalPrice: 199.99,
  // FIXED: Direct link to an image file
  image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
  category: "Electronics",
  rating: 4.6,
  reviews: 312,
  badge: "Sale",
},
];

export const categories = [
  "All",
  "Accessories",
  "Footwear",
  "Bags",
  "Apparel",
  "Lifestyle",
  "Electronics",
];

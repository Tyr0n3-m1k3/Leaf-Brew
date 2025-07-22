import { useState } from 'react'; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { Input } from "@/components/ui/input"; import { ShoppingCart, Search, Star } from "lucide-react";

const products = [ { id: 1, name: "Jasmine Green Tea", description: "Floral aroma with light, sweet taste", price: 10, image: "https://example.com/jasmine.jpg", rating: 4.5 }, { id: 2, name: "Earl Grey Black Tea", description: "Citrus-scented black tea", price: 12, image: "https://example.com/earlgrey.jpg", rating: 4.7 } ];

export default function TeaStore() { const [search, setSearch] = useState(''); const [cart, setCart] = useState([]);

const filteredProducts = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

const addToCart = (product) => { setCart([...cart, product]); };

return ( <div className="p-4 max-w-screen-lg mx-auto"> <header className="flex items-center justify-between mb-6"> <h1 className="text-3xl font-bold">Leaf & Brew</h1> <div className="flex gap-2 items-center"> <Input placeholder="Search teas..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-64" /> <Search className="text-gray-500" /> <div className="relative"> <ShoppingCart /> <span className="absolute top-[-6px] right-[-6px] text-sm text-white bg-green-600 rounded-full w-5 h-5 flex items-center justify-center"> {cart.length} </span> </div> </div> </header>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredProducts.map(product => (
      <Card key={product.id} className="rounded-2xl shadow-md">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-t-2xl h-40 w-full object-cover"
        />
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
          <p className="text-sm text-gray-600 mb-2">{product.description}</p>
          <div className="flex items-center mb-2 text-yellow-500">
            <Star className="w-4 h-4" />
            <span className="ml-1">{product.rating}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-green-700 font-bold text-lg">${product.price}</span>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</div>

); }


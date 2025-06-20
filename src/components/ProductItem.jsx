const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-xl shadow-md p-4 flex flex-col items-center gap-2">
      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-600">Rp {product.price.toLocaleString()}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
      >
        Tambah ke Keranjang
      </button>
    </div>
  );
};

export default ProductItem;

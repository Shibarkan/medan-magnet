const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex justify-between items-center bg-white rounded-lg shadow px-4 py-2">
      <div>
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-gray-500">Rp {item.price.toLocaleString()}</p>
      </div>
      <button
        onClick={() => onRemove(item)}
        className="text-red-500 hover:underline text-sm"
      >
        Hapus
      </button>
    </div>
  );
};

export default CartItem;

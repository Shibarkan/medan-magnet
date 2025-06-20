import CartItem from "./CartItem";

const Cart = ({ cartItems, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Keranjang Belanja</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Keranjang masih kosong.</p>
      ) : (
        <>
          <div className="flex flex-col gap-3 mb-4">
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} onRemove={onRemove} />
            ))}
          </div>
          <div className="text-right font-semibold text-lg">
            Total: Rp {total.toLocaleString()}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

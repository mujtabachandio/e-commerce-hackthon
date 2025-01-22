"use client";

interface CartSidebarProps {
  cart: { name: string; quantity: number }[];
  isVisible: boolean;
  onClose: () => void;
  onUpdateCart: (updatedCart: { name: string; quantity: number }[]) => void;
}

export default function CartSidebar({
  cart,
  isVisible,
  onClose,
  onUpdateCart,
}: CartSidebarProps) {
  const handleIncreaseQuantity = (index: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    onUpdateCart(updatedCart);
  };

  const handleDecreaseQuantity = (index: number) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      onUpdateCart(updatedCart);
    }
  };

  const handleRemoveItem = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    onUpdateCart(updatedCart);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform transform ease-in-out duration-300 z-50 ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 relative h-full flex flex-col">
        <h2 className="text-lg font-bold mb-4">Cart</h2>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 focus:outline-none"
          aria-label="Close cart sidebar"
        >
          ✕
        </button>
        {cart.length > 0 ? (
          <ul className="flex-1 overflow-y-auto">
            {cart.map((item, index) => (
              <li key={index} className="mb-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleIncreaseQuantity(index)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition duration-200"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleDecreaseQuantity(index)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition duration-200"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="text-red-500 hover:text-red-700 transition duration-200"
                    aria-label="Remove item from cart"
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="flex-1 text-center text-gray-600">No items in the cart.</p>
        )}
        {cart.length > 0 && (
          <div className="mt-4 flex justify-between items-center">
            <button className="bg-black text-white py-2 px-6 rounded-lg w-full">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

import { createContext, useContext, useState, type ReactNode } from "react";
import type { ProductDataType } from "./ProductData";

type CartItem = ProductDataType & { quantity: number };

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: ProductDataType, quantity: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: ProductDataType, quantity: number) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    //احتفظ بكل المنتجات التي لا تساوي رقم المنتج المراد حذفه
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    //ي مكون داخل <Context.Provider> يمكنه الوصول للقيمة (value) التي يوفرها الـ Provider.
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

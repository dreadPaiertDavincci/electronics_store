import { createContext, useContext, useState, type ReactNode } from "react";

interface Product {
  id: number;
  cardH3Title: string;
  cardImage: string;
  star: string;
  Price: string;
}

interface FavouriteContextType {
  favourites: Product[];
  toggleFavourite: (product: Product) => void;
}

const FavouriteContext = createContext<FavouriteContextType | undefined>(undefined);

export const FavouriteProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<Product[]>([]);

  const toggleFavourite = (product: Product) => {
    setFavourites((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        // ✅ إذا مش موجود ينضاف
        return [...prev, product];
      }
    });
  };

  return (
    <FavouriteContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourite = () => {
  const context = useContext(FavouriteContext);
  if (!context) throw new Error("useFavourite must be used within FavouriteProvider");
  return context;
};

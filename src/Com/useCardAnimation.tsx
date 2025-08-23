// useCardAnimation.ts
import { useEffect, type RefObject } from "react";
import gsap from "gsap";

export const useCardAnimation = (containerRef: RefObject<HTMLDivElement>, deps: any[] = []) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll<HTMLDivElement>(".product-card");

    cards.forEach((card, index) => {
      const tl = gsap.timeline({ delay: index * 0.15 }); // كل كرت يتأخر شوي

      const image = card.querySelector<HTMLImageElement>(".product-image");
      const title = card.querySelector<HTMLElement>(".product-title");
      const price = card.querySelector<HTMLElement>(".product-price");
      const star = card.querySelector<HTMLElement>(".product-star");

      // حركة الكرت الرئيسية: من اليمين مع دوران خفيف وارتداد
      tl.fromTo(
        card,
        { opacity: 0, x: 100, scale: 0.9, rotation: 2 },
        { opacity: 1, x: 0, scale: 1, rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" }
      );

      // حركة الصورة: صعود تدريجي مع fade-in
      if (image)
        tl.fromTo(
          image,
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" },
          "-=0.7" // تزامن مع بداية الكرت
        );

      // حركة العنوان: slide من الأسفل مع fade-in
      if (title)
        tl.fromTo(
          title,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "-=0.6"
        );

      // حركة السعر: slide من الأسفل بشكل أخف
      if (price)
        tl.fromTo(
          price,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
          "-=0.5"
        );

      // حركة النجوم: slide خفيف مع scale
      if (star)
        tl.fromTo(
          star,
          { opacity: 0, y: 10, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.7)" },
          "-=0.4"
        );
    });
  }, deps);
};

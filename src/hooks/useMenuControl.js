import { useState, useRef, useEffect } from "react";

// এই হুকটি মেনু ওপেন/ক্লোজ এবং স্ক্রল পজিশন সংরক্ষণ করার কাজ করে
export function useMenuControl() {
  // মেনু খোলা আছে কিনা ট্র্যাক করতে useState
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // স্ক্রল পজিশন সংরক্ষণ করতে useRef ব্যবহার করা হয়েছে
  const scrollPosition = useRef(0);

  // মেনু ওপেন করলে: স্ক্রল পজিশন ধরে রাখা এবং body কে ফিক্স করে দেওয়া
  const openMenu = () => {
    scrollPosition.current = window.scrollY; // বর্তমানে যেই স্ক্রলে আছি, সেটি ধরে রাখি
    document.body.style.overflow = "hidden"; // ব্যাকগ্রাউন্ড স্ক্রল বন্ধ করে দেই
    setIsMenuOpen(true); // মেনু ওপেন করে দিই
  };

  // মেনু ক্লোজ করলে: আগের স্ক্রলে ফিরে যাই এবং স্ক্রল চালু করি
  const closeMenu = () => {
    setIsMenuOpen(false); // মেনু বন্ধ করি
    document.body.style.overflow = ""; // স্ক্রল আবার চালু করি

    // মেনু ক্লোজ করার পর আগের পজিশনে স্ক্রল করে ফিরে যাই
    setTimeout(() => {
      window.scrollTo({ top: scrollPosition.current, behavior: "instant" });
    }, 0);
  };

  // যদি ESC বাটন চাপা হয়, তাহলে মেনু বন্ধ করা হবে
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEsc);

    // cleanup: কম্পোনেন্ট আনমাউন্ট হলে event listener সরিয়ে ফেলি
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);

  // বাইরে থেকে ব্যবহার করার জন্য তিনটি ফাংশন রিটার্ন করা হয়
  return { isMenuOpen, openMenu, closeMenu };
}
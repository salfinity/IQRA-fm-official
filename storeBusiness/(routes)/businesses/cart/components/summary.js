"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Currency from "/src/components/ui/currency";
import useCart from "/hooks/use-cart";
import { toast } from "react-hot-toast";
import { Button } from "/src/components/ui/button";
import { FaMobileAlt, FaMoneyCheck } from "react-icons/fa";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams?.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (searchParams?.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.open(response.data.url, "_blank");
  };

  {
    const onMpesaCheckout = async () => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/mpesacheckout`,
        {
          productIds: items.map((item) => item.id),
        }
      );

      window.open(response.data.url, "_blank");
    };
  }

  return (
    <div className="mt-16 rounded-lg bg-[#ffd480] dark:bg-[#664400] px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">
        Order summary
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-neutral-500 pt-4">
          <div className="text-base font-bold text-neutral-900 dark:text-white">
            Order total
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="w-full rounded-full gap-3 border-2 border-black text-black  bg-[#e69900] mt-6"
      >
        Card Checkout <FaMoneyCheck />
      </Button>
      <Button
        onClick={onMpesaCheckout}
        disabled={items.length === 0}
        className="w-full rounded-full gap-3 border-2 border-black text-black dark:text-gray-600 bg-[#00e600] dark:bg-[#00e600] mt-6"
      >
        M-pesa <FaMobileAlt />
      </Button>
    </div>
  );
};

export default Summary;

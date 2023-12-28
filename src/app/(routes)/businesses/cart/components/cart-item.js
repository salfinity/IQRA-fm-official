import Image from "next/image";
import { X } from "lucide-react";

import IconButton from "/src/components/ui/icon-button";
import Currency from "/src/components/ui/currency";
import useCart from "/hooks/use-cart";

const CartItem = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data?.id);
  };

  return (
    <li className="flex py-6 border-b border-neutral-700 dark:border-neutral-500 ">
      <div
        className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48 border
      border-neutral-600 bg-neutral-200 dark:bg-[#737373]"
      >
        <Image
          fill
          src={data?.images[0]?.url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton
            className="bg-neutral-200 dark:bg-[#737373]"
            onClick={onRemove}
            icon={<X size={15} />}
          />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black dark:text-neutral-200">
              {data?.name}
            </p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-neutral-800 dark:text-neutral-200">
              {data?.color?.name}
            </p>
            <p className="ml-4 border-l text-neutral-800 dark:text-neutral-200 pl-4 text-gray-500">
              {data?.size?.name}
            </p>
          </div>
          <Currency value={data?.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;

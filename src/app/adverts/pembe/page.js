import Image from "next/image";
import React from "react";
import pembeImg from "public/projects/pembe.jpg";
import { RiRadioButtonFill, RiArrowGoBackFill } from "react-icons/ri";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "Pembe Maize Millers",
  description: "Here are some details about Pembe.",
};

function qytPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="max-w-6xl h-[50vh] relative">
        <div className="absolute top-0 left-0 max-w-6xl h-[50vh] bg-black/70 z-10" />
        <Image
          className="rounded-lg"
          layout="fill"
          objectFit="cover"
          src={pembeImg}
          alt="/"
        />
        <div className="font-serif text-black absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2 font-extrabold text-4xl">PEMBE MAIZE MILLERS</h2>
          <h3>Maize and Wheat flour millers</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="font-serif col-span-4">
          <p className="text-neutral-700 dark:text-neutral-300">OUR STORY</p>
          <h2>
            <span className="text-red-600 font-serif text-5xl font-extrabold pr-3">
              Company
            </span>
            <span className="text-5xl text-neutral-700 dark:text-neutral-300 font-extrabold">
              Description
            </span>
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            A recognized brand name in many households over the decades, Pembe
            is renowned for its consistent quality and excellent services. From
            its humble beginnings in 1989, in a small section of Nairobis
            Industrial Area, Pembe Flour Mills Ltd has through the years gone on
            to achieve the status of one of Kenyas leading manufacturers of
            flour and animal feeds.Pembe manufactures a wide range of products
            which include: Home baking flour; Maize meal; Biscuit flour; Bakers
            flour & Atta mark one and other specialized products for food
            processing industries including fortified maize meal. For more
            information contact us on +254 20 551 933 | customercare@pembe.co.ke
          </p>
          <a
            href="https://www.businesslist.co.ke/company/32309/pembe-flour-mills-ltd-wheatmaizesorghum-finger-millet-and-feed-mill-pl/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="border-4 text-neutral-700 dark:text-neutral-300 dark:border-white border-black rounded-md px-8 py-2 mt-4 mr-8">
              Website
            </button>
          </a>
          <a
            href="https://www.businesslist.co.ke/company/32309/pembe-flour-mills-ltd-wheatmaizesorghum-finger-millet-and-feed-mill-pl/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="border-4 text-neutral-700 dark:text-neutral-300 dark:border-white border-black rounded-md px-8 py-2 mt-4 mr-8">
              Contacts
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="text-neutral-700 dark:text-neutral-300 p-2">
            <p className="text-center font-bold pb-2">Reach out</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <FaInstagramSquare size={35} className="pr-3" />
                <a
                  href="https://www.facebook.com/PembeFlourMills/"
                  target="_blank"
                >
                  Instagram
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <FaWhatsappSquare size={35} className="pr-3" />
                <a
                  href="https://api.whatsapp.com/send?phone=your_phone_number"
                  target="_blank"
                >
                  WhatsApp
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BiLogoFacebookSquare size={40} className="pr-3" />
                <a
                  href="https://www.facebook.com/PembeFlourMills/"
                  target="_blank"
                >
                  Facebook
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <ImLocation size={35} className="pr-3" />
                <a href="https://goo.gl/maps/zcsLECdqArFuosbR7" target="_blank">
                  Location-kenya
                </a>
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <IoIosCall size={35} className="pr-3" />
                <a href="tel:+254700114444">Call</a>
              </p>
            </div>
          </div>
        </div>
        <button className="border-4 dark:border-white border-black rounded-full px-4 py-2">
          <Link href="/profiles/advertisements">
            <p className="underline text-black dark:text-white cursor-pointer items-center flex pl-16 gap-2">
              <RiArrowGoBackFill className="text-bold" /> Back
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default qytPage;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";

export const metadata = {
  title: "Sheikhs | Esteemed Scholars",
  description: "Here are some Ulamaas who are Esteemed.",
};

function ScholarsPage() {
  const imageWidth = 220; // Set a reasonable width for your images
  const imageHeight = 200;

  return (
    <div className="container mt-3 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h1
          className="uppercase  text-3xl tracking-[15px] text-center mt-10 mx-auto font-semibold  
      justify my-8 sm:text-3xl md:text-4xl text-accent dark:text-accentDark"
        >
          <span
            className="underline decoration-6 
          decoration-orange-400"
          >
            ESTEEMED
          </span>{" "}
          SCHOLARS{" "}
        </h1>
        <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-4">
          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/sheikhs/sudais.jpg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Sheikh Abdurrahman Sudais
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Imam Makka Al-Mukarram
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/sheikhs/shuraim.jpeg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Sheikh Saud Al-Shuraim
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Imam Makka Al-Mukarram
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/sheikhs/ajmi.jpg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Ahmad bin Ali Al-Ajmi
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Imam Madinah Al-Munawwar
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/sheikhs/basit.jpeg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Abdul Basit Abd us-Samad
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Quran reciter
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/sheikhs/maher.jpeg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Maher Al-Muaiqly
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Imam Makka Al-Mukarram
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/sheikhs/sufi.jpg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Sheikh Abdirrashid Ali Sufi
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Quran Reciter
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/sheikhs/uthmanmaalim.jpeg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Sheikh Uthmaan Maalim
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Swahili Darsa/sermons
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/sheikhs/mselem.jpg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Sheikh Mselem Bin Ali
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Swahili Darsa/Sermons
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/sheikhs/islam.jpeg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Duktur Islam Muhammad
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Swahili sermons
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/sheikhs/aweis.jpg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Duktur Mbarak Aweis
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Swahili Darsa/Sermons
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/sheikhs/omar.jpg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              sheikh omar suleiman
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              English Sermons
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/sheikhs/anwar.jpg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Anwar-Al-Awliki
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              English sermons
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/sheikhs/khan.jpg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Sheikh Nouman Ali Khan
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              English sermons
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/sheikhs/kombo.jpg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Sheikh Habib Ali Kombo{" "}
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Tafsiri ya Qur-an
            </p>
          </div>

          <div className="mb-12">
            <Image
              layout="fixed"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
              src="/sheikhs/lethome.jpeg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-56 md:max-width:100px"
              alt=""
            />
            <p className="mb-2 font-bold text-black dark:text-white">
              Sheikh Ibrahim Lethome
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Islamic law Education
            </p>
          </div>
        </div>
        <button className="border-4 dark:border-white border-black rounded-full px-4 py-2">
          <Link href="/team">
            <p className="underline text-black dark:text-white cursor-pointer items-center flex pl-8 pr-8 gap-2">
              <RiArrowGoBackFill className="text-bold text-black dark:text-white" />{" "}
              Back
            </p>
          </Link>
        </button>
      </section>
    </div>
  );
}

export default ScholarsPage;

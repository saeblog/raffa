import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const products = [
  {
    title: "Paket A",
    price: 750,
    currency: "IDR. ",
    frecuency: "normal",
    description: "Paket parabola mini TV Islam.",
    features: [
      "1 bh antena parabola mini",
      "1 bh receiver decoder MPEG4 / HDMI",
      "1 bh lnb ku-band",
      "15 meter kabel coaxcial",
      "Include pemasangan",
    ],
    href: "https://bit.ly/3LETxZR",
    cta: "Buy Paket A",
    mostPopular: false,
  },
  {
    title: "Paket A",
    price: 700,
    currency: "IDR. ",
    frecuency: "promo",
    description: "Paket parabola mini TV Islam",
    features: [
      "1 bh antena parabola mini",
      "1 bh receiver decoder MPEG4 / HDMI",
      "1 bh lnb ku-band",
      "15 meter kabel coaxcial",
      "Include pemasangan",
    ],
    href: "https://bit.ly/3LETxZR",
    cta: "Buy Paket A",
    mostPopular: false,
  },
  {
    title: "Paket B",
    price: 850,
    currency: "IDR. ",
    frecuency: "normal",
    description: "Paket parabola mini K-Vison / Nex / Tanaka Nusantara.",
    features: [
      "1 bh antena parabola mini",
      "1 bh receiver decoder MPEG4 / HDMI",
      "1 bh lnb ku-band",
      "15 meter kabel coaxcial",
      "Include pemasangan",
    ],
    href: "https://bit.ly/3LETxZR",
    cta: "Buy Paket B",
    mostPopular: true,
  },
  {
    title: "Paket B",
    price: 800,
    currency: "IDR. ",
    frecuency: "promo",
    description: "Paket parabola mini K-Vison / Nex / Tanaka Nusantara.",
    features: [
      "1 bh antena parabola mini",
      "1 bh receiver decoder MPEG4 / HDMI",
      "1 bh lnb ku-band",
      "15 meter kabel coaxcial",
      "Include pemasangan",
    ],
    href: "https://bit.ly/3LETxZR",
    cta: "Buy Paket B",
    mostPopular: true,
  },
  {
    title: "Paket C",
    price: 1500,
    currency: "IDR. ",
    frecuency: "normal",
    description: "Paket parabola besar solid atau jaring.",
    features: [
      "1 bh antena parabola besar solid atau jaring",
      "1 bh receiver decoder MPEG4 / HDMI",
      "1 bh lnb C-band",
      "15 meter kabel coaxcial",
      "1 bh pipa tiang besi",
      "Include pemasangan",
    ],
    href: "https://bit.ly/3LETxZR",
    cta: "Buy Paket C",
    mostPopular: false,
  },
  {
    title: "Paket C",
    price: 1450,
    currency: "IDR. ",
    frecuency: "promo",
    description: "Paket parabola besar solid atau jaring.",
    features: [
      "1 bh antena parabola besar solid atau jaring",
      "1 bh receiver decoder MPEG4 / HDMI",
      "1 bh lnb ku-band",
      "15 meter kabel coaxcial",
      "1 bh pipa tiang besi",
      "Include pemasangan",
    ],
    href: "https://bit.ly/3LETxZR",
    cta: "Buy Paket C",
    mostPopular: false,
  },
  {
    title: "Paket D",
    price: 500,
    currency: "IDR. ",
    frecuency: "normal",
    description: "Paket antena digital.",
    features: [
      "1 bh antena digital ",
      "1 bh set top box digital",
      "10 meter kabel coaxcial",
      "Include pemasangan",
    ],
    href: "https://bit.ly/3LETxZR",
    cta: "Buy Paket D",
    mostPopular: false,
  },
  {
    title: "Paket D",
    price: 475,
    currency: "IDR. ",
    frecuency: "promo",
    description: "Paket antena digital.",
    features: [
      "1 bh antena digital ",
      "1 bh set top box digital",
      "10 meter kabel coaxcial",
      "Include pemasangan",
    ],
    href: "https://bit.ly/3LETxZR",
    cta: "Buy Paket D",
    mostPopular: false,
  },
];

type BillingInterval = "promo" | "normal";

export default function Pricing() {
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("normal");
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Pricing</h2>

        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Daftar paket harga pemasangan antena digital dan parabola, semua perangkat menjadi hak milik selamanya.
        </p>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 sm:flex sm:flex-col sm:align-center">
        <div className="relative self-center text-base font-semibold mt-6 bg-neutral-200  dark:bg-neutral-800 rounded-lg flex sm:mt-8">
          <button
            onClick={() => setBillingInterval("normal")}
            type="button"
            className={`${
              billingInterval === "normal"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            Harga Normal
          </button>
          <button
            onClick={() => setBillingInterval("promo")}
            type="button"
            className={`${
              billingInterval === "promo"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            Harga Promo
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        {products.map(
          ({
            title,
            mostPopular,
            description,
            currency,
            price,
            frecuency,
            cta,
            features,
            href,
          }) => {
            return (
              <>
                {billingInterval === frecuency ? (
                  <div
                    key={title}
                    className={`rounded-lg py-8 relative flex flex-col ${
                      mostPopular
                        ? "border-rose-300 border-2 border-solid dark:border-rose-500"
                        : "border-neutral-300 border dark:border-neutral-600"
                    }`}
                  >
                    <h3 className="px-6 text-lg font-semibold leading-5">
                      {title}
                    </h3>
                    {mostPopular && (
                      <p className="mx-6 absolute top-0 px-4 py-1 -translate-y-1/2 bg-rose-100 text-rose-500  rounded-full text-sm font-semibold tracking-wide shadow-md">
                        Most popular
                      </p>
                    )}

                    <p className="px-6 mt-4 leading-6 dark:text-neutral-400">
                      {description}
                    </p>
                    <div className="mt-2 p-6 -mx-6">
                      <p className="px-6 font-medium flex place-items-end">
                        <span className="text-4xl font-bold">{currency}</span>
                        <span className="text-4xl font-bold">{price}</span>
                        <span className="ml-1.5">/{frecuency}</span>
                      </p>
                    </div>

                    {/* Call to action */}
                    <Link
                      href={href}
                      target="_blank"
                      className={`mt-4 mx-6 block px-6 py-3 font-medium leading-4 text-center rounded-lg ${
                        mostPopular
                          ? "bg-rose-500 text-white shadow-md"
                          : "bg-black text-white dark:bg-white dark:text-black"
                      }`}
                    >
                      {cta}
                    </Link>

                    {/* features */}
                    <ul className="mt-6 px-6 space-y-4 flex-1 border-t border-neutral-300 dark:border-neutral-500">
                      <p className="mt-6 font-semibold dark:text-neutral-300">
                        What&apos;s included
                      </p>
                      {features.map((features) => (
                        <li key={features} className="leading-6 flex">
                          <CheckIcon className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                          <span className="ml-3 dark:text-neutral-400">
                            {features}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </>
            );
          }
        )}
      </div>
    </div>
  );
}
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

const contents = [
  {
    title: "Antena Digital",
    description:
      "Antena TV Digital & Set Top Box.",
    features: [
      "1 bh antena digital",
      "1 bh set top box",
      "10 meter kabel coacxial",
      "Include pemasangan",
    ],
    image: "https://saeblog.github.io/raffa/images/features/dashboard.svg",
    order: false,
  },
  {
    title: "Parabola Mini",
    description:
      "Parabola mini TV Islam , K-Vision , Nex Parabola , Tanaka Nusantara , dll.",
    features: [
      "1 bh antena parabola min",
      "1 bh receiver atau decoder MPEG4/HDMI",
      "1 bh LNB Ku-Band",
      "15 meter kabel coaxcial",
      "Include pemasangan",
    ],
    image: "https://saeblog.github.io/raffa/images/features/product.svg",
    order: true,
  },
  {
    title: "Parabola Besar ",
    description:
      "Parabola solid atau jaring untuk tracking satelit Telkom, Asiasat, Chinasat, Intelsat, Thaicom, dll.",
    features: [
      "1 bh antena parabola besar solid atau jaring",
      "1 bh receiver atau decoder MPEG4 / HDMI",
      "1 bh LNB C-Band",
      "15 meter kabel coaxcial",
      "1 meter pipa tiang besi",
      "Include pemasangan",
    ],
    image: "https://saeblog.github.io/raffa/images/features/inventory.svg",
    order: false,
  },
];

export function Features() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center">Features</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Berbagai pilihan paket pasang antena tv digital dan parabola , diantaranya sebagai berikut ,
        </p>

        {contents.map((content) => (
          <div
            key={content.title}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
          >
            <div
              className={`pt-8 md:pt-16 ${
                content.order ? "order-1 md:order-2" : "order-1"
              }`}
            >
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                {content.description}
              </p>

              <ul className="font-medium space-y-1 flex-1">
                {content.features.map((feature) => (
                  <li key={feature} className="leading-6 flex">
                    <CheckIcon className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`order-1 pt-8 md:pt-16 ${
                content.order ? "ml-0 2xl:-ml-40" : "mr-0 2xl:-mr-40"
              }`}
            >
              <div className="flex items-center">
                <Image
                  src={content.image}
                  alt="Image description"
                  width={1920}
                  height={1080}
                  quality={75}
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

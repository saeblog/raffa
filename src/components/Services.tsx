import Image from "next/image";

const services = [
  {
    title: "Hak milik",
    description:
      "Semua perangkat parabola menjadi hak milik selamanya",
    image: "https://saeblog.github.io/raffa/images/services/1.svg",
    alt: "antena parabola menjadi hak milik",
  },
  {
    title: "Sekali bayar",
    description:
      "Hanya sekali beli perangkat parabola atau antena digital dan set top box ",
    image: "https://saeblog.github.io/raffa/images/services/2.svg",
    alt: "antena parabola sekali bayar",
  },
  {
    title: "Teknisi berpengalaman",
    description:
      "Teknisi kami sudah berpengalaman dalam bidang antena parabola lebih dari 5 tahun",
    image: "https://saeblog.github.io/raffa/images/services/3.svg",
    alt: "teknisi antena parabola berpengalaman",
  },
  {
    title: "Harga kompetitif ",
    description:
      "Harga bersaing dan bersahabat",
    image: "https://saeblog.github.io/raffa/images/services/4.svg",
    alt: "harga kompetitif",
  },
  {
    title: "Produk bergaransi",
    description:
      "Receiver dekoder dan stb bergaransi toko dan distributor ",
    image: "https://saeblog.github.io/raffa/images/services/5.svg",
    alt: "produk stb dan receiver bergaransi",
  },
  {
    title: "Bebas iuran",
    description:
      "Tanpa iuran bulanan",
    image: "https://saeblog.github.io/raffa/images/services/6.svg",
    alt: "bebas iuran bulanan",
  },
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">Layanan Antena TV Digital dan Parabola</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Kami melayani pemasangan antena tv digital dan parabola jaringan satelit parabola Telkom, Chinasat, Ses9, Measat, Asiasat, Thaicom, Intelsat, ST2 dll, dengan berbagai keunggulan sebagai berikut.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt }) => (
          <div key={title}>
            <div className="h-32 w-32 flex justify-center mx-auto">
              <Image
                src={image}
                alt={alt}
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{title}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqitems = [
  {
    question: "Apakah antena digital dam parabola cocok untuk semua jenis TV ?",
    response:
      " Ya. Antena digital dan parabola cocok untuk semua jenis TV. Baik TV tabung maupun TV layar datar LCD dan LED. Namun ada beberapa tipe TV tabung yang tidak bisa mengeluarkan gambar berwarna, hanya hitam putih. tapi sangat jarang.",
  },
  {
    question: "Apakah antena parabola sudah siaran digital ?",
    response:
      "Ya, semua siaran channel parabola sudah berteknologi digital , suara dan gambar jernih.",
  },
  {
    question: "Apakah parabola bisa menangkap siaran semacam channel Film, Bola, Liga Indonsesia, National Geographic, Discovery Channel, Animal Planet dan lain sebagainya ? ",
    response:
      "Bisa, tetapi dengan menggunakan dekoder khusus yang mendukung sistem voucher TV berbayar. Channel-channel tersebut umumnya hanya ada di TV berbayar, yang mana untuk menikmatinya Anda harus membayar biaya bulanan (untuk postpaid) atau voucher untuk sistem prepaid. Biasanya kami solusikan dengan dekoder multi fungsi (bisa untuk channel free dan berbayar) yang bisa diisi voucher jika ingin menikmati channel berbayar.",
  },
  {
    question: "Apa bedanya parabola mini Ku-Band dengan parabola besar C-Band serta kekurangan dan kelebihannya ?",
    response:
      " Parabola mini ukuran antena parabolanya kecil dan tidak makan tempat, serta memiliki kelebihan sinyal yang sangat baik walaupun menggunakan parabola berukuran mini. Namun Sinyal KU-Band dapat terganggu oleh cuaca, terutama jika hujan deras, tayangan bisa hilang untuk sementara waktu. Parabola besar dengan menggunakan frekuensi C-band yang membutuhkan Parabola yang lebih besar dari Ku-Band ukuran antena parabolanya +- 2 meteran. Akan tetapi sinyal C-Band tahan terhadap cuaca, walaupun hujan deras, tayangan tetap bisa dinikmati dengan baik. Kekuranngannya kalo ada angin kencang sekali, antena parabola suka berubah yang akan mengakibatkan no signal.",
  },
];

export default function Faq() {
  return (
    <div
      className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16"
      id="faq"
    >
      <h2 className="text-4xl font-bold text-center">
        Frequently Asked Questions
      </h2>

      <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
      Beberapa pertanyaan yang sering ditanyakan oleh pembeli.
      </p>
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-transparent dark:bg-transparent">
        {faqitems.map(({ question, response }) => (
          <div key={question}>
            <Disclosure>
              {({ open }) => (
                <div className="mt-4">
                  <Disclosure.Button
                    className={`${
                      open
                        ? "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100 rounded-b-none"
                        : ""
                    } flex w-full justify-between rounded-lg bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800 px-4 py-4 text-left text-base font-medium `}
                  >
                    <h2 className="font-semibold">{question}</h2>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transition-transform" : ""
                      } h-5 w-5 flex-shrink-0`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`${
                      open
                        ? "px-4 pt-4 pb-2 text-base dark:text-neutral-400"
                        : ""
                    } bg-neutral-100 dark:bg-neutral-800 rounded-b-lg`}
                  >
                    <p>{response}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}

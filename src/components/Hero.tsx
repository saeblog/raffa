import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-bold">
            Raffa <br />{" "}
            <span className="text-rose-500 font-extrabold">Parabola</span>
          </h1>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
          Layanan Pemasangan Antena TV Digital & Parabola. Dan Jual Antena Digital UHF, Parabola, Receiver, Set Top Box, LNB dan Parts lainnya.
          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
            <div>
              <Link href="#services">
                <button className="bg-black dark:bg-white text-white dark:text-black text-base rounded-full px-4 p-2 font-medium">
                  Services
                </button>
              </Link>
            </div>

            <div>
              <Link href="#contact">
                <button className="bg-rose-500 text-white text-base rounded-full px-4 p-2 font-medium">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-12">
          <Image
            src="https://saeblog.github.io/raffa/images/hero/hero.svg"
            alt="raffa parabola"
            width={1025}
            height={662}
            quality={75}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}

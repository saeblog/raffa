import Image from "next/image";
import Link from "next/link";

const customers = [
    {
        name: "kvision",
        href: "#",
        src: "/images/customers/kvision.webp",
        alt: "kvision logo",
    },
    {
        name: "nex parabola",
        href: "#",
        src: "/images/customers/nex.webp",
        alt: "nex parabola logo",
    },
    {
        name: "tanaka",
        href: "#",
        src: "/images/customers/tanaka.webp",
        alt: "tanaka logo",
    },
    {
        name: "venus",
        href: "#",
        src: "/images/customers/venus.webp",
        alt: "venus logo",
    },
    {
        name: "matrix",
        href: "#",
        src: "/images/customers/matrix.webp",
        alt: "matrix logo",
    },
    {
        name: "kaonsat",
        href: "#",
        src: "/images/customers/kaonsat.webp",
        alt: "kaonsat logo",
    }

]

export default function Customers() {
    return (
        <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16" id="faq">
            <h2 className="text-4xl font-bold text-center">
                Supported
            </h2>

            <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
                Kvision, Nex Parabola, Tanaka Nusantara, Venus, Matrix, LG Sat, Optus, Gardiner, Kaonsat, Intra, Noise, Wellhome, dll.
            </p>
            <div className="mx-auto w-full max-w-4xl bg-white dark:bg-transparent">
                <div className="text-center justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
                    {customers.map((item) => (
                        <Link key={item.name} href={item.href} >
                            <Image
                                className="h-75 w-auto mt-6 justify-center text-center mx-auto hover:scale-110 transition"
                                src={item.src}
                                alt={item.alt}
                                width={150}
                                height={150}
                                quality={75}
                                sizes="100vw"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>

    );
}


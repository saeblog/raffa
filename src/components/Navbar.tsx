import Link from "next/link";
import Image from "next/image";
import ThemeSwitchButton from "./ThemeSwitchButton";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Services", href: "#services", current: false },
  { name: "Pricing", href: "#pricing", current: false },
  { name: "Faq", href: "#faq", current: false },
  { name: "Blog", href: "#blogs", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className=" fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20"
    >
      {({ open }: { open: any }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start">
                <div className="flex flex-shrink-0 items-center md:pl-0 gap-2">
                  <Link href="/">
                    <Image
                      className="block h-8 w-auto"
                      src="https://saeblog.github.io/raffa/images/logos/parabolax.webp"
                      alt="raffa parabola"
                      width={150}
                      height={150}
                      quality={75}
                      sizes="100vw"
                    />
                  </Link>
                 <strong>Raffa Parabola</strong>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-5 items-center">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-neutral-900 dark:text-neutral-400 "
                            : "text-neutral-900 dark:text-neutral-400 hover:underline",
                          "text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-y-0 right-10 sm:right-0 flex items-center gap-2">
                  <Link
                    href="https://shorturl.at/TJNDs"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hidden sm:block"
                  >
                    <button className="bg-green-700 dark:bg-white text-white dark:text-neutral-900 px-4 p-2 text-base font-medium dark:hover:bg-rose-500 hover:bg-rose-500 hover:text-white dark:hover:text-white rounded-full">
                      Whatsapp
                    </button>
                  </Link>
                  <ThemeSwitchButton />
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-neutral-900 dark:text-white ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-4 min-h-screen border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-neutral-900 dark:text-neutral-400"
                      : "text-neutral-900 dark:text-neutral-400",
                    "block py-4 text-base font-medium border-b border-neutral-200 dark:border-neutral-700"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Link href="https://bit.ly/3LETxZR" target="_blank" rel="noreferrer noopener">
                <button className="mt-12 bg-green-700 text-white px-4 p-3 font-medium rounded-full w-full">
                  Whatsapp
                </button>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

import Image from "next/image";
import logo from "../public/images/logo.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black items-center p-6">
      <header className="flex flex-row justify-between gap-20 items-center w-2/3">
        <Image src="/images/logo.png" alt="Profile" width={80} height={80} className="rounded-full" />

        <nav className="flex flex-row gap-10 text-white">
          <a className=" rounded p-2 px-4 text-lg" href="#home">
            Home
          </a>
          <a className=" rounded p-2 px-4 text-lg" href="#about">
            About
          </a>
          <a className="bg-sky-500 rounded p-2 px-6 text-lg" href="#contact">
            Mulai
          </a>
        </nav>
      </header>
      <section className="flex py-20 flex-row justify-between w-2/3 ">
        <div className="px-4">
          <h1 className="text-white font-semibold text-4xl text-beautify py-20">
            Dapatkan teman belajar pribadi kalian <span className="text-sky-500 block">Niko sang asisten belajar</span>
          </h1>
          <h1 className="text-white text-4xl text-beautify"></h1>
        </div>
        <Image src="/images/hero.png" alt="Hero" width={600} height={600} />
      </section>

      {/* FAQ */}
      <section className=" text-gray-100 py-60 my-10 min-h-screen">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">Bagaimana cara Niko bekerja?</summary>
              <div className="px-4 pb-4">
                <p>
                  You can easily place an order on our website by browsing our product catalog, selecting the items you want, and adding them to your cart.
                  Then, proceed to checkout, where you can provide your shipping and payment information to complete the order.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">Apakah Niko berbayar?</summary>
              <div className="px-4 pb-4">
                <p>
                  We accept various payment methods, including credit cards, debit cards, net banking, and mobile wallet payments. You can choose the payment
                  option that is most convenient for you during the checkout process.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">Bahasa apa saja yang bisa digunakan?</summary>
              <div className="px-4 pb-4">
                <p>
                  Shipping times may vary depending on your location and the shipping method chosen. Typically, orders are processed within 1-2 business days,
                  and delivery can take 3-7 business days within India. You will receive a tracking notification once your order is shipped.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">Pelajaran apa saja yang tersedia</summary>
              <div className="px-4 pb-4">
                <p>
                  Yes, we have a hassle-free return policy. If you are not satisfied with your purchase, you can initiate a return within 30 days of receiving
                  the product. Please contact our customer support at{" "}
                  <a href="" className="underline">
                    example@gmail.com
                  </a>{" "}
                  for assistance.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}

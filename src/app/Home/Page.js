import Reviews from "@/components/reviews";
import ReviewScroller from "@/components/reviews";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="relative bg-white">
        <img
          src="https://i.etsystatic.com/isbl/2ad722/74093550/isbl_1680x420.74093550_pa010gki.jpg?version=0" // Replace with Etsy image link
          alt="Hero Image"
          className="w-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">High-Quality SVG & PNG Designs</h2>
            <p className="text-lg mb-6">Perfect for your creative projects!</p>
            <a
              href="https://etsy.com/yourstore"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Shop on Etsy
            </a>
          </div>
        </div> */}
        {/* Featured section */}
        <section className="text-gray-600 body-font px-4 sm:px-6 lg:px-20">
          <div className="container mx-auto py-12">
            <h2 className="text-4xl font-bold px-2 mb-8">Featured Section</h2>
            <div className="flex flex-wrap -m-4">
              {[{
                link: "https://digicaredesign.etsy.com/listing/1846687025",
                img: "https://i.etsystatic.com/56439150/r/il/6d99e4/6565056979/il_600x600.6565056979_kljm.jpg",
                title: "World Pawpaw Coolest Svg and Png, Svg file, Png file, Christmas sale, Digital file, Pawpaw Png, Pawpaw Svg",
                price: "$3.99",
                originalPrice: "$4.99",
                discount: "(20% off)",
              },
              {
                link: "https://digicaredesign.etsy.com/listing/1832869524",
                img: "https://i.etsystatic.com/56439150/r/il/b1ab58/6518292828/il_600x600.6518292828_63uh.jpg",
                title: "Snoopy Family Svg, Dogs Playing Poker Png, Vintage Snoopy, Snoopy Image, Poker player, Card game art prints, Dogs, Svg file",
                price: "$3.99",
                originalPrice: "$4.99",
                discount: "(20% off)",
              },
              {
                link: "https://digicaredesign.etsy.com/listing/1828406314",
                img: "https://i.etsystatic.com/56439150/r/il/582816/6550378797/il_600x600.6550378797_jjwe.jpg",
                title: "Clemson Tiger Custom design, Png, Svg, Custom order, digital file, Digital product, For T-shirt Ready product",
                price: "$3.99",
                originalPrice: "$4.99",
                discount: "(20% off)",
              },
              {
                link: "https://digicaredesign.etsy.com/listing/1836019750",
                img: "https://i.etsystatic.com/56439150/r/il/92b273/6577833451/il_600x600.6577833451_7u51.jpg",
                title: "Winter Vibes Water Color Svg file, Winter Vibes Png file, Custom made, Perfect for T-shirt and hoodies",
                price: "$3.99",
                originalPrice: "$4.99",
                discount: "(20% off)",
              },
              ].map((item, index) => (
                <div key={index} className="lg:w-1/4 md:w-1/2 sm:w-1/2 sm p-4 w-full">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={item.img}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-bold">
                      {item.price}{" "}
                      <del className="text-gray-400">{item.originalPrice}</del>{" "}
                      <span className="text-green-500">{item.discount}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Best selling designs  */}
        <section className="text-gray-600 body-font px-10 lg:px-20">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap">
              <h1 className="sm:text-3xl text-2xl font-bold uppercase title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                Some of Our best designs
              </h1>
              <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                "Discover a curated collection of our most popular and loved designs. These high-quality SVGs and PNGs are perfect for your creative projects, whether you're crafting, printing, or designing something truly unique. Each file is crafted with precision to bring your ideas to life!"


              </p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://i.etsystatic.com/56439150/r/il/9cd544/6553585921/il_300x300.6553585921_6xqx.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://i.etsystatic.com/56439150/r/il/854a14/6490051598/il_300x300.6490051598_m2jk.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="https://i.etsystatic.com/56439150/r/il/6d99e4/6565056979/il_600x600.6565056979_kljm.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="https://i.etsystatic.com/56439150/r/il/3612c2/6518390422/il_794xN.6518390422_q8kp.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://i.etsystatic.com/56439150/r/il/d19064/6514499658/il_300x300.6514499658_7e1w.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="https://i.etsystatic.com/56439150/r/il/777efe/6526036730/il_300x300.6526036730_qiar.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Custom order request  */}
        <section className="text-gray-600 body-font lg:px-20">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/471279711_122178317078308513_3832552554033946611_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-ZuJT8AmxAcQ7kNvgEeBRnR&_nc_oc=AdhZtnVqRAURxxDvP3HzV2B1ZGXU42M0-Bni1ew6WlL5g4zoJtLfddkyVc3lltm3Gcs&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=AQHKErYE-ri-c-CxU7jRNCD&oh=00_AYBO0mX_v7WCy3r-FQo0sKe5oZCpopGH-eOr3OdfcIwdlg&oe=677CB65D"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h2 className="text-3xl py-4 text-blue-400">CUSTOM ORDER REQUEST</h2>
              <p>
                Perfect for personal and commercial use, our one-of-a-kind digital prints offer the perfect mix of style and affordability.
              </p>

              <h2 className="text-2xl py-4 text-blue-400">HOW TO ORDER</h2>
              <ol>
                <li>Message us with a design or idea that matches your taste.</li>
                <li>Kick-start the project by purchasing the listing and sending your email address in the personalization box.</li>
                <li>
                  Once your design is ready, we will share a preview. After your approval, we'll upload it to our shop so you can easily purchase it.
                </li>
              </ol>

              <h2 className="text-2xl py-4 text-blue-400">TURNAROUND TIMES</h2>
              <p>
                Enjoy a hassle-free custom design experience with our quick turnaround times, taking less than 6-12 hours to complete!
              </p>
              <div className="flex justify-center py-5">
                <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  <a href="https://digicareDesign.etsy.com">Order now</a>
                </button>
                <button className="ml-4 inline-flex text-white
                 bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  <a href="https://digicareDesign.etsy.com">Etsy store</a>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Blogs */}
        <section className="text-gray-600 body-font lg:px-20">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://dummyimage.com/720x400"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      The Catalyzer
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                      microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                        1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://dummyimage.com/721x401"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      The 400 Blows
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                      microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                        1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://dummyimage.com/722x402"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Shooting Stars
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                      microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                        1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Review section */}
        <Reviews />
      </section>
    </div>
  );
}

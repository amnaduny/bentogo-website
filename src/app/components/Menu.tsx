"use client";

import Image from 'next/image';
import Link from 'next/link';
import { poppins, happyMonkey, chewy } from '../fonts';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

type Slide = {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    price: string;
    link: string;
};

const slides: Slide[] = [
    {
        id: 1,
        image: "/assets/menu/bento-special-chicken-karaage.png",
        title: "Bento Special Chicken Karaage",
        subtitle: "A bento dish featuring marinated Japanese-style fried chicken karaage as the main course, served with fried tofu, salad, and Japanese rice.",
        price: "45 zl",
        link: "#",
    },
    {
        id: 2,
        image: "/assets/menu/bento-special-chicken-katsu.png",
        title: "Bento Special Chicken Katsu",
        subtitle: "A bento dish featuring chicken katsu with mayonnaise sauce as the main course, served with fried tofu, salad, and Japanese rice.",
        price: "45 zl",
        link: "#",
    },
    {
        id: 3,
        image: "/assets/menu/bento-special-beef-teriyaki.png",
        title: "Bento Special Beef Teriyaki",
        subtitle: "Japanese-style beef teriyaki, served with sautéed onions, fried tofu, salad, and Japanese rice.",
        price: "45 zl",
        link: "/product/3",
    },
    {
        id: 4,
        image: "/assets/menu/bento-bowl-chicken-karaage.png",
        title: "Bento Bowl Chicken Karaage",
        subtitle: "A bento bowl featuring marinated Japanese-style fried chicken karaage as the main dish, served with fried tofu, salad, and Japanese rice.",
        price: "40 zl",
        link: "#",
    },
    {
        id: 5,
        image: "/assets/menu/bento-bowl-chicken-katsu.png",
        title: "Bento Bowl Chicken Katsu",
        subtitle: "A bento bowl featuring chicken katsu with mayonnaise sauce as the main dish, served with fried tofu, salad, and Japanese rice.",
        price: "40 zl",
        link: "#",
    },
    {
        id: 6,
        image: "/assets/menu/bento-bowl-beef-teriyaki.png",
        title: "Bento Bowl Chicken Katsu",
        subtitle: "A bento bowl featuring chicken katsu with mayonnaise sauce as the main course, served with fried tofu, salad, and Japanese rice.",
        price: "40 zl",
        link: "#",
    },
    {
        id: 7,
        image: "/assets/menu/chicken-karaage-original.png",
        title: "Chicken Karaage Original",
        subtitle: "Marinated Japanese-style fried chicken, coated in a light batter and deep-fried until golden brown. Crispy on the outside, tender, juicy, and flavorful on the inside.",
        price: "35 zl",
        link: "#",
    },
    {
        id: 8,
        image: "/assets/menu/chicken-karaage-spicy.png",
        title: "Chicken Karaage Spicy",
        subtitle: "Marinated Japanese-style fried chicken seasoned with spicy spices, coated in a light batter, and deep-fried until golden brown. Crispy on the outside, tender, juicy, and flavorful on the inside, with a delightful spicy kick.",
        price: "35 zl",
        link: "#",
    },
    {
        id: 9,
        image: "/assets/menu/chicken-karaage-lava.png",
        title: "Chicken Karaage Lava",
        subtitle: "Marinated fried chicken, coated in a light batter and deep-fried until golden brown, then glazed with a signature sauce that is sweet, savory, and slightly spicy. Crispy on the outside, tender, juicy, and flavorful on the inside.",
        price: "35 zl",
        link: "#",
    },
    {
        id: 10,
        image: "/assets/menu/chicken-karaage-teriyaki.png",
        title: "Chicken Karaage Teriyaki",
        subtitle: "Japanese-style fried chicken coated in teriyaki sauce. Crispy on the outside, tender, juicy, and flavorful on the inside.",
        price: "45 zl",
        link: "#",
    },
    {
        id: 11,
        image: "/assets/menu/chicken-karaage-pepper-cheese.png",
        title: "Chicken Karaage Pepper Cheese",
        subtitle: "Marinated Japanese-style fried chicken, coated in a light batter and deep-fried until golden brown, then topped with a flavorful blend of pepper and cheese.",
        price: "45 zl",
        link: "#",
    },
    {
        id: 12,
        image: "/assets/menu/chicken-karaage-singapore-style.png",
        title: "Chicken Karaage Singapore Style",
        subtitle: "Japanese-style fried chicken cooked with a Singaporean twist. Crispy on the outside, tender, juicy, and flavorful on the inside.",
        price: "45 zl",
        link: "#",
    },
];

export default function Menu() {
    return (
        <section className="w-full bg-page-custom pt-16 pb-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto gap-4 items-center">
                {/* <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[60%_40%] gap-4 items-center"></div> */}
                {/* Menu Content */}
                <div className="relative w-full">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2000, // 2s per slide
                            disableOnInteraction: false, // keeps autoplay even after manual swipe
                            pauseOnMouseEnter: true, // ✅ stop autoplay when hover
                        }}
                        breakpoints={{
                            648: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        autoHeight={true} // ✅ adjusts height based on slide content
                        // pagination={{
                        //     clickable: true, // ✅ bullets can be clicked
                        //     el: '.custom-pagination', // ✅ custom pagination element
                        //     // dynamicBullets: true, // ✅ nicer responsive bullets
                        // }}
                        className="h-auto" // ✅ let height be flexible
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <Link href={slide.link}>
                                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col cursor-pointer">
                                        <div className="p-2">
                                            <div className="relative w-full h-54 rounded-xl overflow-hidden shadow-xl border border-gray-300">
                                                <Image
                                                    src={slide.image}
                                                    alt={slide.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="p-4 flex flex-col justify-between flex-1">
                                            <div>
                                                <h3 className={`${chewy.className} text-2xl h-20 text-center`}>{slide.title}</h3>
                                                <p className={`${poppins.className} text-sm h-35 text-gray-700`}>{slide.subtitle}</p>
                                            </div>
                                            <div className='bg-yellow-bitdark rounded-xl py-2 px-4 mt-4 text-center w-1/2 mx-auto'>
                                                <span className={`${chewy.className} text-xl mt-2`}>
                                                    {slide.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* <div className="custom-pagination mt-6 flex justify-center gap-2" /> */}
                </div>

                {/* Image Content */}
                {/* <div className="relative w-84 h-84 rounded-full overflow-hidden ms-20">
                    <Image
                        src="/assets/bento-go.png"
                        alt="bento go"
                        fill
                        className="object-cover"
                        priority
                    />
                </div> */}
            </div>
        </section >
    );
}

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

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
        image: "/assets/bento-go.png",
        title: "First Item",
        subtitle: "Delicious and fresh",
        price: "$12.99",
        link: "/product/1",
    },
    {
        id: 2,
        image: "/assets/bento-go.png",
        title: "Second Item",
        subtitle: "Perfect for lunch",
        price: "$15.49",
        link: "/product/2",
    },
    {
        id: 3,
        image: "/assets/bento-go.png",
        title: "Third Item",
        subtitle: "Healthy & tasty",
        price: "$10.99",
        link: "/product/3",
    },
    {
        id: 4,
        image: "/assets/bento-go.png",
        title: "Fourth Item",
        subtitle: "Freshly prepared",
        price: "$13.50",
        link: "/product/4",
    },
    {
        id: 5,
        image: "/assets/bento-go.png",
        title: "Fifth Item",
        subtitle: "Quick & easy",
        price: "$11.25",
        link: "/product/5",
    },
];

export default function ProductCarousel() {
    return (
        <div className="relative w-full">
            <Swiper
                modules={[Navigation]}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
                className="h-96"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <Link href={slide.link}>
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col cursor-pointer">
                                <div className="relative w-full h-48">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-4 flex flex-col justify-between flex-1">
                                    <div>
                                        <h3 className="text-lg font-semibold">{slide.title}</h3>
                                        <p className="text-sm text-gray-500">{slide.subtitle}</p>
                                    </div>
                                    <span className="text-xl font-bold text-green-600 mt-2">
                                        {slide.price}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
                className="custom-prev absolute start-5 top-1/2 -translate-y-1/2 z-10 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm"
                aria-label="Previous"
            >
                <span className="icon-[tabler--chevron-left] size-5"></span>
            </button>
            <button
                className="custom-next absolute end-5 top-1/2 -translate-y-1/2 z-10 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm"
                aria-label="Next"
            >
                <span className="icon-[tabler--chevron-right] size-5"></span>
            </button>
        </div>
    );
}

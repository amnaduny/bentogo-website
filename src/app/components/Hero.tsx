'use client';

import Image from 'next/image';
import { poppins, happyMonkey, chewy } from '../fonts';

import CountUp from 'react-countup';

export default function Hero() {
    return (
        <section className="w-full bg-page-custom pb-16 pt-32 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                {/* Image Content */}
                <div className="relative w-full h-72 md:h-full">
                    <Image
                        src="/assets/hero.png"
                        alt="hero image"
                        fill
                        className="object-cover rounded-2xl shadow-lg"
                        priority
                    />
                </div>

                {/* Text Content */}
                <div className="bg-red-dark px-8 py-8 rounded-2xl">
                    <h1 className={`${chewy.className} text-4xl md:text-6xl font-bold text-white mb-6`}>
                        A Culinary Journey <br className="hidden md:block" />
                        Through <span className="text-yellow-400">Asian Flavors</span>
                    </h1>
                    <p className={`${poppins.className} text-white text-lg mb-6`}>
                        Discover the rich traditions, bold spices, and timeless recipes that bring the
                        heart of Asia to your table.
                    </p>
                    <div className="justify-center flex">
                        <a
                            href="#projects"
                            className={`${chewy.className} bg-yellow-bitdark text-black px-6 py-3 rounded-xl text-lg`}
                        >
                            Menu
                        </a>
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-yellow-bitdark rounded-full py-6 mx-16">
                    <p className={`${chewy.className} text-3xl text-black font-bold`}>
                        <CountUp end={12} duration={2} />
                    </p>
                    <p className={`${poppins.className} text-black`}>Menus</p>
                </div>
                <div className="bg-yellow-bitdark rounded-full py-6 mx-16">
                    <p className={`${chewy.className} text-3xl text-black font-bold`}>
                        <CountUp end={100} duration={2.5} suffix="+" />
                    </p>
                    <p className={`${poppins.className} text-black`}>Customers</p>
                </div>
                <div className="bg-yellow-bitdark rounded-full py-6 mx-16">
                    <p className={`${chewy.className} text-3xl text-black font-bold`}>
                        <CountUp end={4.9} decimals={1} duration={3} />
                    </p>
                    <p className={`${poppins.className} text-black`}>Google Review</p>
                </div>
            </div>
        </section>
    );
}

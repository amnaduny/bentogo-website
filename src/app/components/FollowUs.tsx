'use client';

import { poppins, chewy } from '../fonts';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

export default function FollowUs() {
    return (
        <section className="w-full bg-page-custom py-10 px-4 md:px-8">
            <Image
                src="/assets/logo/bento-go.png"
                alt="BentoGo Logo"
                width={200}
                height={200}
                className="mx-auto mb-8 rounded-full"
            />
            <div className="max-w-7xl mx-auto text-center">
                <h2 className={`${chewy.className} text-5xl text-white mb-2`}>
                    Follow Us
                </h2>
                <p className={`${poppins.className} text-xl text-white mb-8`}>
                    Stay connected with us on social media for the latest updates and delicious food photos!
                </p>
                <div className="flex justify-center space-x-8 text-white text-5xl md:text-8xl mt-10">
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-pink-500 hover:scale-120 transition-transform duration-300 ease-in-out transition-colors"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                        className="hover:text-black hover:scale-120 transition-transform duration-300 ease-in-out transition-colors"
                    >
                        <FaTiktok />
                    </a>
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="hover:text-blue-500 hover:scale-120 transition-transform duration-300 ease-in-out transition-colors"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="hover:text-red-600 hover:scale-120 transition-transform duration-300 ease-in-out transition-colors"
                    >
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </section>
    );
}

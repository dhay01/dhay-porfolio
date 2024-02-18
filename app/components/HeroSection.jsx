"use client";
import Image from "next/image";
import Link from "next/link";
import {TypeAnimation} from 'react-type-animation';


export default function HeroSection() {
    return (
        <section className="mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 sm:text-left place-self-center text-center">
                    <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-4">

                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">
                         hello, i'm {""} </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'dhay',
                                900,
                                'front-end developer',
                                900,
                                'UI/UX designer',
                                900,
                                '≽^•⩊•^≼',
                                900,
                                '♡𝓗𝓮𝓵𝓵𝓸 𝓴𝓲𝓽𝓽𝔂 ♡',
                                900,
                            ]}
                            wrapper="span"
                            speed={20}

                            repeat={Infinity}
                        />
                    </h1>

                    <p className="text-[#ADB7BE] text-base  sm:text-lg mb-6 lg:text-xl">
                        a biomedical engineer with a passion for front-end development and UIUX design≽^•⩊•^≼
                    </p>
                    <div className="flex flex-wrap  gap-4">
                        <button
                            className="px-6 py-3  rounded-full bg-gradient-to-br from-blue-500 via-purple-400 to-pink-500  text-white  md:w-auto">hire
                            me૮ ˶ᵔ ᵕ ᵔ˶ ა
                        </button>
                        <a href="https://drive.google.com/file/d/1kcR6Ks-xbpVH4pYPXVY5R31axREFly-6/view?usp=sharing">
                            <button
                                className="px-1 py-1 rounded-full   bg-gradient-to-br from-blue-500 via-purple-400 to-pink-500   text-white  font-bold  md:w-auto">

                           <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-3">
                Download CV✩°｡ ⋆⸜ 🎧✮
              </span>
                            </button>
                        </a>

                    </div>
                </div>

                <div className="col-span-4 place-self-center mt-4 pt-10 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/avatar.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

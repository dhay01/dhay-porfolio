"use client";
import Lottie from 'react-lottie';
import Link from "next/link";
import animationData1 from '@/public/lotties/lottiesocials1.json';
import animationData2 from '@/public/lotties/lottiesocials2.json';
import animationData3 from '@/public/lotties/lottiesocials3.json';
import animationData4 from '@/public/lotties/lottiesocials4.json';



const Contact = () => {
    // Array containing animation data and options
    const socialMediaAnimations = [
        {
            animationData: animationData1,
            link: "https://www.linkedin.com/in/dhay-salih-66ba6618a/"
        },
        {
            animationData: animationData2,
            link: "https://t.me/dhaysalih"
        },
        {
            animationData: animationData3,
            link: "https://www.behance.net/dhaysalih"
        },
        {
            animationData: animationData4,
            link: "mailto:dhaysalih18@gmail.com"
        }
    ];

    return (
        <div>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-300 text-center mt-40 text-4xl font-bold  mb-8 md:mb-12">
                Let's contact♡
            </h2>
            <p className="text-center text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                You can find me on social media or email at the addresses below
            </p>

            <div className="flex flex-row justify-center gap-10">
                {socialMediaAnimations.map(({ animationData, link }, index) => (
                    <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="col">
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice"
                                }
                            }}
                            height={80}
                            width={80}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Contact;
"use client";
import Lottie from 'react-lottie';
import animationData from '@/public/lotties/lottiebackground.json';
const Footer = () => {
    return(
        <Lottie
            options={{
                loop: true,
                autoplay: true,
                animationData,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                }
            }}



        />
    )
}
export default Footer;
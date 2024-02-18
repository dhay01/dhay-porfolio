"use client";
import React, { useTransition, useState } from "react";
import Lottie from 'react-lottie';
import animationData1 from '@/public/lotties/lottie-animation-about.json';
import animationData2 from '@/public/lotties/lottieflow-cta-01-1-CD81F9-easey.json';

import TabButtons from "@/app/components/TabButtons";
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="pl-2">
                <li>UI/UX design</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>tailwind</li>
                <li>bootstrap</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="pl-2">
                <li>biomedical engineering, university of technology</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="pl-2">
                <li>CS50x</li>
                <li>web50x</li>
            </ul>
        ),
    },
];

export default function AboutSection() {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData1,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <section>
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={550}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a biomedical engineering graduate with a passion in tech:) i love programming and
                        implementing logic into creativity through designing simple yet creative and special user
                        interfaces, i'm constantly working on improving myself hoping for leveling up my skills.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButtons
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButtons>
                        <TabButtons
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButtons>
                        <TabButtons
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButtons>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>

        </section>
    );
}

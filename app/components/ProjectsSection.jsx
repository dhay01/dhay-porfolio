"use client";
import React, {useState, useRef} from "react";
import ProjectsCard from "@/app/components/PorjectsCard";
import ProjectTag from "@/app/components/ProjectTag";
import {motion, useInView} from "framer-motion";


const projectsData = [
    {
        id: 1,
        title: "tumorator",
        description: "showcase for an application",
        image: "/images/projects/project1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "creators foundation website",
        description: "a website for a non-profit organization",
        image: "/images/projects/project7.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "blog",
        description: "a simple blog using next.js",
        image: "/images/projects/project2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "skyla website",
        description: "ui for an ecommerce website",
        image: "/images/projects/project3.png",
        tag: ["All", "UI"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "rehla app",
        description: "ui design for an e-learning app",
        image: "/images/projects/project4.png",
        tag: ["All", "UI"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "STEM",
        description: "scientific blog ui",
        image: "/images/projects/project5.png",
        tag: ["All", "UI"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 7,
        title: "globe",
        description: " environmental app ui",
        image: "/images/projects/project6.png",
        tag: ["All", "UI"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 8,
        title: "cv builder",
        description: " a website to build your cv",
        image: "/images/projects/project8.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 9,
        title: "bastia",
        description: " ui for ecommerce website",
        image: "/images/projects/project9.png",
        tag: ["All", "UI"],
        gitUrl: "/",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    function handleTag(newTag) {
        setTag(newTag);
    }

    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1},
    };
    const filteredProjects = projectsData.filter(project => project.tag.includes(tag));

    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="flex flex-row justify-center items-center gap-2 py-6 ">
                <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                    <ProjectTag
                        onClick={handleTag}
                        name="All"
                        isSelected={tag === "All"}
                    />
                    <ProjectTag
                        onClick={handleTag}
                        name="UI"
                        isSelected={tag === "UI"}
                    />
                    <ProjectTag
                        onClick={handleTag}
                        name="Web"
                        isSelected={tag === "Web"}
                    />
                </div>
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{duration: 0.3, delay: index * 0.4}}
                    >
                        <ProjectsCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </>

    )
}

export default ProjectsSection;

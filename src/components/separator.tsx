'use client';
import React from 'react';
import {motion} from "framer-motion";
const Separator = () => {
    return (
        <div className={"w-full bg-white"}>
            <motion.hr initial={{width: 0}} whileInView={{width: "60%"}} className={"w-full flex justify-center items-center mx-auto border-t-2 border-black bg-white"} />
        </div>
    );
};

export default Separator;
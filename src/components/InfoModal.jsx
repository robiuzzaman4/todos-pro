import { useState } from "react";
import { InformationCircleIcon } from '@heroicons/react/24/outline';

import Modal from "./Modal";
import Button from "./Button";

const InfoModal = () => {
    // state for modal
    const [isOpen, setIsOpen] = useState(false);

    // tech data
    const technologies = [
        { label: "Vite", imgSrc: "/vite.svg" },
        { label: "React Js", imgSrc: "/react.svg" },
        { label: "Redux Toolkit", imgSrc: "/redux.svg" },
        { label: "Tailwind CSS", imgSrc: "/tailwindcss.svg" }
    ]

    return (
        <>
            <Button
                onClick={() => setIsOpen(true)}
                variant="secondary">
                <InformationCircleIcon className="w-6 h-6 text-lime-500" />
            </Button>

            {/* info modal */}
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Used Technologies:">
                <div className="grid grid-cols-2 gap-3 md:gap-6 py-6">
                    {
                        technologies.map((item) => (
                            <div key={item.label} className="flex items-center gap-2">
                                <img 
                                src={item.imgSrc} 
                                alt="item.label" 
                                className="w-6 h-6"/>
                                <span className="">
                                    {item.label}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </Modal>
        </>
    );
};

export default InfoModal;
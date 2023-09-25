import { TrashIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

import Button from "./Button";
import { useState } from "react";
import DeleteTodoAlertModal from "./DeleteTodoAlertModal";
import UpdateTodoModal from "./UpdateTodoModal";

const TodoCard = ({ id, title, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    return (
        <div className="bg-neutral-800 rounded-lg p-6 grid gap-6">

            {/* id */}
            <p className="text-xs text-neutral-500"> ID: {id} </p>

            <div className="grid gap-1">
                {/* title */}
                <h3 className="text-2xl text-lime-500 font-bold">
                    {title}
                </h3>

                {/* description */}
                <p className="text-neutral-400">
                    {description}
                </p>
            </div>

            {/* action buttons */}
            <div className="flex items-center justify-end gap-3">

                {/* delete button */}
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    variant="secondary">
                    <span className="flex items-center gap-1">
                        <TrashIcon className="w-4 h-4 text-red-500" />
                        <p>Delete</p>
                    </span>
                </Button>

                {/* delete alert modal render */}
                <DeleteTodoAlertModal id={id} isOpen={isOpen} setIsOpen={setIsOpen} />

                {/* update button */}
                <Button
                onClick={() => setIsUpdateModalOpen(!isUpdateModalOpen)} 
                variant="secondary">
                    <span className="flex items-center gap-1">
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 text-lime-500" />
                        <p>Update</p>
                    </span>
                </Button>

                {/* delete alert modal render */}
                <UpdateTodoModal id={id} isUpdateModalOpen={isUpdateModalOpen} setIsUpdateModalOpen={setIsUpdateModalOpen} />

            </div>
        </div>
    );
};

export default TodoCard;
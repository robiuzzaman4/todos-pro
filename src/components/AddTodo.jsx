import { useState } from "react";
import Button from "./Button";
import AddTodoModal from "./AddTodoModal";

const AddTodo = () => {
    // state for modal
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>
                Add New Todo
            </Button>
            {/* add todo modal */}
            <AddTodoModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default AddTodo;
import { TrashIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { deleteTodo } from "../redux/features/todosSlice";

const DeleteTodoAlertModal = ({ isOpen, setIsOpen, id }) => {
    // get dispatch
    const dispatch = useDispatch();

    // function for delete a single todo
    const handleDeleteTodo = (id) => {
        try {
            // dispatch delete todo
            dispatch(deleteTodo({id}));

            // show success message
            toast.success("Delete Todo Successfully!", {
                style: {
                    background: "#262626",
                    color: "#fafafa"
                }
            });

            // close modal
            setIsOpen(!isOpen);

        } catch (error) {
            // show error message
            toast.error("Failed to Delete Todo!", {
                style: {
                    background: "#262626",
                    color: "#fafafa"
                }
            });

            // log error
            console.log("[Todo Delete Error]", error);
        }
    }
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Are you sure to delete this todo?">

            <div className="grid gap-6">
                <p className="text-neutral-400">
                    You may not be able to recover it later.
                </p>

                <div className="flex flex-col md:flex-row md:items-center justify-end gap-3">
                    <Button
                        onClick={() => handleDeleteTodo(id)}
                        variant="secondary">
                        <span className="flex items-center justify-center gap-1">
                            <TrashIcon className="w-4 h-4 text-red-500" />
                            <p> Yes Delete this!</p>
                        </span>
                    </Button>

                    <Button onClick={() => setIsOpen(!isOpen)}>
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteTodoAlertModal;
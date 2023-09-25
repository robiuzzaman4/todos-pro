import { useDispatch } from "react-redux";
import Button from "./Button";
import Modal from "./Modal";
import { addTodo } from "../redux/features/todosSlice";
import toast from "react-hot-toast";

const AddTodoModal = ({ isOpen, setIsOpen }) => {
    // get dispatch
    const dispatch = useDispatch();

    // function for add new todo form submission
    const handleSubmit = (e) => {
        // stop default refresh behavior
        e.preventDefault();

        // get todo's data from - form submit 
        const title = e.target.title.value;
        const description = e.target.description.value;

        // create new todo
        const newTodo = {
            title,
            description
        }

        try {
            // dispatch new todo
            dispatch(addTodo(newTodo));

            // show success message
            toast.success("New Todo Created!", {
                style: {
                    background: "#262626",
                    color: "#fafafa"
                }
            });

            // rest form
            e.target.reset();

            // close modal
            setIsOpen(!isOpen);

        } catch (error) {
            // show error message
            toast.error("Failed to Create Todo!", {
                style: {
                    background: "#262626",
                    color: "#fafafa"
                }
            });

            // log error
            console.log("[Todo Create Error]" ,error);
        }
    }
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Add New Todo">

            {/* form */}
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 pt-6">

                {/* title label */}
                <label className="flex flex-col gap-2">
                    <span>Title:</span>
                    <input
                        name="title"
                        type="text"
                        placeholder="Create New API"
                        className="px-4 py-2 bg-neutral-900 rounded-lg border border-lime-500 focus:outline-none"
                        required />
                </label>

                {/* description label */}
                <label className="flex flex-col gap-2">
                    <span>Description:</span>
                    <textarea
                        name="description"
                        type="text"
                        placeholder="Create New API For Up Coming Project"
                        className="w-full px-4 py-2 bg-neutral-900 rounded-lg border border-lime-500 focus:outline-none"
                        required />
                </label>

                {/* submit button */}
                <Button type="submit">
                    Add Now
                </Button>

            </form>

        </Modal>
    );
};

export default AddTodoModal;
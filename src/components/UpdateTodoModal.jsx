import Modal from './Modal';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../redux/features/todosSlice';
import toast from 'react-hot-toast';

const UpdateTodoModal = ({ isUpdateModalOpen, setIsUpdateModalOpen, id }) => {

    // dispatch
    const dispatch = useDispatch();

    // get todos and find current todo
    const { todos } = useSelector((state) => state.todosSlice);
    const currentTodo = todos.find((todo) => todo.id === id);

    // function for update todo form submission
    const handleUpdateTodo = (e) => {
        // stop default refresh behavior
        e.preventDefault();

        // get todo's data from - form submit 
        const title = e.target.title.value;
        const description = e.target.description.value;

        // update new todo
        const updatedTodo = {
            id,
            title,
            description
        }

        try {
            // dispatch new todo
            dispatch(updateTodo(updatedTodo));

            // show success message
            toast.success("Update Todo Successfully!", {
                style: {
                    background: "#262626",
                    color: "#fafafa"
                }
            });

            // rest form
            e.target.reset();

            // close modal
            setIsUpdateModalOpen(!isUpdateModalOpen);

        } catch (error) {
            // show error message
            toast.error("Failed To Update This Todo!", {
                style: {
                    background: "#262626",
                    color: "#fafafa"
                }
            });

            // log error
            console.log("[Todo Update Error]", error);
        }
    }

    return (
        <Modal
            isOpen={isUpdateModalOpen}
            setIsOpen={setIsUpdateModalOpen}
            title="Update This Todo">

            {/* form */}
            <form
                onSubmit={handleUpdateTodo}
                className="flex flex-col gap-4 pt-6">

                {/* title label */}
                <label className="flex flex-col gap-2">
                    <span>Title:</span>
                    <input
                        name="title"
                        type="text"
                        placeholder="Create New API"
                        className="px-4 py-2 bg-neutral-900 rounded-lg border border-lime-500 focus:outline-none"
                        defaultValue={currentTodo?.title} />
                </label>

                {/* description label */}
                <label className="flex flex-col gap-2">
                    <span>Description:</span>
                    <textarea
                        name="description"
                        type="text"
                        placeholder="Create New API For Up Coming Project"
                        className="w-full px-4 py-2 bg-neutral-900 rounded-lg border border-lime-500 focus:outline-none"
                        defaultValue={currentTodo?.description} />
                </label>

                {/* submit button */}
                <Button type="submit">
                    Update Now
                </Button>

            </form>
        </Modal>
    );
};

export default UpdateTodoModal;
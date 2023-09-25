import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const Todos = () => {
    const { todos } = useSelector((state) => state.todosSlice);
    console.log("[Todos]", todos);

    return (
        <section className="pb-12">
            <h1 className="text-3xl text-lime-500 text-center font-bold pb-6">
                - Todos -
            </h1>

            {
                !todos || todos.length <= 0 ?
                    <>
                        <h1 className="text-3xl text-lime-500 text-center font-bold pb-6">
                            No Todos Created Yet!
                        </h1>
                    </>
                    :
                    <>
                        {/* todo cards */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {
                                todos?.map((todo) => (
                                    <TodoCard key={todo.id} {...todo} />
                                ))
                            }
                        </div>
                    </>
            }
        </section >
    );
};

export default Todos;
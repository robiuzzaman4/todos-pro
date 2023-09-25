import { SquaresPlusIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    return (
        <nav className="py-6 flex items-center justify-between gap-6 border-b border-neutral-800">
            {/* brand */}
            <div className="flex items-center gap-2">
                <SquaresPlusIcon className="w-6 h-6 text-lime-500" />
                <span className="text-xl font-medium">Todos Pro</span>
            </div>

            <a
                href="https://github.com/robiuzzaman4"
                target="_blank"
                rel="noreferrer">
                <img
                    src="/github.svg"
                    alt="github svg icon"
                    className="w-6 h-6" />
            </a>

        </nav>
    );
};

export default Navbar;
import Navbar from "./Navbar";

export default function Header() {
    return (
        <div className="flex justify-between">
            <div>Logo</div>
            <Navbar className="flex-1"/>
            <div>
                <button>Theme</button>
                <button>Clap</button>
            </div>
        </div>
    );
}
import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useColorScheme } from "@mui/material/styles";

function Navbar() {
    const { mode, setMode } = useColorScheme();
    const [language, setLanguage] = React.useState("English");

    return (
        <nav className="shadow-sm">
            <div className="max-w-[1400px] mx-auto px-6 py-5 flex justify-between items-center">
                <div className="text-xl font-bold">
                    Portfolio
                </div>

                <ul className="hidden md:flex gap-8 text-sm font-medium">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/project">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                <div className="flex items-center gap-3">
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="px-3 py-1 rounded-md text-sm"
                    >
                        <option>English</option>
                        <option>Uzbek</option>
                        <option>Russian</option>
                    </select>

                    <button
                        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                        className="p-2 rounded-md "
                    >
                        {mode === "dark"
                            ? <BsSun />
                            : <BsMoon />
                        }
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

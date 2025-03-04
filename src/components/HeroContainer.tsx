import React, { useState } from "react";
import { ImgLogo } from "./shared/ImgLogo/ImgLogo";
import Navbar from "./shared/Navbar";
import ThemeToggle from "./shared/ThemeToggle";

interface HeroContainerProps {
    scrollToSection: (id: string) => void
}

const HeroContainer: React.FC<HeroContainerProps> = ({ scrollToSection }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Handle theme change
    const handleThemeChange = (isDarkMode: boolean) => {
        setIsDarkMode(isDarkMode);
    };

    return (
        <div className={`${isDarkMode ? "bg-gray-900 transition-colors duration-300" : "bg-white transition-colors duration-300"} fixed top-0 left-0 right-0 z-50`}>
            <div className="flex items-center justify-between p-2 hover:shadow-md">
                {/* Logo */}
                <div className="ml-3">
                    <ImgLogo
                        imgID="racineLogo"
                        imgSrcLight="/src/assets/images/logo/Racine_Halftone.png" // Path to light mode logo
                        imgSrcDark="/src/assets/images/logo/Racine_Halftonewhite.png" // Path to dark mode logo
                        imgAlt="Racine Halftonewhite Logo"
                        className="h-16 w-16" // Adjust size as needed
                        theme={isDarkMode ? "dark" : "light"} // Pass the current theme
                        scrollToSection={scrollToSection} //Props passed from parent to child component
                    />
                </div>
                {/* Navbar */}
                <Navbar isDarkMode={isDarkMode} scrollToSection={scrollToSection} /> {/*Props passed from parent to child component*/}
                {/* Theme Toggle */}
                <div className="mr-3">
                    <ThemeToggle onThemeChange={handleThemeChange} />
                </div>
            </div>
        </div >
    );
};
export default HeroContainer;
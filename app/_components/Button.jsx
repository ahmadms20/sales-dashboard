import Image from "next/image";

const Button = ({ children, buttonOnClick, buttonIcon, buttonTextColor = "#000000", buttonBackgroundColor = "#FFFFFF", buttonBorderColor = "#C3D3E2" }) => {
    return (
        <button
            className="flex justify-center items-center text-sm px-3 py-1 rounded-md"
            style={{ backgroundColor: buttonBackgroundColor, border: `1px solid ${buttonBorderColor}`, color: buttonTextColor }}
            onClick={buttonOnClick}
        >
            {buttonIcon ? <Image src={buttonIcon} alt="icon" width={20} height={20} className="mr-1" /> : null}
            {children}
        </button>
    )
};

export default Button;
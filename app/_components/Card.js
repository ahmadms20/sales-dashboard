import Button from "./Button";

const Card = ({ children, title, desc, buttonTextColor, buttonBackgroundColor, buttonBorderColor, buttonIcon, buttonText, buttonOnClick }) => {
  return (
    <div className="w-full h-full p-4 bg-white rounded-md">
        <div className="flex justify-between items-center">
            <div className="flex-col space-y-1">
                <h5 className="font-semibold">{title}</h5>
                <p className="text-sm text-gray-400">{desc}</p>
            </div>
            {buttonText ? (
                <Button
                    buttonTextColor={buttonTextColor}
                    buttonBackgroundColor={buttonBackgroundColor}
                    buttonBorderColor={buttonBorderColor}
                    buttonIcon={buttonIcon}
                    buttonOnClick={buttonOnClick}
                >
                  {buttonText}
                </Button>
            ) : null}
        </div>
        <div className="mt-4">
            {children}
        </div>
    </div>
  )
};

export default Card;
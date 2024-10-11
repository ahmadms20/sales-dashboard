import Image from "next/image";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const SelectLanguange = () => {
  return (
    <div className="w-full flex justify-center items-center p-2 cursor-pointer space-x-2">
        <Image src="/language.png" alt="Notification" width={18} height={18} />
        <p className="text-sm font-semibold">Eng (US)</p>
        <KeyboardArrowDownOutlinedIcon className="w-4 h-4 text-[#A098AE]" />
    </div>
  )
};

export default SelectLanguange;
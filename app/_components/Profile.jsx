import Image from "next/image";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Profile = () => {
  return (
    <div className="w-full flex justify-center items-center p-2 cursor-pointer space-x-4">
        <Image src="/profile.png" alt="Notification" width={40} height={40} />
        <div className="flex-col">
            <p className="text-sm font-semibold">Musfiq</p>
            <p className="text-sm">Admin</p>
        </div>
        <KeyboardArrowDownOutlinedIcon className="w-4 h-4" />
    </div>
  )
};

export default Profile;
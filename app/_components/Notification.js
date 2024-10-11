import Image from "next/image";

const Notification = () => {
  return (
    <div className="w-16 h-9 flex justify-center items-center p-2 rounded-md bg-[#FFFAF1] cursor-pointer relative">
        <Image src="/notification.png" alt="Notification" width={18} height={18} />
        <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#EB5757]" />
    </div>
  )
};

export default Notification;
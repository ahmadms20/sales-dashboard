import Card from "./Card";
import Image from "next/image";

const TargetReality = () => {

    const data = [
        { title: "Reality Sales", desc: "Global", total: "8.823", color: "#0095FF", icon: "/reality-sales.svg" },
        { title: "Target Sales", desc: "Commercial", total: "12.122", color: "#00E096", icon: "/target-sales.svg" },
    ];

    return (
        <Card title="Target Reality">
            <div className="flex-col space-y-4">
                <Image src="/diagram-4.png" alt="Diagram" width={500} height={500} />
                <div className="flex-col space-y-4 gap-4">
                    {data.map((item, index) => {
                        return (
                            <div className="flex justify-between items-center space-x-1" key={index}>
                                <div className="flex space-x-2">
                                    <Image src={item.icon} alt="icon" width={30} height={15} />
                                    <div className="flex-col">
                                        <p className="text-[10px] font-semibold">{item.title}</p>
                                        <p className="text-[8px] text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                                <div className="justify-end">
                                    <p className="text-xs font-semibold">{item.total}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Card>
    )
};

export default TargetReality;
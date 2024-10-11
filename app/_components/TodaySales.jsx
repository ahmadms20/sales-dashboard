import Card from "./Card";
import Image from "next/image";

const TodaySales = () => {

    const data = [
        { amount: "$1K", name: "Total Sales", score: "+8% from yesterday", icon: "/icon-sales.png", background: "#FFE2E5" },
        { amount: "300", name: "Total Order", score: "+5% from yesterday", icon: "/icon-order.png", background: "#FFF4DE" },
        { amount: "5", name: "Product Sold", score: "+1,2% from yesterday", icon: "/icon-product.png", background: "#DCFCE7" },
        { amount: "8", name: "New Customers", score: "+0,5% from yesterday", icon: "/icon-customer.png", background: "#F3E8FF" },
    ];

    return (
        <Card title="Today's Sales" desc="Total 120 Sales" buttonIcon="/export.svg" buttonText="Export">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
                {data.map((item, index) => {
                    return (
                        <div className="flex-col space-y-2 rounded-md p-4" style={{ backgroundColor: item.background }} key={index}>
                            <Image src={item.icon} alt="icon" width={40} height={40} />
                            <p className="text-[24px] font-bold">{item.amount}</p>
                            <p className="text-[12px] font-semibold text-[#425166]">{item.name}</p>
                            <p className="text-[10px] text-[#4079ED]">{item.score}</p>
                        </div>
                    )
                })}
            </div>
        </Card>
    )
};

export default TodaySales;
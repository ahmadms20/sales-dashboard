import Card from "./Card";
import Image from "next/image";

const VisitorInsigts = () => {

    const data = [
        { name: "Loyal Customers", color: "#A700FF" },
        { name: "New Customers", color: "#EF4444" },
        { name: "Unique Customers", color: "#3CD856" },
    ];

    return (
        <Card title="Visitor Insigts">
            <div className="flex-col space-y-6">
                <Image src="/diagram-1.png" alt="Diagram" width={500} height={500} />
                <div className="grid grid-cols-3 px-4 md:px-8">
                    {data.map((item, index) => {
                        return (
                            <div className="flex justify-center items-center space-x-2" key={index}>
                                <div className="w-2 h-2" style={{ backgroundColor: item.color }} aria-hidden="true" />
                                <p className="text-[10px] text-[#425166]">{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Card>
    )
};

export default VisitorInsigts;
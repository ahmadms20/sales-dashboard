import Card from "./Card";
import Image from "next/image";

const SalesMappingBySector = () => {

    const data = [
        { id: 1, name: "Amil - 4%", color: "#1F3863" },
        { id: 2, name: "Ekonomi - 9%", color: "#BCD6ED" },
        { id: 3, name: "Pendidikan - 14%", color: "#00AFEF" },
        { id: 4, name: "Amil - 16%", color: "#000000" },
        { id: 5, name: "Ekonomi - 5%", color: "#979797" },
        { id: 6, name: "Pendidikan - 52%", color: "#4471C4" },
    ];

    return (
        <Card title="Sales Mapping by Sector">
            <div className="flex space-x-2">
                <Image src="/diagram-5.png" alt="Diagram" width={160} height={160} />
                <div className="flex-col space-y-2">
                    {data.map((item, index) => {
                        return (
                            <div className="flex items-center space-x-1" key={index}>
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color, border: item.id === 6 ? "1px solid #000000" : "unset" }} aria-hidden="true" />
                                <p className="text-[8px] text-[#425166]">{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Card>
    )
};

export default SalesMappingBySector;
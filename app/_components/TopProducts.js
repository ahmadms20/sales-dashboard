import Card from "./Card";
import Button from "./Button";

const TopProducts = () => {

    const data = [
        { id: "01", name: "Home Decor Range", popularity: "80%", sales: "45%", color: "#0095FF", background: "#F0F9FF" },
        { id: "02", name: "Disney Princess Pink Bag 18'", popularity: "60%", sales: "29%", color: "#00E58F", background: "#F0FDF4" },
        { id: "03", name: "Bathroom Essentials", popularity: "55%", sales: "18%", color: "#884DFF", background: "#FBF1FF" },
        { id: "04", name: "Apple Smartwatches", popularity: "30%", sales: "25%", color: "#FF8900", background: "#FEF6E6" },
    ];

    return (
        <Card title="Top Products">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="text-[12px] text-gray-400">
                            <th className="py-2 px-4 border-b text-left">#</th>
                            <th className="py-2 px-4 border-b text-left">Name</th>
                            <th className="py-2 px-4 border-b text-left">Popularity</th>
                            <th className="py-2 px-4 border-b text-left">Sales</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            let isNumberFour = index < 3;
                            return (
                                <tr
                                    key={index}
                                    className="text-[13px]"
                                >
                                    <td className={`py-2 px-2 ${isNumberFour ? "border-b border-gray-200" : ""}`}>{item.id}</td>
                                    <td className={`py-2 px-2 ${isNumberFour ? "border-b border-gray-200" : ""}`}>{item.name}</td>
                                    <td className={`py-2 px-2 ${isNumberFour ? "border-b border-gray-200" : ""}`}>
                                        <div
                                            className="w-full bg-gray-200 rounded-full h-1"
                                            style={{ backgroundColor: item.background }}
                                        >
                                            <div
                                                className="h-1 rounded-full"
                                                style={{
                                                    width: item.popularity,
                                                    backgroundColor: item.color,
                                                }}
                                            ></div>
                                        </div>
                                    </td>
                                    <td className={`py-2 px-2 ${isNumberFour ? "border-b border-gray-200" : ""}`}>
                                        <Button buttonTextColor={item.color} buttonBackgroundColor={item.background} buttonBorderColor={item.color}>
                                            {item.sales}
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </Card>
    )
};

export default TopProducts;
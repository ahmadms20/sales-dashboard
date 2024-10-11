import Card from "./Card";
import Image from "next/image";

const CustomerSatisfaction = () => {
    return (
        <Card title="Customer Satisfaction">
            <div className="flex-col space-y-12">
                <Image src="/diagram-3.png" alt="Diagram" width={500} height={500} />
                <div className="flex justify-center space-x-4 px-4 md:px-8">
                    <div className="flex-col justify-end space-y-2">
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-[#0095FF]" />
                            <p className="text-xs text-gray-400">Last Month</p>
                        </div>
                        <p className="text-xs text-center">$3,004</p>
                    </div>
                    <div className="w-0.5 h-4 bg-gray-300" />
                    <div className="flex-col justify-start space-y-2">
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-[#00E096]" />
                            <p className="text-xs text-gray-400">This Month</p>
                        </div>
                        <p className="text-xs text-center">$4,504</p>
                    </div>
                </div>
            </div>
        </Card>
    )
};

export default CustomerSatisfaction;
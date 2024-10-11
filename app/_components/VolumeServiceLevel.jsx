import Card from "./Card";
import Image from "next/image";

const VolumeServiceLevel = () => {
    return (
        <Card title="Volume vs Service Level">
            <div className="flex-col space-y-4">
                <Image src="/diagram-6.png" alt="Diagram" width={500} height={500} />
                <div className="flex justify-center space-x-4 px-4 md:px-8">
                    <div className="flex-col justify-end space-y-2">
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-[#0095FF]" />
                            <p className="text-xs text-gray-400">Volume</p>
                        </div>
                        <p className="text-xs text-center">1,135</p>
                    </div>
                    <div className="w-0.5 h-4 bg-gray-300" />
                    <div className="flex-col justify-start space-y-2">
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-[#00E096]" />
                            <p className="text-xs text-gray-400">Services</p>
                        </div>
                        <p className="text-xs text-center">635</p>
                    </div>
                </div>
            </div>
        </Card>
    )
};

export default VolumeServiceLevel;
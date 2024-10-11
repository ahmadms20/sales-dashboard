import Card from "./Card";
import Image from "next/image";
import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const TargetReality = () => {

    const data = [
        { title: "Reality Sales", desc: "Global", total: "8.823", color: "#0095FF", icon: "/reality-sales.svg" },
        { title: "Target Sales", desc: "Commercial", total: "12.122", color: "#00E096", icon: "/target-sales.svg" },
    ];
    const options = {
        chart: {
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            colors: ['#4AB58E', '#FFCF00'],
        },
        legend: {
            show: false,
        }
      };
      const series = [
        {
            name: 'Reality Sales',
            data: [30, 40, 35, 50, 49, 60, 70],
        },
        {
            name: 'Target Sales',
            data: [23, 12, 54, 61, 34, 56, 81],
        }
    ];

    return (
        <Card title="Target Reality">
            <div className="flex-col space-y-4">
                <ApexChart
                    options={options}
                    series={series}
                    type="bar"
                    width="270"
                />
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
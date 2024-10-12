import Card from "./Card";
import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CustomerSatisfaction = () => {

    const options = {
        chart: {
            type: 'area',
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            labels: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        markers: {
            size: 3,
            colors: ['#00E096', '#0095FF'],
            strokeWidth: 0,
            hover: {
                size: 7,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        fill: {
            colors: ['#00E096', '#0095FF'],
        },
        legend: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 768,
                options: {
                    chart: {
                        width: '100%',
                    },
                },
            },
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: '100%',
                    },
                },
            },
        ],
      };
      const series = [
        {
            name: 'This Month',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
        {
            name: 'Last Month',
            data: [23, 12, 54, 61, 34, 56, 81, 19, 104],
        }
    ];
    
    return (
        <Card title="Customer Satisfaction">
            <div className="flex-col space-y-8">
                <ApexChart
                    options={options}
                    series={series}
                    type="area"
                    width="100%"
                />
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
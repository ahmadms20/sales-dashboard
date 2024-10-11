import Card from "./Card";
import Chart from 'react-apexcharts';

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
            strokeWidth: 2,
            hover: {
                size: 7,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        fill: {
            colors: ['#00E096', '#0095FF'],
        },
        legend: {
            show: false,
        },
      };
    
      const series = [
        {
            name: 'Product A',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
        {
            name: 'Product B',
            data: [23, 12, 54, 61, 34, 56, 81, 19, 104],
        }
    ];
    
    return (
        <Card title="Customer Satisfaction">
            <div className="flex-col space-y-8">
                <Chart
                    options={options}
                    series={series}
                    type="area"
                    width="270"
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
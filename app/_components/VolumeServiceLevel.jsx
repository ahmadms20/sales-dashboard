import Card from "./Card";
import Chart from 'react-apexcharts';

const VolumeServiceLevel = () => {
    const options = {
        chart: {
            type: 'bar',
            stacked: true,
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
        plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 3,
            },
        },
        fill: {
            colors: ['#00E096', '#0095FF'],
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
    };
    const series = [
        {

            name: 'Services',
            data: [54, 60, 40, 67, 57, 43, 21, 49, 72],
        },
        {
            name: 'Volume',
            data: [48, 60, 60, 56, 40, 37, 33, 42, 48],
        },
    ];

    return (
        <Card title="Volume vs Service Level">
            <div className="flex-col space-y-2">
                <Chart options={options} series={series} type="bar" width="260" />
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
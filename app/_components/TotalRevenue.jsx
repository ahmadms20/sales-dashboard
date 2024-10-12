import Card from "./Card";
import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const TotalRevenue = () => {

    const data = [
        { id: 1, name: "Online Sales", color: "#0095FF" },
        { id: 2, name: "Offline Sales", color: "#00E096" },
    ];
    const options = {
        chart: {
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yaxis: {
            min: 0,
            max: 25,
            tickAmount: 5,
            labels: {
                formatter: function (value) {
                    return value.toFixed(0);
                },
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
            colors: ['#008FFB', '#00E396'],
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
            name: 'Online Sales',
            data: [5, 10, 15, 20, 10, 15, 20],
        },
        {
            name: 'Offline Sales',
            data: [10, 5, 20, 15, 5, 10, 25],
        }
    ];

    return (
        <Card title="Total Revenue">
            <div className="flex-col space-y-2">
                <ApexChart
                    options={options}
                    series={series}
                    type="bar"
                    width="100%"
                />
                <div className="grid grid-cols-2 gap-4 px-4 md:px-8">
                    {data.map((item, index) => {
                        return (
                            <div className={`flex items-center space-x-2 ${item.id === 1 ? "justify-end" : "justify-start"}`} key={index}>
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} aria-hidden="true" />
                                <p className="text-[10px] text-[#425166]">{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Card>
    )
};

export default TotalRevenue;
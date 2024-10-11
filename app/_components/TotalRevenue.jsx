import Card from "./Card";
import Chart from 'react-apexcharts';

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
        }
    };
    const series = [
        {
            data: [30, 40, 35, 50, 49, 60, 70],
        },
        {
            data: [23, 12, 54, 61, 34, 56, 81],
        }
    ];

    return (
        <Card title="Total Revenue">
            <div className="flex-col space-y-2">
                <Chart
                    options={options}
                    series={series}
                    type="bar"
                    width="400"
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
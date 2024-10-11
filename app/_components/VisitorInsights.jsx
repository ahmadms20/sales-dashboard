import Card from "./Card";
import Chart from 'react-apexcharts';

const VisitorInsigts = () => {

    const data = [
        { name: "Loyal Customers", color: "#A700FF" },
        { name: "New Customers", color: "#EF4444" },
        { name: "Unique Customers", color: "#3CD856" },
    ];

    const options = {
        chart: {
            type: 'area',
            toolbar: {
              show: false,
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return value.toFixed(0);
                },
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        fill: {
            colors: ['#EF4444', '#A700FF', '#3CD856'],
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 4,
            hover: {
              size: 6,
            },
        },
        legend: {
            show: false,
        },
    };

    const series = [
        {
            name: 'New Customers',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 100, 120, 140],
        },
        {
            name: 'Loyal Customers',
            data: [23, 12, 54, 61, 34, 56, 81, 19, 104, 50, 90, 100],
        },
        {
            name: 'Unique Customers',
            data: [20, 46, 25, 80, 59, 70, 40, 97, 120, 90, 140, 160],
        }
    ];

    return (
        <Card title="Visitor Insights">
            <div className="flex-col space-y-2">
                <Chart
                    options={options}
                    series={series}
                    type="area"
                    width="370"
                />
                <div className="grid grid-cols-3 px-4 md:px-8">
                    {data.map((item, index) => (
                        <div className="flex justify-center items-center space-x-2" key={index}>
                            <div className="w-2 h-2" style={{ backgroundColor: item.color }} aria-hidden="true" />
                            <p className="text-[10px] text-[#425166]">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default VisitorInsigts;
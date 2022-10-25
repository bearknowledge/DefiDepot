import { ResponsiveLine } from '@nivo/line'
   

export const Linegraph = () => {




function Last7Days () {
  var result = [];
   
    for (var i=0; i<6; i++) {
        var d = new Date();
        const CurrentDay = d.getDate() - (2 * i);
        const CurrentMonth = d.getMonth();
        result.push(CurrentMonth + "/" + CurrentDay)
    }
    return(result.reverse());
   
 }

const interval = Last7Days();

  const data = [{
    
      "id": "price",
      "color": "hsl(138, 70%, 50%)",
      "data": [
        {
          "x": interval[0],
          "y": 182
        },
        {
          "x": interval[1],
          "y": 141
        },
        {
          "x": interval[2],
          "y": 159
        },
        {
          "x": interval[3],
          "y": 143
        },
        {
          "x": interval[4],
          "y": 33
        },
        {
          "x": interval[5],
          "y": 147
        },
      ]
    
    }
  ]

  return (
    <div className='w-full h-[250px]'>
    <ResponsiveLine
    data={data}
    margin={{ top: 30, right: 50, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
    }}
    yFormat=" >-.2f"
    curve='cardinal'
    axisTop={null}
    axisRight={null}
    axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 36,
        legendPosition: 'middle'
    }}
    axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Price',
        legendOffset: -45,
        legendPosition: 'middle'
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    enableArea={true}
    useMesh={true}
/>
</div>
)
}

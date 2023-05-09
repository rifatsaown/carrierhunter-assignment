import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';
const Statistics = () => {
    const data = [
        {
          name: 'A 1',
          Marks: 60
        },
        {
          name: 'A 2',
          Marks: 50
        },
        {
          name: 'A 3',
          Marks: 60
        },
        {
          name: 'A 4',
          Marks: 60
        },
        {
          name: 'A 5',
          Marks: 50
        },
        {
          name: 'A 6',
          Marks: 60
        },
        {
          name: 'A 7',
          Marks: 60
        },
      ];
    return (
        <div>
            <h1 className="text-3xl font-bold text-white-800 text-center py-8">Statistics</h1>
       <div className="flex flex-col items-center justify-center">
       <ComposedChart
          width={500}
          height={400}
          data={data}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Marks" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="Marks" stroke="#ff7300" />
        </ComposedChart>
       </div>
        </div>
                

        
      
    );
};

export default Statistics;
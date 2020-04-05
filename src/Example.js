import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
// [
// // {
// //   "city": "Abbeville",
// //   "province": "South Carolina",
// //   "country": "US",
// //   "lastUpdate": "2020-04-02 23:25:27",
// //   "keyId": "Abbeville, South Carolina, US",
// //   "confirmed": 6,
// //   "deaths": 0,
// //   "recovered": 0
// // },
// // {
// //   "city": "yorkton",
// //   "province": "South Carolina",
// //   "country": "US",
// //   "lastUpdate": "2020-04-02 23:25:27",
// //   "keyId": "Abbeville, South Carolina, US",
// //   "confirmed": 6,
// //   "deaths": 0,
// //   "recovered": 0
// // },
// ]
// go through all my data and sumup deaths, confirmed, recovered by country
const data = [
  {
    name: 'USA', deaths: 4000, confirmed : 2400, recovered: 2400,
  },
  {
    name: 'Canada', deaths: 4000, confirmed : 400, recovered: 200,
  },
  {
    name: 'Mexico', deaths: 3000, confirmed : 240, recovered: 400,
  },
];
export default class Example extends PureComponent {
  // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="deaths" fill="#8884d8" />
        <Bar dataKey="confirmed" fill="#82ca9d" />
        <Bar dataKey="recovered" fill="#42ca9d" />
      </BarChart>
    );
  }
}
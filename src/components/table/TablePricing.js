import React from 'react';
import { Table } from 'react-bootstrap';

import './styles.scss';

const TablePricing = () => (
  <Table size="sm" bordered>
    <thead>
      <tr>
        <th>Quantity</th>
        <th>12</th>
        <th>24</th>
        <th>50</th>
        <th>100</th>
        <th>150</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowSpan={2}>Price</td>
        <td className="discount-strike">$25.44</td>
        <td className="discount-strike">$24.17</td>
        <td className="discount-strike">$22.95</td>
        <td className="discount-strike">$21.86</td>
        <td className="discount-strike">$21.19</td>
      </tr>
      <tr>
        <td className="discount">$17.79</td>
        <td className="discount">$16.89</td>
        <td className="discount">$15.99</td>
        <td className="discount">$15.29</td>
        <td className="discount">$14.79</td>
      </tr>
    </tbody>
  </Table>
);

export default TablePricing;

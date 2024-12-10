import React from 'react';

interface Order {
  id: string;
  date: string;
  total: string;
  products: number;
  status: 'Processing' | 'on the way' | 'Completed' | 'Cancelled';
}

const OrderHistory: React.FC = () => {
  const orders: Order[] = [
    {
      id: '738',
      date: '8 Sep, 2020',
      total: '135.00',
      products: 5,
      status: 'Processing',
    },
    {
      id: '703',
      date: '24 May, 2020',
      total: '25.00',
      products: 1,
      status: 'on the way',
    },
    {
      id: '130',
      date: '22 Oct, 2020',
      total: '250.00',
      products: 4,
      status: 'Completed',
    },
    {
      id: '561',
      date: '1 Feb, 2020',
      total: '35.00',
      products: 1,
      status: 'Completed',
    },
    {
      id: '536',
      date: '21 Sep, 2020',
      total: '578.00',
      products: 13,
      status: 'Cancelled',
    },
    {
      id: '492',
      date: '22 Oct, 2020',
      total: '345.00',
      products: 7,
      status: 'Completed',
    },
  ];

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'Processing':
        return 'text-gray-700';
      case 'on the way':
        return 'text-orange-500';
      case 'Completed':
        return 'text-green-500';
      case 'Cancelled':
        return 'text-red-500';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div className="w-full max-w-[1077px] font-poppins text-gray-900 mx-auto">
      <div className='flex flex-col md:flex-row justify-between'>
      <h2 className="text-xl font-semibold mb-4">Recent Order History</h2>
      <div className="text-orange-500 cursor-pointer">View All</div>
      </div>
      <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2 text-gray-500 font-medium">
        <div>ORDER ID</div>
        <div className='hidden md:block'>DATE</div>
        <div>TOTAL</div>
        <div>STATUS</div>
        <div className="text-orange-500 cursor-pointer"></div>
      </div>
      {orders.map((order) => (
        <div
          key={order.id}
          className="flex justify-between items-center border-b border-gray-200 py-3"
        >
          <div className="w-[150px] text-sm font-normal">
            <span>#</span>
            <span>{order.id}</span>
          </div>
          <div className="w-[150px] text-sm font-normal  hidden md:block">{order.date}</div>
          <div className="w-[150px] text-sm font-normal">
            ${order.total} ({order.products} Product{order.products > 1 ? 's' : ''})
          </div>
          <div className={`w-[150px] text-sm font-normal ${getStatusColor(order.status)}`}>
            {order.status}
          </div>
          <div className="w-[100px] hidden md:block text-right text-sm font-medium text-orange-500 cursor-pointer">
            View Details
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;

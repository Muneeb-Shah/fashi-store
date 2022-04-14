import React, { useEffect, useState } from "react";
import axios from "axios";

const apiEndpoint = "https://fashi-backend.herokuapp.com/api";

const Orders = ({ currentUser }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const result = await axios(
        `${apiEndpoint}/orders?filters[user][id][$eq]=${currentUser.id}&populate=*`
      );
      setOrders(result.data.data);
    };
    if (currentUser) getOrders();
  }, []);
  console.log(orders[0]);
  return (
    <section id="orders" className="orders">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-heading__heading">My Orders</h2>
        </div>
        {orders.length < 1 ? (
          <div className="no-orders">No Orders</div>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Placed On</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <th scope="col">{order.id}</th>
                  <th scope="col">{order.attributes.createdAt.slice(0, 9)}</th>
                  <th scope="col">
                    Rs.{order.attributes.order_details.order_amount}
                  </th>
                  <th
                    scope="col"
                    className={`order_${order.attributes.status}`}
                  >
                    {order.attributes.status}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default Orders;

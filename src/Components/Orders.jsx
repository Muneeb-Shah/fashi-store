import React, { useEffect, useState } from "react";
import axios from "axios";

const apiEndpoint = "http://localhost:1337/api";

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

  return (
    <section id="orders" className="orders">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-heading__heading">My Orders</h2>
        </div>
        <table className="orders-table">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          {orders.length < 1 ? (
            <tr>
              <th scope="col"></th>
              <th scope="col">No Orders</th>
              <th scope="col"></th>
            </tr>
          ) : (
            <tbody>
              {orders.map((order) => (
                <tr>
                  <th scope="col">{order.id}</th>
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
          )}
        </table>
      </div>
    </section>
  );
};

export default Orders;

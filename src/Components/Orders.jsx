import React, { useEffect, useState } from "react";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const apiEndpoint = "https://fashi-backend.herokuapp.com/api";

const Orders = ({ currentUser }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const result = await axios(
          `${apiEndpoint}/orders?filters[user][id][$eq]=${currentUser.id}&populate=*`
        );
        if (result.data) setLoading(false);
        setOrders(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (currentUser) getOrders();
  }, []);

  while (loading) {
    return (
      <section className="orders">
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
          <div className="loader-text">LOADING</div>
        </Backdrop>
      </section>
    );
  }

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

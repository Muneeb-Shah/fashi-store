import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_USER_ORDERS } from "../graphql/queries";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Orders = ({ currentUser }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [getUserOrders] = useLazyQuery(GET_USER_ORDERS, {
    onCompleted: (res) => {
      setLoading(false);
      setOrders(res?.orders?.data);
    },
    onError: (error) => {
      console.log(`ERROR: ${error}`);
    },
  });

  useEffect(() => {
    getUserOrders({ variables: { currentUserId: currentUser.id } });
  }, [orders]);

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

  let dateToRender = "";

  const getDate = (date) => {
    const newDate = new Date(date);
    const dateString = newDate.toGMTString().slice(-0, -12);
    dateToRender = dateString;
  };

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
              {orders.map((order) => {
                getDate(order.attributes.createdAt);
                return (
                  <tr
                    key={order.id}
                    className={`order-row_${order.attributes.status}`}
                  >
                    <th scope="col">{order.id}</th>
                    <th scope="col">{dateToRender}</th>
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
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default Orders;

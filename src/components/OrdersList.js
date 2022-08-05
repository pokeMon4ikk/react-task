import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom'

const Order = ({order}) => {
    return(
        <tr className="tab-content prof">
            <td>
                {order.name}
            </td>
            <td>
                {order.description}
            </td>
            <td className="td_center">
                {order.code}
            </td>
            <td className="td_center">
                {order.price}
            </td>
        </tr>
    )
}

const OrderList = ({orders, history, login}) => {

    const allOrders = history.map(order => order).slice(1)
    console.log(allOrders)

    return(
        <div>
            <Link to='/profile' className="nav_link change">Назад</Link>
            <h3> Заказ № </h3>
            <table className="table">
                <th>
                    Название
                </th>
                <th>
                    Описание
                </th>
                <th>
                    Код
                </th>
                <th>
                    Цена
                </th>
                {allOrders.map((order) => <Order order={order}/>)}
            </table>
        </div>
    )


}

export default OrderList
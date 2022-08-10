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
            <td className="td_center">
                {order.date}
            </td>
        </tr>
    )
}

const OrderList = ({history, login}) => {

    const allOrders = history.map(order => order.orders).slice(1)

    const all_ord_user = []

    for(let i = 0; i < allOrders.length; i++){
        const orderVal = Object.values(allOrders[i])
        for(let j = 0; j < orderVal.length; j++){
            all_ord_user.push(orderVal[j])
        }
    }

    console.log(all_ord_user)

    return(
        <div>
            <Link to='/profile' className="nav_link change">Назад</Link>
            <h3 className="tab">Список заказанных товаров</h3>
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
                <th>
                    Дата заказа
                </th>
                {all_ord_user.map(order => order.map((order) => <Order order={order}/>))}
            </table>
        </div>
    )

}

export default OrderList
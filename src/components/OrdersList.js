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

    const all_ord_user1 = []
    const all_ord_user2 = []

    for(let i = 0; i < allOrders.length; i++){
        const orderVal1 = Object.values(allOrders[i])
        const orderKey1 = Object.keys(allOrders[i])
        for(let a = 0; a < orderKey1.length; a++){
            if (login === orderKey1[a]){
                for(let j = 0; j < orderVal1.length; j++){
                    all_ord_user1.push(orderVal1[j])
                }
            }
        }
    }

    for(let i = 0; i < allOrders.length; i++){
        const orderVal2 = Object.values(allOrders[i])
        const orderKey2 = Object.keys(allOrders[i])
        for(let a = 0; a < orderKey2.length; a++){
            if (login === orderKey2[a]){
                for(let j = 0; j < orderVal2.length; j++){
                    all_ord_user2.push(orderVal2[j])
                }
            }
        }
    }

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
                {login === 'User1' ? all_ord_user1.map(order => order.map((order) => <Order order={order}/>)) :
                all_ord_user2.map(order => order.map((order) => <Order order={order}/>)) }
            </table>
        </div>
    )
}

export default OrderList
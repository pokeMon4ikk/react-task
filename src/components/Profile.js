import React from 'react';
import '../index.css'
import avatar from "../img/avatar.png"
import {Link} from 'react-router-dom'


const OrderItem = ({order, deleteOrderItem}) => {

    if(order.isChecked === true){
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
                <button className="btn" onClick={() => deleteOrderItem(order.id)}>Удалить</button>
            </tr>
        )
    }
}

const Profile = ({order, deleteOrder, deleteOrderItem, login}) => {
    return (
        <div className="profile">
             <div>
                <div>
                    <img src={avatar} alt="avatar"></img>
                </div>
                <div>
                    <p>Name: Пользователь</p>
                </div>
                <div>
                    <p>Активный заказ:</p>
                    <div className="prof">
                        <table className="table prof">
                            <th>
                                Товар
                            </th>
                            <th>
                                Описание товара
                            </th>
                            <th>
                                Код
                            </th>
                            <th>
                                Цена
                            </th>
                            {order.map((order) => <OrderItem order={order} deleteOrderItem={deleteOrderItem}/>)}
                        </table>
                        <button className="btn" onClick={() => deleteOrder()}>Отменить заказ</button>
                        <Link to='/profile/ordersHistory' className="nav_link change">Перейти к истории заказов</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
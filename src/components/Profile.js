import React from 'react';
import avatar from "../img/avatar.png"

const OrderItem = ({order}) => {
    if(order.isChecked === true){
        return(
            <tr className="tab-content">
                <td>
                    {order.name}
                </td>
                <td>
                    {order.description}
                </td>
                <td>
                    {order.code}
                </td>
                <td>
                    {order.price}
                </td>
            </tr>
        )
    }
}

const Profile = ({orders, deleteOrder}) => {
    return (
        <div>
             <div>
                <div>
                    <img src={avatar} alt="avatar"></img>
                </div>
                <div>
                    <p>Name: Пользователь</p>
                </div>
                <div>
                    <p>Активный заказ:</p>
                    <div>
                        <table className="table">
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
                            {orders.map((order) => <OrderItem order={order}/>)}
                        </table>
                        <button onClick={() => deleteOrder(orders)}>Отменить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
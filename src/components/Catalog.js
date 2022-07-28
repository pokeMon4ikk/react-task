import React from 'react';
import '../index.css'


const WareItem = ({ware})=> {

    ware.isChecked = false

    const handlerCheck = () => {
        if (ware.isChecked === false){
            ware.isChecked = true
            console.log(ware.isChecked)
        }else{
            ware.isChecked = false
            console.log(ware.isChecked)
        }
    }

    return (
        <tr className="tab-content">
            <td>
                <input type="checkbox" id="checkbox" onChange={handlerCheck}></input>
                {ware.name}
            </td>
            <td>
                {ware.description}
            </td>
            <td>
                {ware.code}
            </td>
            <td>
                {ware.price}
            </td>
            <td>
                {ware.quantity}
            </td>
        </tr>
    )
}

const WareList = ({wares, getOrderData}) => {

    const order = JSON.parse(JSON.stringify(wares, null, 2))

    return (
        <div>
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
                    Доступно в продаже
                </th>
                {order.map((ware) => <WareItem ware={ware}/>)}
            </table>
            <button onClick={() => getOrderData(order)}>Добавить в заказ</button>
        </div>
    )
}

export default WareList

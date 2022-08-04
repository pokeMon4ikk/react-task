import React from 'react';
import '../index.css'

const WareItem = ({ware})=> {

    ware.isChecked = false

    const handlerCheck = () => {
        if (ware.isChecked === false){
            ware.isChecked = true
        }else{
            ware.isChecked = false
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
            <td className="td_center">
                {ware.code}
            </td>
            <td className="td_center">
                {ware.price}
            </td>
            <td className="td_center">
                {ware.quantity}
            </td>
        </tr>
    )
}

const WareList = ({wares, getOrderData, SortedPriceData, CancelSortAndFilters, FilterName, SortedPriceDataUp, SortedPriceDataDn}) => {

    const order = JSON.parse(JSON.stringify(wares, null, 2))

    return (
        <div>
            <button onClick={() =>  FilterName(order)}>Фильтрация по имени</button>
            <button onClick={() => SortedPriceData(order)}>Сортировка по цене</button>
            <button onClick={() => SortedPriceDataUp(order)}>🠕</button>
            <button onClick={() => SortedPriceDataDn(order)}>🠗</button>
            <button onClick={() => CancelSortAndFilters()}>✖</button>
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

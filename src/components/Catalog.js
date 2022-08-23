import React from 'react';
import '../index.css'

const WareItem = ({ware, login})=> {

    ware.isChecked = false

    const date = new Date()

    const handlerCheck = () => {
        if (ware.isChecked === false){
            ware.isChecked = true
            ware.date = date.toLocaleString()
            ware.login = login
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

const WareList = ({wares, SortedPriceData, CancelSortAndFilters, FilterName, SortedPriceDataUp, SortedPriceDataDn, formOrder, login}) => {

    const order = JSON.parse(JSON.stringify(wares, null, 2))

    return (
        <div>
            <button className="btn" onClick={() =>  FilterName(order)}>Фильтрация по имени</button>
            <button className="btn" onClick={() => SortedPriceData(order)}>Сортировка по цене</button>
            <button className="btn" onClick={() => SortedPriceDataUp(order)}>🠕</button>
            <button className="btn" onClick={() => SortedPriceDataDn(order)}>🠗</button>
            <button className="btn" onClick={() => CancelSortAndFilters()}>✖</button>
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
                {order.map((ware) => <WareItem ware={ware} login={login}/>)}
            </table>
            <button className="btn" onClick={() => formOrder(order)}>Добавить в заказ</button>
        </div>
    )
}

export default WareList

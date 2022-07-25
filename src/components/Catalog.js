import React from 'react';
import '../index.css'

const WareItem = ({ware})=> {
    return (
        <tr className="tab-content">
            <td>
                <input type="checkbox" id="checkbox"></input>
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

const WareList = ({wares}) => {
    return (
        <div >
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
                {wares.map((ware) => <WareItem ware={ware} />)}
            </table>
            <button>Добавить в заказ</button>
            <button> Фильтрация по названию</button>
            <button> Фильтрация по коду</button>
        </div>
    )
}

export default WareList



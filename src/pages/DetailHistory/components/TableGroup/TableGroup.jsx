import React from 'react'
import './TableGroup.scss'

export const TableGroup = ({
    title,
    tableData,
    type = 1
}) => {
    const convertValue = () => {
        const listRow = [];
        let index = 0
        for (const key in tableData) {
            listRow.push(
                <div key={index} className="table-group__row">
                <div className="table-group__row__label">
                    {index + 1}&nbsp;{key}
                </div>
                <div className="table-group__row__value">
                    {type === 1 ?
                    tableData[key] ? 'Verified' : 'Unverified'
                    :
                    tableData[key]
                    }
                </div>
            </div>
            )
            index++;
            
        }
        return listRow
    }
    return (
        <div className="table-group">
            <div className="table-group__label">
                {title}
            </div>
            <div className="table-group__content">
                { convertValue()
                }
            </div>
        </div>
    )
}

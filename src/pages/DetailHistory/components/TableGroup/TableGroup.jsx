import React from 'react'
import './TableGroup.scss'

export const TableGroup = ({
    title,
    tableData
}) => {
    return (
        <div className="table-group">
            <div className="table-group__label">
                CREDENTIAL ANALYSIS
            </div>
            <div className="table-group__content">
                {
                    tableData?.map((item, index) => (
                        <div key={index} className="table-group__row">
                            <div className="table-group__row__label">
                                {index + 1}&nbsp;{item.label}
                            </div>
                            <div className="table-group__row__value">
                                {item.value}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

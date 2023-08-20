import React from 'react'
import './History.scss'
import { ReactComponent as IconFind } from '../../shared/assets/icon/find.svg';
import { TableHistory } from './components/Table';
import { useNavigate } from 'react-router-dom';

export const History = () => {
  const nagivate = useNavigate()

  const tableData = [
    {
      type: "Credential assessment report 1",
      time: "22 Mar 2023",
      view: <span onClick={() => nagivate('/history-detail')}>View</span>
    },
    {
      type: "Credential assessment report 2",
      time: "19 Feb 2023",
      view: <span onClick={() => nagivate('/history-detail')}>View</span>
    },
    {
      type: "Credential assessment report 3",
      time: "19 Feb 2023",
      view: <span onClick={() => nagivate('/history-detail')}>View</span>
    },
  ]


    return (
        <div className='history'>
            <div className='history__group-search'>
                <IconFind />
                <input
                    type='text'
                    className='history__group-search__input'
                />
            </div>
            <TableHistory
                tabledata={tableData}
            />
        </div>
    )
}

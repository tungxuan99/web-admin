import React from 'react'
import './CreateRequirement.scss'

import { Sidebar } from '../common/Sidebar';
import { ReactComponent as IconFind } from '../../shared/assets/icon/find.svg';

export  const CreateRequirement = () => {
  return (
    <div className='create-requirement'>
      <Sidebar />
      <div className='create-requirement__content'>
    <div className='create-requirement__content__header'>
        <div className="create-requirement__content__header__left">
            <div className="create-requirement__content__header__group-search">
                   <IconFind />
                   <input
                    type='text'
                    className='create-requirement__content__header__group-search__input'
                    />
            </div>
        </div>
    </div>
      </div>
    </div>
  )
}

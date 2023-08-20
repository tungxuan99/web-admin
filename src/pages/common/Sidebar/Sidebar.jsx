import React from 'react'
import './Sidebar.scss'


import Image1 from '../../../shared/assets/images/image1.png';
import UserImage from '../../../shared/assets/images/Ellipse12.png';
import { ReactComponent as IconUser } from '../../../shared/assets/icon/user.svg';
import { ReactComponent as IconEdit } from '../../../shared/assets/icon/edit.svg';
import { ReactComponent as IconList } from '../../../shared/assets/icon/list.svg';
import { ReactComponent as IconStar } from '../../../shared/assets/icon/star.svg';
import { ReactComponent as IconBook } from '../../../shared/assets/icon/book.svg';
import { ReactComponent as IconLogout } from '../../../shared/assets/icon/logout.svg';
import { NavLink, useNavigate } from 'react-router-dom';

export const Sidebar = () => {

    const nagivate = useNavigate()

    const handeChangePage = (link) => {
        nagivate(link)
    }

    return (
        <div className='side-bar'>
            <img src={Image1} alt="Image1" />
            <div className='side-bar__content'>
                <div className='side-bar__content__user-info'>
                    <img src={UserImage} alt='UserImage' />
                    <label>ADAM</label>
                </div>
                <div className='side-bar__menu'>
                    <div className='side-bar__menu__item'
                    >
                        <IconUser className='side-bar__menu__item__icon' />
                        <NavLink
                            to={"/"}
                            activeClassName='active'
                        >
                            Persional info
                        </NavLink>
                    </div>
                    <div className='side-bar__menu__item'>
                        <IconEdit className='side-bar__menu__item__icon' />
                        <NavLink
                            to={"/create-requirement"}
                            activeClassName='active'
                        >
                            Create requirement
                        </NavLink>
                    </div>
                    <div className='side-bar__menu__item'
                    >
                        <IconList className='side-bar__menu__item__icon' />
                        <NavLink
                            to={"/history"}
                            activeClassName='active'
                        >
                            History
                        </NavLink>
                    </div>
                    <div className='side-bar__menu__item'
                    >
                        <IconStar className='side-bar__menu__item__icon' />
                        <NavLink
                            to={"/referrals"}
                            activeClassName='active'
                        >
                            Referrals
                        </NavLink>
                    </div>
                    <div className='side-bar__menu__item'>
                        <IconBook className='side-bar__menu__item__icon' />
                        <div>Online learning courses</div>
                    </div>
                </div>
                <div className='side-bar__footer'
                    onClick={() => handeChangePage("/login")}
                >
                    LOG OUT
                    <IconLogout />
                </div>
            </div>
        </div>
    )
}

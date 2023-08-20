import React from 'react'
import './Referrals.scss'
import { ReactComponent as IconFind } from '../../shared/assets/icon/find.svg';
import Image1 from '../../shared/assets/images/image1.png';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const Referrals = () => {
    return (
        <div className='referrals'>
            <div className='referrals__group-search'>
                <IconFind />
                <input
                    type='text'
                    className='referrals__group-search__input'
                />
            </div>
            <div className='referrals__group-info'>
                <img
                    className='referrals__group-info__image'
                    src={Image1}
                    alt='image1'
                />
                <div className='referrals__group-info__title'>
                    Credential Assessment Report
                </div>
                <span className='referrals__group-info__text'>
                    Date: 22 Mar 2023
                </span>
                <span className='referrals__group-info__text'>
                    Ref #:
                </span>

            </div>
            <div className="referrals__group-1">
                <div className='referrals__group-1__title'>
                    Referral Credential Assessment Services (CAS)
                </div>
                <div className='referrals__group-1__content'>
                    <label className='referrals__group-1__label'>
                        Need a CAS organization? Please click here
                    </label>
                    <Select
                        className='referrals__group-1__select'
                        value={""}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        placeholder='select'
                    >
                        <MenuItem value="">
                            <em>Select</em>
                        </MenuItem>
                    </Select>
                </div>

            </div>

            <div className="referrals__group-1">
                <div className='referrals__group-1__title'>
                    Referral University/Colleges
                </div>
                <div className='referrals__group-1__text'>
                    For upskills purpose, please select your industry
                    <br />
                    For added credits/re-certifications, please select your field of study
                </div>

            </div>
        </div>
    )
}

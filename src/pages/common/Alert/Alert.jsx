import React, { useEffect, useRef } from 'react'
import './Alert.scss'

export const Alert = ({onClose, content}) => {

  const alertRef = useRef()

  const handleClickOutside = (event) => {
    if (
      alertRef.current &&
      !alertRef.current.contains(event.target)
    ) {
      onClose()
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
        document.removeEventListener('click', handleClickOutside, true);
    };
});
  return (
    <div className='alert'>
      <div className='alert__content' ref={alertRef}>
        {content}
      </div>
    </div>
  )
}


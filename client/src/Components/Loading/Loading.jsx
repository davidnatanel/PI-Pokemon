import React from 'react'
import LM from '../../gif/LoadingM.gif'
import Styled from './Loading.module.css'

function Loading() {
  return (
    <div>
      

      <img className={Styled.Loading} src={LM} alt="" />



    </div>
  )
}

export default Loading
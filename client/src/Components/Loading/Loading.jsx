import React from 'react'
import LM from '../../gif/LoadingM.gif'
import Styled from './Loading.module.css'

function Loading({ LadingPage }) {

  if (LadingPage) {
    return (
      <div className={Styled.containerC}>


        <img className={Styled.Loading} src={LM} alt="" />



      </div>
    )

  }
  return (
    <div className={Styled.container}>


      <img className={Styled.Loading} src={LM} alt="" />



    </div>
  )
}

export default Loading
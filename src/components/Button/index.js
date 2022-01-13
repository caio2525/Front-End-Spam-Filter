import React from 'react';
import './index.css'

function Botao({content, background, color, onClick})
{
  return(
    <div
      onClick={() => onClick()}
      style={{
        background: background,
        color: color
      }}
      className="styledButton">
      {content}
    </div>
  )
}

export default Botao;

import React from 'react'

export default function WText({type, text, otherStyle}) {
  if(type == 'title_xxl'){
        return (
            <p className={`lg:text-title_xxl font-bold xsm:text-title_lg md:text-title_xl ${otherStyle} `}>{text}</p>
        )
  }
  if(type == 'title_xl'){
        return (
            <p className={`md:text-title_xl font-bold xsm:text-title_lg ${otherStyle} `}>{text}</p>
        )
  }
if(type == 'title_lg'){
        return (
            <p className={`md:text-title_lg font-bold xsm:text-title ${otherStyle} `}>{text}</p>
        )
  }
  if(type == 'title'){
        return (
            <p className={`md:text-title xsm:text-title_sm font-bold ${otherStyle} `}>{text}</p>
        )
  }
 if(type == 'title_sm'){
        return (
            <p className={`xsm:text-title_sm font-bold ${otherStyle} `}>{text}</p>
        )
  }
  if(type == 'p_lg'){
        return (
            <p className={`xsm:text-p_lg font-regular ${otherStyle} `}>{text}</p>
        )
  }
  else{
      return (
           <p className={`text-p font-regular ${otherStyle}`}>{text}</p>
        )
  }
}

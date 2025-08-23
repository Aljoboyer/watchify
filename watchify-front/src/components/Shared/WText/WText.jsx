import React from 'react'

export default function WText({type, text, otherStyle}) {
  if(type == 'title_xxl'){
        return (
            <p className={`text-title_xxl font-bold sm:text-title_lg md:text-title_xl ${otherStyle} `}>{text}</p>
        )
  }
  if(type == 'title_xl'){
        return (
            <p className={`text-title_xl font-bold sm:text-title_lg ${otherStyle} `}>{text}</p>
        )
  }
if(type == 'title_lg'){
        return (
            <p className={`text-title_lg font-bold sm:text-title ${otherStyle} `}>{text}</p>
        )
  }
  if(type == 'title'){
        return (
            <p className={`text-title font-bold ${otherStyle} `}>{text}</p>
        )
  }
  else{
      return (
           <p>{text}</p>
        )
  }
}

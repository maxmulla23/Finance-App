import React from 'react'
import Card from '../Card/Card'

interface Props {}

const CardList : React.FC<Props> = (props: Props) : JSX.Element => {
  return (
    <div>
            <Card companyName='Apple' ticker='AApl' price={100}/>
            <Card companyName='Safaricom' ticker='SAF' price={85}/>
            <Card companyName='Microsoft' ticker='MSFT' price={120}/>

    </div>
  )
}

export default CardList
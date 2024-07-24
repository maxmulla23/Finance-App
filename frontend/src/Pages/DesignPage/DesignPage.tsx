import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'

type Props = {}

const DesignPage = (props: Props) => {
  return (
    <>
        <h1>Finshark Design Page</h1>
        <h2>This is where we will house various design aspects of the app</h2>
        <RatioList />
        <Table />
    </>
  )
}

export default DesignPage
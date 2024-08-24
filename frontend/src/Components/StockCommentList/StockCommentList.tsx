import React from 'react'
import { CommentGet } from '../../Models/Comment'
import StockCommentListitem from '../StockCommentListItem/StockCommentListitem';

type Props = {
    comments: CommentGet[];
}

const StockCommentList = ({ comments }: Props) => {
  return (
    <>
     {comments ? comments.map((comment) => {
        return <StockCommentListitem comment={comment} />
     }) : ""}
    </>
  )
}

export default StockCommentList
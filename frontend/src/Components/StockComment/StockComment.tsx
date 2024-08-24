import React from 'react'
import StockCommentForm from './StockCommentForm/StockCommentForm'
import { commentPostAPI } from '../../Services/CommentService'
import { toast } from 'react-toastify'

type Props = {
    stockSymbol: string
}
type commentFormInputs = {
    title: string;
    content: string;
}

const StockComment = ({ stockSymbol}: Props) => {
    const handleComment = (e: commentFormInputs) => {
        commentPostAPI(e.title, e.content, stockSymbol)
        .then((res) => {
            toast.success("Comment created successfully")
        })
        .catch((e) => {
            toast.warning(e)
        })
    }
  return (
    <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
  )
}

export default StockComment
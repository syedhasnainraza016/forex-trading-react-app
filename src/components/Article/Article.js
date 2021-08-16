import React from 'react'
import './Article.css'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function Article({ news }) {
    return (
        <div className="Article">
            <div className="Article__card">
                <div className="Article__title">{news.title}</div>
                <div className="Article__author">{news.author}</div>
                <div className="Article__content">{news.content}</div>
                <div className="Article__readFull">
                    <p className="Article__readFullText">read full article</p>
                    <AiOutlineArrowRight fill="#00a8cc" size="1.4rem" />
                </div>
            </div>
        </div>
    )
}

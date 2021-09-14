import React from 'react'
import './ArticleFull.css'

const ArticleFull = ({ selectedArticle, setSelectedArticle }) => {
    return (
        <div className="ArticleFull">
            <div className="Article__title">{selectedArticle.title}</div>
            <div className="Article__author">{selectedArticle.author}</div>
            <div className="Article__content">{selectedArticle.content}</div>
            <div
                className="ArticleFull_button"
                onClick={() => setSelectedArticle(null)}
            >
                Back
            </div>
        </div>
    )
}

export default ArticleFull

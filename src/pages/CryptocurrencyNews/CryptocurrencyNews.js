import React, { useState } from 'react'
import './CryptocurrencyNews.css'
import Article from '../../components/Article/Article'

export default function CryptocurrencyNews() {
    const sampleData = [
        /*
        {
            title: 'Dogecoin: pure genius marketing?',
            author: 'Dave Smith',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        },
        {
            title: 'Is Bitcoin going to hit $100k in 2021?',
            author: 'John Doe',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title: 'Dogecoin: pure genius marketing?',
            author: 'Dave Smith',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title: 'Is Bitcoin going to hit $100k in 2021?',
            author: 'John Doe',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title: 'Dogecoin: pure genius marketing?',
            author: 'Dave Smith',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        },
        {
            title: 'Is Bitcoin going to hit $100k in 2021?',
            author: 'John Doe',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title: 'Dogecoin: pure genius marketing?',
            author: 'Dave Smith',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title: 'Is Bitcoin going to hit $100k in 2021?',
            author: 'John Doe',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },*/
    ]
    const [newsData, setNewsData] = useState(sampleData)
    fetch(
        'https://newsapi.org/v2/everything?q=cryptocurrency&from=2021-08-03&sortBy=popularity&apiKey=eac972808180447da763b302e9a2a9a8'
    )
        .then((res) => res.json())
        .then((data) => {
            setNewsData(data.articles)
            console.log(data)
        })

    /* Pagination */
    const [visible, setVisible] = useState(4)
    const loadMoreArticles = () => {
        setVisible((prevValue) => prevValue + 4)
    }
    return (
        <div className="CryptocurrencyNews">
            <p className="CryptocurrencyNews__title">
                Latest opinions of experts and journalists on cryptocurrency.
            </p>
            <div className="CryptocurrencyNews__articles">
                {newsData &&
                    newsData
                        .slice(0, visible)
                        .map((news, i) => <Article key={i} news={news} />)}
            </div>
            <button
                className="CryptocurrencyNews__paginationButton"
                onClick={() => loadMoreArticles()}
            >
                Load more
            </button>
        </div>
    )
}

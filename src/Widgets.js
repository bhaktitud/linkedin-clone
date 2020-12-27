import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import './Widgets.css'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <Info />
            </div>
            {newsArticle("Bhakti Budiman", 'Breaking News - Hello LinkedIn')}
            {newsArticle("Bitcoin", 'Top News - Hello BitCoin')}
        </div>
    )
}

export default Widgets

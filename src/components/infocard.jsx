import './infocard.css'

function InfoCard() {
    return (
        <div className='parent-container'>
            <div className="info-card">
                <div className='title-section'>
                    <h1>Our Mission</h1>
                    <p>Write your mission statement here Write your mission statement here Write your mission statement
                        here Write your mission statement here Write your mission statement here Write your mission statement
                        here</p>
                </div>
                <div className='image-section'>
                    <img src='/images/stock_customer.jpg' alt='image of a delivery driver'></img>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;
import './appsection.css'

function AppSection() {
    return (
        <div className='appsection'>
            <div className='text_section'>
                <p>Download our app</p>
                <div className='store_images'>
                    <a href='https://play.google.com/store/apps/details?id=com.whatsapp&pcampaignid=web_share' target='_blank'>
                        <img src='/images/appstore_img.png' alt='App Store'></img>
                    </a>
                    <a href='https://play.google.com/store/apps/details?id=com.whatsapp&pcampaignid=web_share' target='_blank'>
                        <img src='/images/googleplay_img.png' alt='Google Play'></img>
                    </a>
                </div>
            </div>
            <div className='app_image'>
                <img src='/images/app_iphone_cutoff.png' alt='App on iPhone' width={302} height={400}></img>
            </div>
        </div>
    )
}

export default AppSection

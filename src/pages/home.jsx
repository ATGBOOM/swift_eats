import './home.css'
import AppSection from '../components/appsection.jsx'
import ImageRow from '../components/imagerow.jsx'
import InfoCard from '../components/infocard.jsx'

function Home() {
    return (
        <div className='home'>
            <AppSection />
            <InfoCard />
            <ImageRow />
        </div>
    )
}

export default Home
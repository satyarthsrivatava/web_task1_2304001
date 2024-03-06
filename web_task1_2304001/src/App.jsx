import './App.css'
import Card from './card'
import Nightmode from './nightmode'
function App() {
    return (
        <div>
            
            <Card img="./src/assets/pic1.png" heading="AI + RPA is what we do" bottom="AI + RPA Automation" content="Future-Proof your business. Drive efficiency, profitability and deliver on customer experience" />
            <Card img="./src/assets/pic2.png" heading="Make Bolder Choices" bottom="AI + RPA Automation" content="Digital focused strategies to realize market-changing ideas" />
            <Card img="./src/assets/pic3.png" heading="Innovate With Speed" bottom="AI + RPA Automation" content="Create higher quality software, deliver on customer expectations and business goals" />
            <Card img="./src/assets/pic4.png" heading="Embrace Cloud" bottom="AI + RPA Automation" content="With Cloud-First accelerate innovation and optimize performance" />
            <Nightmode />
        </div>
        )
}

export default App

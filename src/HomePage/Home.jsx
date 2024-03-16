import SignUp from '../Sign-up/SignUp'
import Boxes from './Boxes/Boxes'
import   './Home.css'

function Home() {
  return (
    <>
    <div className='home'>

      <div className="text">
        <h1>Lorem ipsum <span style={{color:'blue'}}>dolor</span> sit amet.</h1>
        <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maiores sapiente consequatur tempore nostrum veritatis nihil asperiores vel pariatur vitae architecto dicta blanditiis quo magnam voluptates rem harum modi assumenda sequi ipsa, quibusdam facere. Quasi eum velit exercitationem quae a obcaecati facilis dolore ut qui neque veritatis, nihil itaque eos eveniet quidem quia nam labore animi aspernatur minus. Laudantium sint eaque veniam fugiat, perspiciatis recusandae! 
        </h4>
        <img src="img1.png" alt="img" className='text_img'/>
      </div>
      <SignUp/>
    </div>
    <Boxes/>
   
    </>
  )
}

export default Home

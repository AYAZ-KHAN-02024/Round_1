import './Boxes.css'

function Boxes() {
  return (
    <div className='boxes'>
       <div className="box">
        <h2>People</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, molestias quidem deleniti consequatur fugiat debitis.</p>
        <button>Click</button>
       </div>
       <div className="box">
        <h2>Program</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, molestias quidem deleniti consequatur fugiat debitis.</p>
        <button>Click</button>
       </div>
       <div className="box">
        <h2>Product</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, molestias quidem deleniti consequatur fugiat debitis.</p>
        <button>Click</button>
       </div>
       <div className="box">
        <h2>Place</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, molestias quidem deleniti consequatur fugiat debitis.</p>
        <button>Click</button>
       </div>
       <div className="box2" >
        <h2>Add your Own</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, molestias quidem deleniti consequatur fugiat debitis.</p>
        <button>Click</button>
       </div>
       <div className="box2" >
        <h2>Testimonials</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sequi at obcaecati inventore perferendis libero, quasi atque. Possimus adipisci culpa deserunt corporis ipsum beatae odio alias molestiae dicta. Provident, officiis sit. Accusamus laudantium dolor harum, accusantium provident quidem! Voluptatibus, explicabo. Tempora asperiores maiores mollitia, ex voluptatem quisquam a expedita deserunt.</p>

        <div className="details">
            <div className="card">
                <img style={{width:'50px',borderRadius:'50%'}} src="web_pic.jpg" alt="alt" />
                <div className="name">
                    <h3 style={{color:'blue'}}>Ayaz</h3>
                    <p>Lorem, ipsum dolor.</p>
                </div>

                <audio src="" className='aud' controls></audio>
            </div>
         </div>
       </div>

       
       <div className="box2" >
        <h2>Your Hobby</h2>
        <button>Click</button>
        <img src="img1.png" alt="img" style={{width:'80vw'}}/>
       </div>

    </div>
  )
}

export default Boxes

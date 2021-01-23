import React,{useState, useEffect} from 'react';
import pic1 from '../images/assassins.png';
import pic2 from '../images/avatar.png';
import pic3 from '../images/controller.png';
import pic4 from '../images/library.png';
import pic5 from '../images/sackboy.png';
import pic6 from '../images/spiderman.png';
import pic7 from '../images/steam.png';
import pic8 from '../images/twitch.png';
import pic9 from '../images/upcoming.png';
import './style/main.css';

const Main = () => {

  const [stream, setStream] = useState("Stream")
  const [games, setGames] = useState("Games")
  const [news, setNews] = useState("New")
  const [library, setLibrary] = useState("Library")


  const search = (e) => {
    console.log(e.target.value)
  }

    return (
        <div>
            <main>
                <section className="glass">
                    <div className="dashboard">
                        <div className="user">
                            <img className="avatar" src={pic2} alt="assassins" />
                            <h3>Manish Pathak</h3>
                            <p>Pro Member</p>
                        </div>

                <div className="links">
                    
                    <div className="link">
                        <img src={pic8} alt="" />
                    <button>{stream}</button> 
                    </div>
                        
                    <div className="link">
                        <img src={pic7} alt="" />
                    <button>{games}</button>
                    </div>
                    
                    <div className="link">
                        <img src={pic9} alt="" />
                    <button>{news}</button>
                    </div>
                    
                    <div className="link">
                        <img src={pic4} alt="" />
                  <button>{library}</button>
                    </div>
                </div>
                
                <div className="pro">
                    <h2>Join pro for free games.</h2>
                    <img src={pic3} alt="" />
                </div>
          
            </div>
        
            <div className="games">
                <div className="status">
                    <h1>Active Games</h1>
                    <input onChange={search} className="search" type="text" />
                </div>
            <div className="cards">
            
            <div className="card">
              <img src={pic1} alt="" />
              <div className="card-info">
                <h2>Assassins Creed Valhalla</h2>
                <p>PS5 Version</p>
                <div className="progress"></div>
              </div>
              <h2 className="percentage">60%</h2>
            </div>
            
            <div className="card">
              <img src={pic5} alt="" />
              <div className="card-info">
                <h2>Sackboy A Great Advanture</h2>
                <p>PS5 Version</p>
                <div className="progress"></div>
              </div>
              <h2 className="percentage">60%</h2>
            </div>
            
            <div className="card">
              <img src={pic6} alt="" />
              <div className="card-info">
                <h2>Spiderman Miles Morales</h2>
                <p>PS5 Version</p>
                <div className="progress"></div>
              </div>
              <h2 className="percentage">60%</h2>
            </div>
            
          </div>
        </div>
        
      </section>
      
    </main>
    <div className="circle1"></div>
    <div className="circle2"></div>
    </div>
    )
}

export default Main;

import profilePic from './assets/Home.jpg'
import profilePic2 from './assets/Garden.jpg'
import profilePic3 from './assets/Cars.jpg'
import profilePic4 from './assets/Constructions.webp'
import profilePic5 from './assets/Tech.jpg'
import profilePic6 from './assets/Sport.png'
import profilePic7 from './assets/Weddings.webp'
import profilePic8 from './assets/Cleaning.jpg'


function Body(){
    return(
        <>
        <div className="cards">
            <img src={{profilePic}} alt="Category pic"></img>
            <h2>FOR HOUSE</h2>
            <p>Buying and repairs for your house</p>
            <a href='#'>Go To Houses</a>
        </div>
        
        <div className="cards">
            <img src={profilePic2} alt="Category pic"></img>
            <h2>FOR YARD</h2>
            <p>Reapirs for yard, pool and more</p>
            <a href='#'>Go To Yard</a>
        </div>
        
        <div className="cards">
            <img src={profilePic3} alt="Category pic"></img>
            <h2>FOR CARS</h2>
            <p>Fixes, repairs for Cars and more</p>
            <a href='#'>Go To Cars</a>
        </div>

        <div className="cards">
            <img src={profilePic4} alt="Category pic"></img>
            <h2 style={{fontSize: '25px'}}>CONSTRUCTIONS</h2>
            <p>Constructions for house, offices</p>
            <a href='#'>Go To Constructions</a>
        </div>
        
        <div className="cards">
            <img src={profilePic5} alt="Category pic"></img>
            <h2>FOR TECH</h2>
            <p>Repairs, fixes for phone and more</p>
            <a href='#'>Go To Tech</a>
        </div>
        
        <div className="cards">
            <img src={profilePic6} alt="Category pic"></img>
            <h2>FOR SPORTS</h2>
            <p>For Personal Trainers and more</p>
            <a href='#'>Go To Sports</a>
        </div>

        <div className="cards">
            <img src={profilePic7} alt="Category pic"></img>
            <h2>FOR WEDDINGS</h2>
            <p>Arrange Wedding and more</p>
            <a href='#'>Go To Weddings</a>
        </div>
        
        <div className="cards">
            <img src={profilePic8} alt="Category pic"></img>
            <h2>FOR CLEANERS</h2>
            <p>For house cleans and more</p>
            <a href='#'>Go To Cleaners</a>
        </div>
        </>
    );
}

export default Body
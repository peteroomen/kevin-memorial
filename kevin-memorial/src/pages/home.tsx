import Navbar from "../components/navbar";
import kevin from "../img/kevin.jpg"

function Home() {
  return (
    <div className="background">
        <div className="flex row middle w-100 h-100" style={{paddingLeft: "80px"}}>
            <div className='flex column'>
                <img className="kevin" src={kevin} />
            </div>
            <div className='flex column' style={{paddingLeft: "80px", paddingRight: "80px"}}>
                <div className="font-title">
                    Kevin<br/>
                    Smith
                </div>
                <div className="font-subtitle" style={{marginTop: "20px", marginBottom: "20px"}}>
                    1962-2022
                </div>
            </div>
            <div className='flex column grow' style={{paddingRight: "80px"}}>
                <div className="font-memoir">
                    You went away so quickly,<br/>
                    no time to say goodbye.<br/><br/>
                    Our lives will never part,<br/>
                    as precious memories never die.<br/><br/>
                    May your journey now be peaceful,<br/>
                    up in the mighty sky.<br/><br/>
                    And look down upon the family you created,<br/>
                    with a proud and happy sigh.
                </div>
            </div>
            <Navbar selectedItemIndex={0} />
        </div>
    </div>
  );
}

export default Home;

import Navbar from "../components/navbar";
import kevin from "../img/kevin.jpg"

function Home() {
  return (
    <div className="background">
        <div className="flex row middle w-100 h-100" style={{paddingLeft: "80px"}}>
            <div className='flex column'>
                <img className="kevin" src={kevin} />
            </div>
            <div className='flex column grow' style={{paddingLeft: "80px", paddingRight: "80px"}}>
                <div className="font-title">
                    Kevin<br/>
                    Smith
                </div>
                <div className="font-subtitle">
                    1962-2022
                </div>
                <div className="font-memoir">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged.
                </div>
            </div>
            <Navbar selectedItemIndex={0} />
        </div>
    </div>
  );
}

export default Home;

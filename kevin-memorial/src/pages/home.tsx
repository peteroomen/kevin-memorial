import Navbar from "../components/navbar";
import kevin from "../img/kevin.jpg"

function Home() {
  return (
    <div className="background flex row column-r-m middle">
        <div className="grow" style={{overflow: "auto"}}>
            <div 
                className="flex row column-m reset-justify-m middle w-100 h-100 gap pl-l pr-l pt-l pb-l" 
                style={{boxSizing: "border-box"}}
            >
                <div className='flex column'>
                    <img className="kevin" src={kevin} />
                </div>
                <div className='flex column'>
                    <div className="font-title">
                        Kevin<br/>
                        Smith
                    </div>
                    <div className="font-subtitle">
                        1962-2022
                    </div>
                </div>
                <div className='flex column grow'>
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
                    <br />
                    <br />
                </div>
            </div>
        </div>
        <Navbar selectedItemIndex={0} />
    </div>
  );
}

export default Home;

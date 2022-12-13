import Navbar from "../components/navbar";

function Music() {
  return (
    <div className="background">
        <div className="flex row middle w-100 h-100" style={{paddingLeft: "80px"}}>
            <div className='flex column grow' style={{paddingLeft: "80px", paddingRight: "80px"}}>
                <div className="font-subtitle">
                    Music
                </div>
                <div className="font-body">
                    This page will have an array of songs special for Kevin.
                </div>
            </div>
            <Navbar selectedItemIndex={2} />
        </div>
    </div>
  );
}

export default Music;

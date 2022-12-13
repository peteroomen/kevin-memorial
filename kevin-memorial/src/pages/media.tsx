import Navbar from "../components/navbar";

function Media() {
  return (
    <div className="background">
        <div className="flex row middle w-100 h-100" style={{paddingLeft: "80px"}}>
            <div className='flex column grow' style={{paddingLeft: "80px", paddingRight: "80px"}}>
                <div className="font-subtitle">
                    Media
                </div>
                <div className="font-body">
                    This page will have some images and videos of Kevin, that we choose.
                </div>
            </div>
            <Navbar selectedItemIndex={1} />
        </div>
    </div>
  );
}

export default Media;

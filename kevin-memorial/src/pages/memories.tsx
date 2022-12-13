import Navbar from "../components/navbar";

function Memories() {
  return (
    <div className="background">
        <div className="flex row middle w-100 h-100" style={{paddingLeft: "80px"}}>
            <div className='flex column grow' style={{paddingLeft: "80px", paddingRight: "80px"}}>
                <div className="font-subtitle">
                    Memories
                </div>
                <div className="font-body">
                    This page will allow you to write a memory, and display a wall of the memories.
                </div>
            </div>
            <Navbar selectedItemIndex={3} />
        </div>
    </div>
  );
}

export default Memories;

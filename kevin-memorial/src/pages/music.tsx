import Navbar from "../components/navbar";

function Music() {
  return (
    <div className="background">
        <div className="flex wrap row middle w-100 h-100">
            <div className="flex column grow h-100" style={{paddingLeft: "80px", paddingRight: "80px"}}>
                <div className="font-pagetitle" style={{paddingTop: "40px", paddingBottom: "20px"}}>Music</div>
                <div style={{maxWidth: "720px"}}>
                    <iframe 
                        style={{borderRadius: "10px"}} 
                        src="https://open.spotify.com/embed/playlist/4irmon4mmfjekNtPW27J4H?utm_source=generator"
                        width="100%" 
                        height="380" 
                        frameBorder="0" 
                        allowFullScreen 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy"
                    />
                </div>
            </div>
            <Navbar selectedItemIndex={3} />
        </div>
    </div>
  );
}

export default Music;

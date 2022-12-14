import Navbar from "../components/navbar";

function Music() {
  return (
    <div className="background">
        <div className="flex wrap row middle w-100 h-100">
            <div className="flex column grow h-100" style={{paddingLeft: "80px", paddingRight: "80px"}}>
                <div className="font-pagetitle" style={{paddingTop: "40px", paddingBottom: "20px"}}>Music</div>
                <div className="font-body" style={{paddingBottom: "20px"}}>
                    A few of Kevin's favorite songs, and songs picked by family members that remind us of him.
                </div>
                <div style={{height: "100%", overflow: "auto"}}>
                    <div className="flex row wrap grow" style={{gap: "20px"}}>
                        <div className="grow" style={{borderRadius: "10px"}}>
                            <iframe 
                                width="720" 
                                height="480" 
                                src="https://www.youtube.com/embed/videoseries?list=PLTUA3F4BI6IHRaWos8gRe4PhcfAeEcfLU" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            />
                        </div>
                        <div className="grow" style={{minWidth: "420px"}}>
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
                </div>
            </div>
            <Navbar selectedItemIndex={2} />
        </div>
    </div>
  );
}

export default Music;

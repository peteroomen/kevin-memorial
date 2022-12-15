import { memo, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { MemoriesService } from "../services/memoriesService";

function Memories() {
    const memoriesService = new MemoriesService("http://localhost/api", "supersecretpassword240");
    useEffect(() => {
        memoriesService.listApprovedMemories()
            .then(data => console.log("loaded", setMemories(data)))
    }, [])

    const [memories, setMemories] = useState<any>(undefined);

    const [name, setName] = useState<string>("");
    const [comment, setComment] = useState<string>("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        memoriesService.createMemory(name, comment);
        setName("");
        setComment("");
        setSubmitted(true);
    }

    return (
        <div className="background">
            <div className="flex row middle w-100 h-100">
            <div className='flex column grow h-100' style={{paddingLeft: "80px", paddingRight: "80px"}}>
                <div className="font-subtitle" style={{paddingTop: "40px", paddingBottom: "20px"}}>
                    Memories
                </div>
                <div className="font-body" style={{paddingBottom: "20px"}}>
                    Fill out the form below, and share a favorite memory of Kevin.
                </div>
                <div className="flex column" style={{gap: "10px", paddingBottom: "20px"}}>
                    <input type={"text"} placeholder={"Enter your name"}  onChange={(e) => setName(e.target.value)} value={name} />
                    <textarea placeholder={"Enter your comment"} rows={3} onChange={(e) => setComment(e.target.value)} value={comment} />
                    <button className="submit-comment" onClick={handleSubmit} disabled={name === "" || comment === ""}>Submit</button>
                </div>
                {submitted && 
                    <div className="font-body" style={{paddingBottom: "20px"}}>Memory submitted, thanks &lt;3</div>
                }
                <div className="font-subtitle2" style={{paddingBottom: "20px"}}>
                    Read what others have shared
                </div>
                <div style={{height: "100%", overflow: "auto", marginBottom: "40px"}}>
                    <div className="flex column" style={{gap: "20px"}}>
                        {!memories && <div className="font-body">Loading...</div>}
                        {memories && memories.map((memory: any) => 
                            <div className="flex column memory">
                                <div className="font-memoir">{memory.name}</div>
                                <pre className="font-body">{memory.comment}</pre>
                            </div>  
                        )}
                    </div>
                </div>
            </div>
            <Navbar selectedItemIndex={4} />
        </div>
    </div>
  );
}

export default Memories;

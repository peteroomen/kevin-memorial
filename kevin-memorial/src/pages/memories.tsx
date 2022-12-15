import { memo, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { MemoriesService } from "../services/memoriesService";

function Memories() {
    const memoriesService = new MemoriesService("http://localhost/api", "supersecretpassword240");
    useEffect(() => {
        memoriesService.listApprovedMemories()
            .then(data => console.log("loaded", setMemories(data)))
    }, [])

    const [memories, setMemories] = useState<any>([{
        name: "Peter",
        comment: "In a minute, I'mma need a \nSentimental man or women, to pump\nme up"
    }, {
        name: "Peter",
        comment: "In a minute, I'mma need a \nSentimental man or women, to pump feeling fussy in my bel tyringa bring up the fabulous\nme up"
    }, {
        name: "Peter",
        comment: "In a minute, I'mma need a \nSentimental man or women, to pump\nme up"
    }, {
        name: "Peter",
        comment: "In a minute, I'mma need a \nSentimental man or women, to pump\nme up"
    }, {
        name: "Peter",
        comment: "In a minute, I'mma need a \nSentimental man or women, to pump\nme up"
    }]);

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
        <div className="background flex row column-r-m middle">
            <div className="grow h-100" style={{overflow: "auto"}}>
                <div 
                    className="flex column reset-justify-m middle w-100 h-100 gap pl-l pr-l pt-l pb-l" 
                    style={{boxSizing: "border-box"}}
                >
                    <div className="font-subtitle">
                        Memories
                    </div>
                    <div className="font-body">
                        Fill out the form below, and share a favorite memory of Kevin.
                    </div>
                    <div className="flex column" style={{gap: "10px"}}>
                        <input type={"text"} placeholder={"Enter your name"} style={{width: "80vw"}} onChange={(e) => setName(e.target.value)} value={name} />
                        <textarea placeholder={"Enter your comment"} rows={3} onChange={(e) => setComment(e.target.value)} value={comment} />
                        <button className="submit-comment" onClick={handleSubmit} disabled={name === "" || comment === ""}>Submit</button>
                    </div>
                    {submitted && 
                        <div className="font-body">Memory submitted, thanks &lt;3</div>
                    }
                    <div className="font-subtitle2">
                        Read what others have shared
                    </div>
                    <div style={{height: "100%", overflow: "auto"}}>
                        <div className="flex column" style={{gap: "20px"}}>
                            {!memories && <div className="font-body">Loading...</div>}
                            {memories && memories.map((memory: any) => 
                                <div className="flex column memory">
                                    <div className="font-memoir" style={{maxWidth: "80vw"}}>{memory.name}</div>
                                    <pre className="font-body" style={{maxWidth: "80vw"}}>{memory.comment}</pre>
                                </div>  
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Navbar selectedItemIndex={4} />
        </div>
    );
}

export default Memories;

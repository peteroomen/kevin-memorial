import { memo, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { MemoriesService } from "../services/memoriesService";

function Memories() {

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
                        Leave a favourite memory on <a className="link" href="https://www.facebook.com/profile.php?id=100006305920079">Kevin's Facebook Wall</a>
                    </div>
                </div>
            </div>
            <Navbar selectedItemIndex={4} />
        </div>
    );
}

export default Memories;

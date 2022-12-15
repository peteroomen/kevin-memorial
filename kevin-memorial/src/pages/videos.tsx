import Navbar from "../components/navbar";
import Gallery from "react-photo-gallery";
import { useEffect, useState } from "react";


function importAll(r: __WebpackModuleApi.RequireContext): string[] {
    let images: string[] = [];
     r.keys().forEach((item, i) => { images.push(r(item)); });
    return images;
}

function getImageDim(url: string): Promise<{url: string, w: number, h: number}> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = (event: Event) => {
            //@ts-ignore
            var height = event.path[0].height;
            //@ts-ignore
            var width = event.path[0].width;
            resolve({url: url, w: width, h: height});
        }
        img.src = url;
    });
}

function Videos() {

    const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));
    const [photos, setPhotos] = useState<any>(undefined);
    
    useEffect(() => {
        Promise
            .all(images.map(img => getImageDim(img)))
            .then(res => {
                let photos = res.map(r => ({
                    src: r.url,
                    width: r.w,
                    height: r.h
                }));
                setPhotos(photos);
            });
    }, []);

  return (
    <div className="background flex row column-r-m middle">
        <div className="grow h-100" style={{overflow: "auto"}}>
            <div 
                className="flex column reset-justify-m middle w-100 h-100 gap pl-l pr-l pt-l pb-l" 
                style={{boxSizing: "border-box"}}
            >
                <div className="font-pagetitle">Videos</div>
                <div className="font-body">
                    If you have a video you'd like added, please send it to <a className="link" href="mailto:petertheoomen@gmail.com">petertheoomen@gmail.com</a>.
                </div>
                <div style={{height: "100%", maxWidth: "720px"}}>
                    <iframe 
                        width="100%" 
                        height="480" 
                        src="https://www.youtube.com/embed/videoseries?list=PLTUA3F4BI6IHJ1QJ-vZ7ojKXto1aiUCJ3" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
        <Navbar selectedItemIndex={2} />
    </div>
  );
}

export default Videos;

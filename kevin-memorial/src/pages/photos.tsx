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

function Photos() {

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
    <div className="background">
        <div className="flex row middle w-100 h-100">
            <div 
                className='flex column grow' 
                style={{paddingLeft: "80px", paddingRight: "80px", paddingBottom: "80px", height: "100%"}}
            >
                <div className="font-pagetitle" style={{paddingTop: "80px", paddingBottom: "20px"}}>Photos</div>
                <div className="font-body" style={{paddingBottom: "20px"}}>
                    If you have a photo you'd like added, please send it to <a className="link" href="mailto:petertheoomen@gmail.com">petertheoomen@gmail.com</a>.
                </div>
                <div style={{height: "100%", overflow: "auto"}}>
                    {!photos && <div className="font-body">Loading...</div>}
                    {photos && <div style={{}}><Gallery photos={photos} /></div>}
                </div>
            </div>
            <Navbar selectedItemIndex={1} />
        </div>
    </div>
  );
}

export default Photos;

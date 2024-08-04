import "../styles/Gallery.css";
import icon from '../img/icon/gallery.svg'

const Gallery = () => {

  return (
    <div className="gallery" id="gallery">
        <div className="headline">
            <h1>Галерея</h1>
            <img src={icon}/>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dMBYEi4qUOw?si=N28fJIkfbXcI1P3f" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JgsMsXWftcY?si=36x81-mwCKd6enp6" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zuJrcGeyxxQ?si=y-mRGYFVZono5Bye" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
};

export default Gallery;

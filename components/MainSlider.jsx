import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from 'react-image-gallery';

const MainSlider = (props) => {
  return (
    <div className="my-3">
     <ReactImageGallery 
     items={props.mainSlider}
     autoPlay={true}
     slideInterval={3000}
     lazyLoad={true}
     showFullscreenButton = {false}
     isRTL={true}
     onClick={()=>{alert("salam")}}
     />
    </div>
  )
}

export default MainSlider

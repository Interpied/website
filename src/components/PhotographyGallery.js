import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import "./PhotographyGallery.css";

function PhotographyGallery(props) {
  return (
    <>
        <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
            <Masonry className='photoGallery'>
              <img alt='img' src='https://i1.lensdump.com/i/kf76eq.md.jpeg'/>
              <img alt='img' src='https://i2.lensdump.com/i/kf7kJD.jpeg'/>
              <img alt='img' src='https://i3.lensdump.com/i/kf7E80.md.jpeg'/>
              <img alt='img' src='https://i2.lensdump.com/i/kf7Ro3.md.jpeg'/>
              <img alt='img' src='https://i3.lensdump.com/i/kf71BF.md.jpeg'/>
              <img alt='img' src='https://i2.lensdump.com/i/kf7tIr.jpeg'/>
              <img alt='img' src='https://i3.lensdump.com/i/kf7gF7.md.jpeg'/>
              <img alt='img' src='https://i1.lensdump.com/i/kf7Zpb.md.jpeg'/>
              <img alt='img' src='https://i3.lensdump.com/i/kf7IRT.md.jpeg'/>
              <img alt='img' src='https://i1.lensdump.com/i/kf7jxz.jpeg'/>
              <img alt='img' src='https://i3.lensdump.com/i/kf7iS5.md.jpeg'/>
              <img alt='img' src='https://i3.lensdump.com/i/kf7A2v.md.jpeg'/>
              <img alt='img' src='https://i1.lensdump.com/i/kfpa0o.jpeg'/>
              <img alt='img' src='https://i3.lensdump.com/i/kfpbxZ.jpeg'/>
              <img alt='img' src='https://i1.lensdump.com/i/kfpU21.md.jpeg'/>
              <img alt='img' src='https://i3.lensdump.com/i/kfpPqx.md.jpeg'/>
              <img alt='img' src='https://i2.lensdump.com/i/kfpN0k.md.jpeg'/>
              <img alt='img' src='https://i1.lensdump.com/i/kfpufe.jpeg'/>
              <img alt='img' src='https://i2.lensdump.com/i/kfpoKa.md.jpeg'/>
            </Masonry>
        </ResponsiveMasonry>
    </>
  );
}

export default PhotographyGallery;

import Styles  from "./../../Home.module.scss"

 let images: string[] = [
     "https://d.novoresume.com/images/doc/modern-cv-template.png",
     "https://www.goodcv.com/images/cv/screenshots/thumbs/en/outstanding_10.png?v=1.0.1",
     "https://www.mycvstore.com/wp-content/uploads/2019/02/Professional-CV-Templat-2.jpg",
     "https://d.novoresume.com/images/doc/modern-cv-template.png",
     "https://www.goodcv.com/images/cv/screenshots/thumbs/en/outstanding_10.png?v=1.0.1",
     "https://www.mycvstore.com/wp-content/uploads/2019/02/Professional-CV-Templat-2.jpg",
     "https://d.novoresume.com/images/doc/modern-cv-template.png",
     "https://www.goodcv.com/images/cv/screenshots/thumbs/en/outstanding_10.png?v=1.0.1",
     "https://www.mycvstore.com/wp-content/uploads/2019/02/Professional-CV-Templat-2.jpg",
     "https://d.novoresume.com/images/doc/modern-cv-template.png",
     "https://www.goodcv.com/images/cv/screenshots/thumbs/en/outstanding_10.png?v=1.0.1",
     "https://www.mycvstore.com/wp-content/uploads/2019/02/Professional-CV-Templat-2.jpg",
     "https://d.novoresume.com/images/doc/modern-cv-template.png",
     "https://www.goodcv.com/images/cv/screenshots/thumbs/en/outstanding_10.png?v=1.0.1",
     "https://www.mycvstore.com/wp-content/uploads/2019/02/Professional-CV-Templat-2.jpg",
     "https://d.novoresume.com/images/doc/modern-cv-template.png",
     "https://www.goodcv.com/images/cv/screenshots/thumbs/en/outstanding_10.png?v=1.0.1",
     "https://www.mycvstore.com/wp-content/uploads/2019/02/Professional-CV-Templat-2.jpg",
 ]

 import React from 'react';
 import classNames from "classnames";

 const AnimationLine = () => {
     return (
         <div className={classNames("line-cv-animation space-y-4 mx-2",[Styles.HomeAnimation])}>
             {
                 images.map((image, index) => {
                     return (
                         <div key={index}
                              className={classNames("relative bottom-0 drop-shadow-lg")}>
                             <img draggable={false} onContextMenu={e => e.preventDefault()} src={images[Math.floor(Math.random()* images.length)]}
                                  className="" alt="HomeAnimation"/>
                         </div>
                     )
                 })
             }
         </div>
     );
 };

 export default AnimationLine;

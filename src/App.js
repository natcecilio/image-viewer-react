import React from 'react';
import {RViewerTrigger, RViewer} from 'react-viewerjs';

function App() {

  let images = [
    "./img/2.jpg",
    "./img/ah-3.jpg",
    "./img/ak-4.jpg",
    "./img/ev-1.jpg",
    "./img/ka-5.jpg",
    "./img/se-6.jpg",
    "./img/evelynn.jpg"
  ];

  return (
    <div className="App">
     <RViewer imageUrls={images}>
      <div style={{display: 'flex', marginTop: '40px'}}>
        {images.map((image, index)=>{
          return(
            <ul  key={index}>
              <RViewerTrigger index={index}>
                <img src={image} style={{width: '150px', height: '150px', marginLeft: '20px', border: '2px solid black' }} />
              </RViewerTrigger>
            </ul>
          )
        })}
      </div>
     </RViewer>
    </div>
  );
}

export default App;

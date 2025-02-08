import React from "react";
import Image from "./Image";
import cat1 from './cat1.jpeg';
import cat2 from './cat2.jpg';

export default function App(){
  return(
    <div>
      <Image title="Image 1" image={cat1}/>
      <Image title="Image 2" image={cat2}/>

    </div>
  )
}
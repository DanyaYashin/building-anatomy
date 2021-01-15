import React, { useState, useEffect } from "react"
import styles from "./index.module.css";
import img1 from "../../static/building-anatomy-1.png";
import img2 from "../../static/building-anatomy-2.png";
import img3 from "../../static/building-anatomy-3.png";
import img4 from "../../static/building-anatomy-4.png";
import img5 from "../../static/building-anatomy-5.png";
import img6 from "../../static/building-anatomy-6.png";
import img7 from "../../static/building-anatomy-7.png";

export default function Home() {

  const [button, setButton] = useState(0);
  const handleClick = () => {
    let floorAnimationY = 20;
    let floorAnimationX = 20;

    setButton(floorAnimation);

    useEffect(() => {
      one_floor.addEventListener('click', handleClick, { passive: true });
    });

  return (
    <div>

    <div className={styles.header}>HoMe</div>

    <div className={styles.floor}>
      <ul>
        <li><button id="one_floor"><p>1 floor</p></button></li>
        <li><button><p>2 floor</p></button></li>
        <li><button><p>3 floor</p></button></li>
      </ul>
    </div>

    <div className={styles.home_image}>

      <img src={`${img2}`} style = {{transform:}} className = {styles.img1} alt="img2"/>
      <img src={`${img3}`} className = {styles.img1} alt="img3"/>
      <img src={`${img4}`} className = {styles.img1} alt="img4"/>
      <img src={`${img5}`} className = {styles.img1} alt="img5"/>
      <img src={`${img6}`} className = {styles.img1} alt="img6"/>
      <img src={`${img7}`} className = {styles.img1} alt="img7"/>
      <img src={`${img1}`} className = {styles.img1} alt="img1"/>
    </div>

    <div className={styles.side}>
      <ul>
        <li><button><p>inside</p></button></li>
        <li><button><p>outside</p></button></li>
      </ul>
    </div>


    </div>
  )
}

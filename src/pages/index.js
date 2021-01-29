import React, { useState, useEffect } from "react"
import styles from "./index.module.css";
import img1_1 from "../../static/building-anatomy-1_1.png";
import img1_2 from "../../static/building-anatomy-1_2.png";
import img2 from "../../static/building-anatomy-2.png";
import img3 from "../../static/building-anatomy-3.png";
import img4 from "../../static/building-anatomy-4.png";
import img5 from "../../static/building-anatomy-5.png";
import img6 from "../../static/building-anatomy-6.png";
import img7 from "../../static/building-anatomy-7.png";
import img8 from "../../static/building-anatomy-8.png";
import img9 from "../../static/building-anatomy-9.png";
import img10 from "../../static/building-anatomy-10.png";
import img11 from "../../static/building-anatomy-11.png";
import img12 from "../../static/building-anatomy-12.png";
import img13 from "../../static/building-anatomy-13.png";
import img14 from "../../static/building-anatomy-14.png";
import img15 from "../../static/building-anatomy-15.png";
import img16 from "../../static/building-anatomy-16.png";
import img17 from "../../static/building-anatomy-17.png";

export default function Home() {

  const [buttonY1, setButtonY1] = useState(1000);
  const [buttonX1, setButtonX1] = useState(1000);
  const handleClick1 = () => {
    let floorAnimationY1 = 0;
    let floorAnimationX1 = 0;
    if (buttonX1 == 0){
      floorAnimationX1=1000;
      floorAnimationY1=1000;
    }
    setButtonY1(floorAnimationY1);
    setButtonX1(floorAnimationX1);
};

  const [buttonY2, setButtonY2] = useState(1000);
  const [buttonX2, setButtonX2] = useState(1000);
  const handleClick2 = () => {
    let floorAnimationY2 = 0;
    let floorAnimationX2 = 0;
    if (buttonX2 == 0){
      floorAnimationX2=1000;
      floorAnimationY2=1000;
    }
    setButtonY2(floorAnimationY2);
    setButtonX2(floorAnimationX2);
};

  const [buttonY3, setButtonY3] = useState(1000);
  const [buttonX3, setButtonX3] = useState(1000);
  const handleClick3 = () => {
    let floorAnimationY3 = 0;
    let floorAnimationX3 = 0;
    if (buttonX3 == 0){
      floorAnimationX3=1000;
      floorAnimationY3=1000;
    }
    setButtonY3(floorAnimationY3);
    setButtonX3(floorAnimationX3);
};

  const clickFirstButton = () =>{
    if (buttonX3==0 && buttonX2==0){
      handleClick3();
      handleClick2();
    } else if (buttonX2==0){
      handleClick2();
    } else {
      handleClick1();
    }
}

  const clickSecondButton = () =>{
    if (buttonX3==0){
      handleClick3();
    } else if(buttonX2==0 && buttonX1==0){
      handleClick1();
      handleClick2();
    } else if(buttonX1==0){
      handleClick2();
    } else {
    handleClick1();
    handleClick2();
    }
}

  const clickThirdButton = () =>{
    if (buttonX1==0 && buttonX2==0 && buttonX3==0){
      handleClick1();
      handleClick2();
      handleClick3();
    } else if (buttonX2==0 && buttonX1==0){
      handleClick3();
    } else if (buttonX1==0){
      handleClick2();
      handleClick3();
    } else {
    handleClick1();
    handleClick2();
    handleClick3();
  }
}

  return (
    <div>

    <div className={styles.header}>HoMe</div>

    <div className={styles.floor}>
      <ul>
        <li><button onClick={clickThirdButton}><p>3 floor</p></button></li>
        <li><button onClick={clickSecondButton}><p>2 floor</p></button></li>
        <li><button onClick={clickFirstButton}><p>1 floor</p></button></li>
      </ul>
    </div>

    <div className={styles.home_image}>
      <img src={`${img1_2}`} className = {styles.img1} alt="img1"/>

      <img src={`${img2}`} style = {{transform: `translate(${0}px, ${buttonY1}px)`}} className = {styles.img1} alt="img2"/>
      <img src={`${img3}`} style = {{transform: `translate(${-buttonX1}px, ${-buttonY1}px)`}} className = {styles.img1} alt="img3"/>
      <img src={`${img4}`} style = {{transform: `translate(${buttonX1}px, ${-buttonY1}px)`}} className = {styles.img1} alt="img4"/>
      <img src={`${img5}`} style = {{transform: `translate(${buttonX1}px, ${buttonY1}px)`}} className = {styles.img1} alt="img5"/>
      <img src={`${img6}`} style = {{transform: `translate(${-buttonX1}px, ${buttonY1}px)`}} className = {styles.img1} alt="img6"/>
      <img src={`${img7}`} style = {{transform: `translate(${0}px, ${-buttonY1}px)`, transition: `1s`}}className = {styles.img1} alt="img7"/>

      <img src={`${img8}`} style = {{transform: `translate(${-buttonX2}px, ${-buttonY2}px)`}} className = {styles.img2} alt="img8"/>
      <img src={`${img9}`} style = {{transform: `translate(${buttonX2}px, ${-buttonY2}px)`}} className = {styles.img2} alt="img9"/>
      <img src={`${img10}`} style = {{transform: `translate(${buttonX2}px, ${buttonY2}px)`}} className = {styles.img2} alt="img10"/>
      <img src={`${img11}`} style = {{transform: `translate(${-buttonX2}px, ${buttonY2}px)`}} className = {styles.img2} alt="img11"/>
      <img src={`${img12}`} style = {{transform: `translate(${0}px, ${-buttonY2}px)`}} className = {styles.img2} alt="img12"/>

      <img src={`${img13}`} style = {{transform: `translate(${-buttonX3}px, ${-buttonY3}px)`}} className = {styles.img3} alt="img13"/>
      <img src={`${img14}`} style = {{transform: `translate(${buttonX3}px, ${-buttonY3}px)`}} className = {styles.img3} alt="img14"/>
      <img src={`${img15}`} style = {{transform: `translate(${buttonX3}px, ${buttonY3}px)`}} className = {styles.img3} alt="img15"/>
      <img src={`${img16}`} style = {{transform: `translate(${-buttonX3}px, ${buttonY3}px)`}} className = {styles.img3} alt="img16"/>
      <img src={`${img17}`} style = {{transform: `translate(${0}px, ${-buttonY3}px)`}} className = {styles.img3} alt="img17"/>

      <img src={`${img1_1}`} className = {styles.img1} alt="img1"/>
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

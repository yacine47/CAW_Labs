import { useState } from "react";



function ClickMe(){

    let button = document.getElementById('button');
    const [isClicked,setClickedButton] = useState(false)
        
      const hundleClick = ()=> {
        setClickedButton(true)
      }

    return <div>
        <button id="button" onClick={hundleClick} >ClickMe</button>
        <br/>
        {isClicked ? <h2 >Clicked</h2> : null}
    </div>
}

export default ClickMe;
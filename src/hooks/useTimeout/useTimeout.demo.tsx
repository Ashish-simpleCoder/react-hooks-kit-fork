import { useState } from "react";
import useTimeout from "./useTimeout";

export default function TimeoutDemo() {
   const [counter, setCounter] = useState(0);

   useTimeout(() => setCounter((c) => c + 13), { delay: 2000 });

   return (
      <>
         <h2>
            <span style={{ fontWeight: "600" }}>useTimeout</span> custom hook
            demo
         </h2>
         <p>The counter value will change after 2-seconds</p>
         <div style={{ display: "flex" }}>counter:- {counter}</div>
      </>
   );
}

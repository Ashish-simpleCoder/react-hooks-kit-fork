import { useState } from "react";
import useInterval from "./useInterval";

export default function IntervalDemo() {
   const [counter, setCounter] = useState(0);

   useInterval(() => setCounter((c) => c + 1), { delay: 1000 });

   return (
      <>
         <h2>
            <span style={{ fontWeight: "600" }}>useInterval</span> custom hook
            demo
         </h2>
         <p>The counter value will change once after every 1-seconds</p>
         <div style={{ display: "flex" }}>counter:- {counter}</div>
      </>
   );
}

import { ReactComponentElement, useEffect, useState } from "react";

export default function WithTimer({ child: WarppedComponent }) {
  // return (props) => {
  const [time, setTime] = useState(new Date());
  const tick = () => {
    setTime(new Date());
  };
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return clearInterval(timerID);
  }, []);
  return <WarppedComponent time={time} />;
  // };
}

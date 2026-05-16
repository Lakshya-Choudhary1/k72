import  videobg from "../../assets/video-bg.mp4";
import turtle from "../../assets/turtle.mp4";
const Video = () => {
  return <video className="h-full w-full object-cover   " autoPlay loop muted play src={turtle} />
  
}

export default Video
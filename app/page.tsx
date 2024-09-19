export const pics = ["/pictures/craneIllustrationResized.jpg", "/pictures/gang.jpg", "/pictures/Moon_Castle_Illustration_.jpg", "/pictures/mushroomSun_painting.jpg"];
import Gallery from "./gallery"



export default function Home() {
  

  return (
    <div>
    <Gallery>
      pics={pics}
    </Gallery>
    </div>
  );
}

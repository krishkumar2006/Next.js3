import Image from "next/image"
import Chocolate from "../image/Chocolate.jpg"
import corpse from "../image/corpse.jpg"
const Hero = () => {
  return (
    <div>
      <div className="width-auto h-[500px] border-4 border-black content-center bg-slate-400"><p className="font-extrabold text-3xl flex justify-center underline ">CHOCOLATE-COSMOS</p>
      
<Image src={Chocolate} alt="" className=" w-[600px] h-[400px] px-1 float-right "/>
<br/>
{/* context */}
<div className="border-4 border-green-500 rounded-xl w-[900px] "><p className="font-semibold"> Chocolate cosmos typically grow 23-30” tall and have an upright but spreading habit. In recent years, several named cultivars have been introduced. Flower colors are slightly different (darker or lighter) than the species and flower size and plant height also vary <br/>
<span className="font-extrabold">  How to Care for Chocolate Cosmos</span> 
<br/>
1: In zones 9-11, where chocolate cosmos are winter hardy, the plants will die back in winter and re-emerge in spring. Cut the plants back to the ground in late fall, after the foliage has yellowed.
<br/>
2:In zones 4-8, the plants are usually treated as annuals. If you want to save the tubers, treat them as you would dahlias. Dig them up in fall and store them indoors for the winter where they can be kept cool and dry.
<br/>
3:If the tubers eventually become crowded, they may be divided. This can be done in fall or spring. Make sure each tuber is attached to some viable stem tissue and has one or more “eyes."
<br/>
4:If you are able to overwinter chocolate cosmos tubers indoors, you can expect to get a larger plant and more flowers the second year.</p></div>
      </div>

      <br/>
{/* second image */}

<div className="w-[80%] h-[500px] border-4 border-black rounded-xl mx-auto flex items-center relative bg-slate-400"> 
  <Image src={corpse} alt="" className="absolute right-0 h-[400px] w-[600px] "/>
  <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 py-2 font-extrabold text-xl underline">CORPSE-FLOWER</h1>
<p className="w-[550px] border-4 border-green-500 rounded-xl mx-2 text-2xl font-semibold">The corpse flower (Amorphophallus titanum) is the largest unbranched inflorescence in the plant kingdom, boasts a powerful stink, and blooms for just 2-3 days once every two to three years.</p>
</div>

    </div>
  )
}

export default Hero

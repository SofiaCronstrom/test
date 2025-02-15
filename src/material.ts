import { StandardMaterial,
         Scene, 
         Color3, 
         Texture, 
         PBRMetallicRoughnessMaterial } from "@babylonjs/core";

import leather from '../assets/leather.jpg'
import leatherMap from '../assets/leatherMap.png'
export const createColorMaterial = (scene: Scene) => {

   
    
   
   const chairColor: StandardMaterial = new StandardMaterial('chairmaterial', scene);
   chairColor.emissiveColor = new Color3(0.623, 0.176, 0.301);
   
   const sofaColor: StandardMaterial = new StandardMaterial('sofacolor', scene);
   sofaColor.diffuseColor = new Color3(0.906, 0.910, 0.910);
    sofaColor.emissiveColor = new Color3(0.902,0.902,0.902);
    sofaColor.diffuseTexture = new Texture(leather, scene);
    sofaColor.bumpTexture = new Texture(leatherMap, scene);

   
 
    return {
            
            chairColor,
            sofaColor
            
    };
}

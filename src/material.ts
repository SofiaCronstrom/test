import { StandardMaterial, Scene, Color3, Texture, PBRMetallicRoughnessMaterial } from "@babylonjs/core";


export const createColorMaterial = (scene: Scene) => {

    const roomColor: StandardMaterial = new StandardMaterial('roomColor', scene);
    roomColor.diffuseColor = new Color3(0.906, 0.910, 0.910);
    roomColor.emissiveColor = new Color3(0.302,0.302,0.302) 
    roomColor.ambientColor = new Color3(0.286,0.286,0.286)
    roomColor.specularColor = new Color3(0.8, 0.796, 0.486)
    
   
    
   const stairColor: StandardMaterial = new StandardMaterial('stairColor', scene);
   stairColor.diffuseColor = new Color3(0.93, 0.92, 0.89);
   stairColor.emissiveColor = new Color3(0.6,0.6,0.6) 
   stairColor.specularColor = new Color3(0.893, 0.903, 0.903)
   

   const windowColor: StandardMaterial = new StandardMaterial('stairColor', scene);
   windowColor.emissiveColor = new Color3(0.972, 0.980, 0.988);
   
   const chairColor: StandardMaterial = new StandardMaterial('chairmaterial', scene);
   chairColor.emissiveColor = new Color3(0.623, 0.176, 0.301);

   
 
    return {
            
            roomColor,
            stairColor,
            windowColor,
            chairColor,
            
    };
}

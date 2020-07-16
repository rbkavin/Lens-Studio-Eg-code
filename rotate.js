// code by rbkavin

// This code helps to rotate the 3d object 
// Bind to "Frame Updated" to rotate the object every frame

//gets the scene object 
var transform = script.getTransform();

//gets its local position 
var rotation = transform.getLocalRotation();

//Using the Axis it rotates with time 
//To change the direction of the rotation we can change it to any of the following
// 1: vec3.back() , 2: vec3.front() , 3: vec3.up() , 4: vec3.down()
var rotateBy = quat.angleAxis((0.5 * Math.PI * getDeltaTime()), vec3.back());

//Multiplying with the current rotation
rotation = rotation.multiply(rotateBy);

// Applying the rotation
transform.setLocalRotation(rotation);
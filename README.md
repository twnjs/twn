# twn.js: 

##A Light Weight Javascript/ CSS3 Tweening Library

The main goal of twnjs is small file size while enabling web animators to tween the most commonly tweened properties. This is ideal where compactness of file size is extremely important such as in HTML5 banners.

##### Example Usage
```
twn.to(el, 0.5, {
	x:500, 
	ease:'quad-ease-in-out', 
	delay:0.35, 
	onComplete:myFunction, 
	onCompleteParams:['foo','bar'] 
	}
);

```
### Methods

#### **to()**

function to(target, duration, properties);  
Initializes and starts an animation.

**target** 
---
Type:DOM Element
A DOM element for twn to animate.

**duration**
---
Type:Number
The duration of the animation.

**properties**
---
Type:Object  
An object of properties and values to animate as well as callbacks for completion.  
	**CSS Properties**  
    **x**  
    Type:Number  
    X translation value to animate to  
    **y**  
    Type:Number  
    Y translation value to animate to  
    **rotation**  
    Type:Number  
    Rotation destination value to animate to  
    **scaleX**  
    Type:Number  
    scaleX translation value to animate to  
    **scaleY**  
    Type:Number  
    scaleY translation to animate to  
    **top**  
    Type:Number  
    top value to animate to  
    **left**  
    Type:Number  
    left value to animate to  
    **width**  
    Type:Number  
    Width value to animate to  
    **height**  
    Height value to animate to  
    **backgroundColor**  
    Type:String  
    Background color value to animate to  
    **opacity**  
    Type:Number  
    Opacity value to animate to  
    **marginTop, marginBottom, marginLeft, marginRight, paddingTop, etc..**  
	**Additional Properties**  
	**ease**  
	Type:String  
	(default: Linear)  
	An easing function. Add any easing function eg "cubic-bezier(1,1,1,1)".  
		Built In Easing Functions  
		-"ease-in"  
        -"ease-out"  
        -"ease-in-out"  
		-"quad-ease-in"  
		-"quad-ease-out"  
		-"quad-ease-in-out"  
		-"cubic-ease-in"  
		-"cubic-ease-out"  
		-"cubic-ease-in-out"  
		-"quint-ease-in"  
		-"quint-ease-out"  
		-"quint-ease-in-out"  
		-"quart-ease-in"  
		-"quart-ease-out"  
		-"quart-ease-in-out"  
		-"sine-ease-in"  
		-"sine-ease-out"  
		-"sine-ease-in-out"  
		-"expo-ease-in"  
		-"expo-ease-out"  
		-"expo-ease-in-out"  
		-"circ-ease-in"  
        -"circ-ease-out"  
        -"circ-ease-in-out"  
        -"back-ease-in"  
        -"back-ease-out"  
        -"back-ease-in-out"  
	**OnComplete**  
	Type:Function  
	A function to be called on complete  
	**OnCompleteParams**  
	Type:Array  
	An array of arguments for the complete function  


#### **set()**

function set(target, object)

Sets css values for a target.
  
**target**   
---
Type:DOM Element  
A DOM element for twn to set css values on.

**properties**  
---
Type:Object  
Same as object properties for function to().  
    
    



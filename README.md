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
Type:DOM Element
A DOM element for twn to animate.

**duration**
Type:Number
The duration of the animation.

**properties**
Type:Object
An object of properties and values to animate as well as callbacks for completion.
	**CSS Properties**\s\s
    **x**\s\s
    Type:Number\s\s
    X translation value to animate to\s\s
    **y**\s\s
    Type:Number\s\s
    Y translation value to animate to\s\s
    **rotation**\s\s
    Type:Number\s\s
    Rotation destination value to animate to\s\s
    **scaleX**\s\s
    Type:Number\s\s
    scaleX translation value to animate to\s\s
    **scaleY**\s\s
    Type:Number\s\s
    scaleY translation to animate to\s\s
    **top**\s\s
    Type:Number\s\s
    top value to animate to
    **left**\s\s
    Type:Number\s\s
    left value to animate to\s\s
    **width**\s\s
    Type:Number\s\s
    Width value to animate to\s\s
    **height**\s\s
    Height value to animate to\s\s
    **backgroundColor**\s\s
    Type:String\s\s
    Background color value to animate to\s\s
    **opacity**\s\s
    Type:Number\s\s
    Opacity value to animate to\s\s
    **marginTop, marginBottom, marginLeft, marginRight, paddingTop, etc..**\s\s
	**Additional Properties**\s\s
	**ease**\s\s
	Type:String\s\s
	(default: Linear)\s\s
	An easing function. Add any easing function eg "cubic-bezier(1,1,1,1)".\s\s
		Built In Easing Functions\s\s
		-"ease-in"\s\s
        -"ease-out"\s\s
        -"ease-in-out"\s\s
		-"quad-ease-in"\s\s
		-"quad-ease-out"\s\s
		-"quad-ease-in-out"\s\s
		-"cubic-ease-in"\s\s
		-"cubic-ease-out"\s\s
		-"cubic-ease-in-out"\s\s
		-"quint-ease-in"\s\s
		-"quint-ease-out"\s\s
		-"quint-ease-in-out"\s\s
		-"quart-ease-in"\s\s
		-"quart-ease-out"\s\s
		-"quart-ease-in-out"\s\s
		-"sine-ease-in"\s\s
		-"sine-ease-out"\s\s
		-"sine-ease-in-out"\s\s
		-"expo-ease-in"\s\s
		-"expo-ease-out"\s\s
		-"expo-ease-in-out"\s\s
		-"circ-ease-in"\s\s
        -"circ-ease-out"\s\s
        -"circ-ease-in-out"\s\s
        -"back-ease-in"\s\s
        -"back-ease-out"\s\s
        -"back-ease-in-out"\s\s
	**OnComplete**\s\s
	Type:Function\s\s
	A function to be called on complete\s\s
	**OnCompleteParams**\s\s
	Type:Array\s\s
	An array of arguments for the complete function\s\s
	
###### set()

function set(target, object)

Sets css values for a target.
    
**target** \s\s
Type:DOM Element\s\s
A DOM element for twn to set css values on.\s\s

**properties**\s\s
Type:Object\s\s
Same as object properties for function to().
    
    



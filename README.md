# browser_rain

​:cloud_with_rain:​ It's raining divs in the browser!!!

Ever wanted raining :cat:s and :dog:s on your website? Oh, how about a binary rain shower :one: :zero: :one: :zero:, just like in the Matrix? browser_rain can do the job for you!



## Usage

First, you need to have a container within which it will rain. By default, `browser_rain` looks for a container with an id of `rain`. You can also pass in your own container id and `browser_rain` will take care of the rest.



Now, add this to your html file

`<script src="https://cdn.jsdelivr.net/gh/1ntEgr8/browser_rain/rain.js"></script>`



To make it shower

```
const rain = new Rain();
rain.rain();
```



You can customize what the droplet looks like, the acceleration, the initial speed of the droplets, the number of drops and much much more. Read on to learn how you can customize it.



Check out `index.html` in the demo folder for more setup help. 

## Customizing the Rain

**Modifying the droplet**

To change the drop that is shower, you must set the `dropGenerator` attribute of the `Rain` object to a function that returns an HTML Element. It's as simple as that. Check out the code in the demo to see it in action.

Here is an example dropGenerator:

```
rain.dropGenerator = () => {
            let drop = document.createElement("div");
            drop.style.padding = 0;
            drop.style.margin = 0;
            drop.style.position = "absolute";
            drop.style.fontSize = "2rem";
            drop.style.color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
            drop.innerHTML = (Math.floor(Math.random() * 2)); // for binary rain
            return drop;
        }
```

This one rains multi-colored bits!

**Changing the acceleration, number of drops...**

Here are the attributes of the `Rain` object which you can modify to acheive your desired shower pattern!

`numDrops` -> the maximum number of drops that you will see

`rampUpTime` -> how fast you arrive at numDrops

`deltat` -> alters smoothness of the animation. Increase to decrease the smoothness.

`speed` -> the initial speed of the droplet

`acceleration` -> the acceleration with which the drop falls

```
rain.numDrops = 150; // setting the total number of drops to 150
rain.rampUpTime = 50; // setting the rampUpTime to 50ms. Internally, this invokes the rainSingleDrop() method after atleast 50ms
rain.deltat = 10; // time is in milliseconds
rain.speed = 20; // no of pixels per second
rain.acceleration = 9.8 // no of pixels per second^2
```

where rain is the `Rain` object



Remember, you can pass in the values for these arguments in the constructor for the `Rain` object. For more information on this, check out the `rain.js` file.



Hope you have fun adding this effect to your website!




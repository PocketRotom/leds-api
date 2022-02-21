# Leds API
API to run on a Raspberry PI with Leds to change unbranded leds

# raspberry pi setup

Instal lirc on your raspberry pi and setup up your GPIO pins by changing your /boot/config.txt to enable IR communication. I'm using GPIO Pin 22 for the transmitter and GPIO Pin 23 to the receiver.
Run `irrecord -d /dev/lirc1  --disable-namespace` and follow the instructions. Note down the name you gave to the config and to each command, as you will need them later.
After completing this, copy the result file to /etc/lircd/lircd.conf.d and restart the lircd service.
Now, if you run `irsend SEND_ONCE NAME_OF_CONFIG NAME_OF_COMMAND` (replace NAME_OF_CONFIG and NAME_OF_COMMAND with the names given when you run irrecord), you should see it working.

# API setup
Clone this repo with `git clone git@github.com:PocketRotom/leds-api.git` (or use HTTP).
On the leds.js file, on the models folder, you have the functions that run the irsend command. You should edit the first argument of the `exec` function with the desired command. 
On the routes.config.js, on the routes folder, you should list all the endpoints you want to use and then, then function that will run on the controller.
When you're done, just run `npm start` and then go to the corresponding url on your browser or use some other software to test APIs, like Insomnia. 
You can also configure virtual assistants, for example Siri with the Shortcuts app, to run these with voice. With Siri, you should setup it with the "Get URL contents" option. I noted that, at first, Siri would try to run its own Home shortcuts, but after some tries, it started to get the right command at first.

![Siri setup](https://i.imgur.com/FHV2Gau.png)

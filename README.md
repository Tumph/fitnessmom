# FITNESSMOM
#### Video Demo: https://youtu.be/JIsp3DvKELc
#### Description: 
FitnessMom was quite a difficult problem to 
solve overall. Overall, my app is a health and fitness extension for work 
at home employees that have been affected by the pandemic. My extension uses
an API for listener software to open itself regularly at distinct intervals, 
customizable by the user. Imagine this scenario: you have been in meetings for hours
in a row, and are currently in a call that does not require your attention, but attendance
is mandatory. If either you feel like taking a break, or if my AI thinks you need a break, the 
extension will open and prompt you to enter some exercises you feel like doing. There is a wide 
selection of mainly cardiovascular exercises on the platform, which have been proven through numerous 
studies to improve concentration, memory, and intellectual performance. My extension even has
a mindfulness option, where you can use the rest and mindfulness "exercise" option as a timer
for breathing in and out. The intuitive and easy-to-use UI of my extension means that it can 
be used by almost anyone. In addition, I plan on making the extension open-source, since a
large part of the target market is software professionals and work-at-home programmers.
This transparency can also mean a lot of great things for the future of the extension, 
as people will be able to customize the extension's UI, widgets, and more.


On the extension side, I found that I had difficulties figuring out the chrome extension API. 
Learning the specifics of the javascript for google extensions was a bit of a learning curve, and I
had to spend quite a bit of time doing this. In addition, I faced numerous challenges in terms of the
actual development process. There were numerous bugs that I had to get through on the extension. One 
notable example includes when I had to transfer the values from selection to applying those values to
the current session. The selected values would either show up too early or too late, but never during
the real-time user session. This meant that either the user would see options from before their session 
or a user after would see the ones that the user before had selected. Tweaking the code for a long time,
I was finally able to solve this.

One of the biggest improvements that I had in mind for my 2.0 version of the app included google calendar 
synchronization. I feel this would make my app even more customizable because now users will be able to adjust
exactly how their workout and fitness break fits into their broader schedule. There is a google calendar API
for synchronization, and I plan on implementing this in future iterations. In addition, I want to add 
vibration to my meditation/mindfulness exercise. There has been a lot of scientific research done on vibration
and meditation, and I feel incorporating differing frequencies of vibration and different meditation
options will be beneficial for my extension.

In addition, I would like my second version to have a possible synchronization with google fit. 
Doing this will allow health-conscious users to even track the number of calories they burnt during
exercise, which will aid in the overall experience. My 2.0 will also feature a better UI, that is also
more directly customizable for the noncoder user - rather than relying on open source as a means of
customization for the technologically literate. Using unsupervised machine learning techniques that will 
better understand the user’s time schedule will create an enhanced user experience as well.

I also have a lot of ideas for a potential 3.0 version, that would include a lot of additional features.
My ideas include even further synchronization across platforms, with apple fitness. Since the majority
of the US smartphone-owning population uses apple, it makes sense to sync with apple fitness and record
the data there as well. An additional neural net that learns which exercises you prefer and which ones 
you do the most often can also be added.  

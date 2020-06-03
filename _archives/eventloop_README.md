The JS Event Loop
=
Javascript is a single threaded language, meaning there is one thread to execute everything.
This thread is contained within what is known as the "Event Loop"

The event loop is what executes tasks and renders objects to the screen.
It can be visualized as follows:

[Insert Link to @jaffathecake's event loop]

#Queues
All JS code is handled in queues. There are 3 main queues:
1. Tasks
2. Animation Requests
3. Microtasks

##Tasks
A task is any synchronisly executable code (i.e. not a promise or callback)
Each time a task is added to the queue, the JS event loop is notified and will
execute the task to completion before continuing on.

These tasks are considered blocking, because it will stop the main thread from executing
all other tasks unit it has been completed.

**NB:** `setTimeout()` is a task

##Animation Requests
Animation requsts (or rAFs) are executed as part of the rendering tasks. According to web 
standards the rAF should be excuted before Stylings, Layout Changes and Web Painting tasks
in the browser.

`requestAnimationFrame()` is a JS task that queues up an Animation Request. It will execute
from the task queue and then pop a rAF ontop of the Animation Request queue

##Microtasks
Since javascript is synchronous, any asychronous task (i.e. NON Blocking tasks) will add
a __Microtask__ to the Microtask queue.

A microtask is a JS task that is executed as soon as there is nothing left to execute in
the other two stacks.

i.e. a function that returns a promise will execute in the main tasks queue and add a microtask to the microtask queue
to be executed once all other queues have cleared

#Sample Code


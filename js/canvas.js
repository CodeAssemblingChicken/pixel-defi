var boxes = [];

// The function gets called when the window is fully loaded
window.onload = function () {
    var box = {
        x: undefined,
        y: undefined,
        size: 101
    };

    // Get the canvas and context
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    canvas.onmousemove = event => {
        event.preventDefault();
        box.x = event.x;
        box.y = event.y;
    }
    canvas.ontouchmove = event => {
        event.preventDefault();
        console.log(event);
        box.x = event.touches[0].clientX;
        box.y = event.touches[0].clientY;
    }
    canvas.onwheel = event => {
        event.preventDefault();
        let dir = event.deltaY != 0 ? event.deltaY / Math.abs(event.deltaY) : 0;
        box.size = Math.max(box.size + dir * 20, 1);
    }
    canvas.onclick = event => {
        event.preventDefault();
        if (box.x != undefined) {
            let b = {
                x: box.x,
                y: box.y,
                size: box.size
            };
            boxes.push(b);
        }
        console.log(boxes);
    }

    // Create the image
    function createImage(x, y, w, h) {
        const arr = new Uint8ClampedArray(4 * w * h);
        for (let i = 0; i < arr.length; i += 4) {
            arr[i + 0] = Math.random() * 256;    // R value
            arr[i + 1] = Math.random() * 256;  // G value
            arr[i + 2] = Math.random() * 256;    // B value
            arr[i + 3] = 255;  // A value
        }
        let imageData = new ImageData(arr, w);
        ctx.putImageData(imageData, x - w / 2, y - w / 2);
    }

    // Main loop
    function main() {
        // Request animation frames
        window.requestAnimationFrame(main);

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (box.x != undefined) {
            createImage(box.x, box.y, box.size, box.size);
        }
        boxes.forEach(b => {
            createImage(b.x, b.y, b.size, b.size);
        });
    }

    // Call the main loop
    main();
};
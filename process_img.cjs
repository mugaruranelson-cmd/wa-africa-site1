const Jimp = require('jimp');

async function processImage() {
    try {
        console.log('Loading image...');
        const image = await Jimp.read('./public/phone_image.png');

        console.log('Processing pixels...');
        const threshold = 230; // Anything above this is considered white (0-255)

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];

            // If the pixel is mostly white, make it transparent
            if (r >= threshold && g >= threshold && b >= threshold) {
                this.bitmap.data[idx + 3] = 0; // alpha
            }
        });

        console.log('Saving image to phone_image_transparent.png...');
        await image.writeAsync('./public/phone_image_transparent.png');
        console.log('Done!');
    } catch (err) {
        console.error('Error processing image:', err);
    }
}

processImage();

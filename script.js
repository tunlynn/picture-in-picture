const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch error here
        console.log('woops, error here: ',error)
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disable = true;
    // Start Picture in PIcture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disable = false;
});

// On Load
selectMediaStream();
const canvas = document.querySelector('.canvas')
let canvasSize = 32;
let canvasPart = null;

function createCanvasSegments() {
    for (let i = 0; i < canvasSize; i++) {
        for (let i = 0; i < canvasSize; i++) {
            canvasPart = document.createElement('div')
            canvasPart.className = 'canvas__part'
            canvas.appendChild(canvasPart)
        }
    }
    
}

function calculateCanvasPartSize() {
    let widthHeight = 100 / canvasSize
    console.log(widthHeight);
    
    let cssText = "`height:${widthHeight}%; width:${widthHeight}%;`"
    canvasPart.style.cssText(cssText)
}

createCanvasSegments()
calculateCanvasPartSize()
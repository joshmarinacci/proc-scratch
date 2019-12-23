export function correctScale(canvas, context) {
    const dpr = window.devicePixelRatio
    if(dpr > 1.0) {
        console.log("scaling up by",dpr,canvas.clientWidth, canvas.style.width)
        canvas.style.width = canvas.clientWidth + 'px'
        canvas.style.height = canvas.clientHeight + 'px'
        canvas.width = canvas.clientWidth*dpr
        canvas.height = canvas.clientHeight*dpr
        context.scale(dpr,dpr)
    }

}

export function range(length) {
    let arr = []
    for(let i=0; i<length; i++) arr.push(i)
    return arr
}

export const randRange = (min,max) => min + Math.random()*(max-min)
export const hsl = (h, s, l) => `hsl(${h*360},${s*100}%,${l*100}%)`


export function circle(c, pt, radius) {
    c.arc(pt.x,pt.y,radius,0,Math.PI*2)
}

export class Point {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
}

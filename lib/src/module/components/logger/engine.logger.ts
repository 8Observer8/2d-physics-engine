import { generateMarkup } from './logger-markup';
import { AnimationLoop } from '../animation/engine.animation-loop';
declare const console: any;

export class Logger {

    private color: string;
    private lagTime: number;
    private animation: AnimationLoop;

    constructor(animationClass) {
        console.info('logging performance');
        this.animation = animationClass;
        this.lagTime = animationClass.lagTime;
        this.generateUI();
        this.color = animationClass.lagTime > 10 ? 'red' : 'green';
    }

    public logStats(): void {
        if (this.animation.engine.shapeCollection.collection.length) {
            document.querySelector('.render-info').innerHTML = generateMarkup(this.animation);
        }
    }

    private generateUI(): void {
        const ui = document.createElement('div');
        ui.classList.add('render-info');
        ui.style.zIndex = '1';
        ui.style.position = 'absolute';
        ui.style.top = '0';
        ui.style.width = `370px`;
        ui.style.right = '0';
        document.body.appendChild(ui);
    }

}

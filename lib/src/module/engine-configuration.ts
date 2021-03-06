import { PhysicsEngineOptions } from '../models/engine-model/engine.model';

export const engineConfiguration: PhysicsEngineOptions = {
    collision: true,
    keyboard: true,
    mouse: true,
    accelerometer: true,
    width: window.innerWidth,
    height: window.innerHeight,
    log: true
};

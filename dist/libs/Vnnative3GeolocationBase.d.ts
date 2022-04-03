import { Vnnative3GeolocationBaseInterface } from "./Vnnative3GeolocationBase.interface";
export declare class Vnnative3GeolocationBase implements Vnnative3GeolocationBaseInterface {
    useGoogleMap(googleMapWebKey: string, canvas_id: string, callback: Function): void;
    getCurrentPosition(success: Function, error: Function): void;
    watchPosition(success: Function, error: Function, refeshTime: number): number;
    clearWatch(pluginWatchId: number): void;
}

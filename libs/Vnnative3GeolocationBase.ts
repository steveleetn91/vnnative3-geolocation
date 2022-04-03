import { Vnnative3GeolocationBaseInterface, Vnnative3GeolocationResponse, 
    Vnnative3GeolocationResponseError, Vnnative3GoogleMapServiceInterface } from "./Vnnative3GeolocationBase.interface";

class Vnnative3GoogleMapService implements Vnnative3GoogleMapServiceInterface {
    map: google.maps.Map;
    constructor(canvas_id : string) {
        this.map = new google.maps.Map(document.getElementById(canvas_id) as HTMLElement, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
          });
    }
    setCamera(position : google.maps.LatLngLiteral) : Vnnative3GoogleMapServiceInterface {
        this.map.setCenter(position);
        return this;
    }
    setZoom(zoom : number) : Vnnative3GoogleMapServiceInterface {
        this.map.setZoom(zoom);
        return this;
    }
    addMarker(position : google.maps.LatLngLiteral): google.maps.Marker { 
        const marker = new google.maps.Marker({
            position: position,
            map: this.map,
        });
        return marker;
    }
}

export class Vnnative3GeolocationBase implements Vnnative3GeolocationBaseInterface {
    useGoogleMap(googleMapWebKey: string, canvas_id: string,callback : Function): void {
        const script: HTMLScriptElement = document.createElement("script");
        script.setAttribute("src", "https://maps.googleapis.com/maps/api/js?key=" + googleMapWebKey);
        document.head.appendChild(script);
        let check = setInterval(() => {
            if(google) {
                clearInterval(check);
                return callback(new Vnnative3GoogleMapService(canvas_id));
            }
        },500);
    }
    getCurrentPosition(success: Function, error: Function): void {
        const successfully: PositionCallback = (res: Vnnative3GeolocationResponse): Function => {
            return success(res);
        }
        const failed: PositionErrorCallback = (res: Vnnative3GeolocationResponseError): Function => {
            return error(res);
        };
        navigator.geolocation.getCurrentPosition(successfully, failed);
    }
    watchPosition(success: Function, error: Function, refeshTime: number): number {
        const successfully: PositionCallback = (res: Vnnative3GeolocationResponse): Function => {
            return success(res);
        }
        const failed: PositionErrorCallback = (res: Vnnative3GeolocationResponseError): Function => {
            return error(res);
        };
        const watchID: number = navigator.geolocation.watchPosition(successfully, failed, { timeout: refeshTime });
        return watchID;
    }
    clearWatch(pluginWatchId: number): void {
        navigator.geolocation.clearWatch(pluginWatchId);
    }
}
/// <reference types="google.maps" />
export interface Vnnative3GeolocationResponse {
    coords: GeolocationCoordinates;
    timestamp: EpochTimeStamp;
}
export interface Vnnative3GeolocationResponseError {
    code: number;
    message: string;
    PERMISSION_DENIED: number;
    POSITION_UNAVAILABLE: number;
    TIMEOUT: number;
}
export interface Vnnative3GoogleMapServiceInterface {
    map: google.maps.Map;
    setCamera(position: google.maps.LatLngLiteral): Vnnative3GoogleMapServiceInterface;
    setZoom(zoom: number): Vnnative3GoogleMapServiceInterface;
    addMarker(position: google.maps.LatLngLiteral): google.maps.Marker;
}
export interface Vnnative3GeolocationBaseInterface {
    useGoogleMap(googleMapWebKey: string, canvas_id: string, callback: Function): void;
    getCurrentPosition(success: Function, error: Function, args: Array<string>): void;
    watchPosition(success: Function, error: Function, refeshTime: number): number;
    clearWatch(pluginWatchId: number): void;
}

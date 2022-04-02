export interface Vnnative3GeolocationResponse {
    readonly coords: GeolocationCoordinates;
    readonly timestamp: EpochTimeStamp;
}
export interface Vnnative3GeolocationResponseError {
    readonly code: number;
    readonly message: string;
    readonly PERMISSION_DENIED: number;
    readonly POSITION_UNAVAILABLE: number;
    readonly TIMEOUT: number;
}

export interface Vnnative3GoogleMapServiceInterface {
    map: google.maps.Map;
    setCamera(position : google.maps.LatLngLiteral) : Vnnative3GoogleMapServiceInterface 
    setZoom(zoom : number) : Vnnative3GoogleMapServiceInterface 
    addMarker(position : google.maps.LatLngLiteral): google.maps.Marker 
}

export interface Vnnative3GeolocationBaseInterface {
    useGoogleMap(googleMapWebKey : string, canvas_id : string) : Vnnative3GoogleMapServiceInterface
    getCurrentPosition(success : Function, error : Function, args : Array<string>) : void 
    watchPosition(success : Function, error : Function, refeshTime : number) : number
    clearWatch(pluginWatchId : number ) : void
}
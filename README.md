# vnnative3-geolocation
This is a plugin support Geolocation for Vn Native 3. Default support for `Web` and `Software`, and if you wanna
support for `Android` and `iOS`, so need install more cordova plugin.

## Support Android and iOS

    cordova plugin add cordova-plugin-geolocation

## Setup HTML 

    <div id="map"></div>

## Quick start 
        // import 
        import Vnnative3Geolocation from 'vnnative3-geolocation';
        import { Vnnative3GeolocationResponse, Vnnative3GeolocationResponseError, Vnnative3GoogleMapServiceInterface } from 'vnnative3-geolocation/dist/libs/Vnnative3GeolocationBase.interface';
        // use 

        let position : Vnnative3GeolocationResponse;
        Vnnative3Geolocation.getCurrentPosition((resp : Vnnative3GeolocationResponse) => {
            position = resp;
            const GoogleMapWebServiceKey : string = "";
            Vnnative3Geolocation.useGoogleMap(GoogleMapWebServiceKey,"map",(map : Vnnative3GoogleMapServiceInterface) => {
               map.setCamera({
                    lat : position.coords.latitude,
                    lng : position.coords.longitude
                });

                map.setZoom(20);
                // add marker 
                let marker : google.maps.Marker = map.addMarker({
                    lat : position.coords.latitude,
                    lng : position.coords.longitude
                });

                marker.setMap(map.map);

                // marker.setVisible(false ? true);
                
                // view more about marker 
                // https://developers.google.com/maps/documentation/javascript/markers#maps_marker_simple-typescript
            });
        },(resp : Vnnative3GeolocationResponseError) => { 

        });

## How to install ? 

    npm i vnnative3-geolocation

Next step go to `./node_modules/vnnative3-geolocation` and run :

    npm install

Next 

    npm run build    

## Get current position ? 

    Vnnative3Geolocation.getCurrentPosition(successCallback,errorCallback)

### Google Map 

    const callback = (map : Vnnative3GoogleMapServiceInterface) => {
          console.log(map);
    }

    Vnnative3Geolocation.useGoogleMap(googleMapWebKey: string, canvas_id: string,callback);


## Watch position ? 

    const timeCheck : number = 3000;
    const watchId : number = Vnnative3Geolocation.watchPosition(successCallback,errorCallback,timeCheck); 

## Destroy watch position ? 

    Vnnative3Geolocation.clearWatch(watchId); 
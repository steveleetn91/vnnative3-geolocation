"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vnnative3GeolocationBase = void 0;
var Vnnative3GoogleMapService = /** @class */ (function () {
    function Vnnative3GoogleMapService(canvas_id) {
        this.map = new google.maps.Map(document.getElementById(canvas_id), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    }
    Vnnative3GoogleMapService.prototype.setCamera = function (position) {
        this.map.setCenter(position);
        return this;
    };
    Vnnative3GoogleMapService.prototype.setZoom = function (zoom) {
        this.map.setZoom(zoom);
        return this;
    };
    Vnnative3GoogleMapService.prototype.addMarker = function (position) {
        var marker = new google.maps.Marker({
            position: position,
            map: this.map,
        });
        return marker;
    };
    return Vnnative3GoogleMapService;
}());
var Vnnative3GeolocationBase = /** @class */ (function () {
    function Vnnative3GeolocationBase() {
    }
    Vnnative3GeolocationBase.prototype.useGoogleMap = function (googleMapWebKey, canvas_id, callback) {
        var script = document.createElement("script");
        script.setAttribute("src", "https://maps.googleapis.com/maps/api/js?key=" + googleMapWebKey);
        document.head.appendChild(script);
        var check = setInterval(function () {
            if (google) {
                clearInterval(check);
                return callback(new Vnnative3GoogleMapService(canvas_id));
            }
        }, 500);
    };
    Vnnative3GeolocationBase.prototype.getCurrentPosition = function (success, error) {
        var successfully = function (res) {
            return success(res);
        };
        var failed = function (res) {
            return error(res);
        };
        navigator.geolocation.getCurrentPosition(successfully, failed);
    };
    Vnnative3GeolocationBase.prototype.watchPosition = function (success, error, refeshTime) {
        var successfully = function (res) {
            return success(res);
        };
        var failed = function (res) {
            return error(res);
        };
        var watchID = navigator.geolocation.watchPosition(successfully, failed, { timeout: refeshTime });
        return watchID;
    };
    Vnnative3GeolocationBase.prototype.clearWatch = function (pluginWatchId) {
        navigator.geolocation.clearWatch(pluginWatchId);
    };
    return Vnnative3GeolocationBase;
}());
exports.Vnnative3GeolocationBase = Vnnative3GeolocationBase;

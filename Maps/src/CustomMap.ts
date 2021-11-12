/// <reference types="@types/google.maps" />
export interface Mappable {
  label: string;
  location: Location;
  summary(): string;
}
export interface Location {
  lat: number;
  lng: number;
}
export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(mapDivId: string) {
    this.googleMap = new google.maps.Map(
      document.querySelector(`#${mapDivId}`) as HTMLElement,
      {
        backgroundColor: 'gray',
        zoom: 1,
        center: {
          lat: 30,
          lng: -110,
        },
        minZoom: 1,
      }
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      label: mappable.label,
      map: this.googleMap,
      position: mappable.location,
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.summary(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}

interface Markable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap!: google.maps.Map;

  constructor(divId: string) {
    this.initMap(divId);
  }

  private async initMap(divId: string): Promise<void> {
    try {
      const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
      this.googleMap = new Map(document.getElementById(divId) as HTMLElement, {
        center: { lat: 0, lng: 0 },
        zoom: 1,
        mapId: 'Demo_map',
      });
    } catch (error) {
      console.error('Error initializing Google Map:', error);
    }
  }

  async addMarker(markable: Markable): Promise<void> {
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      'marker'
    )) as google.maps.MarkerLibrary;

    new AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: markable.location.lat,
        lng: markable.location.lng,
      },
    });
  }
}

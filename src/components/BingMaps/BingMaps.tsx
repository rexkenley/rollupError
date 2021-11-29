/* istanbul ignore file */

//@ts-ignore
import "bingmaps";
import { useRef, useEffect, useCallback } from "react";

import { IAddress } from "../../ts/address";

export interface IBingMapsProps {
  /**
   * An optional boolean that disables the control.
   */
  disabled?: boolean;
  /**
   * An optional boolean that displays the control.
   */
  visible?: boolean;
  /**
   * Bing Maps key
   */
  bingMapsKey: string;
  /**
   * Addresses
   */
  addresses: IAddress[];
  /**
   * A function that fires when the map is ready
   */
  onMapReady: () => void;
  /**
   * An optional number for component height.
   */
  height?: number;
  /**
   * An optional number for component width.
   */
  width?: number;
  /**
   * An optional map options
   */
  mapOptions?: Microsoft.Maps.IMapOptions;
  /**
   * An optional view options
   */
  viewOptions?: Microsoft.Maps.IViewOptions;
}

/**
 - A bing maps key is required to use this control. 
 */
export default function BingMaps({
  disabled = false,
  visible = true,
  bingMapsKey,
  addresses = [],
  onMapReady,
  height = 300,
  width = 300,
  mapOptions,
  viewOptions
}: IBingMapsProps): JSX.Element {
  const container = useRef(null),
    map = useRef(null),
    createMap = useCallback(() => {
      if (!map.current)
        //@ts-ignore
        map.current = new Microsoft.Maps.Map(container.current, {
          ...mapOptions,
          ...viewOptions
        });

      addresses.forEach((a) => {
        //@ts-ignore
        map.current.entities.push(
          new Microsoft.Maps.Pushpin(
            new Microsoft.Maps.Location(a.latitude, a.longitude),
            { title: a.name }
          )
        );
      });

      onMapReady && onMapReady();
    }, [onMapReady, mapOptions, viewOptions, addresses]);

  useEffect(() => {
    if (!visible) return;

    if (window.Microsoft?.Maps) {
      createMap();
    } else {
      const script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute(
        "src",
        `https://www.bing.com/api/maps/mapcontrol?callback=createMap&key=${bingMapsKey}`
      );
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      //@ts-ignore
      window.createMap = createMap;
    }
  }, [visible, bingMapsKey, createMap, mapOptions, viewOptions, addresses]);

  useEffect(() => {
    return () => {
      //@ts-ignore
      map.current?.dispose();
    };
  }, []);

  if (!visible) return <></>;

  return <div ref={container} style={{ height, width }} />;
}

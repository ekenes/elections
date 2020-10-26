import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");
import FeatureLayer = require("esri/layers/FeatureLayer");
import Swipe = require("esri/widgets/Swipe");
import Legend = require("esri/widgets/Legend");

import { referenceScale, maxScale, scaleThreshold, basemapPortalItem, statesLayerPortalItem, countiesLayerPortalItem, years } from "./config";
import { statePopupTemplate, countyPopupTemplate } from "./popupUtils";
import { countyChangeLabelingInfo, countyResultsLabelingInfo, stateChangeLabelingInfo, stateResultsLabelingInfo } from "./labelingUtils";
import { countyChangeRenderer, countyResultsRenderer, stateChangeRenderer, stateElectoralResultsRenderer, stateResultsRenderer, swingStateRenderer } from "./rendererUtils";

( async () => {
  const map = new EsriMap({
    basemap: {
      portalItem: {
        id: basemapPortalItem
      }
    }
  });

  const view = new MapView({
    container: `viewDiv`,
    map: map,
    center: [-95, 40],
    scale: referenceScale * 8,
    constraints: {
      minScale: 0,
      maxScale,
      snapToZoom: false
    },
    highlightOptions: {
      fillOpacity: 0
    },
    breakpoints: {
      large: 1200,
      medium: 992,
      small: 768,
      xsmall: 544
    },
    popup: {
      collapseEnabled: false
    }
  });

  const stateElectoralResultsLayer = new FeatureLayer({
    portalItem: {
      id: statesLayerPortalItem
    },
    title: `Results by state`,
    opacity: 0.2,
    renderer: stateElectoralResultsRenderer,
    popupTemplate: statePopupTemplate,
    popupEnabled: false
  });

  const swingStatesLayer = new FeatureLayer({
    portalItem: {
      id: statesLayerPortalItem
    },
    title: `Swing states`,
    opacity: 0.2,
    renderer: swingStateRenderer,
    popupTemplate: statePopupTemplate,
    popupEnabled: false
  });


  const countyChangeLayer = new FeatureLayer({
    minScale: scaleThreshold,
    portalItem: {
      id: countiesLayerPortalItem
    },
    legendEnabled: false,
    renderer: countyChangeRenderer,
    labelsVisible: true,
    labelingInfo: countyChangeLabelingInfo,
    popupTemplate: countyPopupTemplate
  });

  const countyResultsLayer = new FeatureLayer({
    minScale: scaleThreshold,
    portalItem: {
      id: countiesLayerPortalItem
    },
    legendEnabled: false,
    renderer: countyResultsRenderer,
    labelsVisible: true,
    labelingInfo: countyResultsLabelingInfo,
    popupTemplate: countyPopupTemplate
  });

  const stateChangeLayer = new FeatureLayer({
    maxScale: scaleThreshold,
    portalItem: {
      id: statesLayerPortalItem
    },
    opacity: 1,
    legendEnabled: false,
    renderer: stateChangeRenderer,
    labelsVisible: true,
    labelingInfo: stateChangeLabelingInfo,
    popupTemplate: statePopupTemplate
  });

  const stateResultsLayer = new FeatureLayer({
    maxScale: scaleThreshold,
    portalItem: {
      id: statesLayerPortalItem
    },
    opacity: 1,
    legendEnabled: false,
    renderer: stateResultsRenderer,
    labelsVisible: true,
    labelingInfo: stateResultsLabelingInfo,
    popupTemplate: statePopupTemplate
  });

  view.map.add(stateElectoralResultsLayer);
  view.map.add(swingStatesLayer);
  view.map.add(stateChangeLayer);
  view.map.add(stateResultsLayer);
  view.map.add(countyChangeLayer);
  view.map.add(countyResultsLayer);

  const swipe = new Swipe({
    view,
    leadingLayers: [ countyChangeLayer, stateChangeLayer, swingStatesLayer ],
    trailingLayers: [ countyResultsLayer, stateResultsLayer, stateElectoralResultsLayer ],
    position: 75
  });
  view.ui.add(swipe);

  const totalLegend = document.getElementById(`total-legend`) as HTMLDivElement;
  const changeLegend = document.getElementById(`change-legend`) as HTMLDivElement;
  const infoToggle = document.getElementById(`info-toggle`) as HTMLDivElement;

  const endYearChangeSpan = document.getElementById(`end-year-change`) as HTMLSpanElement;
  const startYearChangeSpan = document.getElementById(`start-year-change`) as HTMLSpanElement;
  const endYearTotalSpan = document.getElementById(`end-year-total`) as HTMLSpanElement;

  endYearChangeSpan.innerHTML = years.next.toString();
  startYearChangeSpan.innerHTML = years.previous.toString();
  endYearTotalSpan.innerHTML = years.next.toString();

  new Legend({
    view,
    container: `change-legend-container`,
    layerInfos: [{
      layer: swingStatesLayer
    }] as any
  });
  view.ui.add(`change-legend`, `bottom-left`);

  new Legend({
    view,
    container: `total-legend-container`,
    layerInfos: [{
      layer: stateElectoralResultsLayer
    }] as any
  });

  view.ui.add(changeLegend, `bottom-left`);
  view.ui.add(totalLegend, `bottom-right`);
  view.ui.add(infoToggle, `top-left`);

  let visibilityEnabled = true;
  const toggleInfoVisibility = function () {
    changeLegend.style.display = changeLegend.style.display === `none` ? `block` : `none`;
    totalLegend.style.display = totalLegend.style.display === `none` ? `block` : `none`;
    visibilityEnabled = !visibilityEnabled;
    updateLegendOpacity();
  }

  infoToggle.addEventListener(`click`, toggleInfoVisibility);

  swipe.watch( `position`, updateLegendOpacity);

  function updateLegendOpacity() {
    if (!visibilityEnabled){
      return;
    }

    const threshold = 50;
    if (swipe.position <= 85){
      totalLegend.style.display = `block`;
      const opacity = (35 - (swipe.position - threshold)) * 3.5;
      totalLegend.style.opacity = ( opacity * 0.01 ).toString();
    } else {
      totalLegend.style.display = `none`;
    }

    if (swipe.position <= 50){
      changeLegend.style.display = `block`;
      const opacity = (35 - (threshold - swipe.position)) * 3.5;
      changeLegend.style.opacity = ( opacity * 0.01 ).toString();
    }

    if (swipe.position <= 15){
      changeLegend.style.opacity = `0`;
      changeLegend.style.display = `none`;
    }
  }

  function updateLegendHeight () {
    changeLegend.style.height = null;
    changeLegend.style.overflow = null;

    totalLegend.style.height = null;
    totalLegend.style.overflow = null;

    if(view.heightBreakpoint === `small`){
      changeLegend.style.height = `450px`;
      changeLegend.style.overflow = `auto`;

      totalLegend.style.height = `450px`;
      totalLegend.style.overflow = `auto`;

    }
    if (view.heightBreakpoint === `xsmall`){
      changeLegend.style.height = `300px`;
      changeLegend.style.overflow = `auto`;

      totalLegend.style.height = `300px`;
      totalLegend.style.overflow = `auto`;
    }
  }

  view.watch(`heightBreakpoint`, updateLegendHeight);
  await view.when(updateLegendHeight).then(updateLegendOpacity);

})();

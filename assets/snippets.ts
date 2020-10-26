const symbolLayer = {
  type: "CIMVectorMarker",
  enable: true,
  primitiveName: "democrat-positive-votes",
  frame: { xmin: 0.0, ymin: 0.0, xmax: 17.0, ymax: 17.0 },
  anchorPoint: { x: 0.5, y: 0 },
  anchorPointUnits: "Relative",
  markerGraphics: [
    {
      type: "CIMMarkerGraphic",
      geometry: {
        rings: [
          [
            [8.5, 0.2],
            [7.06, 0.33],
            [5.66, 0.7],
            [4.35, 1.31],
            // additional vertices
            // to complete the circle
          ]
        ]
      },
      symbol: {
        type: "CIMPolygonSymbol",
        symbolLayers: [
          {
            type: "CIMSolidFill",
            enable: true,
            color: [60, 108, 204, 255]
          }
        ]
      }
    }
  ],
  scaleSymbolsProportionally: true,
  respectFrame: true
};


const symbolLayerDonut = {
  type: "CIMVectorMarker",
  enable: true,
  primitiveName: "democrat-negative-votes",
  frame: { xmin: 0.0, ymin: 0.0, xmax: 17.0, ymax: 17.0 },
  anchorPoint: { x: -0.5, y: 0 },
  anchorPointUnits: "Relative",
  markerGraphics: [
    {
      type: "CIMMarkerGraphic",
      geometry: {
        rings: [
          [
            [8.5, 0.2],
            [7.06, 0.33],
            [5.66, 0.7],
            [4.35, 1.31],
            // additional vertices
            // to complete the circle
          ]
        ]
      },
      symbol: {
        type: "CIMLineSymbol",
        symbolLayers: [
          {
            type: "CIMSolidStroke",
            enable: true,
            color: [60, 108, 204, 255],
            width: 2
          }
        ]
      }
    }
  ],
  scaleSymbolsProportionally: true,
  respectFrame: true
};

const democratPositiveOverride = {
  type: "CIMPrimitiveOverride",
  primitiveName: "democrat-positive-votes",
  propertyName: "Size",
  valueExpressionInfo: {
    type: "CIMExpressionInfo",
    title: "Increase in Democrat votes",
    expression: `
      var votesNext = $feature.PRS_DEM_16;
      var votesPrevious = $feature.PRS_DEM_12;
      var change = votesNext - votesPrevious;
      var value = IIF( change > 0, change, 0);

      // convert data value to representative size
    `,
    returnType: "Default"
  }
}

const democratPositiveOverride2 = {
  type: "CIMPrimitiveOverride",
  primitiveName: "democrat-positive-votes",
  propertyName: "Size",
  valueExpressionInfo: {
    type: "CIMExpressionInfo",
    title: "Increase in Democrat votes",
    expression: `
      var votesNext = $feature.PRS_DEM_16;
      var votesPrevious = $feature.PRS_DEM_12;
      var change = votesNext - votesPrevious;
      var value = IIF( change > 0, change, 0);

      // assign sizes to data values
      // interpolate between stops
      var sizeFactor = When(
        value >= 500000, 40,
        value >= 100000, 30 + ((40-30)/(500000-100000)) * (value - 100000)),
        value >= 50000, 5 + ((30-5)/(100000-50000)) * (value - 1)),
        value >= 10000, 1 + ((5-1)/(50000-10000)) * (value - 0.5)),
        value > 0, 0.5 + ((1-0.5)/(10000) * value),
        0
      );

      // adjust size based on scale
      // symbols grow as you zoom in
      // symbols shrink as you zoom out
      var scaleFactorBase = ( ${referenceScale} / $view.scale );
      var scaleFactor = When(
        scaleFactorBase >= 1, 1,  // 1
        scaleFactorBase >= 0.5, scaleFactorBase * 1,  // 0.6
        scaleFactorBase >= 0.25, scaleFactorBase * 1,  // 0.45
        scaleFactorBase >= 0.125, scaleFactorBase * 1,  // 0.3125
        scaleFactorBase * 1  // 0.1875
      );

      return sizeFactor * scaleFactor;
    `,
    returnType: "Default"
  }
}

var value

// assign sizes to data values
// interpolate between stops
var sizeFactor = When(
  value >= 500000, 40,
  value >= 100000, 30 + ((40-30)/(500000-100000) * (value - 100000)),
  value >= 50000, 5 + ((30-5)/(100000-50000) * (value - 1)),
  value >= 10000, 1 + ((5-1)/(50000-10000) * (value - 0.5)),
  value > 0, 0.5 + ((1-0.5)/(10000) * value),
  0
);

var scaleFactorBase = ( referenceScale / $view.scale );
var scaleFactor = When(
  scaleFactorBase >= 1, 1,  // 1
  scaleFactorBase >= 0.5, scaleFactorBase * 1,  // 0.6
  scaleFactorBase >= 0.25, scaleFactorBase * 1,  // 0.45
  scaleFactorBase >= 0.125, scaleFactorBase * 1,  // 0.3125
  scaleFactorBase * 1  // 0.1875
);

return sizeFactor * scaleFactor;
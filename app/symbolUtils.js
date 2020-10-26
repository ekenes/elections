define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var cimCircleGeometry = {
        rings: [
            [
                [8.5, 0.2],
                [7.06, 0.33],
                [5.66, 0.7],
                [4.35, 1.31],
                [3.16, 2.14],
                [2.14, 3.16],
                [1.31, 4.35],
                [0.7, 5.66],
                [0.33, 7.06],
                [0.2, 8.5],
                [0.33, 9.94],
                [0.7, 11.34],
                [1.31, 12.65],
                [2.14, 13.84],
                [3.16, 14.86],
                [4.35, 15.69],
                [5.66, 16.3],
                [7.06, 16.67],
                [8.5, 16.8],
                [9.94, 16.67],
                [11.34, 16.3],
                [12.65, 15.69],
                [13.84, 14.86],
                [14.86, 13.84],
                [15.69, 12.65],
                [16.3, 11.34],
                [16.67, 9.94],
                [16.8, 8.5],
                [16.67, 7.06],
                [16.3, 5.66],
                [15.69, 4.35],
                [14.86, 3.16],
                [13.84, 2.14],
                [12.65, 1.31],
                [11.34, 0.7],
                [9.94, 0.33],
                [8.5, 0.2]
            ]
        ]
    };
    function createCircleSymbolLayer(params) {
        var primitiveName = params.primitiveName, color = params.color, donutEnabled = params.donutEnabled, anchorPoint = params.anchorPoint, outline = params.outline;
        var symbol = donutEnabled ? {
            type: "CIMLineSymbol",
            symbolLayers: [
                {
                    type: "CIMSolidStroke",
                    enable: true,
                    color: color,
                    width: 2
                }
            ]
        } : {
            type: "CIMPolygonSymbol",
            symbolLayers: [
                {
                    type: "CIMSolidFill",
                    enable: true,
                    color: color
                }
            ]
        };
        if (outline && outline.color) {
            symbol.symbolLayers.push({
                type: "CIMSolidStroke",
                enable: true,
                color: outline.color,
                width: 1
            });
        }
        return {
            type: "CIMVectorMarker",
            enable: true,
            anchorPoint: anchorPoint,
            anchorPointUnits: "Relative",
            primitiveName: primitiveName,
            frame: { xmin: 0.0, ymin: 0.0, xmax: 17.0, ymax: 17.0 },
            markerGraphics: [
                {
                    type: "CIMMarkerGraphic",
                    geometry: cimCircleGeometry,
                    symbol: symbol
                }
            ],
            scaleSymbolsProportionally: true,
            respectFrame: true
        };
    }
    exports.createCircleSymbolLayer = createCircleSymbolLayer;
});
//# sourceMappingURL=symbolUtils.js.map
define(["require", "exports", "esri/layers/support/LabelClass", "esri/Color", "esri/symbols/Font", "esri/symbols", "./config", "./expressionUtils"], function (require, exports, LabelClass, Color, Font, symbols_1, config_1, expressionUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ////////////////////////////////////////////////////
    //
    // STATE CHANGE
    //
    ///////////////////////////////////////////////////
    exports.stateChangeLabelingInfo = [
        // DEMOCRAT label classes
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.democrat.state.next.name + " - " + config_1.fieldInfos.democrat.state.previous.name + ") >= 500000",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.democrat.state.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.democrat.state.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -50,
                yoffset: -25
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.democrat.state.next.name + " - " + config_1.fieldInfos.democrat.state.previous.name + ") >= 100000 AND ABS(" + config_1.fieldInfos.democrat.state.next.name + " - " + config_1.fieldInfos.democrat.state.previous.name + ") < 500000",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.democrat.state.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.democrat.state.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -40,
                yoffset: -20
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.democrat.state.next.name + " - " + config_1.fieldInfos.democrat.state.previous.name + ") >= 50000 AND ABS(" + config_1.fieldInfos.democrat.state.next.name + " - " + config_1.fieldInfos.democrat.state.previous.name + ") < 100000",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.democrat.state.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.democrat.state.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -40,
                yoffset: -10
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.democrat.state.next.name + " - " + config_1.fieldInfos.democrat.state.previous.name + ") >= 10000 AND ABS(" + config_1.fieldInfos.democrat.state.next.name + " - " + config_1.fieldInfos.democrat.state.previous.name + ") < 50000",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.democrat.state.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.democrat.state.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -30,
                yoffset: -10
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.democrat.state.next.name + " - " + config_1.fieldInfos.democrat.state.previous.name + ") < 10000",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.democrat.state.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.democrat.state.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -20,
                yoffset: -10
            })
        }),
        // REPUBLICAN label classes
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.republican.state.next.name + " - " + config_1.fieldInfos.republican.state.previous.name + ") >= 500000",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.republican.state.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.republican.state.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 50,
                yoffset: -20
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.republican.state.next.name + " - " + config_1.fieldInfos.republican.state.previous.name + ") >= 100000 AND ABS(" + config_1.fieldInfos.republican.state.next.name + " - " + config_1.fieldInfos.republican.state.previous.name + ") < 500000",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.republican.state.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.republican.state.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 35,
                yoffset: -20
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.republican.state.next.name + " - " + config_1.fieldInfos.republican.state.previous.name + ") >= 50000 AND ABS(" + config_1.fieldInfos.republican.state.next.name + " - " + config_1.fieldInfos.republican.state.previous.name + ") < 100000",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.republican.state.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.republican.state.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 30,
                yoffset: -17
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.republican.state.next.name + " - " + config_1.fieldInfos.republican.state.previous.name + ") >= 10000 AND ABS(" + config_1.fieldInfos.republican.state.next.name + " - " + config_1.fieldInfos.republican.state.previous.name + ") < 50000",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.republican.state.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.republican.state.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 25,
                yoffset: -12
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.republican.state.next.name + " - " + config_1.fieldInfos.republican.state.previous.name + ") < 10000",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.republican.state.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.republican.state.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 20,
                yoffset: -10
            })
        }),
        // OTHER label classes
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.other.state.next.name + " - " + config_1.fieldInfos.other.state.previous.name + ") >= 500000",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.other.state.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.other.state.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 20,
                yoffset: 30
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.other.state.next.name + " - " + config_1.fieldInfos.other.state.previous.name + ") >= 100000 AND ABS(" + config_1.fieldInfos.other.state.next.name + " - " + config_1.fieldInfos.other.state.previous.name + ") < 500000",
            labelExpressionInfo: {
                expression: "\n      var valueNext = $feature." + config_1.fieldInfos.other.state.next.name + ";\n      var valuePrevious = $feature." + config_1.fieldInfos.other.state.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 20,
                yoffset: 30
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "\n      (ABS(" + config_1.fieldInfos.other.state.next.name + " - " + config_1.fieldInfos.other.state.previous.name + ") >= 50000 AND ABS(" + config_1.fieldInfos.other.state.next.name + " - " + config_1.fieldInfos.other.state.previous.name + ") < 100000)\n    ",
            labelExpressionInfo: {
                expression: "\n      var valueNext = $feature." + config_1.fieldInfos.other.state.next.name + ";\n      var valuePrevious = $feature." + config_1.fieldInfos.other.state.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 20,
                yoffset: 20
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "\n      (ABS(" + config_1.fieldInfos.other.state.next.name + " - " + config_1.fieldInfos.other.state.previous.name + ") >= 10000 AND ABS(" + config_1.fieldInfos.other.state.next.name + " - " + config_1.fieldInfos.other.state.previous.name + ") < 50000)\n    ",
            labelExpressionInfo: {
                expression: "\n      var valueNext = $feature." + config_1.fieldInfos.other.state.next.name + ";\n      var valuePrevious = $feature." + config_1.fieldInfos.other.state.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 20,
                yoffset: 15
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "\n      (ABS(" + config_1.fieldInfos.other.state.next.name + " - " + config_1.fieldInfos.other.state.previous.name + ") < 10000)\n    ",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.other.state.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.other.state.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 10,
                yoffset: 10
            })
        })
    ];
    ////////////////////////////////////////////////////
    //
    // STATE RESULTS
    //
    ///////////////////////////////////////////////////
    exports.stateResultsLabelingInfo = [
        // DEMOCRAT label classes
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.democrat.state.next.name + ") >= 5000000",
            labelExpressionInfo: {
                expression: "\n        Text($feature." + config_1.fieldInfos.democrat.state.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -50,
                yoffset: -25
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.democrat.state.next.name + ") >= 1000000 AND ABS(" + config_1.fieldInfos.democrat.state.next.name + ") < 5000000",
            labelExpressionInfo: {
                expression: "\n      Text($feature." + config_1.fieldInfos.democrat.state.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -40,
                yoffset: -20
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.democrat.state.next.name + ") >= 500000 AND ABS(" + config_1.fieldInfos.democrat.state.next.name + ") < 1000000",
            labelExpressionInfo: {
                expression: "\n      Text($feature." + config_1.fieldInfos.democrat.state.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -40,
                yoffset: -10
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.democrat.state.next.name + ") >= 100000 AND ABS(" + config_1.fieldInfos.democrat.state.next.name + ") < 500000",
            labelExpressionInfo: {
                expression: "\n      Text($feature." + config_1.fieldInfos.democrat.state.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -30,
                yoffset: -10
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.democrat.state.next.name + ") < 100000",
            labelExpressionInfo: {
                expression: "\n      Text($feature." + config_1.fieldInfos.democrat.state.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -20,
                yoffset: -10
            })
        }),
        // REPUBLICAN label classes
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.republican.state.next.name + ") >= 5000000",
            labelExpressionInfo: {
                expression: "\n        Text($feature." + config_1.fieldInfos.republican.state.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 60,
                yoffset: -20
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.republican.state.next.name + ") >= 1000000 AND ABS(" + config_1.fieldInfos.republican.state.next.name + ") < 5000000",
            labelExpressionInfo: {
                expression: "\n      Text($feature." + config_1.fieldInfos.republican.state.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 35,
                yoffset: -20
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.republican.state.next.name + ") >= 500000 AND ABS(" + config_1.fieldInfos.republican.state.next.name + ") < 1000000",
            labelExpressionInfo: {
                expression: "\n      Text($feature." + config_1.fieldInfos.republican.state.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 30,
                yoffset: -20
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.republican.state.next.name + ") >= 100000 AND ABS(" + config_1.fieldInfos.republican.state.next.name + ") < 500000",
            labelExpressionInfo: {
                expression: "\n      Text($feature." + config_1.fieldInfos.republican.state.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 25,
                yoffset: -10
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.republican.state.next.name + ") < 100000",
            labelExpressionInfo: {
                expression: "\n      Text($feature." + config_1.fieldInfos.republican.state.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 20,
                yoffset: -10
            })
        }),
        // OTHER label classes
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.other.state.next.name + ") >= 5000000",
            labelExpressionInfo: {
                expression: "\n        Text($feature." + config_1.fieldInfos.other.state.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 20,
                yoffset: 35
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "ABS(" + config_1.fieldInfos.other.state.next.name + ") >= 1000000 AND ABS(" + config_1.fieldInfos.other.state.next.name + ") < 5000000",
            labelExpressionInfo: {
                expression: "\n      Text($feature." + config_1.fieldInfos.other.state.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 30,
                yoffset: 30
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "\n      (ABS(" + config_1.fieldInfos.other.state.next.name + ") >= 500000 AND ABS(" + config_1.fieldInfos.other.state.next.name + ") < 1000000)\n    ",
            labelExpressionInfo: {
                expression: "\n      Text($feature." + config_1.fieldInfos.other.state.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 20,
                yoffset: 25
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "\n      (ABS(" + config_1.fieldInfos.other.state.next.name + ") >= 100000 AND ABS(" + config_1.fieldInfos.other.state.next.name + ") < 500000)\n    ",
            labelExpressionInfo: {
                expression: "\n      Text($feature." + config_1.fieldInfos.other.state.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 20,
                yoffset: 15
            })
        }),
        new LabelClass({
            minScale: 9244700,
            where: "\n      (ABS(" + config_1.fieldInfos.other.state.next.name + ") < 100000)\n    ",
            labelExpressionInfo: {
                expression: "\n      Text($feature." + config_1.fieldInfos.other.state.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 1,
                yoffset: 15
            })
        })
    ];
    ////////////////////////////////////////////////////
    //
    // COUNTY RESULTS
    //
    ///////////////////////////////////////////////////
    exports.countyResultsLabelingInfo = [
        // DEMOCRAT label classes
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.democrat.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 10",
            labelExpressionInfo: {
                expression: "\n        Text($feature." + config_1.fieldInfos.democrat.county.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -50,
                yoffset: -25
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.democrat.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 5 AND ABS(((" + config_1.fieldInfos.democrat.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 10",
            labelExpressionInfo: {
                expression: "\n        Text($feature." + config_1.fieldInfos.democrat.county.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -40,
                yoffset: -20
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.democrat.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 1 AND ABS(((" + config_1.fieldInfos.democrat.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 5",
            labelExpressionInfo: {
                expression: "\n        Text($feature." + config_1.fieldInfos.democrat.county.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -40,
                yoffset: -20
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.democrat.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 0.5 AND ABS(((" + config_1.fieldInfos.democrat.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 1",
            labelExpressionInfo: {
                expression: "\n        Text($feature." + config_1.fieldInfos.democrat.county.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -30,
                yoffset: -20
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.democrat.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 0.5",
            labelExpressionInfo: {
                expression: "\n        Text($feature." + config_1.fieldInfos.democrat.county.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -20,
                yoffset: -10
            })
        }),
        // REPUBLICAN label classes
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.republican.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 10",
            labelExpressionInfo: {
                expression: "\n        Text($feature." + config_1.fieldInfos.republican.county.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 50,
                yoffset: -20
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.republican.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 5 AND ABS(((" + config_1.fieldInfos.republican.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 10",
            labelExpressionInfo: {
                expression: "\n        Text($feature." + config_1.fieldInfos.republican.county.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 40,
                yoffset: -20
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.republican.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 1 AND ABS(((" + config_1.fieldInfos.republican.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 5",
            labelExpressionInfo: {
                expression: "\n        Text($feature." + config_1.fieldInfos.republican.county.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 30,
                yoffset: -20
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.republican.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 0.5 AND ABS(((" + config_1.fieldInfos.republican.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 1",
            labelExpressionInfo: {
                expression: "\n        Text($feature." + config_1.fieldInfos.republican.county.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 25,
                yoffset: -10
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.republican.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 0.5",
            labelExpressionInfo: {
                expression: "\n        Text($feature." + config_1.fieldInfos.republican.county.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 20,
                yoffset: -10
            })
        }),
        // OTHER label classes
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.other.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 10",
            labelExpressionInfo: {
                expression: "\n        Text($feature." + config_1.fieldInfos.other.county.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 30,
                yoffset: 40
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.other.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 5 AND ABS(((" + config_1.fieldInfos.other.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 10",
            labelExpressionInfo: {
                expression: "\n        Text($feature." + config_1.fieldInfos.other.county.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 30,
                yoffset: 40
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "\n      (ABS(((" + config_1.fieldInfos.other.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 1 AND ABS(((" + config_1.fieldInfos.other.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 5)\n    ",
            labelExpressionInfo: {
                expression: "\n        Text($feature." + config_1.fieldInfos.other.county.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 30,
                yoffset: 35
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "\n      (ABS(((" + config_1.fieldInfos.other.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 0.5 AND ABS(((" + config_1.fieldInfos.other.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 1)\n    ",
            labelExpressionInfo: {
                expression: "\n        Text($feature." + config_1.fieldInfos.other.county.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 20,
                yoffset: 30
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "\n      (ABS(((" + config_1.fieldInfos.other.county.next.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 0.5)\n    ",
            labelExpressionInfo: {
                expression: "\n        Text($feature." + config_1.fieldInfos.other.county.next.name + ", '#,###');\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 15,
                yoffset: 18
            })
        })
    ];
    ////////////////////////////////////////////////////
    //
    // COUNTY CHANGE
    //
    ///////////////////////////////////////////////////
    exports.countyChangeLabelingInfo = [
        // DEMOCRAT label classes
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.democrat.county.next.name + " - " + config_1.fieldInfos.democrat.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 10",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.democrat.county.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.democrat.county.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -50,
                yoffset: -25
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.democrat.county.next.name + " - " + config_1.fieldInfos.democrat.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 5 AND ABS(((" + config_1.fieldInfos.democrat.county.next.name + " - " + config_1.fieldInfos.democrat.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 10",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.democrat.county.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.democrat.county.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -40,
                yoffset: -20
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.democrat.county.next.name + " - " + config_1.fieldInfos.democrat.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 1 AND ABS(((" + config_1.fieldInfos.democrat.county.next.name + " - " + config_1.fieldInfos.democrat.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 5",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.democrat.county.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.democrat.county.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -40,
                yoffset: -10
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.democrat.county.next.name + " - " + config_1.fieldInfos.democrat.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 0.5 AND ABS(((" + config_1.fieldInfos.democrat.county.next.name + " - " + config_1.fieldInfos.democrat.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 1",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.democrat.county.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.democrat.county.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -30,
                yoffset: -10
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.democrat.county.next.name + " - " + config_1.fieldInfos.democrat.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 0.5",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.democrat.county.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.democrat.county.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.dColor),
                xoffset: -20,
                yoffset: -10
            })
        }),
        // REPUBLICAN label classes
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.republican.county.next.name + " - " + config_1.fieldInfos.republican.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 10",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.republican.county.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.republican.county.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 60,
                yoffset: -20
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.republican.county.next.name + " - " + config_1.fieldInfos.republican.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 5 AND ABS(((" + config_1.fieldInfos.republican.county.next.name + " - " + config_1.fieldInfos.republican.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 10",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.republican.county.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.republican.county.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 45,
                yoffset: -20
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.republican.county.next.name + " - " + config_1.fieldInfos.republican.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 1 AND ABS(((" + config_1.fieldInfos.republican.county.next.name + " - " + config_1.fieldInfos.republican.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 5",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.republican.county.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.republican.county.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 30,
                yoffset: -20
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.republican.county.next.name + " - " + config_1.fieldInfos.republican.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 0.5 AND ABS(((" + config_1.fieldInfos.republican.county.next.name + " - " + config_1.fieldInfos.republican.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 1",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.republican.county.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.republican.county.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 20,
                yoffset: -10
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.republican.county.next.name + " - " + config_1.fieldInfos.republican.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 0.5",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.republican.county.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.republican.county.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.rColor),
                xoffset: 20,
                yoffset: -10
            })
        }),
        // OTHER label classes
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.other.county.next.name + " - " + config_1.fieldInfos.other.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 10",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.other.county.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.other.county.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 30,
                yoffset: 40
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "ABS(((" + config_1.fieldInfos.other.county.next.name + " - " + config_1.fieldInfos.other.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 5 AND ABS(((" + config_1.fieldInfos.other.county.next.name + " - " + config_1.fieldInfos.other.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 10",
            labelExpressionInfo: {
                expression: "\n      var valueNext = $feature." + config_1.fieldInfos.other.county.next.name + ";\n      var valuePrevious = $feature." + config_1.fieldInfos.other.county.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 30,
                yoffset: 40
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "\n      (ABS(((" + config_1.fieldInfos.other.county.next.name + " - " + config_1.fieldInfos.other.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 1 AND ABS(((" + config_1.fieldInfos.other.county.next.name + " - " + config_1.fieldInfos.other.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 5)\n    ",
            labelExpressionInfo: {
                expression: "\n      var valueNext = $feature." + config_1.fieldInfos.other.county.next.name + ";\n      var valuePrevious = $feature." + config_1.fieldInfos.other.county.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 30,
                yoffset: 35
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "\n      (ABS(((" + config_1.fieldInfos.other.county.next.name + " - " + config_1.fieldInfos.other.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) >= 0.5 AND ABS(((" + config_1.fieldInfos.other.county.next.name + " - " + config_1.fieldInfos.other.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 1)\n    ",
            labelExpressionInfo: {
                expression: "\n      var valueNext = $feature." + config_1.fieldInfos.other.county.next.name + ";\n      var valuePrevious = $feature." + config_1.fieldInfos.other.county.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 20,
                yoffset: 30
            })
        }),
        new LabelClass({
            minScale: 577791,
            where: "\n      (ABS(((" + config_1.fieldInfos.other.county.next.name + " - " + config_1.fieldInfos.other.county.previous.name + ") / " + config_1.fieldInfos.normalizationFields.county.next + ") * 100) < 0.5)\n    ",
            labelExpressionInfo: {
                expression: "\n        var valueNext = $feature." + config_1.fieldInfos.other.county.next.name + ";\n        var valuePrevious = $feature." + config_1.fieldInfos.other.county.previous.name + ";\n        " + expressionUtils_1.diffLabelText + "\n      "
            },
            deconflictionStrategy: "none",
            labelPlacement: "center-center",
            symbol: new symbols_1.TextSymbol({
                font: new Font({
                    weight: "bold",
                    family: "Noto Sans",
                    size: "10pt"
                }),
                haloColor: new Color(config_1.haloColor),
                haloSize: config_1.haloSize,
                color: new Color(config_1.oTextColor),
                xoffset: 15,
                yoffset: 18
            })
        })
    ];
});
//# sourceMappingURL=labelingUtils.js.map
define(["require", "exports", "esri/renderers", "esri/symbols", "esri/rasterRenderers", "./config", "./expressionUtils", "./symbolUtils"], function (require, exports, renderers_1, symbols_1, rasterRenderers_1, config_1, expressionUtils_1, symbolUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ////////////////////////////////////////////////////
    //
    // STATE ELECTORAL RESULTS
    //
    ///////////////////////////////////////////////////
    exports.stateElectoralResultsRenderer = function () {
        return new rasterRenderers_1.UniqueValueRenderer({
            valueExpression: "\n      var dem = $feature." + config_1.fieldInfos.democrat.state.next.name + ";\n      var rep = $feature." + config_1.fieldInfos.republican.state.next.name + ";\n      var oth = $feature." + config_1.fieldInfos.other.state.next.name + ";\n\n      var winner = Decode( Max([dem, rep, oth]),\n        dem, 'Democrat',\n        rep, 'Republican',\n        oth, 'Other',\n      'n/a' );\n\n      return winner;\n    ",
            defaultSymbol: null,
            uniqueValueInfos: [{
                    value: "Republican",
                    label: "R - " + config_1.results[config_1.selectedYear].republican.candidate + " (" + config_1.results[config_1.selectedYear].republican.electoralVotes + ")",
                    symbol: new symbols_1.SimpleFillSymbol({
                        color: config_1.rColor,
                        outline: null
                    })
                }, {
                    value: "Democrat",
                    label: "D - " + config_1.results[config_1.selectedYear].democrat.candidate + " (" + config_1.results[config_1.selectedYear].democrat.electoralVotes + ")",
                    symbol: new symbols_1.SimpleFillSymbol({
                        color: config_1.dColor,
                        outline: null
                    })
                }]
        });
    };
    ////////////////////////////////////////////////////
    //
    // SWING STATES
    //
    ///////////////////////////////////////////////////
    exports.swingStateRenderer = function () {
        return new rasterRenderers_1.UniqueValueRenderer({
            valueExpression: "\n      var demPrevious = $feature." + config_1.fieldInfos.democrat.state.previous.name + ";\n      var repPrevious = $feature." + config_1.fieldInfos.republican.state.previous.name + ";\n      var othPrevious = $feature." + config_1.fieldInfos.other.state.previous.name + ";\n\n      var winnerPrevious = Decode( Max([demPrevious, repPrevious, othPrevious]),\n        demPrevious, 'Democrat " + config_1.years.previous + "',\n        repPrevious, 'Republican " + config_1.years.previous + "',\n        othPrevious, 'Other " + config_1.years.previous + "',\n      'n/a' );\n\n      var demNext = $feature." + config_1.fieldInfos.democrat.state.next.name + ";\n      var repNext = $feature." + config_1.fieldInfos.republican.state.next.name + ";\n      var othNext = $feature." + config_1.fieldInfos.other.state.next.name + ";\n\n      var winnerNext = Decode( Max([demNext, repNext, othNext]),\n      demNext, 'Democrat " + config_1.years.next + "',\n      repNext, 'Republican " + config_1.years.next + "',\n      othNext, 'Other " + config_1.years.next + "',\n      'n/a' );\n\n      return Concatenate([winnerPrevious, winnerNext], \", \");\n    ",
            defaultSymbol: null,
            uniqueValueInfos: [{
                    value: "Democrat " + config_1.years.previous + ", Republican " + config_1.years.next,
                    label: "Flipped Republican in " + config_1.years.next,
                    symbol: new symbols_1.SimpleFillSymbol({
                        color: config_1.rColor,
                        outline: null
                    })
                }, {
                    value: "Republican " + config_1.years.previous + ", Democrat " + config_1.years.next,
                    label: "Flipped Democrat in " + config_1.years.next,
                    symbol: new symbols_1.SimpleFillSymbol({
                        color: config_1.dColor,
                        outline: null
                    })
                }]
        });
    };
    ////////////////////////////////////////////////////
    //
    // STATE RESULTS
    //
    ///////////////////////////////////////////////////
    exports.stateResultsRenderer = function () {
        return new renderers_1.SimpleRenderer({
            symbol: new symbols_1.CIMSymbol({
                data: {
                    type: "CIMSymbolReference",
                    symbol: {
                        type: "CIMPointSymbol",
                        symbolLayers: [
                            symbolUtils_1.createCircleSymbolLayer({
                                primitiveName: "democrat-positive-votes",
                                anchorPoint: { x: 0.5, y: 0 },
                                color: config_1.dColorCIM,
                                donutEnabled: false
                            }),
                            symbolUtils_1.createCircleSymbolLayer({
                                primitiveName: "republican-positive-votes",
                                anchorPoint: { x: -0.5, y: 0 },
                                color: config_1.rColorCIM,
                                donutEnabled: false
                            }),
                            symbolUtils_1.createCircleSymbolLayer({
                                primitiveName: "other-positive-votes",
                                anchorPoint: { x: 0, y: -0.75 },
                                color: config_1.oColorCIM,
                                donutEnabled: false,
                            })
                        ]
                    },
                    primitiveOverrides: [
                        {
                            type: "CIMPrimitiveOverride",
                            primitiveName: "democrat-positive-votes",
                            propertyName: "Size",
                            valueExpressionInfo: {
                                type: "CIMExpressionInfo",
                                title: "Democrat votes",
                                expression: "\n                var value = $feature." + config_1.fieldInfos.democrat.state.next.name + ";\n                " + expressionUtils_1.sizeTotalExpressionBase + "\n              ",
                                returnType: "Default"
                            }
                        },
                        {
                            type: "CIMPrimitiveOverride",
                            primitiveName: "republican-positive-votes",
                            propertyName: "Size",
                            valueExpressionInfo: {
                                type: "CIMExpressionInfo",
                                title: "Republican votes",
                                expression: "\n                var value = $feature." + config_1.fieldInfos.republican.state.next.name + ";\n                " + expressionUtils_1.sizeTotalExpressionBase + "\n              ",
                                returnType: "Default"
                            }
                        },
                        {
                            type: "CIMPrimitiveOverride",
                            primitiveName: "other-positive-votes",
                            propertyName: "Size",
                            valueExpressionInfo: {
                                type: "CIMExpressionInfo",
                                title: "Other votes",
                                expression: "\n                var value = $feature." + config_1.fieldInfos.other.state.next.name + ";\n                " + expressionUtils_1.sizeTotalExpressionBase + "\n              ",
                                returnType: "Default"
                            }
                        }
                    ]
                }
            })
        });
    };
    ////////////////////////////////////////////////////
    //
    // STATE CHANGE
    //
    ///////////////////////////////////////////////////
    exports.stateChangeRenderer = function () {
        return new renderers_1.SimpleRenderer({
            symbol: new symbols_1.CIMSymbol({
                data: {
                    type: "CIMSymbolReference",
                    symbol: {
                        type: "CIMPointSymbol",
                        symbolLayers: [
                            symbolUtils_1.createCircleSymbolLayer({
                                primitiveName: "democrat-positive-votes",
                                anchorPoint: { x: 0.5, y: 0 },
                                color: config_1.dColorCIM,
                                donutEnabled: false
                            }),
                            symbolUtils_1.createCircleSymbolLayer({
                                primitiveName: "democrat-negative-votes",
                                anchorPoint: { x: 0.5, y: 0 },
                                color: config_1.dColorCIM,
                                donutEnabled: true
                            }),
                            symbolUtils_1.createCircleSymbolLayer({
                                primitiveName: "republican-positive-votes",
                                anchorPoint: { x: -0.5, y: 0 },
                                color: config_1.rColorCIM,
                                donutEnabled: false
                            }),
                            symbolUtils_1.createCircleSymbolLayer({
                                primitiveName: "republican-negative-votes",
                                anchorPoint: { x: -0.5, y: 0 },
                                color: config_1.rColorCIM,
                                donutEnabled: true
                            }),
                            symbolUtils_1.createCircleSymbolLayer({
                                primitiveName: "other-positive-votes",
                                anchorPoint: { x: 0, y: -0.75 },
                                color: config_1.oColorCIM,
                                donutEnabled: false,
                            }),
                            symbolUtils_1.createCircleSymbolLayer({
                                primitiveName: "other-negative-votes",
                                anchorPoint: { x: 0, y: -0.75 },
                                color: config_1.oColorCIM,
                                donutEnabled: true
                            })
                        ]
                    },
                    primitiveOverrides: [
                        {
                            type: "CIMPrimitiveOverride",
                            primitiveName: "democrat-positive-votes",
                            propertyName: "Size",
                            valueExpressionInfo: {
                                type: "CIMExpressionInfo",
                                title: "Increase in Democrat votes",
                                expression: "\n                var votesNext = $feature." + config_1.fieldInfos.democrat.state.next.name + ";\n                var votesPrevious = $feature." + config_1.fieldInfos.democrat.state.previous.name + ";\n                var change = votesNext - votesPrevious;\n                var value = IIF( change > 0, change, 0);\n                " + expressionUtils_1.sizeTotalChangeExpressionBase + "\n              ",
                                returnType: "Default"
                            }
                        },
                        {
                            type: "CIMPrimitiveOverride",
                            primitiveName: "democrat-negative-votes",
                            propertyName: "Size",
                            valueExpressionInfo: {
                                type: "CIMExpressionInfo",
                                title: "Decrease in Democrat votes",
                                expression: "\n                var votesNext = $feature." + config_1.fieldInfos.democrat.state.next.name + ";\n                var votesPrevious = $feature." + config_1.fieldInfos.democrat.state.previous.name + ";\n                var change = votesNext - votesPrevious;\n                var value = IIF( change < 0, Abs(change), 0);\n                " + expressionUtils_1.sizeTotalChangeExpressionBase + "\n              ",
                                returnType: "Default"
                            }
                        },
                        {
                            type: "CIMPrimitiveOverride",
                            primitiveName: "republican-positive-votes",
                            propertyName: "Size",
                            valueExpressionInfo: {
                                type: "CIMExpressionInfo",
                                title: "Increase in Republican votes",
                                expression: "\n                var valueNext = $feature." + config_1.fieldInfos.republican.state.next.name + ";\n                var valuePrevious = $feature." + config_1.fieldInfos.republican.state.previous.name + ";\n                var change = valueNext - valuePrevious;\n                var value = IIF( change > 0, change, 0);\n                " + expressionUtils_1.sizeTotalChangeExpressionBase + "\n              ",
                                returnType: "Default"
                            }
                        },
                        {
                            type: "CIMPrimitiveOverride",
                            primitiveName: "republican-negative-votes",
                            propertyName: "Size",
                            valueExpressionInfo: {
                                type: "CIMExpressionInfo",
                                title: "Decrease in Republican votes",
                                expression: "\n                var valueNext = $feature." + config_1.fieldInfos.republican.state.next.name + ";\n                var valuePrevious = $feature." + config_1.fieldInfos.republican.state.previous.name + ";\n                var change = valueNext - valuePrevious;\n                var value = IIF( change < 0, Abs(change), 0);\n                " + expressionUtils_1.sizeTotalChangeExpressionBase + "\n              ",
                                returnType: "Default"
                            }
                        },
                        {
                            type: "CIMPrimitiveOverride",
                            primitiveName: "other-positive-votes",
                            propertyName: "Size",
                            valueExpressionInfo: {
                                type: "CIMExpressionInfo",
                                title: "Increase in Other votes",
                                expression: "\n                var valueNext = $feature." + config_1.fieldInfos.other.state.next.name + ";\n                var valuePrevious = $feature." + config_1.fieldInfos.other.state.previous.name + ";\n                var change = valueNext - valuePrevious;\n                var value = IIF( change > 0, change, 0);\n                " + expressionUtils_1.sizeTotalChangeExpressionBase + "\n              ",
                                returnType: "Default"
                            }
                        },
                        {
                            type: "CIMPrimitiveOverride",
                            primitiveName: "other-negative-votes",
                            propertyName: "Size",
                            valueExpressionInfo: {
                                type: "CIMExpressionInfo",
                                title: "Decrease in Other votes",
                                expression: "\n                var valueNext = $feature." + config_1.fieldInfos.other.state.next.name + ";\n                var valuePrevious = $feature." + config_1.fieldInfos.other.state.previous.name + ";\n                var change = valueNext - valuePrevious;\n                var value = IIF( change < 0, Abs(change), 0);\n                " + expressionUtils_1.sizeTotalChangeExpressionBase + "\n              ",
                                returnType: "Default"
                            }
                        }
                    ]
                }
            })
        });
    };
    ////////////////////////////////////////////////////
    //
    // COUNTY RESULTS
    //
    ///////////////////////////////////////////////////
    exports.countyResultsRenderer = function () {
        return new renderers_1.SimpleRenderer({
            symbol: new symbols_1.CIMSymbol({
                data: {
                    type: "CIMSymbolReference",
                    symbol: {
                        type: "CIMPointSymbol",
                        symbolLayers: [
                            symbolUtils_1.createCircleSymbolLayer({
                                primitiveName: "democrat-positive-votes",
                                anchorPoint: { x: 0.5, y: 0 },
                                color: config_1.dColorCIM,
                                donutEnabled: false
                            }),
                            symbolUtils_1.createCircleSymbolLayer({
                                primitiveName: "republican-positive-votes",
                                anchorPoint: { x: -0.5, y: 0 },
                                color: config_1.rColorCIM,
                                donutEnabled: false
                            }),
                            symbolUtils_1.createCircleSymbolLayer({
                                primitiveName: "other-positive-votes",
                                anchorPoint: { x: 0, y: -0.75 },
                                color: config_1.oColorCIM,
                                donutEnabled: false,
                            })
                        ]
                    },
                    primitiveOverrides: [
                        {
                            type: "CIMPrimitiveOverride",
                            primitiveName: "democrat-positive-votes",
                            propertyName: "Size",
                            valueExpressionInfo: {
                                type: "CIMExpressionInfo",
                                title: "Increase in Democrat votes",
                                expression: "\n                var percentStateVotes = ( $feature." + config_1.fieldInfos.democrat.county.next.name + " / $feature." + config_1.fieldInfos.normalizationFields.county.next + " ) * $feature." + config_1.fieldInfos.normalizationFields.state.electoralVotes + ";\n                " + expressionUtils_1.sizeExpressionBase + "\n              ",
                                returnType: "Default"
                            }
                        },
                        {
                            type: "CIMPrimitiveOverride",
                            primitiveName: "republican-positive-votes",
                            propertyName: "Size",
                            valueExpressionInfo: {
                                type: "CIMExpressionInfo",
                                title: "Increase in Republican votes",
                                expression: "\n                var percentStateVotes = ( $feature." + config_1.fieldInfos.republican.county.next.name + " / $feature." + config_1.fieldInfos.normalizationFields.county.next + " ) * $feature." + config_1.fieldInfos.normalizationFields.state.electoralVotes + ";\n                " + expressionUtils_1.sizeExpressionBase + "\n              ",
                                returnType: "Default"
                            }
                        },
                        {
                            type: "CIMPrimitiveOverride",
                            primitiveName: "other-positive-votes",
                            propertyName: "Size",
                            valueExpressionInfo: {
                                type: "CIMExpressionInfo",
                                title: "Increase in Other votes",
                                expression: "\n                var percentStateVotes = ( $feature." + config_1.fieldInfos.other.county.next.name + " / $feature." + config_1.fieldInfos.normalizationFields.county.next + " ) * $feature." + config_1.fieldInfos.normalizationFields.state.electoralVotes + ";\n                " + expressionUtils_1.sizeExpressionBase + "\n              ",
                                returnType: "Default"
                            }
                        }
                    ]
                }
            })
        });
    };
    ////////////////////////////////////////////////////
    //
    // COUNTY CHANGE
    //
    ///////////////////////////////////////////////////
    exports.countyChangeRenderer = function () {
        return new renderers_1.SimpleRenderer({
            symbol: new symbols_1.CIMSymbol({
                data: {
                    type: "CIMSymbolReference",
                    symbol: {
                        type: "CIMPointSymbol",
                        symbolLayers: [
                            symbolUtils_1.createCircleSymbolLayer({
                                primitiveName: "democrat-positive-votes",
                                anchorPoint: { x: 0.5, y: 0 },
                                color: config_1.dColorCIM,
                                donutEnabled: false
                            }),
                            symbolUtils_1.createCircleSymbolLayer({
                                primitiveName: "democrat-negative-votes",
                                anchorPoint: { x: 0.5, y: 0 },
                                color: config_1.dColorCIM,
                                donutEnabled: true
                            }),
                            symbolUtils_1.createCircleSymbolLayer({
                                primitiveName: "republican-positive-votes",
                                anchorPoint: { x: -0.5, y: 0 },
                                color: config_1.rColorCIM,
                                donutEnabled: false
                            }),
                            symbolUtils_1.createCircleSymbolLayer({
                                primitiveName: "republican-negative-votes",
                                anchorPoint: { x: -0.5, y: 0 },
                                color: config_1.rColorCIM,
                                donutEnabled: true
                            }),
                            symbolUtils_1.createCircleSymbolLayer({
                                primitiveName: "other-positive-votes",
                                anchorPoint: { x: 0, y: -0.75 },
                                color: config_1.oColorCIM,
                                donutEnabled: false
                            }),
                            symbolUtils_1.createCircleSymbolLayer({
                                primitiveName: "other-negative-votes",
                                anchorPoint: { x: 0, y: -0.75 },
                                color: config_1.oColorCIM,
                                donutEnabled: true
                            })
                        ]
                    },
                    primitiveOverrides: [
                        {
                            type: "CIMPrimitiveOverride",
                            primitiveName: "democrat-positive-votes",
                            propertyName: "Size",
                            valueExpressionInfo: {
                                type: "CIMExpressionInfo",
                                title: "Increase in Democrat votes",
                                expression: "\n                var votesNext = $feature." + config_1.fieldInfos.democrat.county.next.name + ";\n                var votesPrevious = $feature." + config_1.fieldInfos.democrat.county.previous.name + ";\n                var change = votesNext - votesPrevious;\n                var value = IIF( change > 0, change, 0);\n                var percentStateVotes = ( value / $feature." + config_1.fieldInfos.normalizationFields.county.next + " ) * $feature." + config_1.fieldInfos.normalizationFields.state.electoralVotes + ";\n                " + expressionUtils_1.sizeExpressionBase + "\n              ",
                                returnType: "Default"
                            }
                        },
                        {
                            type: "CIMPrimitiveOverride",
                            primitiveName: "democrat-negative-votes",
                            propertyName: "Size",
                            valueExpressionInfo: {
                                type: "CIMExpressionInfo",
                                title: "Decrease in Democrat votes",
                                expression: "\n                var votesNext = $feature." + config_1.fieldInfos.democrat.county.next.name + ";\n                var votesPrevious = $feature." + config_1.fieldInfos.democrat.county.previous.name + ";\n                var change = votesNext - votesPrevious;\n                var value = IIF( change < 0, Abs(change), 0);\n                var percentStateVotes = ( value / $feature." + config_1.fieldInfos.normalizationFields.county.next + " ) * $feature." + config_1.fieldInfos.normalizationFields.state.electoralVotes + ";\n                " + expressionUtils_1.sizeExpressionBase + "\n              ",
                                returnType: "Default"
                            }
                        },
                        {
                            type: "CIMPrimitiveOverride",
                            primitiveName: "republican-positive-votes",
                            propertyName: "Size",
                            valueExpressionInfo: {
                                type: "CIMExpressionInfo",
                                title: "Increase in Republican votes",
                                expression: "\n                var valueNext = $feature." + config_1.fieldInfos.republican.county.next.name + ";\n                var valuePrevious = $feature." + config_1.fieldInfos.republican.county.previous.name + ";\n                var change = valueNext - valuePrevious;\n                var value = IIF( change > 0, change, 0);\n                var percentStateVotes = ( value / $feature." + config_1.fieldInfos.normalizationFields.county.next + " ) * $feature." + config_1.fieldInfos.normalizationFields.state.electoralVotes + ";\n                " + expressionUtils_1.sizeExpressionBase + "\n              ",
                                returnType: "Default"
                            }
                        },
                        {
                            type: "CIMPrimitiveOverride",
                            primitiveName: "republican-negative-votes",
                            propertyName: "Size",
                            valueExpressionInfo: {
                                type: "CIMExpressionInfo",
                                title: "Decrease in Republican votes",
                                expression: "\n                var valueNext = $feature." + config_1.fieldInfos.republican.county.next.name + ";\n                var valuePrevious = $feature." + config_1.fieldInfos.republican.county.previous.name + ";\n                var change = valueNext - valuePrevious;\n                var value = IIF( change < 0, Abs(change), 0);\n                var percentStateVotes = ( value / $feature." + config_1.fieldInfos.normalizationFields.county.next + " ) * $feature." + config_1.fieldInfos.normalizationFields.state.electoralVotes + ";\n                " + expressionUtils_1.sizeExpressionBase + "\n              ",
                                returnType: "Default"
                            }
                        },
                        {
                            type: "CIMPrimitiveOverride",
                            primitiveName: "other-positive-votes",
                            propertyName: "Size",
                            valueExpressionInfo: {
                                type: "CIMExpressionInfo",
                                title: "Increase in Other votes",
                                expression: "\n                var valueNext = $feature." + config_1.fieldInfos.other.county.next.name + ";\n                var valuePrevious = $feature." + config_1.fieldInfos.other.county.previous.name + ";\n                var change = valueNext - valuePrevious;\n                var value = IIF( change > 0, change, 0);\n                var percentStateVotes = ( value / $feature." + config_1.fieldInfos.normalizationFields.county.next + " ) * $feature." + config_1.fieldInfos.normalizationFields.state.electoralVotes + ";\n                " + expressionUtils_1.sizeExpressionBase + "\n              ",
                                returnType: "Default"
                            }
                        },
                        {
                            type: "CIMPrimitiveOverride",
                            primitiveName: "other-negative-votes",
                            propertyName: "Size",
                            valueExpressionInfo: {
                                type: "CIMExpressionInfo",
                                title: "Decrease in Other votes",
                                expression: "\n                var valueNext = $feature." + config_1.fieldInfos.other.county.next.name + ";\n                var valuePrevious = $feature." + config_1.fieldInfos.other.county.previous.name + ";\n                var change = valueNext - valuePrevious;\n                var value = IIF( change < 0, Abs(change), 0);\n                var percentStateVotes = ( value / $feature." + config_1.fieldInfos.normalizationFields.county.next + " ) * $feature." + config_1.fieldInfos.normalizationFields.state.electoralVotes + ";\n                " + expressionUtils_1.sizeExpressionBase + "\n              ",
                                returnType: "Default"
                            }
                        }
                    ]
                }
            })
        });
    };
});
//# sourceMappingURL=rendererUtils.js.map
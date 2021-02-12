import { SimpleRenderer } from "esri/renderers";
import { CIMSymbol, SimpleFillSymbol } from "esri/symbols";
import { UniqueValueRenderer } from "esri/rasterRenderers";
import { years, fieldInfos, dColor, rColor, dColorCIM, oColorCIM, rColorCIM, results, selectedYear } from "./config";
import { sizeExpressionBase, sizeTotalExpressionBase, sizeTotalChangeExpressionBase } from "./expressionUtils";
import { createCircleSymbolLayer } from "./symbolUtils";


////////////////////////////////////////////////////
//
// STATE ELECTORAL RESULTS
//
///////////////////////////////////////////////////

export const stateElectoralResultsRenderer = () => {
  return new UniqueValueRenderer({
    valueExpression: `
      var dem = $feature.${fieldInfos.democrat.state.next.name};
      var rep = $feature.${fieldInfos.republican.state.next.name};
      var oth = $feature.${fieldInfos.other.state.next.name};

      var winner = Decode( Max([dem, rep, oth]),
        dem, 'Democrat',
        rep, 'Republican',
        oth, 'Other',
      'n/a' );

      return winner;
    `,
    defaultSymbol: null,
    uniqueValueInfos: [{
      value: `Republican`,
      label: `R - ${results[selectedYear].republican.candidate} (${results[selectedYear].republican.electoralVotes})`,
      symbol: new SimpleFillSymbol({
        color: rColor,
        outline: null
      })
    }, {
      value: `Democrat`,
      label: `D - ${results[selectedYear].democrat.candidate} (${results[selectedYear].democrat.electoralVotes})`,
      symbol: new SimpleFillSymbol({
        color: dColor,
        outline: null
      })
    }]
  })
};

////////////////////////////////////////////////////
//
// SWING STATES
//
///////////////////////////////////////////////////

export const swingStateRenderer = () => {
  return new UniqueValueRenderer({
    valueExpression: `
      var demPrevious = $feature.${fieldInfos.democrat.state.previous.name};
      var repPrevious = $feature.${fieldInfos.republican.state.previous.name};
      var othPrevious = $feature.${fieldInfos.other.state.previous.name};

      var winnerPrevious = Decode( Max([demPrevious, repPrevious, othPrevious]),
        demPrevious, 'Democrat ${years.previous}',
        repPrevious, 'Republican ${years.previous}',
        othPrevious, 'Other ${years.previous}',
      'n/a' );

      var demNext = $feature.${fieldInfos.democrat.state.next.name};
      var repNext = $feature.${fieldInfos.republican.state.next.name};
      var othNext = $feature.${fieldInfos.other.state.next.name};

      var winnerNext = Decode( Max([demNext, repNext, othNext]),
      demNext, 'Democrat ${years.next}',
      repNext, 'Republican ${years.next}',
      othNext, 'Other ${years.next}',
      'n/a' );

      return Concatenate([winnerPrevious, winnerNext], ", ");
    `,
    defaultSymbol: null,
    uniqueValueInfos: [{
      value: `Democrat ${years.previous}, Republican ${years.next}`,
      label: `Flipped Republican in ${years.next}`,
      symbol: new SimpleFillSymbol({
        color: rColor,
        outline: null
      })
    }, {
      value: `Republican ${years.previous}, Democrat ${years.next}`,
      label: `Flipped Democrat in ${years.next}`,
      symbol: new SimpleFillSymbol({
        color: dColor,
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

export const stateResultsRenderer = () => {
  return new SimpleRenderer({
    symbol: new CIMSymbol({
      data: {
        type: `CIMSymbolReference`,
        symbol: {
          type: `CIMPointSymbol`,
          symbolLayers: [
            createCircleSymbolLayer({
              primitiveName: `democrat-positive-votes`,
              anchorPoint: { x: 0.5, y: 0 },
              color: dColorCIM,
              donutEnabled: false
            }),
            createCircleSymbolLayer({
              primitiveName: `republican-positive-votes`,
              anchorPoint: { x: -0.5, y: 0 },
              color: rColorCIM,
              donutEnabled: false
            }),
            createCircleSymbolLayer({
              primitiveName: `other-positive-votes`,
              anchorPoint: { x: 0, y: -0.75 },
              color: oColorCIM,
              donutEnabled: false,
            })
          ]
        },
        primitiveOverrides: [
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `democrat-positive-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Democrat votes`,
              expression: `
                var value = $feature.${fieldInfos.democrat.state.next.name};
                ${sizeTotalExpressionBase}
              `,
              returnType: `Default`
            }
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `republican-positive-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Republican votes`,
              expression: `
                var value = $feature.${fieldInfos.republican.state.next.name};
                ${sizeTotalExpressionBase}
              `,
              returnType: `Default`
            }
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `other-positive-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Other votes`,
              expression: `
                var value = $feature.${fieldInfos.other.state.next.name};
                ${sizeTotalExpressionBase}
              `,
              returnType: `Default`
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

export const stateChangeRenderer = () => {
  return new SimpleRenderer({
    symbol: new CIMSymbol({
      data: {
        type: `CIMSymbolReference`,
        symbol: {
          type: `CIMPointSymbol`,
          symbolLayers: [
            createCircleSymbolLayer({
              primitiveName: `democrat-positive-votes`,
              anchorPoint: { x: 0.5, y: 0 },
              color: dColorCIM,
              donutEnabled: false
            }),
            createCircleSymbolLayer({
              primitiveName: `democrat-negative-votes`,
              anchorPoint: { x: 0.5, y: 0 },
              color: dColorCIM,
              donutEnabled: true
            }),
            createCircleSymbolLayer({
              primitiveName: `republican-positive-votes`,
              anchorPoint: { x: -0.5, y: 0 },
              color: rColorCIM,
              donutEnabled: false
            }),
            createCircleSymbolLayer({
              primitiveName: `republican-negative-votes`,
              anchorPoint: { x: -0.5, y: 0 },
              color: rColorCIM,
              donutEnabled: true
            }),
            createCircleSymbolLayer({
              primitiveName: `other-positive-votes`,
              anchorPoint: { x: 0, y: -0.75 },
              color: oColorCIM,
              donutEnabled: false,
            }),
            createCircleSymbolLayer({
              primitiveName: `other-negative-votes`,
              anchorPoint: { x: 0, y: -0.75 },
              color: oColorCIM,
              donutEnabled: true
            })
          ]
        },
        primitiveOverrides: [
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `democrat-positive-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Increase in Democrat votes`,
              expression: `
                var votesNext = $feature.${fieldInfos.democrat.state.next.name};
                var votesPrevious = $feature.${fieldInfos.democrat.state.previous.name};
                var change = votesNext - votesPrevious;
                var value = IIF( change > 0, change, 0);
                ${sizeTotalChangeExpressionBase}
              `,
              returnType: `Default`
            }
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `democrat-negative-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Decrease in Democrat votes`,
              expression: `
                var votesNext = $feature.${fieldInfos.democrat.state.next.name};
                var votesPrevious = $feature.${fieldInfos.democrat.state.previous.name};
                var change = votesNext - votesPrevious;
                var value = IIF( change < 0, Abs(change), 0);
                ${sizeTotalChangeExpressionBase}
              `,
              returnType: `Default`
            }
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `republican-positive-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Increase in Republican votes`,
              expression: `
                var valueNext = $feature.${fieldInfos.republican.state.next.name};
                var valuePrevious = $feature.${fieldInfos.republican.state.previous.name};
                var change = valueNext - valuePrevious;
                var value = IIF( change > 0, change, 0);
                ${sizeTotalChangeExpressionBase}
              `,
              returnType: `Default`
            }
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `republican-negative-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Decrease in Republican votes`,
              expression: `
                var valueNext = $feature.${fieldInfos.republican.state.next.name};
                var valuePrevious = $feature.${fieldInfos.republican.state.previous.name};
                var change = valueNext - valuePrevious;
                var value = IIF( change < 0, Abs(change), 0);
                ${sizeTotalChangeExpressionBase}
              `,
              returnType: `Default`
            }
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `other-positive-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Increase in Other votes`,
              expression: `
                var valueNext = $feature.${fieldInfos.other.state.next.name};
                var valuePrevious = $feature.${fieldInfos.other.state.previous.name};
                var change = valueNext - valuePrevious;
                var value = IIF( change > 0, change, 0);
                ${sizeTotalChangeExpressionBase}
              `,
              returnType: `Default`
            }
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `other-negative-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Decrease in Other votes`,
              expression: `
                var valueNext = $feature.${fieldInfos.other.state.next.name};
                var valuePrevious = $feature.${fieldInfos.other.state.previous.name};
                var change = valueNext - valuePrevious;
                var value = IIF( change < 0, Abs(change), 0);
                ${sizeTotalChangeExpressionBase}
              `,
              returnType: `Default`
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

export const countyResultsRenderer = () => {
  return new SimpleRenderer({
    symbol: new CIMSymbol({
      data: {
        type: `CIMSymbolReference`,
        symbol: {
          type: `CIMPointSymbol`,
          symbolLayers: [
            createCircleSymbolLayer({
              primitiveName: `democrat-positive-votes`,
              anchorPoint: { x: 0.5, y: 0 },
              color: dColorCIM,
              donutEnabled: false
            }),
            createCircleSymbolLayer({
              primitiveName: `republican-positive-votes`,
              anchorPoint: { x: -0.5, y: 0 },
              color: rColorCIM,
              donutEnabled: false
            }),
            createCircleSymbolLayer({
              primitiveName: `other-positive-votes`,
              anchorPoint: { x: 0, y: -0.75 },
              color: oColorCIM,
              donutEnabled: false,
            })
          ]
        },
        primitiveOverrides: [
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `democrat-positive-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Increase in Democrat votes`,
              expression: `
                var percentStateVotes = ( $feature.${fieldInfos.democrat.county.next.name} / $feature.${fieldInfos.normalizationFields.county.next} ) * $feature.${fieldInfos.normalizationFields.state.electoralVotes};
                ${sizeExpressionBase}
              `,
              returnType: `Default`
            }
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `republican-positive-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Increase in Republican votes`,
              expression: `
                var percentStateVotes = ( $feature.${fieldInfos.republican.county.next.name} / $feature.${fieldInfos.normalizationFields.county.next} ) * $feature.${fieldInfos.normalizationFields.state.electoralVotes};
                ${sizeExpressionBase}
              `,
              returnType: `Default`
            }
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `other-positive-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Increase in Other votes`,
              expression: `
                var percentStateVotes = ( $feature.${fieldInfos.other.county.next.name} / $feature.${fieldInfos.normalizationFields.county.next} ) * $feature.${fieldInfos.normalizationFields.state.electoralVotes};
                ${sizeExpressionBase}
              `,
              returnType: `Default`
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

export const countyChangeRenderer = () => {
  return new SimpleRenderer({
    symbol: new CIMSymbol({
      data: {
        type: `CIMSymbolReference`,
        symbol: {
          type: `CIMPointSymbol`,
          symbolLayers: [
            createCircleSymbolLayer({
              primitiveName: `democrat-positive-votes`,
              anchorPoint: { x: 0.5, y: 0 },
              color: dColorCIM,
              donutEnabled: false
            }),
            createCircleSymbolLayer({
              primitiveName: `democrat-negative-votes`,
              anchorPoint: { x: 0.5, y: 0 },
              color: dColorCIM,
              donutEnabled: true
            }),
            createCircleSymbolLayer({
              primitiveName: `republican-positive-votes`,
              anchorPoint: { x: -0.5, y: 0 },
              color: rColorCIM,
              donutEnabled: false
            }),
            createCircleSymbolLayer({
              primitiveName: `republican-negative-votes`,
              anchorPoint: { x: -0.5, y: 0 },
              color: rColorCIM,
              donutEnabled: true
            }),
            createCircleSymbolLayer({
              primitiveName: `other-positive-votes`,
              anchorPoint: { x: 0, y: -0.75 },
              color: oColorCIM,
              donutEnabled: false
            }),
            createCircleSymbolLayer({
              primitiveName: `other-negative-votes`,
              anchorPoint: { x: 0, y: -0.75 },
              color: oColorCIM,
              donutEnabled: true
            })
          ]
        },
        primitiveOverrides: [
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `democrat-positive-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Increase in Democrat votes`,
              expression: `
                var votesNext = $feature.${fieldInfos.democrat.county.next.name};
                var votesPrevious = $feature.${fieldInfos.democrat.county.previous.name};
                var change = votesNext - votesPrevious;
                var value = IIF( change > 0, change, 0);
                var percentStateVotes = ( value / $feature.${fieldInfos.normalizationFields.county.next} ) * $feature.${fieldInfos.normalizationFields.state.electoralVotes};
                ${sizeExpressionBase}
              `,
              returnType: `Default`
            }
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `democrat-negative-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Decrease in Democrat votes`,
              expression: `
                var votesNext = $feature.${fieldInfos.democrat.county.next.name};
                var votesPrevious = $feature.${fieldInfos.democrat.county.previous.name};
                var change = votesNext - votesPrevious;
                var value = IIF( change < 0, Abs(change), 0);
                var percentStateVotes = ( value / $feature.${fieldInfos.normalizationFields.county.next} ) * $feature.${fieldInfos.normalizationFields.state.electoralVotes};
                ${sizeExpressionBase}
              `,
              returnType: `Default`
            }
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `republican-positive-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Increase in Republican votes`,
              expression: `
                var valueNext = $feature.${fieldInfos.republican.county.next.name};
                var valuePrevious = $feature.${fieldInfos.republican.county.previous.name};
                var change = valueNext - valuePrevious;
                var value = IIF( change > 0, change, 0);
                var percentStateVotes = ( value / $feature.${fieldInfos.normalizationFields.county.next} ) * $feature.${fieldInfos.normalizationFields.state.electoralVotes};
                ${sizeExpressionBase}
              `,
              returnType: `Default`
            }
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `republican-negative-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Decrease in Republican votes`,
              expression: `
                var valueNext = $feature.${fieldInfos.republican.county.next.name};
                var valuePrevious = $feature.${fieldInfos.republican.county.previous.name};
                var change = valueNext - valuePrevious;
                var value = IIF( change < 0, Abs(change), 0);
                var percentStateVotes = ( value / $feature.${fieldInfos.normalizationFields.county.next} ) * $feature.${fieldInfos.normalizationFields.state.electoralVotes};
                ${sizeExpressionBase}
              `,
              returnType: `Default`
            }
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `other-positive-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Increase in Other votes`,
              expression: `
                var valueNext = $feature.${fieldInfos.other.county.next.name};
                var valuePrevious = $feature.${fieldInfos.other.county.previous.name};
                var change = valueNext - valuePrevious;
                var value = IIF( change > 0, change, 0);
                var percentStateVotes = ( value / $feature.${fieldInfos.normalizationFields.county.next} ) * $feature.${fieldInfos.normalizationFields.state.electoralVotes};
                ${sizeExpressionBase}
              `,
              returnType: `Default`
            }
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `other-negative-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Decrease in Other votes`,
              expression: `
                var valueNext = $feature.${fieldInfos.other.county.next.name};
                var valuePrevious = $feature.${fieldInfos.other.county.previous.name};
                var change = valueNext - valuePrevious;
                var value = IIF( change < 0, Abs(change), 0);
                var percentStateVotes = ( value / $feature.${fieldInfos.normalizationFields.county.next} ) * $feature.${fieldInfos.normalizationFields.state.electoralVotes};
                ${sizeExpressionBase}
              `,
              returnType: `Default`
            }
          }
        ]
      }
    })
  });
};
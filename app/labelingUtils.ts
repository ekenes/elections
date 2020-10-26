import LabelClass = require("esri/layers/support/LabelClass");
import Color = require("esri/Color");
import Font = require("esri/symbols/Font");

import { TextSymbol } from "esri/symbols";
import { fieldInfos, dColor, rColor, oTextColor, haloColor, haloSize } from "./config";
import {  diffLabelText } from "./expressionUtils";

////////////////////////////////////////////////////
//
// STATE CHANGE
//
///////////////////////////////////////////////////

export const stateChangeLabelingInfo = [

  // DEMOCRAT label classes

  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.democrat.state.next.name} - ${fieldInfos.democrat.state.previous.name}) >= 500000`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.democrat.state.next.name};
        var valuePrevious = $feature.${fieldInfos.democrat.state.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -50,
      yoffset: -25
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.democrat.state.next.name} - ${fieldInfos.democrat.state.previous.name}) >= 100000 AND ABS(${fieldInfos.democrat.state.next.name} - ${fieldInfos.democrat.state.previous.name}) < 500000`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.democrat.state.next.name};
        var valuePrevious = $feature.${fieldInfos.democrat.state.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -40,
      yoffset: -20
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.democrat.state.next.name} - ${fieldInfos.democrat.state.previous.name}) >= 50000 AND ABS(${fieldInfos.democrat.state.next.name} - ${fieldInfos.democrat.state.previous.name}) < 100000`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.democrat.state.next.name};
        var valuePrevious = $feature.${fieldInfos.democrat.state.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -40,
      yoffset: -10
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.democrat.state.next.name} - ${fieldInfos.democrat.state.previous.name}) >= 10000 AND ABS(${fieldInfos.democrat.state.next.name} - ${fieldInfos.democrat.state.previous.name}) < 50000`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.democrat.state.next.name};
        var valuePrevious = $feature.${fieldInfos.democrat.state.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -30,
      yoffset: -10
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.democrat.state.next.name} - ${fieldInfos.democrat.state.previous.name}) < 10000`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.democrat.state.next.name};
        var valuePrevious = $feature.${fieldInfos.democrat.state.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -20,
      yoffset: -10
    })
  }),


  // REPUBLICAN label classes

  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.republican.state.next.name} - ${fieldInfos.republican.state.previous.name}) >= 500000`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.republican.state.next.name};
        var valuePrevious = $feature.${fieldInfos.republican.state.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 50,
      yoffset: -20
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.republican.state.next.name} - ${fieldInfos.republican.state.previous.name}) >= 100000 AND ABS(${fieldInfos.republican.state.next.name} - ${fieldInfos.republican.state.previous.name}) < 500000`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.republican.state.next.name};
        var valuePrevious = $feature.${fieldInfos.republican.state.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 35,
      yoffset: -20
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.republican.state.next.name} - ${fieldInfos.republican.state.previous.name}) >= 50000 AND ABS(${fieldInfos.republican.state.next.name} - ${fieldInfos.republican.state.previous.name}) < 100000`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.republican.state.next.name};
        var valuePrevious = $feature.${fieldInfos.republican.state.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 30,
      yoffset: -17
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.republican.state.next.name} - ${fieldInfos.republican.state.previous.name}) >= 10000 AND ABS(${fieldInfos.republican.state.next.name} - ${fieldInfos.republican.state.previous.name}) < 50000`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.republican.state.next.name};
        var valuePrevious = $feature.${fieldInfos.republican.state.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 25,
      yoffset: -12
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.republican.state.next.name} - ${fieldInfos.republican.state.previous.name}) < 10000`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.republican.state.next.name};
        var valuePrevious = $feature.${fieldInfos.republican.state.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 20,
      yoffset: -10
    })
  }),

  // OTHER label classes

  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.other.state.next.name} - ${fieldInfos.other.state.previous.name}) >= 500000`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.other.state.next.name};
        var valuePrevious = $feature.${fieldInfos.other.state.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
      xoffset: 20,
      yoffset: 30
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.other.state.next.name} - ${fieldInfos.other.state.previous.name}) >= 100000 AND ABS(${fieldInfos.other.state.next.name} - ${fieldInfos.other.state.previous.name}) < 500000`,
    labelExpressionInfo: {
      expression: `
      var valueNext = $feature.${fieldInfos.other.state.next.name};
      var valuePrevious = $feature.${fieldInfos.other.state.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
      xoffset: 20,
      yoffset: 30
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `
      (ABS(${fieldInfos.other.state.next.name} - ${fieldInfos.other.state.previous.name}) >= 50000 AND ABS(${fieldInfos.other.state.next.name} - ${fieldInfos.other.state.previous.name}) < 100000)
    `,
    labelExpressionInfo: {
      expression: `
      var valueNext = $feature.${fieldInfos.other.state.next.name};
      var valuePrevious = $feature.${fieldInfos.other.state.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
      xoffset: 20,
      yoffset: 20
    })
  }),

  new LabelClass({
    minScale: 9244700,
    where: `
      (ABS(${fieldInfos.other.state.next.name} - ${fieldInfos.other.state.previous.name}) >= 10000 AND ABS(${fieldInfos.other.state.next.name} - ${fieldInfos.other.state.previous.name}) < 50000)
    `,
    labelExpressionInfo: {
      expression: `
      var valueNext = $feature.${fieldInfos.other.state.next.name};
      var valuePrevious = $feature.${fieldInfos.other.state.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
      xoffset: 20,
      yoffset: 15
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `
      (ABS(${fieldInfos.other.state.next.name} - ${fieldInfos.other.state.previous.name}) < 10000)
    `,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.other.state.next.name};
        var valuePrevious = $feature.${fieldInfos.other.state.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
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

export const stateResultsLabelingInfo = [

  // DEMOCRAT label classes

  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.democrat.state.next.name}) >= 5000000`,
    labelExpressionInfo: {
      expression: `
        Text($feature.${fieldInfos.democrat.state.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -50,
      yoffset: -25
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.democrat.state.next.name}) >= 1000000 AND ABS(${fieldInfos.democrat.state.next.name}) < 5000000`,
    labelExpressionInfo: {
      expression: `
      Text($feature.${fieldInfos.democrat.state.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -40,
      yoffset: -20
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.democrat.state.next.name}) >= 500000 AND ABS(${fieldInfos.democrat.state.next.name}) < 1000000`,
    labelExpressionInfo: {
      expression: `
      Text($feature.${fieldInfos.democrat.state.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -40,
      yoffset: -10
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.democrat.state.next.name}) >= 100000 AND ABS(${fieldInfos.democrat.state.next.name}) < 500000`,
    labelExpressionInfo: {
      expression: `
      Text($feature.${fieldInfos.democrat.state.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -30,
      yoffset: -10
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.democrat.state.next.name}) < 100000`,
    labelExpressionInfo: {
      expression: `
      Text($feature.${fieldInfos.democrat.state.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -20,
      yoffset: -10
    })
  }),


  // REPUBLICAN label classes

  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.republican.state.next.name}) >= 5000000`,
    labelExpressionInfo: {
      expression: `
        Text($feature.${fieldInfos.republican.state.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 60,
      yoffset: -20
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.republican.state.next.name}) >= 1000000 AND ABS(${fieldInfos.republican.state.next.name}) < 5000000`,
    labelExpressionInfo: {
      expression: `
      Text($feature.${fieldInfos.republican.state.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 35,
      yoffset: -20
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.republican.state.next.name}) >= 500000 AND ABS(${fieldInfos.republican.state.next.name}) < 1000000`,
    labelExpressionInfo: {
      expression: `
      Text($feature.${fieldInfos.republican.state.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 30,
      yoffset: -20
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.republican.state.next.name}) >= 100000 AND ABS(${fieldInfos.republican.state.next.name}) < 500000`,
    labelExpressionInfo: {
      expression: `
      Text($feature.${fieldInfos.republican.state.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 25,
      yoffset: -10
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.republican.state.next.name}) < 100000`,
    labelExpressionInfo: {
      expression: `
      Text($feature.${fieldInfos.republican.state.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 20,
      yoffset: -10
    })
  }),

  // OTHER label classes

  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.other.state.next.name}) >= 5000000`,
    labelExpressionInfo: {
      expression: `
        Text($feature.${fieldInfos.other.state.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
      xoffset: 20,
      yoffset: 35
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `ABS(${fieldInfos.other.state.next.name}) >= 1000000 AND ABS(${fieldInfos.other.state.next.name}) < 5000000`,
    labelExpressionInfo: {
      expression: `
      Text($feature.${fieldInfos.other.state.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
      xoffset: 30,
      yoffset: 30
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `
      (ABS(${fieldInfos.other.state.next.name}) >= 500000 AND ABS(${fieldInfos.other.state.next.name}) < 1000000)
    `,
    labelExpressionInfo: {
      expression: `
      Text($feature.${fieldInfos.other.state.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
      xoffset: 20,
      yoffset: 25
    })
  }),

  new LabelClass({
    minScale: 9244700,
    where: `
      (ABS(${fieldInfos.other.state.next.name}) >= 100000 AND ABS(${fieldInfos.other.state.next.name}) < 500000)
    `,
    labelExpressionInfo: {
      expression: `
      Text($feature.${fieldInfos.other.state.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
      xoffset: 20,
      yoffset: 15
    })
  }),
  new LabelClass({
    minScale: 9244700,
    where: `
      (ABS(${fieldInfos.other.state.next.name}) < 100000)
    `,
    labelExpressionInfo: {
      expression: `
      Text($feature.${fieldInfos.other.state.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
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

export const countyResultsLabelingInfo = [

  // DEMOCRAT label classes

  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.democrat.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 10`,
    labelExpressionInfo: {
      expression: `
        Text($feature.${fieldInfos.democrat.county.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -50,
      yoffset: -25
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.democrat.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 5 AND ABS(((${fieldInfos.democrat.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 10`,
    labelExpressionInfo: {
      expression: `
        Text($feature.${fieldInfos.democrat.county.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -40,
      yoffset: -20
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.democrat.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 1 AND ABS(((${fieldInfos.democrat.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 5`,
    labelExpressionInfo: {
      expression: `
        Text($feature.${fieldInfos.democrat.county.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -40,
      yoffset: -20
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.democrat.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 0.5 AND ABS(((${fieldInfos.democrat.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 1`,
    labelExpressionInfo: {
      expression: `
        Text($feature.${fieldInfos.democrat.county.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -30,
      yoffset: -20
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.democrat.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 0.5`,
    labelExpressionInfo: {
      expression: `
        Text($feature.${fieldInfos.democrat.county.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -20,
      yoffset: -10
    })
  }),


  // REPUBLICAN label classes

  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.republican.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 10`,
    labelExpressionInfo: {
      expression: `
        Text($feature.${fieldInfos.republican.county.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 50,
      yoffset: -20
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.republican.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 5 AND ABS(((${fieldInfos.republican.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 10`,
    labelExpressionInfo: {
      expression: `
        Text($feature.${fieldInfos.republican.county.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 40,
      yoffset: -20
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.republican.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 1 AND ABS(((${fieldInfos.republican.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 5`,
    labelExpressionInfo: {
      expression: `
        Text($feature.${fieldInfos.republican.county.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 30,
      yoffset: -20
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.republican.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 0.5 AND ABS(((${fieldInfos.republican.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 1`,
    labelExpressionInfo: {
      expression: `
        Text($feature.${fieldInfos.republican.county.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 25,
      yoffset: -10
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.republican.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 0.5`,
    labelExpressionInfo: {
      expression: `
        Text($feature.${fieldInfos.republican.county.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 20,
      yoffset: -10
    })
  }),

  // OTHER label classes

  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.other.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 10`,
    labelExpressionInfo: {
      expression: `
        Text($feature.${fieldInfos.other.county.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
      xoffset: 30,
      yoffset: 40
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.other.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 5 AND ABS(((${fieldInfos.other.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 10`,
    labelExpressionInfo: {
      expression: `
        Text($feature.${fieldInfos.other.county.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
      xoffset: 30,
      yoffset: 40
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `
      (ABS(((${fieldInfos.other.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 1 AND ABS(((${fieldInfos.other.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 5)
    `,
    labelExpressionInfo: {
      expression: `
        Text($feature.${fieldInfos.other.county.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
      xoffset: 30,
      yoffset: 35
    })
  }),

  new LabelClass({
    minScale: 577791,
    where: `
      (ABS(((${fieldInfos.other.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 0.5 AND ABS(((${fieldInfos.other.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 1)
    `,
    labelExpressionInfo: {
      expression: `
        Text($feature.${fieldInfos.other.county.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
      xoffset: 20,
      yoffset: 30
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `
      (ABS(((${fieldInfos.other.county.next.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 0.5)
    `,
    labelExpressionInfo: {
      expression: `
        Text($feature.${fieldInfos.other.county.next.name}, '#,###');
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
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

export const countyChangeLabelingInfo = [

  // DEMOCRAT label classes

  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.democrat.county.next.name} - ${fieldInfos.democrat.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 10`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.democrat.county.next.name};
        var valuePrevious = $feature.${fieldInfos.democrat.county.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -50,
      yoffset: -25
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.democrat.county.next.name} - ${fieldInfos.democrat.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 5 AND ABS(((${fieldInfos.democrat.county.next.name} - ${fieldInfos.democrat.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 10`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.democrat.county.next.name};
        var valuePrevious = $feature.${fieldInfos.democrat.county.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -40,
      yoffset: -20
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.democrat.county.next.name} - ${fieldInfos.democrat.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 1 AND ABS(((${fieldInfos.democrat.county.next.name} - ${fieldInfos.democrat.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 5`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.democrat.county.next.name};
        var valuePrevious = $feature.${fieldInfos.democrat.county.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -40,
      yoffset: -10
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.democrat.county.next.name} - ${fieldInfos.democrat.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 0.5 AND ABS(((${fieldInfos.democrat.county.next.name} - ${fieldInfos.democrat.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 1`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.democrat.county.next.name};
        var valuePrevious = $feature.${fieldInfos.democrat.county.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -30,
      yoffset: -10
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.democrat.county.next.name} - ${fieldInfos.democrat.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 0.5`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.democrat.county.next.name};
        var valuePrevious = $feature.${fieldInfos.democrat.county.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(dColor),
      xoffset: -20,
      yoffset: -10
    })
  }),


  // REPUBLICAN label classes

  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.republican.county.next.name} - ${fieldInfos.republican.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 10`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.republican.county.next.name};
        var valuePrevious = $feature.${fieldInfos.republican.county.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 60,
      yoffset: -20
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.republican.county.next.name} - ${fieldInfos.republican.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 5 AND ABS(((${fieldInfos.republican.county.next.name} - ${fieldInfos.republican.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 10`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.republican.county.next.name};
        var valuePrevious = $feature.${fieldInfos.republican.county.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 45,
      yoffset: -20
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.republican.county.next.name} - ${fieldInfos.republican.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 1 AND ABS(((${fieldInfos.republican.county.next.name} - ${fieldInfos.republican.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 5`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.republican.county.next.name};
        var valuePrevious = $feature.${fieldInfos.republican.county.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 30,
      yoffset: -20
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.republican.county.next.name} - ${fieldInfos.republican.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 0.5 AND ABS(((${fieldInfos.republican.county.next.name} - ${fieldInfos.republican.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 1`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.republican.county.next.name};
        var valuePrevious = $feature.${fieldInfos.republican.county.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 20,
      yoffset: -10
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.republican.county.next.name} - ${fieldInfos.republican.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 0.5`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.republican.county.next.name};
        var valuePrevious = $feature.${fieldInfos.republican.county.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(rColor),
      xoffset: 20,
      yoffset: -10
    })
  }),

  // OTHER label classes

  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.other.county.next.name} - ${fieldInfos.other.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 10`,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.other.county.next.name};
        var valuePrevious = $feature.${fieldInfos.other.county.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
      xoffset: 30,
      yoffset: 40
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `ABS(((${fieldInfos.other.county.next.name} - ${fieldInfos.other.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 5 AND ABS(((${fieldInfos.other.county.next.name} - ${fieldInfos.other.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 10`,
    labelExpressionInfo: {
      expression: `
      var valueNext = $feature.${fieldInfos.other.county.next.name};
      var valuePrevious = $feature.${fieldInfos.other.county.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
      xoffset: 30,
      yoffset: 40
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `
      (ABS(((${fieldInfos.other.county.next.name} - ${fieldInfos.other.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 1 AND ABS(((${fieldInfos.other.county.next.name} - ${fieldInfos.other.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 5)
    `,
    labelExpressionInfo: {
      expression: `
      var valueNext = $feature.${fieldInfos.other.county.next.name};
      var valuePrevious = $feature.${fieldInfos.other.county.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
      xoffset: 30,
      yoffset: 35
    })
  }),

  new LabelClass({
    minScale: 577791,
    where: `
      (ABS(((${fieldInfos.other.county.next.name} - ${fieldInfos.other.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) >= 0.5 AND ABS(((${fieldInfos.other.county.next.name} - ${fieldInfos.other.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 1)
    `,
    labelExpressionInfo: {
      expression: `
      var valueNext = $feature.${fieldInfos.other.county.next.name};
      var valuePrevious = $feature.${fieldInfos.other.county.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
      xoffset: 20,
      yoffset: 30
    })
  }),
  new LabelClass({
    minScale: 577791,
    where: `
      (ABS(((${fieldInfos.other.county.next.name} - ${fieldInfos.other.county.previous.name}) / ${fieldInfos.normalizationFields.county.next}) * 100) < 0.5)
    `,
    labelExpressionInfo: {
      expression: `
        var valueNext = $feature.${fieldInfos.other.county.next.name};
        var valuePrevious = $feature.${fieldInfos.other.county.previous.name};
        ${diffLabelText}
      `
    },
    deconflictionStrategy: `none`,
    labelPlacement: `center-center`,
    symbol: new TextSymbol({
      font: new Font({
        weight: `bold`,
        family: `Noto Sans`,
        size: `10pt`
      }),
      haloColor: new Color(haloColor),
      haloSize,
      color: new Color(oTextColor),
      xoffset: 15,
      yoffset: 18
    })
  })

];
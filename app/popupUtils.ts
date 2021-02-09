import PopupTemplate = require("esri/PopupTemplate");
import ExpressionInfo = require("esri/popup/ExpressionInfo");
import FieldInfo = require("esri/popup/FieldInfo");
import FieldInfoFormat = require("esri/popup/support/FieldInfoFormat");

import { TextContent } from "esri/popup/content";
import { years, fieldInfos, dColor, rColor, oColor, results, selectedYear } from "./config";
import { colorDiffPopupBase, votesCountyNextBase, votesStateNextBase, diffTextBase, allCountyNextBase, shiftCountyTextBase, shareTextBase, shiftCounties, colorShiftPopupBase, shiftStatesTextBase, allStateNextBase, shiftStates } from "./expressionUtils";

////////////////////////////////////////////////////
//
// STATE
//
///////////////////////////////////////////////////

export const statePopupTemplate = () => {
  return new PopupTemplate({
    title: `${fieldInfos.title.state}`,
    fieldInfos: [
      new FieldInfo({
        fieldName: fieldInfos.democrat.state.previous.name,
        label: fieldInfos.democrat.state.previous.label,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: fieldInfos.republican.state.previous.name,
        label: fieldInfos.republican.state.previous.label,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: fieldInfos.other.state.previous.name,
        label: fieldInfos.other.state.previous.label,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: fieldInfos.democrat.state.next.name,
        label: fieldInfos.democrat.state.next.label,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: fieldInfos.republican.state.next.name,
        label: fieldInfos.republican.state.next.label,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: fieldInfos.other.state.next.name,
        label: fieldInfos.other.state.next.label,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      })
    ],
    content: [
      new TextContent({
        text: `
          <span style='color: {expression/winner-color}; font-weight:bolder'>{expression/winner}</span>
          won ${fieldInfos.title.state}'s <strong>{${fieldInfos.normalizationFields.state.electoralVotes}}</strong> electoral votes by a margin of <span style='color: {expression/winner-color}; font-weight:bolder'>{expression/winner-margin-votes}</span> votes (<span style='color: {expression/winner-color}; font-weight:bolder'>{expression/winner-margin}</span> points).
          The {expression/winner-votes} votes cast for {expression/winner} comprise
          {expression/winner-percent-state-votes} of the total votes cast in the state.
        `
      }),
      new TextContent({
        text: `
          <div class="table-container">
            Votes in ${years.next} and the change from ${years.previous}
            <br/>
            <br/>
            <table class="esri-widget popup">
              <tr class="head"><td>Party</td><td>Votes</td><td>+/-</td><td>%</td><td>+/-</td><td>% Change</td></tr>

              <tr class="dem"><td><span style='color:${dColor}; font-weight:bolder'>${results[selectedYear].democrat.candidate}</span></td><td class="num">{${fieldInfos.democrat.state.next.name}}</td><td class="num"><span style='color: {expression/dem-change-color}'>{expression/dem${years.previous}diff${years.next}}</span></td>

              <td class="num">{expression/demShare${years.next}}</td>
              <td class="num"><span style='color: {expression/dem-shift-color}'>{expression/dem${years.previous}shift${years.next}}</span></td>

              <td class="num"><span style='color: {expression/dem-change-color}'>{expression/dem${years.previous}change${years.next}}</span></td></tr>


              <tr class="rep"><td><span style='color:${rColor}; font-weight:bolder'>${results[selectedYear].republican.candidate}</span></td><td class="num">{${fieldInfos.republican.state.next.name}}</td><td class="num"><span style='color: {expression/rep-change-color}'>{expression/rep${years.previous}diff${years.next}}</span></td>

              <td class="num">{expression/repShare${years.next}}</td>
              <td class="num"><span style='color: {expression/rep-shift-color}'>{expression/rep${years.previous}shift${years.next}}</span></td>

              <td class="num"><span style='color: {expression/rep-change-color}'>{expression/rep${years.previous}change${years.next}}</span></td></tr>


              <tr class="oth"><td><span style='color:${oColor}; font-weight:bolder'>${results[selectedYear].other.candidate}</span></td><td class="num">{${fieldInfos.other.state.next.name}}</td><td class="num"><span style='color: {expression/oth-change-color}'>{expression/oth${years.previous}diff${years.next}}</span></td>

              <td class="num">{expression/othShare${years.next}}</td>
              <td class="num"><span style='color: {expression/oth-shift-color}'>{expression/oth${years.previous}shift${years.next}}</span></td>

              <td class="num"><span style='color: {expression/oth-change-color}'>{expression/oth${years.previous}change${years.next}}</span></td></tr>
            </table>
          </div>
        `
      })
    ],
    expressionInfos: [
      new ExpressionInfo({
        title: `winner % of state votes`,
        name: `winner-percent-state-votes`,
        expression: `
          ${votesStateNextBase()}

          var winnerTotal = Max(all);
          return Text(winnerTotal/Sum(all), "#%");
        `
      }),
      new ExpressionInfo({
        title: `winner votes`,
        name: `winner-votes`,
        expression: `
          ${votesStateNextBase()}

          return Text(Max(all), "#,###");
        `
      }),
      new ExpressionInfo({
        title: `winner-color`,
        name: `winner-color`,
        expression: `
          ${votesStateNextBase()}

          Decode( Max(all),
            dem, "${dColor}",
            rep, "${rColor}",
            oth, "${oColor}",
          "#000000"
          );
        `
      }),
      new ExpressionInfo({
        title: `winner`,
        name: `winner`,
        expression: `
          ${votesStateNextBase()}

          Decode( Max(all),
            dem, "${results[selectedYear].democrat.candidate}",
            rep, "${results[selectedYear].republican.candidate}",
            oth, "${results[selectedYear].other.candidate}",
          "tie"
          );
        `
      }),
      new ExpressionInfo({
        title: `Democrat change from ${years.previous}`,
        name: `dem${years.previous}change${years.next}`,
        expression: `
          var votesNext = $feature.${fieldInfos.democrat.state.next.name};
          var votesPrevious = $feature.${fieldInfos.democrat.state.previous.name};
          ${diffTextBase}
          return changeText;
        `
      }),
      new ExpressionInfo({
        title: `Republican change from ${years.previous}`,
        name: `rep${years.previous}change${years.next}`,
        expression: `
          var votesNext = $feature.${fieldInfos.republican.state.next.name};
          var votesPrevious = $feature.${fieldInfos.republican.state.previous.name};
          ${diffTextBase}
          return changeText;
        `
      }),
      new ExpressionInfo({
        title: `Other change from ${years.previous}`,
        name: `oth${years.previous}change${years.next}`,
        expression: `
          var votesNext = $feature.${fieldInfos.other.state.next.name};
          var votesPrevious = $feature.${fieldInfos.other.state.previous.name};
          ${diffTextBase}
          return changeText;
        `
      }),
      new ExpressionInfo({
        title: `Democrat diff from ${years.previous}`,
        name: `dem${years.previous}diff${years.next}`,
        expression: `
          var votesNext = $feature.${fieldInfos.democrat.state.next.name};
          var votesPrevious = $feature.${fieldInfos.democrat.state.previous.name};
          ${diffTextBase}
          return diffText;
        `
      }),
      new ExpressionInfo({
        title: `Republican diff from ${years.previous}`,
        name: `rep${years.previous}diff${years.next}`,
        expression: `
          var votesNext = $feature.${fieldInfos.republican.state.next.name};
          var votesPrevious = $feature.${fieldInfos.republican.state.previous.name};
          ${diffTextBase}
          return diffText;
        `
      }),
      new ExpressionInfo({
        title: `Other diff from ${years.previous}`,
        name: `oth${years.previous}diff${years.next}`,
        expression: `
          var votesNext = $feature.${fieldInfos.other.state.next.name};
          var votesPrevious = $feature.${fieldInfos.other.state.previous.name};
          ${diffTextBase}
          return diffText;
        `
      }),
      new ExpressionInfo({
        title: `Republican shift from ${years.previous}`,
        name: `rep${years.previous}shift${years.next}`,
        expression: `
          var votesNext = $feature.${fieldInfos.republican.state.next.name};
          var votesPrevious = $feature.${fieldInfos.republican.state.previous.name};

          ${shiftStatesTextBase()}
        `
      }),
      new ExpressionInfo({
        title: `Democrat shift from ${years.previous}`,
        name: `dem${years.previous}shift${years.next}`,
        expression: `
          var votesNext = $feature.${fieldInfos.democrat.state.next.name};
          var votesPrevious = $feature.${fieldInfos.democrat.state.previous.name};

          ${shiftStatesTextBase()}
        `
      }),
      new ExpressionInfo({
        title: `Other shift from ${years.previous}`,
        name: `oth${years.previous}shift${years.next}`,
        expression: `
          var votesNext = $feature.${fieldInfos.other.state.next.name};
          var votesPrevious = $feature.${fieldInfos.other.state.previous.name};

          ${shiftStatesTextBase()}
        `
      }),
      new ExpressionInfo({
        title: `Republican share ${years.next}`,
        name: `repShare${years.next}`,
        expression: `
          ${allStateNextBase()}

          var votes = $feature.${fieldInfos.republican.state.next.name};

          ${shareTextBase}
        `
      }),
      new ExpressionInfo({
        title: `Democrat share ${years.next}`,
        name: `demShare${years.next}`,
        expression: `
          ${allStateNextBase()}

          var votes = $feature.${fieldInfos.democrat.state.next.name};

          ${shareTextBase}
        `
      }),
      new ExpressionInfo({
        title: `Other share ${years.next}`,
        name: `othShare${years.next}`,
        expression: `
          ${allStateNextBase()}

          var votes = $feature.${fieldInfos.other.state.next.name};

          ${shareTextBase}
        `
      }),
      new ExpressionInfo({
        title: `shift-color`,
        name: `dem-shift-color`,
        expression: `
          var votesNext = $feature.${fieldInfos.democrat.state.next.name};
          var votesPrevious = $feature.${fieldInfos.democrat.state.previous.name};
          ${shiftStates()}
          ${colorShiftPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `shift-color`,
        name: `rep-shift-color`,
        expression: `
          var votesNext = $feature.${fieldInfos.republican.state.next.name};
          var votesPrevious = $feature.${fieldInfos.republican.state.previous.name};
          ${shiftStates()}
          ${colorShiftPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `shift-color`,
        name: `oth-shift-color`,
        expression: `
          var votesNext = $feature.${fieldInfos.other.state.next.name};
          var votesPrevious = $feature.${fieldInfos.other.state.previous.name};
          ${shiftStates()}
          ${colorShiftPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `change-color`,
        name: `dem-change-color`,
        expression: `
          var votesNext = $feature.${fieldInfos.democrat.state.next.name};
          var votesPrevious = $feature.${fieldInfos.democrat.state.previous.name};
          ${colorDiffPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `change-color`,
        name: `rep-change-color`,
        expression: `
          var votesNext = $feature.${fieldInfos.republican.state.next.name};
          var votesPrevious = $feature.${fieldInfos.republican.state.previous.name};
          ${colorDiffPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `change-color`,
        name: `oth-change-color`,
        expression: `
          var votesNext = $feature.${fieldInfos.other.state.next.name};
          var votesPrevious = $feature.${fieldInfos.other.state.previous.name};
          ${colorDiffPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `winner-margin`,
        name: `winner-margin`,
        expression: `
          var fields = [
            $feature.${fieldInfos.democrat.state.next.name},
            $feature.${fieldInfos.republican.state.next.name},
            $feature.${fieldInfos.other.state.next.name}
          ];

          var top2 = Top(Reverse(Sort(fields)), 2);
          var winner = First(top2);
          var secondPlace = top2[1];
          var total = Sum(fields);
          return Text( (winner - secondPlace) / total, "#.#%");
        `
      }),
      new ExpressionInfo({
        title: `winner-margin-votes`,
        name: `winner-margin-votes`,
        expression: `
          var fields = [
            $feature.${fieldInfos.democrat.state.next.name},
            $feature.${fieldInfos.republican.state.next.name},
            $feature.${fieldInfos.other.state.next.name}
          ];

          var top2 = Top(Reverse(Sort(fields)), 2);
          var winner = First(top2);
          var secondPlace = top2[1];
          return Text( (winner - secondPlace), "#,###");
        `
      })
    ]
  });
};



////////////////////////////////////////////////////
//
// COUNTY
//
///////////////////////////////////////////////////


export const countyPopupTemplate = () => {
  return new PopupTemplate({
    title: `${fieldInfos.title.county}`,
    fieldInfos: [
      new FieldInfo({
        fieldName: fieldInfos.democrat.county.previous.name,
        label: `${years.previous} Democrat votes`,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: fieldInfos.republican.county.previous.name,
        label: `${years.previous} Republican votes`,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: fieldInfos.other.county.previous.name,
        label: `${years.previous} Other votes`,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: fieldInfos.democrat.county.next.name,
        label: `${years.next} Democrat votes`,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: fieldInfos.republican.county.next.name,
        label: `${years.next} Republican votes`,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: fieldInfos.other.county.next.name,
        label: `${years.next} Other votes`,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      })
    ],
    content: [
      new TextContent({
        text: `
          <span style='color: {expression/winner-color}; font-weight:bolder'>{expression/winner}</span>
          won ${fieldInfos.title.county} by a margin of
          <span style='color: {expression/winner-color}; font-weight:bolder'>{expression/winner-margin-votes}</span> votes (<span style='color: {expression/winner-color}; font-weight:bolder'>{expression/winner-margin}</span> points).
          The {expression/winner-votes} votes cast for {expression/winner} comprise
          {expression/winner-percent-state-votes} of the total votes cast in the state.
        `
      }),
      new TextContent({
        text: `
          <div class="table-container">
            Votes in ${years.next} and the change from ${years.previous}
            <br/>
            <br/>
            <table class="esri-widget popup">
              <tr class="head"><td>Party</td><td>Votes</td><td>+/-</td><td>%</td><td>+/-</td><td>% Change</td></tr>

              <tr class="dem"><td><span style='color:${dColor}; font-weight:bolder'>${results[selectedYear].democrat.candidate}</span></td><td class="num">{${fieldInfos.democrat.county.next.name}}</td><td class="num"><span style='color: {expression/dem-change-color}'>{expression/dem${years.previous}diff${years.next}}</span></td>

              <td class="num">{expression/demShare${years.next}}</td>
              <td class="num"><span style='color: {expression/dem-shift-color}'>{expression/dem${years.previous}shift${years.next}}</span></td>

              <td class="num"><span style='color: {expression/dem-change-color}'>{expression/dem${years.previous}change${years.next}}</span></td></tr>


              <tr class="rep"><td><span style='color:${rColor}; font-weight:bolder'>${results[selectedYear].republican.candidate}</span></td><td class="num">{${fieldInfos.republican.county.next.name}}</td><td class="num"><span style='color: {expression/rep-change-color}'>{expression/rep${years.previous}diff${years.next}}</span></td>

              <td class="num">{expression/repShare${years.next}}</td>
              <td class="num"><span style='color: {expression/rep-shift-color}'>{expression/rep${years.previous}shift${years.next}}</span></td>

              <td class="num"><span style='color: {expression/rep-change-color}'>{expression/rep${years.previous}change${years.next}}</span></td></tr>


              <tr class="oth"><td><span style='color:${oColor}; font-weight:bolder'>${results[selectedYear].other.candidate}</span></td><td class="num">{${fieldInfos.other.county.next.name}}</td><td class="num"><span style='color: {expression/oth-change-color}'>{expression/oth${years.previous}diff${years.next}}</span></td>

              <td class="num">{expression/othShare${years.next}}</td>
              <td class="num"><span style='color: {expression/oth-shift-color}'>{expression/oth${years.previous}shift${years.next}}</span></td>

              <td class="num"><span style='color: {expression/oth-change-color}'>{expression/oth${years.previous}change${years.next}}</span></td></tr>
            </table>
          </div>
        `
      })
    ],
    expressionInfos: [
      new ExpressionInfo({
        title: `winner % of state votes`,
        name: `winner-percent-state-votes`,
        expression: `
          var dem = $feature.${fieldInfos.democrat.county.next.name};
          var rep = $feature.${fieldInfos.republican.county.next.name};
          var oth = $feature.${fieldInfos.other.county.next.name};
          var all = [dem, rep, oth];

          var winnerTotal = Max(all);
          return Text(winnerTotal/$feature.${fieldInfos.normalizationFields.county.next}, "#%");
        `
      }),
      new ExpressionInfo({
        title: `winner votes`,
        name: `winner-votes`,
        expression: `
          ${votesCountyNextBase()}

          return Text(Max(all), "#,###");
        `
      }),
      new ExpressionInfo({
        title: `winner-color`,
        name: `winner-color`,
        expression: `
          ${votesCountyNextBase()}

          Decode( Max(all),
            dem, "${dColor}",
            rep, "${rColor}",
            oth, "${oColor}",
          "#000000"
          );
        `
      }),
      new ExpressionInfo({
        title: `winner`,
        name: `winner`,
        expression: `
          ${votesCountyNextBase()}

          Decode( Max(all),
            dem, "${results[selectedYear].democrat.candidate}",
            rep, "${results[selectedYear].republican.candidate}",
            oth, "${results[selectedYear].other.candidate}",
          "tie"
          );
        `
      }),
      new ExpressionInfo({
        title: `Democrat change from ${years.previous}`,
        name: `dem${years.previous}change${years.next}`,
        expression: `
          var votesNext = $feature.${fieldInfos.democrat.county.next.name};
          var votesPrevious = $feature.${fieldInfos.democrat.county.previous.name};
          ${diffTextBase}
          return changeText;
        `
      }),
      new ExpressionInfo({
        title: `Republican change from ${years.previous}`,
        name: `rep${years.previous}change${years.next}`,
        expression: `
          var votesNext = $feature.${fieldInfos.republican.county.next.name};
          var votesPrevious = $feature.${fieldInfos.republican.county.previous.name};
          ${diffTextBase}
          return changeText;
        `
      }),
      new ExpressionInfo({
        title: `Other change from ${years.previous}`,
        name: `oth${years.previous}change${years.next}`,
        expression: `
          var votesNext = $feature.${fieldInfos.other.county.next.name};
          var votesPrevious = $feature.${fieldInfos.other.county.previous.name};
          ${diffTextBase}
          return changeText;
        `
      }),
      new ExpressionInfo({
        title: `Democrat diff from ${years.previous}`,
        name: `dem${years.previous}diff${years.next}`,
        expression: `
          var votesNext = $feature.${fieldInfos.democrat.county.next.name};
          var votesPrevious = $feature.${fieldInfos.democrat.county.previous.name};
          ${diffTextBase}
          return diffText;
        `
      }),
      new ExpressionInfo({
        title: `Republican diff from ${years.previous}`,
        name: `rep${years.previous}diff${years.next}`,
        expression: `
          var votesNext = $feature.${fieldInfos.republican.county.next.name};
          var votesPrevious = $feature.${fieldInfos.republican.county.previous.name};
          ${diffTextBase}
          return diffText;
        `
      }),
      new ExpressionInfo({
        title: `Other diff from ${years.previous}`,
        name: `oth${years.previous}diff${years.next}`,
        expression: `
          var votesNext = $feature.${fieldInfos.other.county.next.name};
          var votesPrevious = $feature.${fieldInfos.other.county.previous.name};
          ${diffTextBase}
          return diffText;
        `
      }),
      new ExpressionInfo({
        title: `Republican shift from ${years.previous}`,
        name: `rep${years.previous}shift${years.next}`,
        expression: `
          var votesNext = $feature.${fieldInfos.republican.county.next.name};
          var votesPrevious = $feature.${fieldInfos.republican.county.previous.name};

          ${shiftCountyTextBase()}
        `
      }),
      new ExpressionInfo({
        title: `Democrat shift from ${years.previous}`,
        name: `dem${years.previous}shift${years.next}`,
        expression: `
          var votesNext = $feature.${fieldInfos.democrat.county.next.name};
          var votesPrevious = $feature.${fieldInfos.democrat.county.previous.name};

          ${shiftCountyTextBase()}
        `
      }),
      new ExpressionInfo({
        title: `Other shift from ${years.previous}`,
        name: `oth${years.previous}shift${years.next}`,
        expression: `
          var votesNext = $feature.${fieldInfos.other.county.next.name};
          var votesPrevious = $feature.${fieldInfos.other.county.previous.name};

          ${shiftCountyTextBase()}
        `
      }),
      new ExpressionInfo({
        title: `Republican share ${years.next}`,
        name: `repShare${years.next}`,
        expression: `
          ${allCountyNextBase()}

          var votes = $feature.${fieldInfos.republican.county.next.name};

          ${shareTextBase}
        `
      }),
      new ExpressionInfo({
        title: `Democrat share ${years.next}`,
        name: `demShare${years.next}`,
        expression: `
          ${allCountyNextBase()}

          var votes = $feature.${fieldInfos.democrat.county.next.name};

          ${shareTextBase}
        `
      }),
      new ExpressionInfo({
        title: `Other share ${years.next}`,
        name: `othShare${years.next}`,
        expression: `
          ${allCountyNextBase()}

          var votes = $feature.${fieldInfos.other.county.next.name};

          ${shareTextBase}
        `
      }),
      new ExpressionInfo({
        title: `shift-color`,
        name: `dem-shift-color`,
        expression: `
          var votesNext = $feature.${fieldInfos.democrat.county.next.name};
          var votesPrevious = $feature.${fieldInfos.democrat.county.previous.name};
          ${shiftCounties()}
          ${colorShiftPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `shift-color`,
        name: `rep-shift-color`,
        expression: `
          var votesNext = $feature.${fieldInfos.republican.county.next.name};
          var votesPrevious = $feature.${fieldInfos.republican.county.previous.name};
          ${shiftCounties()}
          ${colorShiftPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `shift-color`,
        name: `oth-shift-color`,
        expression: `
          var votesNext = $feature.${fieldInfos.other.county.next.name};
          var votesPrevious = $feature.${fieldInfos.other.county.previous.name};
          ${shiftCounties()}
          ${colorShiftPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `change-color`,
        name: `dem-change-color`,
        expression: `
          var votesNext = $feature.${fieldInfos.democrat.county.next.name};
          var votesPrevious = $feature.${fieldInfos.democrat.county.previous.name};
          ${colorDiffPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `change-color`,
        name: `rep-change-color`,
        expression: `
          var votesNext = $feature.${fieldInfos.republican.county.next.name};
          var votesPrevious = $feature.${fieldInfos.republican.county.previous.name};
          ${colorDiffPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `change-color`,
        name: `oth-change-color`,
        expression: `
          var votesNext = $feature.${fieldInfos.other.county.next.name};
          var votesPrevious = $feature.${fieldInfos.other.county.previous.name};
          ${colorDiffPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `winner-margin`,
        name: `winner-margin`,
        expression: `
          var fields = [
            $feature.${fieldInfos.democrat.county.next.name},
            $feature.${fieldInfos.republican.county.next.name},
            $feature.${fieldInfos.other.county.next.name}
          ];

          var top2 = Top(Reverse(Sort(fields)), 2);
          var winner = First(top2);
          var secondPlace = top2[1];
          var total = Sum(fields);
          return Text( (winner - secondPlace) / total, "#.#%");
        `
      }),
      new ExpressionInfo({
        title: `winner-margin-votes`,
        name: `winner-margin-votes`,
        expression: `
          var fields = [
            $feature.${fieldInfos.democrat.county.next.name},
            $feature.${fieldInfos.republican.county.next.name},
            $feature.${fieldInfos.other.county.next.name}
          ];

          var top2 = Top(Reverse(Sort(fields)), 2);
          var winner = First(top2);
          var secondPlace = top2[1];
          return Text( (winner - secondPlace), "#,###");
        `
      })
    ]
  });
};
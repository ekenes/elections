define(["require", "exports", "esri/PopupTemplate", "esri/popup/ExpressionInfo", "esri/popup/FieldInfo", "esri/popup/support/FieldInfoFormat", "esri/popup/content", "./config", "./expressionUtils"], function (require, exports, PopupTemplate, ExpressionInfo, FieldInfo, FieldInfoFormat, content_1, config_1, expressionUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ////////////////////////////////////////////////////
    //
    // STATE
    //
    ///////////////////////////////////////////////////
    exports.statePopupTemplate = function () {
        return new PopupTemplate({
            title: "" + config_1.fieldInfos.title.state,
            fieldInfos: [
                new FieldInfo({
                    fieldName: config_1.fieldInfos.democrat.state.previous.name,
                    label: config_1.fieldInfos.democrat.state.previous.label,
                    format: new FieldInfoFormat({
                        places: 0,
                        digitSeparator: true
                    })
                }),
                new FieldInfo({
                    fieldName: config_1.fieldInfos.republican.state.previous.name,
                    label: config_1.fieldInfos.republican.state.previous.label,
                    format: new FieldInfoFormat({
                        places: 0,
                        digitSeparator: true
                    })
                }),
                new FieldInfo({
                    fieldName: config_1.fieldInfos.other.state.previous.name,
                    label: config_1.fieldInfos.other.state.previous.label,
                    format: new FieldInfoFormat({
                        places: 0,
                        digitSeparator: true
                    })
                }),
                new FieldInfo({
                    fieldName: config_1.fieldInfos.democrat.state.next.name,
                    label: config_1.fieldInfos.democrat.state.next.label,
                    format: new FieldInfoFormat({
                        places: 0,
                        digitSeparator: true
                    })
                }),
                new FieldInfo({
                    fieldName: config_1.fieldInfos.republican.state.next.name,
                    label: config_1.fieldInfos.republican.state.next.label,
                    format: new FieldInfoFormat({
                        places: 0,
                        digitSeparator: true
                    })
                }),
                new FieldInfo({
                    fieldName: config_1.fieldInfos.other.state.next.name,
                    label: config_1.fieldInfos.other.state.next.label,
                    format: new FieldInfoFormat({
                        places: 0,
                        digitSeparator: true
                    })
                })
            ],
            content: [
                new content_1.TextContent({
                    text: "\n          <span style='color: {expression/winner-color}; font-weight:bolder'>{expression/winner}</span>\n          won " + config_1.fieldInfos.title.state + " by a margin of <span style='color: {expression/winner-color}; font-weight:bolder'>{expression/winner-margin-votes}</span> votes (<span style='color: {expression/winner-color}; font-weight:bolder'>{expression/winner-margin}</span> points).\n          The {expression/winner-votes} votes cast for {expression/winner} comprise\n          {expression/winner-percent-state-votes} of the total votes cast in the state.\n        "
                }),
                new content_1.TextContent({
                    text: "\n          <div class=\"table-container\">\n            Votes in " + config_1.years.next + " and the change from " + config_1.years.previous + "\n            <br/>\n            <br/>\n            <table class=\"esri-widget popup\">\n              <tr class=\"head\"><td>Party</td><td>Votes</td><td>+/-</td><td>% Change</td></tr>\n              <tr class=\"dem\"><td><span style='color:" + config_1.dColor + "; font-weight:bolder'>Democrat</span></td><td class=\"num\">{" + config_1.fieldInfos.democrat.state.next.name + "}</td><td class=\"num\"><span style='color: {expression/dem-change-color}'>{expression/dem" + config_1.years.previous + "diff" + config_1.years.next + "}</span></td><td class=\"num\"><span style='color: {expression/dem-change-color}'>{expression/dem" + config_1.years.previous + "change" + config_1.years.next + "}</span></td></tr>\n              <tr class=\"rep\"><td><span style='color:" + config_1.rColor + "; font-weight:bolder'>Republican</span></td><td class=\"num\">{" + config_1.fieldInfos.republican.state.next.name + "}</td><td class=\"num\"><span style='color: {expression/rep-change-color}'>{expression/rep" + config_1.years.previous + "diff" + config_1.years.next + "}</span></td><td class=\"num\"><span style='color: {expression/rep-change-color}'>{expression/rep" + config_1.years.previous + "change" + config_1.years.next + "}</span></td></tr>\n              <tr class=\"oth\"><td><span style='color:" + config_1.oColor + "; font-weight:bolder'>Other</span></td><td class=\"num\">{" + config_1.fieldInfos.other.state.next.name + "}</td><td class=\"num\"><span style='color: {expression/oth-change-color}'>{expression/oth" + config_1.years.previous + "diff" + config_1.years.next + "}</span></td><td class=\"num\"><span style='color: {expression/oth-change-color}'>{expression/oth" + config_1.years.previous + "change" + config_1.years.next + "}</span></td></tr>\n            </table>\n          </div>\n        "
                })
            ],
            expressionInfos: [
                new ExpressionInfo({
                    title: "winner % of state votes",
                    name: "winner-percent-state-votes",
                    expression: "\n          " + expressionUtils_1.votesStateNextBase() + "\n\n          var winnerTotal = Max(all);\n          return Text(winnerTotal/Sum(all), \"#%\");\n        "
                }),
                new ExpressionInfo({
                    title: "winner votes",
                    name: "winner-votes",
                    expression: "\n          " + expressionUtils_1.votesStateNextBase() + "\n\n          return Text(Max(all), \"#,###\");\n        "
                }),
                new ExpressionInfo({
                    title: "winner-color",
                    name: "winner-color",
                    expression: "\n          " + expressionUtils_1.votesStateNextBase() + "\n\n          Decode( Max(all),\n            dem, \"" + config_1.dColor + "\",\n            rep, \"" + config_1.rColor + "\",\n            oth, \"" + config_1.oColor + "\",\n          \"#000000\"\n          );\n        "
                }),
                new ExpressionInfo({
                    title: "winner",
                    name: "winner",
                    expression: "\n          " + expressionUtils_1.votesStateNextBase() + "\n\n          Decode( Max(all),\n            dem, \"" + config_1.results[config_1.selectedYear].democrat.candidate + "\",\n            rep, \"" + config_1.results[config_1.selectedYear].republican.candidate + "\",\n            oth, \"" + config_1.results[config_1.selectedYear].other.candidate + "\",\n          \"tie\"\n          );\n        "
                }),
                new ExpressionInfo({
                    title: "Democrat change from " + config_1.years.previous,
                    name: "dem" + config_1.years.previous + "change" + config_1.years.next,
                    expression: "\n          var votesNext = $feature." + config_1.fieldInfos.democrat.state.next.name + ";\n          var votesPrevious = $feature." + config_1.fieldInfos.democrat.state.previous.name + ";\n          " + expressionUtils_1.diffTextBase + "\n          return changeText;\n        "
                }),
                new ExpressionInfo({
                    title: "Republican change from " + config_1.years.previous,
                    name: "rep" + config_1.years.previous + "change" + config_1.years.next,
                    expression: "\n          var votesNext = $feature." + config_1.fieldInfos.republican.state.next.name + ";\n          var votesPrevious = $feature." + config_1.fieldInfos.republican.state.previous.name + ";\n          " + expressionUtils_1.diffTextBase + "\n          return changeText;\n        "
                }),
                new ExpressionInfo({
                    title: "Other change from " + config_1.years.previous,
                    name: "oth" + config_1.years.previous + "change" + config_1.years.next,
                    expression: "\n          var votesNext = $feature." + config_1.fieldInfos.other.state.next.name + ";\n          var votesPrevious = $feature." + config_1.fieldInfos.other.state.previous.name + ";\n          " + expressionUtils_1.diffTextBase + "\n          return changeText;\n        "
                }),
                new ExpressionInfo({
                    title: "Democrat diff from " + config_1.years.previous,
                    name: "dem" + config_1.years.previous + "diff" + config_1.years.next,
                    expression: "\n          var votesNext = $feature." + config_1.fieldInfos.democrat.state.next.name + ";\n          var votesPrevious = $feature." + config_1.fieldInfos.democrat.state.previous.name + ";\n          " + expressionUtils_1.diffTextBase + "\n          return diffText;\n        "
                }),
                new ExpressionInfo({
                    title: "Republican diff from " + config_1.years.previous,
                    name: "rep" + config_1.years.previous + "diff" + config_1.years.next,
                    expression: "\n          var votesNext = $feature." + config_1.fieldInfos.republican.state.next.name + ";\n          var votesPrevious = $feature." + config_1.fieldInfos.republican.state.previous.name + ";\n          " + expressionUtils_1.diffTextBase + "\n          return diffText;\n        "
                }),
                new ExpressionInfo({
                    title: "Other diff from " + config_1.years.previous,
                    name: "oth" + config_1.years.previous + "diff" + config_1.years.next,
                    expression: "\n          var votesNext = $feature." + config_1.fieldInfos.other.state.next.name + ";\n          var votesPrevious = $feature." + config_1.fieldInfos.other.state.previous.name + ";\n          " + expressionUtils_1.diffTextBase + "\n          return diffText;\n        "
                }),
                new ExpressionInfo({
                    title: "change-color",
                    name: "dem-change-color",
                    expression: "\n          var votesNext = $feature." + config_1.fieldInfos.democrat.state.next.name + ";\n          var votesPrevious = $feature." + config_1.fieldInfos.democrat.state.previous.name + ";\n          " + expressionUtils_1.colorDiffPopupBase + "\n        "
                }),
                new ExpressionInfo({
                    title: "change-color",
                    name: "rep-change-color",
                    expression: "\n          var votesNext = $feature." + config_1.fieldInfos.republican.state.next.name + ";\n          var votesPrevious = $feature." + config_1.fieldInfos.republican.state.previous.name + ";\n          " + expressionUtils_1.colorDiffPopupBase + "\n        "
                }),
                new ExpressionInfo({
                    title: "change-color",
                    name: "oth-change-color",
                    expression: "\n          var votesNext = $feature." + config_1.fieldInfos.other.state.next.name + ";\n          var votesPrevious = $feature." + config_1.fieldInfos.other.state.previous.name + ";\n          " + expressionUtils_1.colorDiffPopupBase + "\n        "
                }),
                new ExpressionInfo({
                    title: "winner-margin",
                    name: "winner-margin",
                    expression: "\n          var fields = [\n            $feature." + config_1.fieldInfos.democrat.state.next.name + ",\n            $feature." + config_1.fieldInfos.republican.state.next.name + ",\n            $feature." + config_1.fieldInfos.other.state.next.name + "\n          ];\n\n          var top2 = Top(Reverse(Sort(fields)), 2);\n          var winner = First(top2);\n          var secondPlace = top2[1];\n          var total = Sum(fields);\n          return Text( (winner - secondPlace) / total, \"#.#%\");\n        "
                }),
                new ExpressionInfo({
                    title: "winner-margin-votes",
                    name: "winner-margin-votes",
                    expression: "\n          var fields = [\n            $feature." + config_1.fieldInfos.democrat.state.next.name + ",\n            $feature." + config_1.fieldInfos.republican.state.next.name + ",\n            $feature." + config_1.fieldInfos.other.state.next.name + "\n          ];\n\n          var top2 = Top(Reverse(Sort(fields)), 2);\n          var winner = First(top2);\n          var secondPlace = top2[1];\n          return Text( (winner - secondPlace), \"#,###\");\n        "
                })
            ]
        });
    };
    ////////////////////////////////////////////////////
    //
    // COUNTY
    //
    ///////////////////////////////////////////////////
    exports.countyPopupTemplate = function () {
        return new PopupTemplate({
            title: "" + config_1.fieldInfos.title.county,
            fieldInfos: [
                new FieldInfo({
                    fieldName: config_1.fieldInfos.democrat.county.previous.name,
                    label: config_1.years.previous + " Democrat votes",
                    format: new FieldInfoFormat({
                        places: 0,
                        digitSeparator: true
                    })
                }),
                new FieldInfo({
                    fieldName: config_1.fieldInfos.republican.county.previous.name,
                    label: config_1.years.previous + " Republican votes",
                    format: new FieldInfoFormat({
                        places: 0,
                        digitSeparator: true
                    })
                }),
                new FieldInfo({
                    fieldName: config_1.fieldInfos.other.county.previous.name,
                    label: config_1.years.previous + " Other votes",
                    format: new FieldInfoFormat({
                        places: 0,
                        digitSeparator: true
                    })
                }),
                new FieldInfo({
                    fieldName: config_1.fieldInfos.democrat.county.next.name,
                    label: config_1.years.next + " Democrat votes",
                    format: new FieldInfoFormat({
                        places: 0,
                        digitSeparator: true
                    })
                }),
                new FieldInfo({
                    fieldName: config_1.fieldInfos.republican.county.next.name,
                    label: config_1.years.next + " Republican votes",
                    format: new FieldInfoFormat({
                        places: 0,
                        digitSeparator: true
                    })
                }),
                new FieldInfo({
                    fieldName: config_1.fieldInfos.other.county.next.name,
                    label: config_1.years.next + " Other votes",
                    format: new FieldInfoFormat({
                        places: 0,
                        digitSeparator: true
                    })
                })
            ],
            content: [
                new content_1.TextContent({
                    text: "\n          <span style='color: {expression/winner-color}; font-weight:bolder'>{expression/winner}</span>\n          won " + config_1.fieldInfos.title.county + " by a margin of\n          <span style='color: {expression/winner-color}; font-weight:bolder'>{expression/winner-margin-votes}</span> votes (<span style='color: {expression/winner-color}; font-weight:bolder'>{expression/winner-margin}</span> points).\n          The {expression/winner-votes} votes cast for {expression/winner} comprise\n          {expression/winner-percent-state-votes} of the total votes cast in the state.\n        "
                }),
                new content_1.TextContent({
                    text: "\n          <div class=\"table-container\">\n            Votes in " + config_1.years.next + " and the change from " + config_1.years.previous + "\n            <br/>\n            <br/>\n            <table class=\"esri-widget popup\">\n              <tr class=\"head\"><td>Party</td><td>Votes</td><td>+/-</td><td>% Change</td></tr>\n              <tr class=\"dem\"><td><span style='color:" + config_1.dColor + "; font-weight:bolder'>Democrat</span></td><td class=\"num\">{" + config_1.fieldInfos.democrat.county.next.name + "}</td><td class=\"num\"><span style='color: {expression/dem-change-color}'>{expression/dem" + config_1.years.previous + "diff" + config_1.years.next + "}</span></td><td class=\"num\"><span style='color: {expression/dem-change-color}'>{expression/dem" + config_1.years.previous + "change" + config_1.years.next + "}</span></td></tr>\n              <tr class=\"rep\"><td><span style='color:" + config_1.rColor + "; font-weight:bolder'>Republican</span></td><td class=\"num\">{" + config_1.fieldInfos.republican.county.next.name + "}</td><td class=\"num\"><span style='color: {expression/rep-change-color}'>{expression/rep" + config_1.years.previous + "diff" + config_1.years.next + "}</span></td><td class=\"num\"><span style='color: {expression/rep-change-color}'>{expression/rep" + config_1.years.previous + "change" + config_1.years.next + "}</span></td></tr>\n              <tr class=\"oth\"><td><span style='color:" + config_1.oColor + "; font-weight:bolder'>Other</span></td><td class=\"num\">{" + config_1.fieldInfos.other.county.next.name + "}</td><td class=\"num\"><span style='color: {expression/oth-change-color}'>{expression/oth" + config_1.years.previous + "diff" + config_1.years.next + "}</span></td><td class=\"num\"><span style='color: {expression/oth-change-color}'>{expression/oth" + config_1.years.previous + "change" + config_1.years.next + "}</span></td></tr>\n            </table>\n          </div>\n        "
                })
            ],
            expressionInfos: [
                new ExpressionInfo({
                    title: "winner % of state votes",
                    name: "winner-percent-state-votes",
                    expression: "\n          var dem = $feature." + config_1.fieldInfos.democrat.county.next.name + ";\n          var rep = $feature." + config_1.fieldInfos.republican.county.next.name + ";\n          var oth = $feature." + config_1.fieldInfos.other.county.next.name + ";\n          var all = [dem, rep, oth];\n\n          var winnerTotal = Max(all);\n          return Text(winnerTotal/$feature." + config_1.fieldInfos.normalizationFields.county.next + ", \"#%\");\n        "
                }),
                new ExpressionInfo({
                    title: "winner votes",
                    name: "winner-votes",
                    expression: "\n          " + expressionUtils_1.votesCountyNextBase() + "\n\n          return Text(Max(all), \"#,###\");\n        "
                }),
                new ExpressionInfo({
                    title: "winner-color",
                    name: "winner-color",
                    expression: "\n          " + expressionUtils_1.votesCountyNextBase() + "\n\n          Decode( Max(all),\n            dem, \"" + config_1.dColor + "\",\n            rep, \"" + config_1.rColor + "\",\n            oth, \"" + config_1.oColor + "\",\n          \"#000000\"\n          );\n        "
                }),
                new ExpressionInfo({
                    title: "winner",
                    name: "winner",
                    expression: "\n          " + expressionUtils_1.votesCountyNextBase() + "\n\n          Decode( Max(all),\n            dem, \"" + config_1.results[config_1.selectedYear].democrat.candidate + "\",\n            rep, \"" + config_1.results[config_1.selectedYear].republican.candidate + "\",\n            oth, \"" + config_1.results[config_1.selectedYear].other.candidate + "\",\n          \"tie\"\n          );\n        "
                }),
                new ExpressionInfo({
                    title: "Democrat change from " + config_1.years.previous,
                    name: "dem" + config_1.years.previous + "change" + config_1.years.next,
                    expression: "\n          var votesNext = $feature." + config_1.fieldInfos.democrat.county.next.name + ";\n          var votesPrevious = $feature." + config_1.fieldInfos.democrat.county.previous.name + ";\n          " + expressionUtils_1.diffTextBase + "\n          return changeText;\n        "
                }),
                new ExpressionInfo({
                    title: "Republican change from " + config_1.years.previous,
                    name: "rep" + config_1.years.previous + "change" + config_1.years.next,
                    expression: "\n          var votesNext = $feature." + config_1.fieldInfos.republican.county.next.name + ";\n          var votesPrevious = $feature." + config_1.fieldInfos.republican.county.previous.name + ";\n          " + expressionUtils_1.diffTextBase + "\n          return changeText;\n        "
                }),
                new ExpressionInfo({
                    title: "Other change from " + config_1.years.previous,
                    name: "oth" + config_1.years.previous + "change" + config_1.years.next,
                    expression: "\n          var votesNext = $feature." + config_1.fieldInfos.other.county.next.name + ";\n          var votesPrevious = $feature." + config_1.fieldInfos.other.county.previous.name + ";\n          " + expressionUtils_1.diffTextBase + "\n          return changeText;\n        "
                }),
                new ExpressionInfo({
                    title: "Democrat diff from " + config_1.years.previous,
                    name: "dem" + config_1.years.previous + "diff" + config_1.years.next,
                    expression: "\n          var votesNext = $feature." + config_1.fieldInfos.democrat.county.next.name + ";\n          var votesPrevious = $feature." + config_1.fieldInfos.democrat.county.previous.name + ";\n          " + expressionUtils_1.diffTextBase + "\n          return diffText;\n        "
                }),
                new ExpressionInfo({
                    title: "Republican diff from " + config_1.years.previous,
                    name: "rep" + config_1.years.previous + "diff" + config_1.years.next,
                    expression: "\n          var votesNext = $feature." + config_1.fieldInfos.republican.county.next.name + ";\n          var votesPrevious = $feature." + config_1.fieldInfos.republican.county.previous.name + ";\n          " + expressionUtils_1.diffTextBase + "\n          return diffText;\n        "
                }),
                new ExpressionInfo({
                    title: "Other diff from " + config_1.years.previous,
                    name: "oth" + config_1.years.previous + "diff" + config_1.years.next,
                    expression: "\n          var votesNext = $feature." + config_1.fieldInfos.other.county.next.name + ";\n          var votesPrevious = $feature." + config_1.fieldInfos.other.county.previous.name + ";\n          " + expressionUtils_1.diffTextBase + "\n          return diffText;\n        "
                }),
                new ExpressionInfo({
                    title: "change-color",
                    name: "dem-change-color",
                    expression: "\n          var votesNext = $feature." + config_1.fieldInfos.democrat.county.next.name + ";\n          var votesPrevious = $feature." + config_1.fieldInfos.democrat.county.previous.name + ";\n          " + expressionUtils_1.colorDiffPopupBase + "\n        "
                }),
                new ExpressionInfo({
                    title: "change-color",
                    name: "rep-change-color",
                    expression: "\n          var votesNext = $feature." + config_1.fieldInfos.republican.county.next.name + ";\n          var votesPrevious = $feature." + config_1.fieldInfos.republican.county.previous.name + ";\n          " + expressionUtils_1.colorDiffPopupBase + "\n        "
                }),
                new ExpressionInfo({
                    title: "change-color",
                    name: "oth-change-color",
                    expression: "\n          var votesNext = $feature." + config_1.fieldInfos.other.county.next.name + ";\n          var votesPrevious = $feature." + config_1.fieldInfos.other.county.previous.name + ";\n          " + expressionUtils_1.colorDiffPopupBase + "\n        "
                }),
                new ExpressionInfo({
                    title: "winner-margin",
                    name: "winner-margin",
                    expression: "\n          var fields = [\n            $feature." + config_1.fieldInfos.democrat.county.next.name + ",\n            $feature." + config_1.fieldInfos.republican.county.next.name + ",\n            $feature." + config_1.fieldInfos.other.county.next.name + "\n          ];\n\n          var top2 = Top(Reverse(Sort(fields)), 2);\n          var winner = First(top2);\n          var secondPlace = top2[1];\n          var total = Sum(fields);\n          return Text( (winner - secondPlace) / total, \"#.#%\");\n        "
                }),
                new ExpressionInfo({
                    title: "winner-margin-votes",
                    name: "winner-margin-votes",
                    expression: "\n          var fields = [\n            $feature." + config_1.fieldInfos.democrat.county.next.name + ",\n            $feature." + config_1.fieldInfos.republican.county.next.name + ",\n            $feature." + config_1.fieldInfos.other.county.next.name + "\n          ];\n\n          var top2 = Top(Reverse(Sort(fields)), 2);\n          var winner = First(top2);\n          var secondPlace = top2[1];\n          return Text( (winner - secondPlace), \"#,###\");\n        "
                })
            ]
        });
    };
});
//# sourceMappingURL=popupUtils.js.map
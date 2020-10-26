var TOTAL_STATE_VOTES_12 = "\n  var state = $feature[\"STATE_NAME\"];\n  var fields = [\"PRS_DEM_12\", \"PRS_OTH_12\", \"PRS_REP_12\", \"STATE_NAME\"]\n  var countiesInState = Filter(FeatureSetById($datastore, \"0\", fields, false), \"STATE_NAME = @state\");\n  Sum(countiesInState, \"PRS_DEM_12 + PRS_OTH_12 + PRS_REP_12\");\n";
var TOTAL_STATE_VOTES_16 = "\n  var state = $feature[\"STATE_NAME\"];\n  var fields = [\"PRS_DEM_16\", \"PRS_OTH_16\", \"PRS_REP_16\", \"STATE_NAME\"]\n  var countiesInState = Filter(FeatureSetById($datastore, \"0\", fields, false), \"STATE_NAME = @state\");\n  Sum(countiesInState, \"PRS_DEM_16 + PRS_OTH_16 + PRS_REP_16\");\n";
// var y = 2000;
// var state = $feature["state"];
// var fields = [`dem_${y}`, `rep_${y}`, `oth_${y}`, "state"]
// var countiesInState = Filter(FeatureSetById($datastore, "0", fields, false), "state = @state");
// Sum(countiesInState, `dem_${y} + rep_${y} + oth_${y}`);
// MIT Election Data and Science Lab, 2018, "County Presidential Election Returns 2000-2016", https://doi.org/10.7910/DVN/VOQCHQ, Harvard Dataverse, V6, UNF:6:ZZe1xuZ5H2l4NUiSRcRf8Q== [fileUNF]
//# sourceMappingURL=arcade-expressions.js.map
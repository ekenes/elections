var TOTAL_STATE_VOTES_12 = "\n  var state = $feature[\"STATE_NAME\"];\n  var fields = [\"PRS_DEM_12\", \"PRS_OTH_12\", \"PRS_REP_12\", \"STATE_NAME\"]\n  var countiesInState = Filter(FeatureSetById($datastore, \"0\", fields, false), \"STATE_NAME = @state\");\n  Sum(countiesInState, \"PRS_DEM_12 + PRS_OTH_12 + PRS_REP_12\");\n";
var TOTAL_STATE_VOTES_16 = "\n  var state = $feature[\"STATE_NAME\"];\n  var fields = [\"PRS_DEM_16\", \"PRS_OTH_16\", \"PRS_REP_16\", \"STATE_NAME\"]\n  var countiesInState = Filter(FeatureSetById($datastore, \"0\", fields, false), \"STATE_NAME = @state\");\n  Sum(countiesInState, \"PRS_DEM_16 + PRS_OTH_16 + PRS_REP_16\");\n";
// var y = 2000;
// var state = $feature["state"];
// var fields = [`dem_${y}`, `rep_${y}`, `oth_${y}`, "state"]
// var countiesInState = Filter(FeatureSetById($datastore, "0", fields, false), "state = @state");
// Sum(countiesInState, `dem_${y} + rep_${y} + oth_${y}`);
// MIT Election Data and Science Lab, 2018, "County Presidential Election Returns 2000-2016", https://doi.org/10.7910/DVN/VOQCHQ, Harvard Dataverse, V6, UNF:6:ZZe1xuZ5H2l4NUiSRcRf8Q== [fileUNF]
// 251be17c7a264e69a0e41a58253a0401
// Join electoral votes to other layers
// var fields = ["state_abb", "EV_2000", "EV_2004", "EV_2008", "EV_2012", "EV_2016", "EV_2020"];
// var evLayer = FeatureSetByPortalItem(Portal('https://jsapi.maps.arcgis.com/'), "251be17c7a264e69a0e41a58253a0401", 0, fields, false);
// var stateAbb = $feature["ST_ABBREV"];
// var match = First(Filter(evLayer, "state_abb = @stateAbb"));
// return match.EV_2000;
// var fields = ["STATE", "ev_2000", "ev_2004", "ev_2008", "ev_2012", "ev_2016", "ev_2020"];
// var evLayer = FeatureSetByPortalItem(Portal('https://jsapi.maps.arcgis.com/'), "f2825b56dfc14bb892604637dab45104", 0, fields, false);
// var state = $feature["state"];
// var match = First(Filter(evLayer, "STATE = @state"));
// return match.ev_2000;
// JOIN TO THE STATE APPORTIONMENT LAYER
// var fields = ["state_name", "EV_2000", "EV_2004", "EV_2008", "EV_2012", "EV_2016", "EV_2020"];
// var evLayer = FeatureSetByPortalItem(Portal('https://jsapi.maps.arcgis.com/'), "251be17c7a264e69a0e41a58253a0401", 0, fields, false);
// var state = $feature["state"];
// var match = First(Filter(evLayer, "state_name = @state"));
// return match.EV_2000;
// var r = $feature.rep_2020;
// var d = $feature.dem_2020;
// var o = $feature.oth_2020;
// var all = [r, d, o];
// var total = sum(all);
// var percentStateVotes = (total / $feature["TOTAL_STATE_VOTES_2020"]);
// percentStateVotes * $feature["ev_2020"]
//# sourceMappingURL=arcade-expressions.js.map
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define(["require", "exports", "esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer", "esri/widgets/Swipe", "esri/widgets/Legend", "esri/widgets/Expand", "./config", "./popupUtils", "./labelingUtils", "./rendererUtils"], function (require, exports, EsriMap, MapView, FeatureLayer, Swipe, Legend, Expand, config_1, popupUtils_1, labelingUtils_1, rendererUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        function updateLayers() {
            stateElectoralResultsLayer.set({
                portalItem: {
                    id: config_1.statesLayerPortalItem
                },
                title: "Results by state",
                opacity: 0.2,
                renderer: rendererUtils_1.stateElectoralResultsRenderer(),
                popupTemplate: popupUtils_1.statePopupTemplate(),
                popupEnabled: false
            });
            swingStatesLayer.set({
                portalItem: {
                    id: config_1.statesLayerPortalItem
                },
                title: "Swing states",
                opacity: 0.2,
                renderer: rendererUtils_1.swingStateRenderer(),
                popupTemplate: popupUtils_1.statePopupTemplate(),
                popupEnabled: false
            });
            countyChangeLayer.set({
                minScale: config_1.scaleThreshold,
                portalItem: {
                    id: config_1.countiesLayerPortalItem
                },
                legendEnabled: false,
                renderer: rendererUtils_1.countyChangeRenderer(),
                labelsVisible: true,
                labelingInfo: labelingUtils_1.countyChangeLabelingInfo(),
                popupTemplate: popupUtils_1.countyPopupTemplate()
            });
            countyResultsLayer.set({
                minScale: config_1.scaleThreshold,
                portalItem: {
                    id: config_1.countiesLayerPortalItem
                },
                legendEnabled: false,
                renderer: rendererUtils_1.countyResultsRenderer(),
                labelsVisible: true,
                labelingInfo: labelingUtils_1.countyResultsLabelingInfo(),
                popupTemplate: popupUtils_1.countyPopupTemplate()
            });
            stateChangeLayer.set({
                maxScale: config_1.scaleThreshold,
                portalItem: {
                    id: config_1.statesLayerPortalItem
                },
                opacity: 1,
                legendEnabled: false,
                renderer: rendererUtils_1.stateChangeRenderer(),
                labelsVisible: true,
                labelingInfo: labelingUtils_1.stateChangeLabelingInfo(),
                popupTemplate: popupUtils_1.statePopupTemplate()
            });
            stateResultsLayer.set({
                maxScale: config_1.scaleThreshold,
                portalItem: {
                    id: config_1.statesLayerPortalItem
                },
                opacity: 1,
                legendEnabled: false,
                renderer: rendererUtils_1.stateResultsRenderer(),
                labelsVisible: true,
                labelingInfo: labelingUtils_1.stateResultsLabelingInfo(),
                popupTemplate: popupUtils_1.statePopupTemplate()
            });
        }
        function updateLegendOpacity() {
            if (!visibilityEnabled) {
                return;
            }
            var threshold = 50;
            if (swipe.position <= 85) {
                totalLegend.style.display = "block";
                var opacity = (35 - (swipe.position - threshold)) * 3.5;
                totalLegend.style.opacity = (opacity * 0.01).toString();
            }
            else {
                totalLegend.style.display = "none";
            }
            if (swipe.position <= 50) {
                changeLegend.style.display = "block";
                var opacity = (35 - (threshold - swipe.position)) * 3.5;
                changeLegend.style.opacity = (opacity * 0.01).toString();
            }
            if (swipe.position <= 15) {
                changeLegend.style.opacity = "0";
                changeLegend.style.display = "none";
            }
        }
        function updateLegendHeight() {
            changeLegend.style.height = null;
            changeLegend.style.overflow = null;
            totalLegend.style.height = null;
            totalLegend.style.overflow = null;
            if (view.heightBreakpoint === "small") {
                changeLegend.style.height = "450px";
                changeLegend.style.overflow = "auto";
                totalLegend.style.height = "450px";
                totalLegend.style.overflow = "auto";
            }
            if (view.heightBreakpoint === "xsmall") {
                changeLegend.style.height = "300px";
                changeLegend.style.overflow = "auto";
                totalLegend.style.height = "300px";
                totalLegend.style.overflow = "auto";
            }
        }
        function updateResultsDisplay(year) {
            var result = config_1.results[year];
            currentYear.innerHTML = year.toString();
            var demWinner = result.democrat.electoralVotes > result.republican.electoralVotes;
            demCandidate.innerHTML = result.democrat.candidate;
            demVotes.innerHTML = result.democrat.electoralVotes;
            repCandidate.innerHTML = result.republican.candidate;
            repVotes.innerHTML = result.republican.electoralVotes;
            if (demWinner) {
                demResults.style.fontWeight = "bolder";
                repResults.style.fontWeight = null;
            }
            else {
                demResults.style.fontWeight = null;
                repResults.style.fontWeight = "bolder";
            }
        }
        var map, view, commonLayerOptions, stateElectoralResultsLayer, swingStatesLayer, countyChangeLayer, countyResultsLayer, stateChangeLayer, stateResultsLayer, swipe, totalLegend, changeLegend, infoToggle, endYearChangeSpan, startYearChangeSpan, endYearTotalSpan, yearSelectExpand, visibilityEnabled, toggleInfoVisibility, currentYear, demCandidate, demVotes, repCandidate, repVotes, demResults, repResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    map = new EsriMap({
                        basemap: {
                            portalItem: {
                                id: config_1.basemapPortalItem
                            }
                        }
                    });
                    view = new MapView({
                        container: "viewDiv",
                        map: map,
                        center: [-95, 40],
                        scale: config_1.referenceScale * 8,
                        constraints: {
                            minScale: 0,
                            maxScale: config_1.maxScale,
                            snapToZoom: false,
                            rotationEnabled: false
                        },
                        highlightOptions: {
                            fillOpacity: 0
                        },
                        breakpoints: {
                            large: 1200,
                            medium: 992,
                            small: 768,
                            xsmall: 544
                        },
                        popup: {
                            collapseEnabled: false,
                            dockEnabled: true,
                            dockOptions: {
                                breakpoint: false,
                                position: "bottom-right"
                            }
                        }
                    });
                    commonLayerOptions = {
                        outFields: ["*"]
                    };
                    stateElectoralResultsLayer = new FeatureLayer(commonLayerOptions);
                    swingStatesLayer = new FeatureLayer(commonLayerOptions);
                    countyChangeLayer = new FeatureLayer(commonLayerOptions);
                    countyResultsLayer = new FeatureLayer(commonLayerOptions);
                    stateChangeLayer = new FeatureLayer(commonLayerOptions);
                    stateResultsLayer = new FeatureLayer(commonLayerOptions);
                    updateLayers();
                    view.map.add(stateElectoralResultsLayer);
                    view.map.add(swingStatesLayer);
                    view.map.add(stateChangeLayer);
                    view.map.add(stateResultsLayer);
                    view.map.add(countyChangeLayer);
                    view.map.add(countyResultsLayer);
                    swipe = new Swipe({
                        view: view,
                        leadingLayers: [countyChangeLayer, stateChangeLayer, swingStatesLayer],
                        trailingLayers: [countyResultsLayer, stateResultsLayer, stateElectoralResultsLayer],
                        position: 75
                    });
                    view.ui.add(swipe);
                    totalLegend = document.getElementById("total-legend");
                    changeLegend = document.getElementById("change-legend");
                    infoToggle = document.getElementById("info-toggle");
                    endYearChangeSpan = document.getElementById("end-year-change");
                    startYearChangeSpan = document.getElementById("start-year-change");
                    endYearTotalSpan = document.getElementById("end-year-total");
                    endYearChangeSpan.innerHTML = config_1.years.next.toString();
                    startYearChangeSpan.innerHTML = config_1.years.previous.toString();
                    endYearTotalSpan.innerHTML = config_1.years.next.toString();
                    new Legend({
                        view: view,
                        container: "change-legend-container",
                        layerInfos: [{
                                layer: swingStatesLayer
                            }]
                    });
                    new Legend({
                        view: view,
                        container: "total-legend-container",
                        layerInfos: [{
                                layer: stateElectoralResultsLayer
                            }]
                    });
                    view.ui.add(changeLegend, "bottom-left");
                    view.ui.add(totalLegend, "bottom-right");
                    yearSelectExpand = new Expand({
                        view: view,
                        content: document.getElementById("infoDiv"),
                        expandIconClass: "esri-icon-time-clock",
                        expanded: true
                    });
                    view.ui.add(yearSelectExpand, "top-right");
                    view.ui.add(infoToggle, "top-left");
                    visibilityEnabled = true;
                    toggleInfoVisibility = function () {
                        visibilityEnabled = !visibilityEnabled;
                        changeLegend.style.display = visibilityEnabled ? "block" : "none";
                        totalLegend.style.display = visibilityEnabled ? "block" : "none";
                        updateLegendOpacity();
                    };
                    infoToggle.addEventListener("click", toggleInfoVisibility);
                    swipe.watch("position", updateLegendOpacity);
                    if (isMobileBrowser()) {
                        toggleInfoVisibility();
                        swipe.position = 100;
                    }
                    view.watch("heightBreakpoint", updateLegendHeight);
                    return [4 /*yield*/, view.when(updateLegendHeight).then(updateLegendOpacity)];
                case 1:
                    _a.sent();
                    config_1.yearSlider.watch("values", function (_a) {
                        var year = _a[0];
                        startYearChangeSpan.innerHTML = (year - 4).toString();
                        endYearChangeSpan.innerHTML = year.toString();
                        endYearTotalSpan.innerHTML = year.toString();
                        config_1.setUrlParams(year);
                        config_1.setSelectedYear(year);
                        updateLayers();
                        updateResultsDisplay(year);
                    });
                    currentYear = document.getElementById("current-year");
                    demCandidate = document.getElementById("dem-candidate");
                    demVotes = document.getElementById("dem-votes");
                    repCandidate = document.getElementById("rep-candidate");
                    repVotes = document.getElementById("rep-votes");
                    demResults = document.getElementById("dem-results");
                    repResults = document.getElementById("rep-results");
                    updateResultsDisplay(config_1.selectedYear);
                    return [2 /*return*/];
            }
        });
    }); })();
    function isMobileBrowser() {
        var check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }
    ;
});
//# sourceMappingURL=main.js.map
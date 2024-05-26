"use strict";
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@cornerstonejs/core");
var helpers_1 = require("../utils/demo/helpers");
// This is for debugging purposes
console.warn('Click on index.ts to open source code for this example --------->');
var ViewportType = core_1.Enums.ViewportType;
// ======== Set up page ======== //
(0, helpers_1.setTitleAndDescription)('Basic Stack', 'Displays a single DICOM image in a Stack viewport.');
var content = document.getElementById('content');
var element = document.createElement('div');
element.id = 'cornerstone-element';
element.style.width = '500px';
element.style.height = '500px';
content.appendChild(element);
// ============================= //
/**
 * Runs the demo
 */
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var imageIds, renderingEngineId, renderingEngine, viewportId, viewportInput, viewport, stack;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Init Cornerstone and related libraries
                return [4 /*yield*/, (0, helpers_1.initDemo)()];
                case 1:
                    // Init Cornerstone and related libraries
                    _a.sent();
                    return [4 /*yield*/, (0, helpers_1.createImageIdsAndCacheMetaData)({
                            StudyInstanceUID: '1.3.6.1.4.1.14519.5.2.1.7009.2403.334240657131972136850343327463',
                            SeriesInstanceUID: '1.3.6.1.4.1.14519.5.2.1.7009.2403.226151125820845824875394858561',
                            wadoRsRoot: 'https://d3t6nz73ql33tx.cloudfront.net/dicomweb',
                        })];
                case 2:
                    imageIds = _a.sent();
                    renderingEngineId = 'myRenderingEngine';
                    renderingEngine = new core_1.RenderingEngine(renderingEngineId);
                    viewportId = 'CT_STACK';
                    viewportInput = {
                        viewportId: viewportId,
                        type: ViewportType.STACK,
                        element: element,
                        defaultOptions: {
                            background: [0.2, 0, 0.2],
                        },
                    };
                    renderingEngine.enableElement(viewportInput);
                    viewport = (renderingEngine.getViewport(viewportId));
                    stack = [imageIds[0]];
                    // Set the stack on the viewport
                    return [4 /*yield*/, viewport.setStack(stack)];
                case 3:
                    // Set the stack on the viewport
                    _a.sent();
                    // Set the VOI of the stack
                    viewport.setProperties({ voiRange: helpers_1.ctVoiRange });
                    // Render the image
                    viewport.render();
                    return [2 /*return*/];
            }
        });
    });
}
run();

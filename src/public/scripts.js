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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var _this = this;
var listingForm = document.getElementById('submissionForm');
if (listingForm) {
    listingForm.addEventListener('submit', function (event) { return __awaiter(_this, void 0, void 0, function () {
        var listingTitleElement, description, rent, address, numRooms, contactInfo, formData, response, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    listingTitleElement = document.getElementById('listingTitle').value;
                    description = document.getElementById('description').value;
                    rent = document.getElementById('rent').valueAsNumber;
                    address = document.getElementById('address').value;
                    numRooms = document.getElementById('numRooms').valueAsNumber;
                    contactInfo = document.getElementById('contactInfo').value;
                    formData = {
                        listingTitle: listingTitleElement,
                        description: description,
                        rent: rent,
                        address: address,
                        numRooms: numRooms,
                        contactInfo: contactInfo
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, fetch('/api/submit', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(formData)
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, response.json()];
                case 3:
                    result = _a.sent();
                    console.log('Submission successful:', result);
                    listingForm.reset();
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error("Error during submission: ", error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); });
}
var listingsButton = document.getElementById('listingsButton');
if (listingsButton) {
    listingsButton.addEventListener('click', function () {
        window.location.href = '/listings.html';
    });
}
document.addEventListener('DOMContentLoaded', function () { return __awaiter(_this, void 0, void 0, function () {
    var listingsContainer, response, data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                listingsContainer = document.getElementById('listingsContainer');
                if (!listingsContainer) return [3 /*break*/, 7];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, fetch('/api/all')];
            case 2:
                response = _a.sent();
                if (!response.ok) return [3 /*break*/, 4];
                return [4 /*yield*/, response.json()];
            case 3:
                data = _a.sent();
                listingsContainer.innerHTML = '';
                if (data.length === 0) {
                    listingsContainer.innerHTML = '<p>No listings available at the moment.</p>';
                    return [2 /*return*/];
                }
                data.forEach(function (listing) {
                    var listingElement = document.createElement('div');
                    listingElement.classList.add('listing-item');
                    listingElement.innerHTML = "\n                        <h3>".concat(listing.listingTitle, "</h3>\n                        <p><strong>Rent:</strong> $").concat(listing.rent.toFixed(2), "</p>\n                        <p><strong>Description:</strong> ").concat(listing.description, "</p>\n                        <p><strong>Address:</strong> ").concat(listing.address, "</p>\n                        <p><strong>Rooms:</strong> ").concat(listing.numRooms, "</p>\n                        <p><strong>Contact:</strong> ").concat(listing.contactInfo, "</p> \n                        <hr>\n                    ");
                    listingsContainer.appendChild(listingElement);
                });
                return [3 /*break*/, 5];
            case 4:
                listingsContainer.innerHTML = "<p>Error fetching listings: ".concat(response.statusText, "</p>");
                console.error('Error fetching listings:', response.statusText);
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_2 = _a.sent();
                listingsContainer.innerHTML = "<p>An error occurred while fetching listings. Please try again later.</p>";
                console.error('Error fetching listings:', error_2);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });

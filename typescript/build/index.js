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
const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiWlVMVSIsInZlcnNpb24iOiJ2MiIsInJlc2V0X2RhdGUiOiIyMDIzLTA1LTIwIiwiaWF0IjoxNjg1MTA3ODY3LCJzdWIiOiJhZ2VudC10b2tlbiJ9.gLkbHI54zIx2aaOrLvbROS1RN9ndD2wvZfvgIrHYkZAijlMoCchdPUAp64iOVMhUriAfNkR_-RNEnn48oa99d0-4mBlAaAxbKzz9I2fs5lhifa6xLn9-1KUWwLVV0TZcrNCS4TXXLSE8NyLtGwvoww_Tm1oqeHhCfiKtw7H8TSPnhvXKT30gcKV7LZEMFn-P6Fp_QcdnI6KrL29dmquN2hs-RUJcksumk8vSmgnO11DemuNfhmeBN_d5z4FBIGjOWKStCDp2WTdzaRx0KAqKHfR59oyqg3svAISuvck4nkjNeIr5aE53Vz2x0tPklle9vBmv_V4C11cZSj_6Y1SRlQ";
const requestOptions = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    },
};
let sectorSymbol = "";
let systemSymbol = "";
let waypointSymbol = "";
getAgentDetails(requestOptions);
function getAgentDetails(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch('https://api.spacetraders.io/v2/my/agent', requestOptions)
            .then(response => response.json())
            .then(data => {
            sectorSymbol = data.data.headquarters.substring(0, 2);
            systemSymbol = data.data.headquarters.substring(0, 7);
            waypointSymbol = data.data.headquarters;
        })
            .catch(error => console.error(error));
        startingLocation(requestOptions, systemSymbol, waypointSymbol);
    });
}
function startingLocation(requestOptions, systemSymbol, waypointSymbol) {
    fetch(`https://api.spacetraders.io/v2/systems/${systemSymbol}/waypoints/${waypointSymbol}/`, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

const token: string = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiWlVMVSIsInZlcnNpb24iOiJ2MiIsInJlc2V0X2RhdGUiOiIyMDIzLTA1LTIwIiwiaWF0IjoxNjg1MTA3ODY3LCJzdWIiOiJhZ2VudC10b2tlbiJ9.gLkbHI54zIx2aaOrLvbROS1RN9ndD2wvZfvgIrHYkZAijlMoCchdPUAp64iOVMhUriAfNkR_-RNEnn48oa99d0-4mBlAaAxbKzz9I2fs5lhifa6xLn9-1KUWwLVV0TZcrNCS4TXXLSE8NyLtGwvoww_Tm1oqeHhCfiKtw7H8TSPnhvXKT30gcKV7LZEMFn-P6Fp_QcdnI6KrL29dmquN2hs-RUJcksumk8vSmgnO11DemuNfhmeBN_d5z4FBIGjOWKStCDp2WTdzaRx0KAqKHfR59oyqg3svAISuvck4nkjNeIr5aE53Vz2x0tPklle9vBmv_V4C11cZSj_6Y1SRlQ";
const requestOptions: RequestInit = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
}
let sectorSymbol: string = "";
let systemSymbol: string = "";
let waypointSymbol: string = "";
let contract: contract;

getAgentDetails(requestOptions);
viewContracts(requestOptions);

async function getAgentDetails (requestOptions: RequestInit): Promise<void> {    
    await fetch('https://api.spacetraders.io/v2/my/agent', requestOptions)
    .then(response => response.json())
    .then(data => {
        sectorSymbol = data.data.headquarters.substring(0, 2);
        systemSymbol = data.data.headquarters.substring(0, 7);
        waypointSymbol = data.data.headquarters;               
    })
    .catch(error => console.error(error));
    startingLocation(requestOptions, systemSymbol, waypointSymbol);
}

function startingLocation(requestOptions: RequestInit, systemSymbol: string, waypointSymbol: string): void {    
    fetch(`https://api.spacetraders.io/v2/systems/${systemSymbol}/waypoints/${waypointSymbol}/`, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

function viewContracts(requestOptions: RequestInit): void {
    fetch('https://api.spacetraders.io/v2/my/contracts', requestOptions)
    .then(response => response.json())
    .then(data => contract = data.data[0])
    
}
interface contract {
    id: string;
    factionSymbol: string;
    type: string;
    terms: contractTerms;
    accepted: boolean;
    fulfilled: boolean;
    expiration: string;
    deadlineToAccept: string;
}
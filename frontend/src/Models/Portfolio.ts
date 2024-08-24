export type PortfolioGet = {
    id: number;
    symbol: string;
    companyName: string;
    purchase: number;
    lastDiv: number;
    industry: string;
    marketcap: number;
    comments: any;
}

export type PortfolioPost = {
    symbol: string;
}
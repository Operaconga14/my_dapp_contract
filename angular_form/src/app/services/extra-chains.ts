import { Chain } from "@wagmi/core";

export const hardhat = {
    id: 31337,
    name: 'Hardhat',
    network: 'Hardhat',
    nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH'
    },
    rpcUrls: {
        public: {http: ['http://127.0.0.1:8545'] },
        default: {http: ['http://127.0.0.1:8545']}
    },
    blockExplorers: {
        etherscan: {name: 'SnowTrace', url:'https://snowtrace.io'},
        default: {name: 'SnowTrace', url:'https://snowtrace.io'}
    }
} as Chain
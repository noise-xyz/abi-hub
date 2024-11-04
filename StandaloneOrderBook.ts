export const StandaloneOrderBookAddress = {
    84532: "0x8130471231617A00cDC0E24B225aE7B15c74EE86",
};

export const StandaloneOrderBookABI = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_fees",
                type: "address",
                internalType: "address",
            },
            {
                name: "_priceCacheDuration",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_collateralDecimals",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_maxLeverage",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_initialBalance",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "receive",
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "activateAccount",
        inputs: [
            {
                name: "_traderAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "_collateralAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "activateAccounts",
        inputs: [
            {
                name: "_traderAddresses",
                type: "address[]",
                internalType: "address[]",
            },
            {
                name: "_collateralAmounts",
                type: "uint256[]",
                internalType: "uint256[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "activated",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "addManager",
        inputs: [
            {
                name: "_manager",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "allTrades",
        inputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "tradeId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "trader",
                type: "address",
                internalType: "address",
            },
            {
                name: "collateralAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "leverage",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "positionSize",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "openPrice",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "closePrice",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "openTimestamp",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "closeTimestamp",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "isLong",
                type: "bool",
                internalType: "bool",
            },
            {
                name: "status",
                type: "uint8",
                internalType: "enum IStandaloneOrderBook.TradeStatus",
            },
            {
                name: "didGain",
                type: "bool",
                internalType: "bool",
            },
            {
                name: "pnl",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "balances",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "checkBalance",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "closeTrade",
        inputs: [
            {
                name: "_tradeId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_price",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "fees",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IFees",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getAllTrades",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "tuple[]",
                internalType: "struct IStandaloneOrderBook.Trade[]",
                components: [
                    {
                        name: "tradeId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "trader",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "collateralAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "leverage",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "positionSize",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "openPrice",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "closePrice",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "openTimestamp",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "closeTimestamp",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "isLong",
                        type: "bool",
                        internalType: "bool",
                    },
                    {
                        name: "status",
                        type: "uint8",
                        internalType: "enum IStandaloneOrderBook.TradeStatus",
                    },
                    {
                        name: "didGain",
                        type: "bool",
                        internalType: "bool",
                    },
                    {
                        name: "pnl",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getBalance",
        inputs: [
            {
                name: "_traderAddress",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getTrade",
        inputs: [
            {
                name: "_tradeId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct IStandaloneOrderBook.Trade",
                components: [
                    {
                        name: "tradeId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "trader",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "collateralAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "leverage",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "positionSize",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "openPrice",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "closePrice",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "openTimestamp",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "closeTimestamp",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "isLong",
                        type: "bool",
                        internalType: "bool",
                    },
                    {
                        name: "status",
                        type: "uint8",
                        internalType: "enum IStandaloneOrderBook.TradeStatus",
                    },
                    {
                        name: "didGain",
                        type: "bool",
                        internalType: "bool",
                    },
                    {
                        name: "pnl",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "openTrade",
        inputs: [
            {
                name: "_collateralAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_leverage",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_isLong",
                type: "bool",
                internalType: "bool",
            },
            {
                name: "_price",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "removeManager",
        inputs: [
            {
                name: "_manager",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "renounceOwnership",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "trades",
        inputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "tradeId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "trader",
                type: "address",
                internalType: "address",
            },
            {
                name: "collateralAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "leverage",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "positionSize",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "openPrice",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "closePrice",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "openTimestamp",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "closeTimestamp",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "isLong",
                type: "bool",
                internalType: "bool",
            },
            {
                name: "status",
                type: "uint8",
                internalType: "enum IStandaloneOrderBook.TradeStatus",
            },
            {
                name: "didGain",
                type: "bool",
                internalType: "bool",
            },
            {
                name: "pnl",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "transferOwnership",
        inputs: [
            {
                name: "newOwner",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "updateBalance",
        inputs: [
            {
                name: "_traderAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "_toAdd",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "AccountActivated",
        inputs: [
            {
                name: "account",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "BalanceUpdated",
        inputs: [
            {
                name: "account",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "newBalance",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "ManagerAdded",
        inputs: [
            {
                name: "manager",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "ManagerRemoved",
        inputs: [
            {
                name: "manager",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                name: "previousOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "newOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "TradeClosed",
        inputs: [
            {
                name: "tradeId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "trader",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "closedPositionSize",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "closePrice",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "didGain",
                type: "bool",
                indexed: false,
                internalType: "bool",
            },
            {
                name: "pnl",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "TradeOpened",
        inputs: [
            {
                name: "tradeId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "trader",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "collateralAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "leverage",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "positionSize",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "price",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "isLong",
                type: "bool",
                indexed: false,
                internalType: "bool",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "OwnableInvalidOwner",
        inputs: [
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "OwnableUnauthorizedAccount",
        inputs: [
            {
                name: "account",
                type: "address",
                internalType: "address",
            },
        ],
    },
];

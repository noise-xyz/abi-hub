export const FeesAddress = {
    84532: "0x4198773617D169b04FABDc8D8A15878C78035532",
};

export const FeesABI = [
    {
        type: "constructor",
        inputs: [
            {
                name: "initialBaseFundingFeeP",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "initialOpenFeeP",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "initialCloseFeeP",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "baseFundingFeeP",
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
        name: "closeFeeP",
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
        name: "decreaseOpenInterest",
        inputs: [
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "isLong",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "fundingFeePayers",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint8",
                internalType: "enum IFees.Side",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getBaseFundingFeeP",
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
        name: "getCloseFeeP",
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
        name: "getFundingFeeP",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "",
                type: "uint8",
                internalType: "enum IFees.Side",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getOpenFeeP",
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
        name: "openFeeP",
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
        name: "renounceOwnership",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "setBaseFundingFeeP",
        inputs: [
            {
                name: "newBaseFundingFeeP",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "setCloseFeeP",
        inputs: [
            {
                name: "newCloseFeeP",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "setOpenFeeP",
        inputs: [
            {
                name: "newOpenFeeP",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "totalOpenInterestLong",
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
        name: "totalOpenInterestShort",
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
        name: "updateOpenInterest",
        inputs: [
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "isLong",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "BaseFundingFeePUpdated",
        inputs: [
            {
                name: "newBaseFundingFeeP",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "CloseFeePUpdated",
        inputs: [
            {
                name: "newCloseFeeP",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "FundingFeePayersSwitched",
        inputs: [
            {
                name: "newFundingFeePayers",
                type: "uint8",
                indexed: false,
                internalType: "enum IFees.Side",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OpenFeePUpdated",
        inputs: [
            {
                name: "newOpenFeeP",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OpenInterestUpdated",
        inputs: [
            {
                name: "totalOpenInterestLong",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "totalOpenInterestShort",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
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
    {
        type: "error",
        name: "ReentrancyGuardReentrantCall",
        inputs: [],
    },
];

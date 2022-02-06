export const BlogABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_blogUri",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_flowRate",
				"type": "uint256"
			}
		],
		"name": "postBlog",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_blogId",
				"type": "uint256"
			}
		],
		"name": "getAuthor",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBlogCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_blogId",
				"type": "uint256"
			}
		],
		"name": "getBlogUri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
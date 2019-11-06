const Zaps = {
  lender: {
    id: 'lender',
    name: 'Lender',
    isOrderable: true,
    components: [
      {
        name: 'cDai',
        percent: 90
      },
      {
        name: 'dLETH2x',
        percent: 10
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: [
        'Lender Zap allocates incoming deposits 90% to cDai and 10% to dLETH2x.',
        'Therefore, if you send 1 ETH to this Lender.DeFiZap.eth, or buy from our website, 0.9 of your worth will go towards investing in Compound.Finance while 0.1 of your ETH will be used to open a Perpetual ETH Long with 2x leverage.',
        "Lender's Zap is interesting because, within a year, the interest generated from cDai could completely cover your margin trade purchase. Think of it as trading with your future interest earned.",
        'After sending your ETH, you will immediately receive allocated tokens (cDAI+dLETH2x) which track your DAI lending balance + margin trade position. Once you receive these tokens you can visit Compound.Finance to view/withdraw interest earned and Fulcrum.Trade to view your ROI/ close position on dLETH2x.'
      ],
      textLink: [
        {
          text: 'Check out this tutorial we made to help you use Fulcrum',
          hyperlink:
            'https://defitutorials.substack.com/p/margin-trading-with-fulcrum'
        },
        {
          text: 'Compound.',
          hyperlink:
            'https://defitutorials.substack.com/p/earn-passive-income-with-compound'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/lender-zap-walk-through-tutorial'
    }
  },
  ETHMaximalist: {
    id: 'ETHMaximalist',
    name: 'ETH Maximalist',
    isOrderable: true,
    components: [
      {
        name: 'dLETH2x',
        percent: 50
      },
      {
        name: 'dsWBTC',
        percent: 50
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: [
        'Your deposit is automatically split between bZx Perpetual Short WBTC (dsWBTC) and bZx Perpetual Long ETH-DAI 2x(dLETH2x).  For example, if you send 1 ETH to Ethmax.DeFiZap.eth or buy from our website, 0.5 of your ETH will go towards opening a Perpetual (without expiration) BTC Short position on Fulcrum exchange while 0.5 will be used to open a Perpetual ETH Long with 2x leverage.',
        'This means you will have exposure to 1 ETH (0.5X2) and 0.5 ETH’s worth of WBTC Short position. After sending your ETH, you will immediately receive allocated tokens (dsWBTC+dLETH2x) which track your trade positions.',
        'Soon you will be able to manage your positions and assets directly from DeFiZap Dashboard.'
      ],
      textLink: [
        {
          text: 'Check out this tutorial we made to help you use Fulcrum.',
          hyperlink:
            'https://defitutorials.substack.com/p/margin-trading-with-fulcrum'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/eth-maximalist-zap-walk-through-tutorial'
    }
  },
  moderatebull: {
    id: 'moderatebull',
    name: 'Moderate Bull',
    isOrderable: true,
    components: [
      {
        name: 'sETH',
        percent: 50
      },
      {
        name: 'sBTC',
        percent: 50
      }
    ],
    description: {
      textQuestion: 'What does Moderate Bull Zap do?',
      textAnswer: [
        'Your deposit is automatically allocated 50% to sBTC and 50% to sETH Synths which represent BTC and ETH long positions on Synthetix’s protocol.',
        'For example, if you send 1 ETH to ModerateBull.DeFiZap.Eth:',
        '0.5 of your ETH will go towards longing BTC by purchasing sBTC on Synthetix exchange.',
        '0.5 of your ETH will go towards longing ETH by purchasing sETH on Synthetix exchange.',
        'After sending your deposit, you will immediately receive allocated Synths (sBTC+sETH) which track your trade positions.',
        'Soon you will be able to manage your purchased assets right from DeFiZap Dashboard but for now you can visit Synthetix.Exchange to view balances and trade your Synths.'
      ],
      textLink: [
        {
          text:
            'Check out this tutorial to help you understand how Synthetix works.',
          hyperlink:
            'https://defitutorials.substack.com/p/the-ultimate-guide-to-synthetix'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/moderate-bull-defizap-walk-through'
    }
  },
  bullSharpe: {
    id: 'bullSharpe',
    name: 'Conservative Bull',
    isOrderable: false,
    components: [
      {
        name: 'cDai',
        percent: 90
      },
      {
        name: 'ETHMINVOL',
        percent: 10
      }
    ]
  },
  bearSharpe: {
    id: 'bearSharpe',
    name: 'Conservative Bear',
    isOrderable: false,
    components: [
      {
        name: 'cDai',
        percent: 90
      },
      {
        name: 'dSETH1x',
        percent: 10
      }
    ]
  },
  moderate: {
    id: 'moderate',
    name: 'Moderate',
    isOrderable: false,
    components: [
      {
        name: 'cDai',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 25
      },
      {
        name: 'ETHMINVOL',
        percent: 25
      }
    ]
  },
  moderateBear: {
    id: 'moderateBear',
    name: 'Moderate Bear',
    isOrderable: false,
    components: [
      {
        name: 'cDai',
        percent: 50
      },
      {
        name: 'ETHHIVOL',
        percent: 25
      },
      {
        name: 'ETH12EMA',
        percent: 25
      }
    ]
  },
  longTermBull: {
    id: 'longTermBull',
    name: 'Long Term Bull',
    isOrderable: false,
    components: [
      {
        name: 'cDai',
        percent: 20
      },
      {
        name: 'ETH20SMACO',
        percent: 40
      },
      {
        name: 'ETHMINVOL',
        percent: 40
      }
    ]
  },
  shortTermBear: {
    id: 'shortTermBear',
    name: 'Short Term Bear',
    isOrderable: false,
    components: [
      {
        name: 'cDai',
        percent: 20
      },
      {
        name: 'ETHHIVOL',
        percent: 40
      },
      {
        name: 'ETH12EMA',
        percent: 40
      }
    ]
  },
  shortTermFlat: {
    id: 'shortTermFlat',
    name: 'Short Term Flat',
    isOrderable: false,
    components: [
      {
        name: 'ETHMINVOL',
        percent: 50
      },
      {
        name: 'ETH20SMACO',
        percent: 25
      },
      {
        name: 'ETH12EMA',
        percent: 25
      }
    ]
  },
  moderateDiversified: {
    id: 'moderateDiversified',
    name: 'Moderate Diversified',
    isOrderable: false,
    components: [
      {
        name: 'cDai',
        percent: 25
      },
      {
        name: 'ETH12EMA',
        percent: 25
      },
      {
        name: 'ETH26EMA',
        percent: 25
      },
      {
        name: 'dLETH2x',
        percent: 25
      }
    ]
  },
  moderateFlat: {
    id: 'moderateFlat',
    name: 'Moderate Flat',
    isOrderable: false,
    components: [
      {
        name: 'cDai',
        percent: 25
      },
      {
        name: 'ETHMINVOL',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 25
      }
    ]
  },
  hedgedBull: {
    id: 'hedgedBull',
    name: 'Hedge Bull',
    isOrderable: false,
    components: [
      {
        name: 'cDai',
        percent: 50
      },
      {
        name: 'ETHMINVOL',
        percent: 40
      },
      {
        name: 'dLETH2x',
        percent: 10
      }
    ]
  },
  beginnerBull: {
    id: 'beginnerBull',
    name: 'Beginner Bull',
    isOrderable: false,
    components: [
      {
        name: 'ETHMINVOL',
        percent: 50
      },
      {
        name: 'ETH20SMA',
        percent: 50
      }
    ]
  },
  beginnerBear: {
    id: 'beginnerBear',
    name: 'Beginner Bear',
    isOrderable: false,
    components: [
      {
        name: 'cDai',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 25
      },
      {
        name: 'ETH26EMA',
        percent: 25
      }
    ]
  },
  activeBear: {
    id: 'activeBear',
    name: 'Active Bear',
    isOrderable: false,
    components: [
      {
        name: 'ETHHIVOL',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 25
      },
      {
        name: 'dSETH2x',
        percent: 25
      }
    ]
  },
  activeBull: {
    id: 'activeBull',
    name: 'Active Bull',
    isOrderable: false,
    components: [
      {
        name: 'ETHHIVOL',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 50
      }
    ]
  },
  flatLands: {
    id: 'flatLands',
    name: 'Flat Lands',
    isOrderable: false,
    components: [
      {
        name: 'ETHMINVOL',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 50
      }
    ]
  },
  shortTermBull: {
    id: 'shortTermBull',
    name: 'Short Term Bull',
    isOrderable: false,
    components: [
      {
        name: 'ETHMINVOL',
        percent: 50
      },
      {
        name: 'ETH20SMACO',
        percent: 50
      }
    ]
  },
  riskyBear: {
    id: 'riskyBear',
    name: 'Risky Bear',
    isOrderable: false,
    components: [
      {
        name: 'ETHHIVOL',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 25
      },
      {
        name: 'dLETH2x',
        percent: 25
      }
    ]
  },
  riskyBull: {
    id: 'riskyBull',
    name: 'Risky Bull',
    isOrderable: false,
    components: [
      {
        name: 'ETHMINVOL',
        percent: 25
      },
      {
        name: 'dLETH2x',
        percent: 75
      }
    ]
  }
};

export default Zaps;

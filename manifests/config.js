module.exports.config = {
  mainnet: {
    dataSources: [],
    templates: [],
  },
  "arbitrum-one": {
    dataSources: [],
    templates: [],
  },
  celo: {
    dataSources: [],
    templates: [],
  },
  kovan: {
    dataSources: [],
    templates: [],
  },
  xdai: {
    dataSources: [],
    templates: [],
  },
  rinkeby: {
    dataSources: [
      {
        name: "baalSummoner",
        template: "baal-summoner-ds.yaml",
        address: "0x31C948A5Ad149853B211de025082b61573ef3979",
        startBlock: 10305239,
      },
      {
        name: "poster",
        template: "poster-ds.yaml",
        address: "0x000000000000cd17345801aa8147b8d3950260ff",
        startBlock: 10305239,
      },
    ],
    templates: [
      {
        name: "baalTemplate",
        template: "baal-template.yaml",
      },
    ],
  },
  matic: {
    dataSources: [],
    templates: [],
  },
};

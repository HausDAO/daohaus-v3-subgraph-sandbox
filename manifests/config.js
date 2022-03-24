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
    dataSources: [
      {
        name: "baalSummoner",
        template: "baal-summoner-ds.yaml",
        address: "0x8C0463EAfc0B91d7A246CA391Dc4f81E9E6Bd029",
        startBlock: 30580833,
      },
      {
        name: "poster",
        template: "poster-ds.yaml",
        address: "0x37A2080f275E26fFEfB6E68F3005826368156C5C",
        startBlock: 30584424,
      },
      {
        name: "tributeEscrow",
        template: "tribute-escrow-ds.yaml",
        address: "0x3840453a3907916113db88bfac2349533a736c64",
        startBlock: 30581348,
      },
    ],
    templates: [
      {
        name: "baalTemplate",
        template: "baal-template.yaml",
      },
    ],
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
      {
        name: "tributeEscrow",
        template: "tribute-escrow-ds.yaml",
        address: "0x236320A4aa768772E9B2CeE21C22a8EEcD98C91B",
        startBlock: 10372038,
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

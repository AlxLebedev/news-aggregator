const presets = [
  [
    "@babel/env",
    {
      targets: {
        android: "67",
        chrome: "67",
        edge: "17",
        firefox: "61",
        ie: "11",
        ios: "11.3",
        safari: "11.1"
      },
      useBuiltIns: "usage", 
      corejs: "3.0.0", 
      "targets": { 
      "esmodules": true,
        "ie": "11"
      }
    },
  ],
];

module.exports = { presets };

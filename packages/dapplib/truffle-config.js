require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name rice noble pupil idea another army gas'; 
let testAccounts = [
"0xdb51a6ff79cfcead5b5aa1dc7e0adb6c8b607f6669001205d7093fc918c8d9e9",
"0x1d29f5e0e73a3b8a40b112789f2dc92f520deee90cd3d77e1d91dd0cc6c77534",
"0xfc6c91e959e9f146a9f385b4261ce49fa4dc7dd362213099e0d9aa6c1651365a",
"0xdc842241e4b1e401a3d54dea82d3c1124121653abdb2aba0c6e0a0358c0a5c5d",
"0x399fb9116cbb1b9af16ecf489d7b7c82b8ff6db1df5ee3229d9d72fed6694820",
"0xa0128176908f6b2158cc5b5ce80bc814b914958b0a003fdd7d20ef9b0d9a0b35",
"0xcaf4a736ef70fe76cf7bca5380986dbad0cb0c01e72b419f25c187fd4f639ed9",
"0x5df194b471329b09ada212cf8c9ee8ad1800bebbdb96ff0f76182580beb46422",
"0x68ecd401e7068d987c36a1ed5e7b57cb10528d304265149685cc94ac38ce47e6",
"0x25a7096e26db0e1e5eb3b0b97f591bb40bf8b5aaf5fe79a48068f36711670f83"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

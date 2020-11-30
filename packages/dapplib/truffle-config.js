require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow foot alien rebel saddle horn gentle light army giant'; 
let testAccounts = [
"0x17e021ad9808602ad83099accfca329b7474c74d0586acec33395f93184d0a75",
"0x4eff2a039a5f12482ef4fe28c4446659911a3d0e2b4e9b365a841ff072e74ffd",
"0xdcd6d652c438a963faf14261529a5bd1730e3d6fcd26c6d077af05934316b39e",
"0x53fcfe5ebe0125ec93fdd870541e99b4e3167337411a0c58aabc1cca3f7d3842",
"0x1279f6e063730ba5a7043e6511f0b581a62bf1803feef54803ccb4fb297f9fbb",
"0x68000176c282a02fcc2d031f1889ae00f194969694735fd70fe6b8036036f39f",
"0xf92b9e2a14df3a24aa6b63fe475de7c1572829261d3dc883134ad2310455c781",
"0x8898163f5c6ec2f47314b0b2fc200a887e8fd6a61ae160eb9f3e030d01a0c827",
"0x836177c04ba21c827f73e7baa85a2227c956bddd387f7e9f639ef2c0c134080c",
"0xb96f23647ed45fb664e8abf0b98b4500d1e636d5235a57b7288384dad6e2604f"
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

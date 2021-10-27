import { RINKEBY, AVA_MAINNET } from "../abi/config";

const selectNetwork = (chainId) => {
  switch (chainId) {
    case 888:
      return AVA_MAINNET;
    default:
      return RINKEBY;
  }
};

export const getAddress = (contractName, chainId) => {
  const networkList = selectNetwork(chainId);
  let address = networkList[contractName];
  if (address) {
    return address.toLowerCase();
  } else {
    return null;
  }
};

export const getChainId = async () => {
  if (typeof window.ethereum !== "undefined") {
    const chainId = await window.WEB3.eth.net.getId();
    return chainId;
  } else {
    const walletConnectProvider = new WalletConnectProvider({
      infuraId: "3cd774e14cf34ff78167908f8377051c", // Required
    });
    if (walletConnectProvider.networkId) {
      return walletConnectProvider.networkId;
    } else {
      return 1;
    }
  }
};

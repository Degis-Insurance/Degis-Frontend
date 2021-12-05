import _CollapseTransition from "element-plus/lib/el-collapse-transition";
import { RINKEBY, AVA_MAINNET, FUJI} from "../abi/config";

const selectNetwork = (chainId) => {
  switch (chainId) {
    case 4:
      return RINKEBY;
    case 43113:
      return FUJI;
    default:
      alert("Wrong network, place switch to FUJI(43113).", chainId)
  }
};

export const getAddress = async (contractName, chainId) => {
  const networkList = await selectNetwork(chainId);
  let address = networkList[contractName];
  if (address) {
    return address.toLowerCase();
  } else {
    return null;
  }
};

export const getChainId = async () => {
  if (typeof window.ethereum !== "undefined") {
    var chainId;
    try {
      chainId = await window.WEB3.eth.getChainId();
    }
    catch (e) {
      console.log('Abnormal Chain ID');
      chainId = 43113;
    }
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

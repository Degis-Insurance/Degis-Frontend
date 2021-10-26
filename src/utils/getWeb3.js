import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

export const getWeb3 = async () => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // required
      },
    },
  };
  let web3Modal = new Web3Modal({
    network: "rinkeby",
    cacheProvider: false,
    providerOptions,
    disableInjectedProvider: false,
  });

  await web3Modal.clearCachedProvider();

  const provider = await web3Modal.connect();
  let web3 = new Web3(provider);
  return web3;
};

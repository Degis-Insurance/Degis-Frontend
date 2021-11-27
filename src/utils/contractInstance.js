import { getWeb3 } from "./getWeb3";
import { RINKEBY } from "../abi/config";

import { getAddress, getChainId } from "./contractAddress";

// import abis
import Degis_abi from "../abi/DegisToken.json";
import MockUSD_abi from "../abi/MockUSD.json";
import InsurancePool_abi from "../abi/InsurancePool.json";
import LPToken_abi from "../abi/LPToken.json";
import PolicyFlow_abi from "../abi/PolicyFlow.json";
import DegisLottery_abi from "../abi/DegisLottery.json";
import NaughtyFactory_abi from "../abi/NaughtyFactory.json";
import NaughtyRouter_abi from "../abi/NaughtyRouter.json";
import PolicyCore_abi from "../abi/PolicyCore.json";
import PolicyToken_abi from "../abi/PolicyToken.json";
import NaughtyPair_abi from "../abi/NaughtyPair.json";

export const getCurrentAccount = async () => {
  return getWeb3().then((res) => res.currentProvider.selectedAddress);
};

export const getDegis = async () => {
  const web3 = await getWeb3();
  const chainId = getChainId();
  return await new web3.eth.Contract(
    Degis_abi.abi,
    getAddress("DEGIS", chainId)
  );
};

export const getMockUSD = async () => {
  const web3 = await getWeb3();
  const chainId = getChainId();
  return await new web3.eth.Contract(
    MockUSD_abi.abi,
    getAddress("MOCKUSD", chainId)
  );
}

export const getInsurancePool = async () => {
  const web3 = await getWeb3();
  const chainId = getChainId();
  return await new web3.eth.Contract(
    InsurancePool_abi.abi,
    getAddress("INSURANCEPOOL", chainId)
  );
}

export const getLPToken = async () => {
  const web3 = await getWeb3();
  const chainId = getChainId();
  return await new web3.eth.Contract(
    LPToken_abi.abi,
    getAddress("LPTOKEN", chainId)
  );
}

export const getPolicyFlow = async () => {
  const web3 = await getWeb3();
  const chainId = getChainId();
  return await new web3.eth.Contract(
    PolicyFlow_abi.abi,
    getAddress("POLICYFLOW", chainId)
  );
}

export const getDegisLottery = async () => {
  const web3 = await getWeb3();
  const chainId = getChainId();
  return await new web3.eth.Contract(
    DegisLottery_abi.abi,
    getAddress("DEGISLOTTERY", chainId)
  );
}

export const getNaughtyFactory = async () => {
  const web3 = await getWeb3();
  const chainId = getChainId();
  return await new web3.eth.Contract(
    NaughtyFactory_abi.abi,
    getAddress("NAUGHTYFACTORY", chainId)
  );
}

export const getNaughtyRouter = async () => {
  const web3 = await getWeb3();
  const chainId = getChainId();
  return await new web3.eth.Contract(
    NaughtyRouter_abi.abi,
    getAddress("NAUGHTYROUTER", chainId)
  );
}

export const getPolicyCore = async () => {
  const web3 = await getWeb3();
  const chainId = getChainId();
  return await new web3.eth.Contract(
    PolicyCore_abi.abi,
    getAddress("POLICYCORE", chainId)
  );
}

export const getPolicyToken = async (tokenAddress) => {
  const web3 = await getWeb3();
  const chainId = getChainId();
  return await new web3.eth.Contract(
    PolicyToken_abi.abi,
    tokenAddress
  );
}

export const getNaughtyPair = async (pairAddress) => {
  const web3 = await getWeb3();
  const chainId = getChainId();
  return await new web3.eth.Contract(
    NaughtyPair_abi.abi,
    pairAddress
  );
}

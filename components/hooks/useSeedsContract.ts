import { utils, BigNumber } from "ethers";
import { useSigner, useContractRead } from "wagmi";
import SeedsABI from "./SeedsABI.json";

export const SEEDS_CONTRACT_ADDRESS =
  "0xbcdf4823fc65e6aa243963f955fd5ce885066306";
export const useSeedsContract = (): {
  seedPrice: string;
  seedsSupply: string;
} => {
  const { data: seedPrice } = useContractRead({
    addressOrName: SEEDS_CONTRACT_ADDRESS,
    contractInterface: SeedsABI,
    functionName: "unitPrice",
  });
  const { data: totalSupply } = useContractRead({
    addressOrName: SEEDS_CONTRACT_ADDRESS,
    contractInterface: SeedsABI,
    functionName: "totalSupply",
  });

  return {
    seedPrice: utils.formatEther(
      BigNumber.isBigNumber(seedPrice) ? seedPrice : 0
    ),
    seedsSupply: BigNumber.isBigNumber(totalSupply)
      ? totalSupply.toString()
      : "0",
  };
};

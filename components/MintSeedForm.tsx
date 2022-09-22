import React, { FC, useState, useCallback, ChangeEvent, useRef } from "react";
import { utils } from "ethers";
import { useAccount, useConnect, useContractWrite } from "wagmi";
import { shortAddress } from "./helpers/shortAddress";
import SeedsABI from "./hooks/SeedsABI.json";
import {
  useSeedsContract,
  SEEDS_CONTRACT_ADDRESS,
} from "./hooks/useSeedsContract";
import { useEtherPrices } from "./hooks/useEtherPrices";
import styles from "./MintSeed.module.scss";

export const MintSeedForm: FC = () => {
  const { address } = useAccount();
  const { connect, connectors } = useConnect();
  const [error, setError] = useState<string | null>(null);
  const [minting, setMinting] = useState(false);
  const [minted, setMinted] = useState(false);
  const { seedPrice } = useSeedsContract();
  const [quantity, setQuantity] = useState<number | undefined>();
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const { usdPrice } = useEtherPrices();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  }, []);

  const totalPriceEth = Math.max(0, (quantity || 0) * parseFloat(seedPrice));
  // const totalPriceUSD = usdPrice ? totalPriceEth * usdPrice : 0;

  const { write: mintSeed } = useContractWrite({
    mode: "recklesslyUnprepared",
    addressOrName: SEEDS_CONTRACT_ADDRESS,
    contractInterface: SeedsABI,
    functionName: "mint",
    args: [quantity],
    overrides: { value: utils.parseEther(`${totalPriceEth}`) },
    onError: (e: string | Error) => {
      setMinting(false);
      if (
        e === "execution reverted: Not Enough Ether" ||
        (e instanceof Error && e.message.includes("Not Enough Ether")) ||
        (typeof e === "string" && e.includes("Not Enough Ether"))
      ) {
        setError("Not enough funds in your wallet");
        return;
      }
      let err: string;
      if (e instanceof Error) {
        err = e.message;
      } else if (typeof e === "string") {
        err = e;
      } else {
        err = `${e}` as string;
      }
      setError(err);
    },
    onSuccess: () => {
      setError(null);
      setMinting(false);
      setMinted(true);
    },
  });

  const handleSubmit = useCallback(async () => {
    if (!quantity || quantity <= 0) {
      alert("You can only mint one or more seeds.");
    } else {
      setError(null);
      setMinting(true);
      mintSeed?.();
    }
  }, [quantity, mintSeed]);
  return (
    <div>
      <div className={styles.inputWrapper}>
        <input
          className="form-control"
          id="quantity"
          name="quantity"
          type="number"
          value={quantity}
          onChange={handleChange}
          placeholder="1 or more"
        />
        {address && (
          <div className={styles.mintButtonWrapper}>
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={!address}
            >
              Mint
            </button>
            <span className={styles.address}>{shortAddress(address)}</span>
          </div>
        )}
        {!address && !connectModalOpen && (
          <button
            className={`btn btn-primary ${styles.connectButton}`}
            onClick={() => setConnectModalOpen(true)}
          >
            Connect Wallet to Mint
          </button>
        )}
        {!address && connectModalOpen && (
          <div className={styles.connectButtons}>
            {connectors.map((connector) => (
              <button
                key={connector.name}
                className={`btn btn-primary ${styles.connectButton}`}
                onClick={() => connect({ connector })}
              >
                {connector.name}
              </button>
            ))}
            <button
              className={`btn btn-danger ${styles.connectButton}`}
              onClick={() => setConnectModalOpen(false)}
            >
              x
            </button>
          </div>
        )}
      </div>
      <div className={styles.balanceRow}>
        {error && <span className={styles.error}>{error}</span>}
        {!error && minting && (
          <span className={styles.loading}>Minting...</span>
        )}
        {!error && !minting && minted && (
          <span className={styles.success}>
            {`Minted! View your seeds at `}
            <a
              href="https://seeds.lobus.io/wallet"
              target="_blank"
              rel="noreferrer"
            >
              seeds.lobus.io
            </a>
          </span>
        )}
      </div>
    </div>
  );
};

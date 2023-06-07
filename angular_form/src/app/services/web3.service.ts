import { Injectable } from '@angular/core';
import { EthereumClient, w3mConnectors, w3mProvider} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/html';
import { arbitrum, mainnet, polygon } from '@wagmi/core/chains';
import { hardhat } from './extra-chains';
import { environment } from 'src/environments/enviroment';
import { ethers } from 'ethers';
import { BehaviorSubject } from 'rxjs';
import { FallbackTransport } from 'viem';
import { 
  configureChains, 
  createConfig, 
  PublicClient, 
  fetchBalance, 
  Chain, 
  getContract,
  watchAccount,
  watchNetwork,
  Unit,
  getAccount,
  readContract,
  getWalletClient,
  getPublicClient,
  switchNetwork,  
  getNetwork,
  fetchToken,
  erc721ABI} from '@wagmi/core';
  import {MetaMaskConnector} from '@wagmi/core/connectors/metaMask'
  

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

 chains = [mainnet, arbitrum, polygon , hardhat]
 projectId = environment.WalletConnectProjectId;
 web3Modal: Web3Modal | undefined;

 publicClient: ({chainId}: {
  chainId?: number | number;
 }) => PublicClient<FallbackTransport, Chain>;

 private _chainId$ = new BehaviorSubject<number|undefined>(undefined);

 public chainId$ = this._chainId$.asObservable()
  ethereumClient: EthereumClient;

  connector = new MetaMaskConnector({
    chains: [mainnet, polygon, arbitrum, hardhat]
  })

 public get chainId() {
  return this._chainId$.value;
 }

 unwatchNetwork : any

 private _account$ = new BehaviorSubject<string | undefined>(undefined);

 public accounts$ = this._account$.asObservable()

 public get account() {
  return this._account$.value;
 }

 unwatchAccount: any;
 
  constructor() {
    
    const {publicClient} = configureChains(this.chains,
      [w3mProvider({projectId: this.projectId})])
      this.publicClient = publicClient;
      const wagmiClient = createConfig({
        autoConnect: true,
        connectors: w3mConnectors({projectId: this.projectId, version: 1, chains: this.chains}),
        publicClient
      })
      this.ethereumClient = new EthereumClient(wagmiClient, this.chains)
      this.web3Modal = new Web3Modal({
        projectId: this.projectId,
        themeMode: "dark",
      }, this.ethereumClient)

      setTimeout(() => {
        const {chain: connectedChain, chains} = getNetwork();
        if (connectedChain && !connectedChain.unsupported) {
          this._chainId$.next(connectedChain.id);
        }

        const {address, isConnected} = getAccount();
        if (isConnected) {
          this._account$.next(address);
        }

        // Update chainId on change
        this.unwatchNetwork = watchNetwork((network) => {
          if (network.chain && !network.chain.unsupported) {
            this._chainId$.next(network.chain?.id);
          } else {
            this._chainId$.next(undefined);
          }
        })

        this.unwatchAccount = watchAccount((account) => {
          if (account && account.isConnected) {
            this._account$.next(account.address);
          } else {
            this._account$.next(undefined);
          }
        })
      }, 100);
   }

   async connectAccount() {
    // this.web3Modal?.openModal();
    this.connector.connect()
   }

   async getAccountInfo() {
    return getAccount();
  }

  async getBalanceNativeCurrency(account: `0x${string}`, formatUnits: Unit | undefined = undefined) {
    return await fetchBalance({
      address: account,
      formatUnits
    });
  }


  async getBalanceERC20(tokenAddress: `0x${string}`, account: `0x${string}`, formatUnits: Unit | undefined = undefined) {
    return await fetchBalance({
      address: account,
      formatUnits,
      token: tokenAddress
    });
  }

  async getTokenInfo(tokenAddress: `0x${string}`, chainId: number|undefined, formatUnits: Unit | undefined = undefined) {
    return await fetchToken({
      address: tokenAddress,
      chainId,
      formatUnits
    });
  }

  async getERC721TokenInfo(tokenAddress: `0x${string}`, chainId?: number|undefined) {
    const erc721 = await getContract({
      address: tokenAddress,
      abi: erc721ABI,
      chainId
    })

    return ({
      address: tokenAddress,
      name: await erc721.read.name(),
      symbol: await erc721.read.symbol()
      
    });
  }

  getNetwork() {
    const { chain, chains } = getNetwork();
    return {
      connectedChain: chain,
      supportedChains: chains
    };
  }

  
  async switchNetwork(chainId: number) {
    await switchNetwork({
      chainId
    })
  }
}

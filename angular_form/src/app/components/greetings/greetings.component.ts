import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fetchTransaction, getPublicClient, getWalletClient, readContract, signMessage } from '@wagmi/core';
import { Contract, Signer, ethers } from 'ethers';
import { parseEther } from 'ethers/lib/utils';
import { delay } from 'rxjs';
import { hardhat } from 'src/app/services/extra-chains';
import { Web3Service } from 'src/app/services/web3.service';
import { environment } from 'src/environments/enviroment';
import { zeroAddress } from 'viem';
import { goerli, mainnet } from 'viem/chains';

const MessangerAbi = require('../../../assets/abi/messanger.json')
@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss']
})
export class GreetingsComponent implements OnInit{

  messages: any;

 alertMessages = {
  subject: {
    required: 'subject is required',
    minlength: 'subject too short'
  },
  message: {
    required: 'message is required',
    minlength: 'message too short'
  }
 }

 constructor(
  private w3s: Web3Service,
  private router: Router,
 ) {}

 

 ngOnInit(): void {

 }

 userMessages = new FormGroup ({
  subject: new FormControl('HelloHwii', [Validators.required, Validators.minLength(5)]),
  message: new FormControl('Hjhshhwywywhuwuwuwuhweuhweuhweuh', [Validators.required, Validators.minLength(8)])
 })

 get subject(): FormControl {
  return this.userMessages.get('subject') as FormControl;
 }

 get message(): FormControl {
  return this.userMessages.get('message') as FormControl;
 }

 get f() {return this.userMessages!.controls}

 async getMessage() {
  
  const walletClient = await getWalletClient({
    chainId: this.w3s.chainId
  })

  const publicClient = await getPublicClient({
    chainId: this.w3s.chainId
  })

  const [address] = await walletClient!.getAddresses()

  const {request} = await publicClient.simulateContract({
    abi: MessangerAbi,
    address: environment.MessangerAddress as `0x${string}`,
    functionName: 'updateMessage',
    account: address,
    args: [this.f.subject.value, this.f.message.value, {
      id:0,
    }]
  })

  const hash = await walletClient!.writeContract(request);

  await publicClient.waitForTransactionReceipt(
    {hash: hash}
  )

  await delay(3000);
  const transaction = await fetchTransaction({
    hash,

  })
  
 }
  
 }

// console.log(this.userMessages.value);
 // let messages = await greetingsContract.
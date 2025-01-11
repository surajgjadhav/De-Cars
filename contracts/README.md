# Couter App: Contracts

This is a [foundry](https://getfoundry.sh/) Project with [Soldeer](https://book.getfoundry.sh/reference/cli/forge/soldeer) dependency manager

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [foundry](https://getfoundry.sh/)
  - You'll know you did it right if you can run `forge --version` and you see a response like `forge 0.2.0`

## Quickstart

```
git clone https://github.com/surajgjadhav/web3-fullstack-starter-kit
cd web3-fullstack-starter-kit/contracts
forge build
```

## Usage

### Start a local node

```
make anvil
```

### Deploy

This will default to your local node. You need to have it running in another terminal in order for it to deploy.

```shell
make deploy
```

To deploy contract on another chain

```shell
forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Test

```shell
forge test
```

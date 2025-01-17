
DEFAULT_ANVIL_KEY := 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

build:; forge build

test :; forge test 

coverage :; forge coverage --report debug > coverage-report.txt

snapshot :; forge snapshot

format :; forge fmt

anvil :; anvil

NETWORK_ARGS := --rpc-url http://127.0.0.1:8545 --private-key $(DEFAULT_ANVIL_KEY) --broadcast

ifeq ($(findstring --network amoy,$(ARGS)),--network amoy)
	NETWORK_ARGS := --chain-id 80002 --rpc-url $(AMOY_RPC_URL) --private-key $(PRIVATE_KEY) --etherscan-api-key $(ETHERSCAN_API_KEY) --verifier-url https://api.polygonscan.com/api --broadcast --verify -vvvv
endif

deploy:
	@forge script script/DeployIssuer.s.sol:DeployIssuer $(NETWORK_ARGS)
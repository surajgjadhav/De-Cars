import { GET_LISTED_NFT_INFO, GET_NFT_INFO } from "@/utils/queryConstants";
import { useQuery } from "@tanstack/react-query";
import { CarMetadata } from "../usePinata";
import { serialize } from "wagmi";

export interface MyNFT {
  id: bigint;
  listingStatus: boolean;
  owner: `0x${string}`;
  tokenURI: string;
}

export interface NftInfo extends MyNFT {
  metadata: CarMetadata;
}

export interface ProfileInfo {
  nftInfo: NftInfo;
}

const fetchTokenUri = async (tokenURI: MyNFT["tokenURI"]) => {
  const resp = await fetch(tokenURI, { method: "GET" });
  const responseJson = (await resp.json()) as { metadata: CarMetadata };
  const metadata = responseJson.metadata;
  console.log("metadata: ", metadata);

  return metadata;
};

const getNftMetadata = async (nfts: MyNFT[]) => {
  const fetcdhNftURIs = nfts.map((nft) => fetchTokenUri(nft.tokenURI));
  const metaDatas = await Promise.all(fetcdhNftURIs);
  const nftInfo = metaDatas.map((metaData, index) => {
    return { ...nfts[index], metaData };
  });

  return {
    nftInfo,
  };
};

export const useNftMetadata = ({
  nfts,
  enabled,
}: {
  nfts: MyNFT[];
  enabled: boolean;
}) => {
  console.log("NFTs: ", nfts);
  const queryKey = nfts.map((nft) => serialize({ value: nft.id }));

  return useQuery({
    queryFn: () => getNftMetadata(nfts),
    queryKey: [GET_LISTED_NFT_INFO, queryKey],
    enabled,
  });
};

export const useNftMetadataById = ({
  tokenURI,
  enabled,
}: {
  tokenURI: string;
  enabled: boolean;
}) => {
  return useQuery({
    queryFn: () => fetchTokenUri(tokenURI),
    queryKey: [GET_NFT_INFO, tokenURI],
    enabled,
  });
};

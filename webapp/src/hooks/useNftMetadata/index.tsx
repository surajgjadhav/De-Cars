import { GET_PROFILE_INFO } from "@/utils/queryConstants";
import { useQuery } from "@tanstack/react-query";
import { CarMetadata } from "../usePinata";

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
  const metadata = (await resp.json()) as CarMetadata;
  return metadata;
};

const getNftMetadata = async (nfts: MyNFT[]) => {
  const fetcdhNftURIs = nfts.map((nft) => fetchTokenUri(nft.tokenURI));
  const metaData = await Promise.all(fetcdhNftURIs);
  const nftInfo = metaData.map((metaData, index) => {
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
  return useQuery({
    queryFn: () => getNftMetadata(nfts),
    queryKey: [GET_PROFILE_INFO, nfts],
    enabled,
  });
};

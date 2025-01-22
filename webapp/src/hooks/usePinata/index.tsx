import { UPLOAD_NFT_METADATA } from "@/utils/queryConstants";
import { useMutation } from "@tanstack/react-query";

export interface DeCarsAttributes {
  trait_type: string;
  value: string | number;
}

export interface CarMetadata {
  name: string;
  description: string;
  image: string;
  attributes: DeCarsAttributes[];
}

export interface UploadFileRes {
  tokenURI: string;
}
export const uploadFile = async (
  metdata: CarMetadata
): Promise<UploadFileRes> => {
  try {
    const uploadRequest = await fetch("/api/pinata", {
      method: "POST",
      body: JSON.stringify(metdata),
    });
    const resp = await uploadRequest.json();
    return resp as UploadFileRes;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const usePinataUploadJSON = () => {
  return useMutation({
    mutationFn: (metadata: CarMetadata) => uploadFile(metadata),
    mutationKey: [UPLOAD_NFT_METADATA],
  });
};

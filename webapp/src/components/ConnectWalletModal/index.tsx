import { IconButton, Modal } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "@rainbow-me/rainbowkit/styles.css";

const ConnectWalletModal = ({
  open,
  modalClose,
}: {
  open: boolean;
  modalClose: () => void;
}) => {
  return (
    <Modal
      keepMounted
      open={open}
      onClose={modalClose}
      aria-labelledby="please-connect-modal"
      aria-describedby="keep-mounted-modal-description"
    >
      <div className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 w-auto p-6 bg-neutral-50 rounded-lg">
        <div className="flex justify-end">
          <IconButton onClick={modalClose}>
            <CloseRoundedIcon />
          </IconButton>
        </div>
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="text-xl font-semibold">Wallet not connected!</div>
          <div className="text-lg">
            Connect your wallet to continue with the purchase.
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConnectWalletModal;

"use client";

import ErrorComp from "@/components/ErrorComp";

export default function GlobalError({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <ErrorComp
          btnText="Try again"
          onClickBtn={() => reset()}
          errImage="/try-again.png"
        />
      </body>
    </html>
  );
}

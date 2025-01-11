import { useReadCounter } from "@/generated";
import { useQueryClient } from "@tanstack/react-query";

const useInvalidateCounterQuery = () => {
  const queryClient = useQueryClient();
  const { queryKey } = useReadCounter();

  const invalidateReadCounter = () =>
    queryClient.invalidateQueries({ queryKey });

  return { invalidateReadCounter };
};

export default useInvalidateCounterQuery;

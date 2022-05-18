import { useMutation, useQueryClient } from 'react-query';
import { queryKeys } from '../constants/queries';
import { createNewBoard } from '../utils/boards-api';

const useCreatingBoard = () => {
  const queryClient = useQueryClient();

  return useMutation(async (boardName: string) => {
    await createNewBoard(boardName);
    await queryClient.refetchQueries(queryKeys.allBoards);
  });
};

export default useCreatingBoard;

import React from 'react';
import { useFormik } from 'formik';
import useCreatingBoard from '../../hooks/use-creating-board';
import validationSchema from './validationSchema';
import StyledButton from '../../styles/components/StyledButton';
import { StyledInput, StyledForm } from './styles';

interface BoardFormProps {
  closeModal: () => void;
}

const BoardForm = ({ closeModal }: BoardFormProps) => {
  const createBoard = useCreatingBoard();
  const initialValues = {
    boardName: '',
  };

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: ({ boardName }) => {
      createBoard.mutateAsync(boardName);
      closeModal();
    },
  });

  return (
    <StyledForm onSubmit={handleSubmit}>
      <p>Enter the name of the new board</p>
      <section>
        <StyledInput
          id="boardName"
          name="boardName"
          value={values.boardName}
          onChange={handleChange}
        />
        {touched.boardName && errors.boardName ? <span>{errors.boardName}</span> : null}
      </section>
      <StyledButton variant="primary" type="submit">
        Create
      </StyledButton>
    </StyledForm>
  );
};

export default BoardForm;

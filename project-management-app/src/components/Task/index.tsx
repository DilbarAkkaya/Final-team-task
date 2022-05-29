import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useUpdateTask, useRemoveTask } from '../../hooks';
import { TaskDetailed } from '../../interfaces/task';
import { useTaskSelector } from '../../store/selectors';
import { onCloseTaskModal } from '../../store/slices/task';
import {
  StyledForm,
  StyledInput,
  StyledTextarea,
  StyledButtonsContainer,
  StyledButton,
  StyledButtonSubmit,
} from './styles';

function Task() {
  const { id: boardId } = useParams();
  const { taskModal, tasksByColumns: allColumns } = useTaskSelector();
  const { taskId, ...task } = taskModal;
  const dispatch = useDispatch();

  const columnId = task.columnId ? task.columnId : '';
  const updateTask = useUpdateTask({ columnId });
  const removeTask = useRemoveTask({ boardId, columnId });

  const column = columnId ? allColumns[columnId] : null;
  const taskData = column ? column.find((task) => task.id === taskId) : null;

  const initialValues = {
    title: taskData ? taskData.title : '',
    description: taskData ? taskData.description : '',
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues,
    onSubmit: async ({ title, description }) => {
      const updatedTaskData = { ...(taskData as TaskDetailed), title, description };
      updateTask.mutateAsync(updatedTaskData);
    },
  });

  const handleRemoveTask = () => {
    if (taskId) {
      removeTask.mutateAsync(taskId as string);
      dispatch(onCloseTaskModal());
    }
  };

  if (taskData && task.isOpen) {
    return (
      <StyledForm onSubmit={handleSubmit} onReset={handleRemoveTask}>
        <StyledInput id="title" name="title" value={values.title} onChange={handleChange} />
        <StyledTextarea
          id="description"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <StyledButtonsContainer>
          <StyledButton type="reset">Delete</StyledButton>
          <StyledButtonSubmit type="submit">Update</StyledButtonSubmit>
        </StyledButtonsContainer>
      </StyledForm>
    );
  }
  return null;
}

export default Task;

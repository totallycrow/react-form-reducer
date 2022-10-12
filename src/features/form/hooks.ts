export const useFormActions = () => {
  const dispatch = useDispatch();

  const setInputs = useCallback(
    (preparedFields) => dispatch(setInputs(preparedFields)),
    [dispatch]
  );

  return { setInputs };
};

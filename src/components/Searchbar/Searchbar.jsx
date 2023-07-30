import { toast } from 'react-toastify';
import { Button, FormStyle, Header, Input } from './Searchbar.styled';
import { Formik } from 'formik';
import { FcSearch } from 'react-icons/fc';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (value, actions) => {
    if (value.searchValue.trim() === '') {
      toast.error(
        'The search field cannot be empty. Please enter a search query.'
      );
      return;
    }
    onSubmit(value.searchValue.trim().toLowerCase());
    actions.resetForm();
  };
  return (
    <Header>
      <Formik initialValues={{ searchValue: '' }} onSubmit={handleSubmit}>
        <FormStyle>
          <Input
            name="searchValue"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <Button type="submit">
            <FcSearch />
          </Button>
        </FormStyle>
      </Formik>
    </Header>
  );
};

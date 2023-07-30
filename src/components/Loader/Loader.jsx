import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      height={100}
      width={100}
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      color="#1b9fa8'"
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
    />
  );
};

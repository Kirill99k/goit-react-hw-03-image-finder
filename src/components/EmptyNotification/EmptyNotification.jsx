import { EmptyText, Empty } from './EmptyNotification.styled';

export const EmptyNotification = () => {
  return (
    <Empty>
      <EmptyText>
        Sorry, there are no images matching your query. Please try to search
        something else... 🙄
      </EmptyText>
    </Empty>
  );
};

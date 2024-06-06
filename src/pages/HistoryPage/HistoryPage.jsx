/* TODO: 
  Сокращаем пути для удобства использования через файл index.ts
  */
import { HistoryList } from '../../components/History/HistoryList';
import { StyledTitle } from '../../components/History/styled/StyledTitle';

export const HistoryPage = () => {
    return (
        <>
            <StyledTitle>История</StyledTitle>
            <HistoryList />
        </>
    );
};

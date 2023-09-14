import React, { useEffect, useState } from 'react';
import { Styled_History } from './History.style';
import { getOrderHistory } from '../../../api/GetApi';
import { OrderHistoryType } from '../../../model/paymentType';
import PaginationBox from '../../pagination_box/PaginationBox';
import { useRecoilValue } from 'recoil';
import { PageAtom } from '../../../recoil/Sidebars';

interface FullType {
  message?: string;
  deleteClicked: boolean;
}

const Full = ({ message, deleteClicked }: FullType) => {
  const [orderHistory, setOrderHistory] = useState<OrderHistoryType>();
  const page = useRecoilValue(PageAtom);

  useEffect(() => {
    getOrderHistory(page).then(data => {
      setOrderHistory(data);
    });
  }, [page, deleteClicked]);

  return (
    <Styled_History.Container>
      <Styled_History.H1>전체 주문 내역</Styled_History.H1>
      <Styled_History.MessageSpan>{message}</Styled_History.MessageSpan>
      <Styled_History.Table>
        <thead>
          <tr>
            <Styled_History.Th className="date">주문일자</Styled_History.Th>
            <Styled_History.Th className="number">주문번호</Styled_History.Th>
            <Styled_History.Th className="books">도서</Styled_History.Th>
            <Styled_History.Th className="status">상태</Styled_History.Th>
          </tr>
        </thead>
        <tbody>
          {orderHistory && orderHistory.data.length > 0 ? (
            orderHistory.data.map((v, i) => {
              return (
                <Styled_History.Tr key={i}>
                  <td>{new Date(v.createdAt).toLocaleDateString()}</td>
                  <td>{v.id}</td>
                  <td>
                    <Styled_History.BookListDiv>
                      {v.orderBooks.map((v, i) => {
                        return <span key={i}>{v.bookName}</span>;
                      })}
                    </Styled_History.BookListDiv>
                  </td>
                  <td>{v.status}</td>
                </Styled_History.Tr>
              );
            })
          ) : (
            <Styled_History.Tr>
              <td>주문 내역이 없습니다</td>
            </Styled_History.Tr>
          )}
        </tbody>
      </Styled_History.Table>
      <div className="pagination">
        {orderHistory && (
          <PaginationBox
            itemsCountPerPage={5}
            totalItemsCount={orderHistory.pageInfo.totalElements}
          />
        )}
      </div>
    </Styled_History.Container>
  );
};

export default Full;

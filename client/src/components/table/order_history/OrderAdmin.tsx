import { useEffect, useState } from 'react';
import { getAdminOrderHistory } from '../../../api/GetApi';
import { Styled_History } from './History.style';
import {
  OrderHistoryType,
  patchOrderStatusType,
} from '../../../model/paymentType';
import { patchOrderStatus } from '../../../api/PatchApi';
import { Styled_PaginationBox } from '../../pagination_box/PaginationBox.style';
import Pagination from 'react-js-pagination';

const OrderAdmin = ({ width }: { width: number }) => {
  const [adminfull, setAdminFull] = useState<OrderHistoryType>();
  const [page, setPage] = useState<number>(1);
  const itemsCountPerPage = 10;

  useEffect(() => {
    getAdminOrderHistory(page, itemsCountPerPage).then(data =>
      setAdminFull(data),
    );
  }, [page]);

  const statusChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: string,
  ) => {
    const data: patchOrderStatusType = {
      orderIds: [id],
      orderStatus: e.target.value as
        | '주문완료'
        | '결제완료'
        | '배송준비중'
        | '배송중'
        | '배송완료'
        | '취소',
    };
    patchOrderStatus(data);
  };

  return (
    <Styled_History.Container width={width}>
      <Styled_History.H1>전체 주문 상태 관리</Styled_History.H1>

      <Styled_History.Table width={width}>
        <thead>
          <tr>
            <Styled_History.Th className="date">주문일자</Styled_History.Th>
            <Styled_History.Th className="number">주문번호</Styled_History.Th>
            <Styled_History.Th className="books">도서</Styled_History.Th>
            <Styled_History.Th className="status">상태</Styled_History.Th>
          </tr>
        </thead>
        <tbody>
          {adminfull && adminfull.data.length > 0 ? (
            adminfull.data.map((v, i) => {
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
                  <td>
                    <select
                      onChange={e => {
                        statusChangeHandler(e, v.id);
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      <option defaultValue={v.status}>{v.status}</option>
                      <option value="주문완료">주문완료</option>
                      <option value="결제완료">결제완료</option>
                      <option value="배송준비중">배송준비중</option>
                      <option value="배송중">배송중</option>
                      <option value="배송완료">배송완료</option>
                      <option value="취소">취소</option>
                    </select>
                  </td>
                </Styled_History.Tr>
              );
            })
          ) : (
            <Styled_History.Tr>
              <Styled_History.NoList colSpan={4}>
                <span style={{ color: 'var(--light-border-color)' }}>
                  주문 내역이 없습니다
                </span>
              </Styled_History.NoList>
            </Styled_History.Tr>
          )}
        </tbody>
      </Styled_History.Table>
      <Styled_PaginationBox.Div>
        {adminfull && (
          <Pagination
            activePage={page}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={adminfull.pageInfo.totalElements}
            pageRangeDisplayed={5}
            prevPageText={'<'}
            nextPageText={'>'}
            onChange={page => {
              setPage(page);
            }}
          />
        )}
      </Styled_PaginationBox.Div>
    </Styled_History.Container>
  );
};

export default OrderAdmin;

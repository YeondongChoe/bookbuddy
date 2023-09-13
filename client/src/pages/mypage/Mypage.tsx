import React, { useEffect, useRef, useState } from 'react';
import MypageSidebar from '../../components/sidebar/MypageSidebar';
import { Styled_Layout } from '../BlankPageLayout';
import { Styled_Mypage } from './Mypage.style';
import OrderHistory from '../../components/table/OrderHistory';
import Book from '../../components/book/Book';
import { useRecoilValue } from 'recoil';
import { NavScrollAtom } from '../../recoil/Sidebars';
import { BookMarkList } from '../../model/BookList';
import { getBookmarkmypage } from '../../api/GetApi';
import CSTable from '../../components/table/CSTable';
import { getCookie } from '../../utils/cookie';

const Mypage = () => {
  const bookmarkScrollRef = useRef<HTMLDivElement>(null);
  const navScrollListRef = useRef<any>([]);
  const navScrollIndex = useRecoilValue(NavScrollAtom);
  const [bookmarkList, setBookmarkList] = useState<BookMarkList[]>([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getBookmarkmypage(setBookmarkList);
    setUserName(getCookie('userInfo').email.split('@')[0]);
  }, []);

  useEffect(() => {
    // bookmark scroll
    // 현재 스크롤 위치 === scrollRef.current.scrollTop
    // 스크롤 길이 === scrollRef.current.scrollHeight
    if (bookmarkScrollRef.current) {
      bookmarkScrollRef.current.scrollTop =
        bookmarkScrollRef.current.scrollHeight;
    }

    // sidebar scroll
    if (navScrollListRef.current) {
      navScrollListRef.current[navScrollIndex].scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [bookmarkScrollRef, navScrollIndex]);

  return (
    <Styled_Layout.Container>
      <Styled_Layout.Div_WithSidebar>
        <MypageSidebar />
        <Styled_Mypage.Content>
          <Styled_Mypage.Title>
            <div
              style={{ scrollMarginTop: '240px' }}
              ref={el => {
                navScrollListRef.current[0] = el;
              }}
            >
              <Styled_Mypage.H1>{userName}님, 환영합니다</Styled_Mypage.H1>
            </div>
          </Styled_Mypage.Title>

          <Styled_Mypage.Detail className="detail">
            <OrderHistory title="최근 주문 내역" cancel={true} />
            <div
              style={{ scrollMarginTop: '240px' }}
              ref={el => {
                navScrollListRef.current[1] = el;
              }}
            >
              <OrderHistory title="전체 주문 내역" />
            </div>
            <div
              style={{ scrollMarginTop: '240px' }}
              ref={el => {
                navScrollListRef.current[2] = el;
              }}
            >
              <CSTable title="1:1 문의 내역" />
            </div>

            <Styled_Mypage.BookmarkList>
              <Styled_Mypage.BookmarkTitle
                style={{ scrollMarginTop: '240px' }}
                ref={el => {
                  navScrollListRef.current[3] = el;
                }}
              >
                <Styled_Mypage.H2 className="bookmarklist">
                  북마크 리스트
                </Styled_Mypage.H2>
              </Styled_Mypage.BookmarkTitle>
              <Styled_Mypage.Books ref={bookmarkScrollRef} className="books">
                {bookmarkList
                  .map((v: BookMarkList) => {
                    return (
                      <Styled_Mypage.Book key={v.id}>
                        <Book
                          key={v.book.id}
                          id={v.book.id}
                          name={v.book.name}
                          price={v.book.price}
                          image={v.book.imgSrc}
                          bookmark={true}
                        />
                      </Styled_Mypage.Book>
                    );
                  })
                  .reverse()}
              </Styled_Mypage.Books>
            </Styled_Mypage.BookmarkList>
          </Styled_Mypage.Detail>
        </Styled_Mypage.Content>
      </Styled_Layout.Div_WithSidebar>
    </Styled_Layout.Container>
  );
};

export default Mypage;

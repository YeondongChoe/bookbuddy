import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../../utils/Responsive';

interface HistroyProps {
  width: number;
}
export const Styled_History = {
  Container: styled.div<HistroyProps>`
    width: ${props => props.width};

    ${DeviceQuery.bigScreen`
      width: calc(${(props: HistroyProps) => props.width} / ${
        screenScale.bigScreen
      });
    `}
    ${DeviceQuery.desktop`
      width: calc(${(props: HistroyProps) => props.width} / ${
        screenScale.desktop
      });
    `}
    ${DeviceQuery.tablet`
      width: calc(${(props: HistroyProps) => props.width} / ${
        screenScale.tablet
      });
    `}
  `,
  H1: styled.h1`
    font-size: var(--subtitle-font-size);
    margin-bottom: 20px;
    display: inline-block;

    ${DeviceQuery.bigScreen`
      margin-bottom: calc(20px / ${screenScale.bigScreen});
      font-size: calc(var(--subtitle-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      margin-bottom: calc(20px / ${screenScale.desktop});
      font-size: calc(var(--subtitle-font-size) / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      margin-bottom: calc(20px / ${screenScale.tablet});
      font-size: calc(var(--subtitle-font-size) / ${screenScale.tablet});
    `}
  `,
  MessageSpan: styled.span`
    margin-left: 15px;
    font-size: var(--message-font-size);

    ${DeviceQuery.bigScreen`
      margin-left: calc(15px / ${screenScale.bigScreen});
      font-size: calc(var(--message-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      margin-left: calc(15px / ${screenScale.desktop});
      font-size: calc(var(--message-font-size) / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      margin-left: calc(15px / ${screenScale.tablet});
      font-size: calc(var(--message-font-size) / ${screenScale.tablet});
    `}
  `,
  Table: styled.table<HistroyProps>`
    width: ${props => props.width}px;
    font-size: var(--basic-font-size);
    text-align: center;
    line-height: 34px;
    border-collapse: collapse; //표 테두리 삭제

    ${DeviceQuery.bigScreen`
      width: calc(${(props: HistroyProps) => props.width}px / ${
        screenScale.bigScreen
      });
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
      line-height: calc(34px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(${(props: HistroyProps) => props.width}px / ${
        screenScale.desktop
      });
      font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
      line-height: calc(34px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(${(props: HistroyProps) => props.width}px / ${
        screenScale.tablet
      });
      font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
      line-height: calc(34px / ${screenScale.tablet});
    `}

    & > .date {
      width: 200px;

      ${DeviceQuery.bigScreen`
        width: calc(200px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        width: calc(200px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        width: calc(200px / ${screenScale.tablet});
      `}
    }
    & > .number {
      width: 250px;

      ${DeviceQuery.bigScreen`
        width: calc(250px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        width: calc(250px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        width: calc(250px / ${screenScale.tablet});
      `}
    }
    & > .status {
      width: 200px;

      ${DeviceQuery.bigScreen`
        width: calc(200px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        width: calc(200px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        width: calc(200px / ${screenScale.tablet});
      `}
    }
  `,
  Th: styled.th`
    background-color: var(--category-color);
  `,
  BookListDiv: styled.div`
    display: flex;
    flex-flow: column;
  `,
  Tr: styled.tr`
    border-bottom: 1px solid gray;
    height: 90px;
    min-height: 90px;

    ${DeviceQuery.bigScreen`
      height:calc(90px / ${screenScale.bigScreen});
      min-height:calc(90px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      height:calc(90px / ${screenScale.desktop});
      min-height:calc(90px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      height:calc(90px / ${screenScale.tablet});
      min-height:calc(90px / ${screenScale.tablet});
    `}

    & button {
      border: 0px;
      background-color: white;
      font-size: var(--basic-font-size);
      cursor: pointer;

      ${DeviceQuery.bigScreen`
        font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
      `}

      &:hover {
        font-weight: bold;
        color: var(--primary-background-color);
      }
    }
  `,
  NoList: styled.td`
    height: 300px;

    ${DeviceQuery.bigScreen`
      height:calc(300px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      height:calc(300px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      height:calc(300px / ${screenScale.tablet});
    `}
  `,
};

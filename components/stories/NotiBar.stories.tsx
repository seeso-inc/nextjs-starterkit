import NotiBar from '../NotiBar';

export default {
  component: NotiBar,
  title: '상단 공지 바',
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: '타이틀',
    },
  },
};

export const StoryComponent = ({ title }: any) => {
  return (
    <NotiBar text={title} />
  );
};

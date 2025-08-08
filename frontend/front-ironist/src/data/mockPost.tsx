import { Post } from '../types/Post';

export const mockPost: Post = {
  id: "1",
  user: "ironist",
  content: "오늘 하루도 잘 보냈다.\n",
  createdAt: new Date().toISOString(),
  comments: [
    {
      id: "c1",
      user: "notionfan",
      content: "내일은?",
      createdAt: new Date().toISOString(),
    },
    {
      id: "c2",
      user: "someguy",
      content: "고생했어",
      createdAt: new Date().toISOString(),
    },
  ],
};

// 유틸: minutes 단위로 과거 시간 만들기
const minutesAgo = (m: number) => new Date(Date.now() - m * 60_000).toISOString();

export const mockPosts: Post[] = [
  {
    id: "p-1001",
    user: "ironist",
    content:
      "하루 한 편. \n아이러니는 희소성에서 나온다. 제한이 가치를 만든다.",
    createdAt: minutesAgo(12),
    comments: [
      {
        id: "c-2001",
        user: "readerA",
        content: "이 문장, 북마크함. 제한 미학 공감!",
        createdAt: minutesAgo(10),
      },
      {
        id: "c-2002",
        user: "critic",
        content: "제한은 도구지 목표는 아님. 그래도 재밌네.",
        createdAt: minutesAgo(7),
      },
    ],
  },
  {
    id: "p-1002",
    user: "notionfan",
    content:
      "메모 정리 중. 훅(썸네일) 아이디어: '오늘의 한 문장'만 노출하고 본문은 클릭 없이 확장.",
    createdAt: minutesAgo(45),
    comments: [],
  },
  {
    id: "p-1003",
    user: "guest",
    content:
      "이미지는 나중에. 텍스트만으로 어디까지 갈 수 있을까.",
    createdAt: minutesAgo(120),
    comments: [
      {
        id: "c-2003",
        user: "uxkid",
        content: "원클릭 인터랙션까지 가면 체감 좋아질 듯!",
        createdAt: minutesAgo(115),
      },
    ],
  },
  {
    id: "p-1004",
    user: "poet",
    content: "사막엔 바다가 없지만, 모래는 파도였다.",
    createdAt: minutesAgo(1440), // 어제
    comments: [
      {
        id: "c-2004",
        user: "muse",
        content: "한 줄인데 이미지가 보이네.",
        createdAt: minutesAgo(1430),
      },
      {
        id: "c-2005",
        user: "archive",
        content: "컬렉션에 담아둠.",
        createdAt: minutesAgo(1400),
      },
    ],
  },
  {
    id: "p-1005",
    user: "builder",
    content:
      "기능 추가보단 마찰 제거. 댓글 입력 → 즉시 낙관적 업데이트 → 실패 시 롤백.",
    createdAt: minutesAgo(3),
    comments: [],
  },
];
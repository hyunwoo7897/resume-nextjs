import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,
  list: [
    {
      title: '광주과학기술원 (GIST)',
      startedAt: '2022-03',
      where: '전기전자컴퓨터 공학부 재학중(4학년), AI / 문화기술 부전공',
      descriptions: [
        {
          content:
            '자료구조, 알고리즘, 객체지향 프로그래밍, 오토마타 이론, 컴파일러와 프로그래밍 언어, 컴퓨터 시스템, 시스템 프로그래밍, 데이터 베이스, 머신러닝과 딥러닝 수강',
        },
      ],
    },
    {
      title: '광주과학고등학교',
      startedAt: '2019-03',
      endedAt: '2022-02',
      where: '졸업',
      descriptions: [
        {
          content: '3년 개근 졸업',
        },
      ],
    },
  ],
};

export default education;

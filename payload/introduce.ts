import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '문제들을 번뜩이는 아이디어로 해결하고 소프트웨어로 구현하여 더 나은 세상을 만들고자 하는 예비 연구자/개발자 입니다.',
    '현재는 컴퓨터 보안 및 프로그램 분석에 관심이 있고, 최종적으로 게임 엔진과 같은 미들웨어, 프레임 워크에서의 프로그래밍 분석을 통해 버그를 찾아내는 기술을 개발하고 싶습니다',
    '- 주 사용 언어 : Python, C',
    // '- 수영 탁구등을 즐기며 게임, 서브컬쳐 쪽 관심도 많습니다'
  ],
  sign: 'Tux',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
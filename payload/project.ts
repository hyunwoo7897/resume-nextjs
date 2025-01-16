import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '리듬게임 AI 기반 레벨 생성 모델(PCG) 프로젝트 (PM)',
      startedAt: '2024-10',
      where: 'GIST CT4303(게임 인공지능) 개인 프로젝트 ',
      descriptions: [
        {
          content:
            '리듬게임에서 한정된 곡과 레벨만 있다는 한계점을 해결하기 위해 노래에 맞는 레벨을 생성하는 AI 모델 ',
          weight: 'MEDIUM',
        },
        {
          content: '진행 상황 : 데이터 수집 및 분석 완료 단계',
        },
        {
          content: '노래 비트에 맞는 랜덤 모델을 baseline으로 잡고 rule based 모델 생성 완료',
        },
        {
          content: '선행 연구에서 진행한 C-LSTM으로 학습 후 다른 방법을 구상',
        },
      ],
    },
    {
      title: '행사 동선 생성 프로그램 (PM)',
      startedAt: '2024-10',
      endedAt: '2024-12',
      where: 'GIST EC4204(데이터 베이스 시스템) 팀 프로젝트',
      descriptions: [
        {
          content:
            '행사에 사람들이 많이 참가하고 이에 따라 참가자의 만족도와 안전상의 문제가 생김. 전체 시스템을 데이터 베이스화 시켜 다양한 기능 제공 및 문제점 해결',
          weight: 'MEDIUM',
        },
        {
          content: 'RDBMS, MongoDB로 DB 시스템을 구축',
        },
        {
          content: '행사의 예상 혼잡도, 개인별 최적 경로 등의 기능을 제공공',
        },
      ],
    },

    {
      title: 'LLM을 이용한 뉴스 제목 생성 시스템 (PM)',
      startedAt: '2024-05',
      endedAt: '2024-06',
      where: 'GIST EC3105(컴퓨터 시스템 이론 및 실험) 팀 프로젝트',
      descriptions: [
        {
          content:
            '자극적인 현대 기사 제목들의 문제점을 정보를 확실하게 전달할 수 있는 제목으로 정리해주는 LLM 기반의 풀스택 프로젝트',
          weight: 'MEDIUM',
        },
        {
          content: 'ChatGPT로 정리된 기사 추출, Streamlit, FastAPI로 프론트/백 앤드 시스템 구축',
        },
        {
          content: 'Docker, Kubernetes 등으로 프로젝트 배포/관리',
        },
      ],
    },
    {
      title: '룸메이트 매칭 프로젝트 (PM)',
      startedAt: '2023-04',
      endedAt: '2023-06',
      where: 'GIST GS2408(객체지향 프로그래밍) 팀 프로젝트',
      descriptions: [
        {
          content:
            '랜덤으로 룸메이트를 배치하는 현재 학교 시스템에서의 문제점을 찾아 개개인의 성향에 맞게 서로 룸메이트로 매칭해주는 OOP 프로젝트를 제작/관리',
          weight: 'MEDIUM',
        },
        {
          content:
            '간소한 데이터 베이스 시스템을 구축하고, 학생간의 유사도를 그래프 등 알고리즘으로 찾아냄',
        },
      ],
    },

    {
      title: '피지컬 컴퓨팅으로 구현하는 자동주차 시스템 (PM)',
      startedAt: '2021-08',
      endedAt: '2021-12',
      where: '광주과학고등학교 개인 졸업 연구',
      descriptions: [
        {
          content:
            '자율주행 기술이 아직 완벽하지 않은 상황에서 당장 안전하게 적용될 수 있는 곳을 고민, 평소 한국에서의 주차난을 떠올리며 모든 자동차 서로 통신하며 자율주행으로 발렛 파킹을 한다면 자율주행을 안전하게 적용하고 현재 문제도 해결할 수 있는 아이디어에서 나온 연구',
          weight: 'MEDIUM',
        },
        {
          content:
            'Lego EV3와 센서를 이용한 간단한 자율주행, 자율주차 시스템을 구축하고 로봇간의 통신을 통해 서로의 위치를 파악',
        },
        {
          content:
            '여러 대의 로봇이 주차장에 있을 때 서로의 위치를 컴퓨터에서 파악하고 최적의 경로로 최단시간으로 모든 자동차들이 주차할 수 있는 시스템',
        },
      ],
    },

    {
      title: '얼굴 인식 이모지 생성 프로그램 (PM)',
      startedAt: '2021-05',
      endedAt: '2021-06',
      where: '광주과학고등학교 팀 프로젝트',
      descriptions: [
        {
          content:
            '사람별로 "어떤 동물 얼굴상이다" 라는 말에서 아이디어를 얻어 사람의 얼굴을 인식하면 그 사람과 유사한 동물을 알려주고 응용해서 얼굴에 그 동물 이모지를 붙여주는 카메라 프로그램 ',
          weight: 'MEDIUM',
        },
        {
          content:
            '웹 크롤링으로 동물 얼굴 사진 데이터 수집, 각각의 사진을 정사각형, 흑백으로 만드는 전처리 진행',
        },
        {
          content:
            'Google Teachable Machine으로 모델 학습 / 나온 모델을 OpenCV를 이용해 사람 얼굴 인식하고 적절한 위치에 이모지 필터를 추가',
        },
        {
          content: '교내 대회 금상 수상',
        },
      ],
    },
  ],
};

export default project;

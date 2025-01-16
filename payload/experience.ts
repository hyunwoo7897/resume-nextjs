import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: true,
  list: [
    {
      title: 'GIST CI-Lab 인턴',
      positions: [
        {
          title: '학부생 인턴',
          startedAt: '2025-01',
          descriptions: ['E-스포츠 연구 팀에 참여여'],
          skillKeywords: ['reinforcement learning'],
        },
      ],
    },
    {
      title: '시스템 프로그래밍 조교',
      positions: [
        {
          title: 'GIST EC3215 시스템 프로그래밍 수업 조교',
          startedAt: '2024-09',
          endedAt: '2024-12',
          descriptions: ['연습반 관리 및 지도', '자동 채점 프로그램 제작', '과제 채점 및 Q&A'],
          skillKeywords: ['C', 'Linux', 'Shell'],
        },
      ],
    },
    {
      title: 'UC Berkeley 해외 계절학생 파견',
      positions: [
        {
          title: 'GIST 해외 파견 프로그램',
          startedAt: '2024-06',

          descriptions: ['CS 161 Computer Security 수강', 'STAT 155 Game Theory 수강'],
          endedAt: '2024-08',
          skillKeywords: ['Assembly', 'C', 'HTML', 'SQL'],
        },
      ],
    },
    {
      title: '객체지향 프로그래밍 조교',
      positions: [
        {
          title: 'GIST GS2408 객체지향 프로그래밍 수업 조교',
          startedAt: '2024-03',
          endedAt: '2024-06',
          descriptions: ['연습반 관리 및 지도', '학생 프로젝트 피드백', '과제 채점 및 Q&A'],
          skillKeywords: ['C++'],
        },
      ],
    },
    {
      title: 'GIST 프로그래밍 분석 연구실 인턴',
      positions: [
        {
          title: '학부생 인턴',
          startedAt: '2024-01',
          endedAt: '2024-06',
          descriptions: [
            '랩미팅, 논문 세미나 참여',
            '프로그램 정적 분석 학습 및 연구 참여',
            '2024 겨울 SIGPL 참석',
          ],
          skillKeywords: ['Static Analysis', 'Ocaml'],
        },
      ],
    },
  ],
};

export default experience;

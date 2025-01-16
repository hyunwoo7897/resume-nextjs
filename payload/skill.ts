import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Python',
      level: 3,
    },
    {
      title: 'C/C++',
      level: 3,
    },
    {
      title: 'C#',
      level: 2,
    },
    {
      title: 'Shell Scripting',
      level: 2,
    },
    {
      title: 'Ocmal',
      level: 2,
    },
    {
      title: 'Java',
      level: 1,
    },
  ],
};
/*
const kernelDevelopment: ISkill.Skill = {
  category: 'Kernel Development',
  items: [
    {
      title: 'Kernel Programming',
      level: 3,
    },
    {
      title: 'GNU Debugger',
      level: 3,
    },
    {
      title: 'Memory Management',
      level: 2,
    },
    {
      title: 'System Call Interface',
      level: 2,
    },
  ],
};
*/

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 2,
    },
    {
      title: 'MongoDB',
      level: 2,
    },
  ],
};

const devops: ISkill.Skill = {
  category: 'DevOps',
  items: [
    {
      title: 'Docker',
      level: 1,
    },
    {
      title: 'Kubernetes',
      level: 1,
    },
  ],
};
/*
const automation: ISkill.Skill = {
  category: 'Automation',
  items: [
    {
      title: 'Ansible',
      level: 3,
    },
    {
      title: 'Puppet',
      level: 3,
    },
    {
      title: 'Chef',
      level: 2,
    },
    {
      title: 'Jenkins',
      level: 2,
    },
    {
      title: 'CI/CD Pipelines',
      level: 1,
    },
    {
      title: 'Infrastructure as Code',
      level: 1,
    },
  ],
};
*/
/*
const networkSecurity: ISkill.Skill = {
  category: 'Network Security',
  items: [
    {
      title: 'iptables',
      level: 3,
    },
    {
      title: 'OpenSSH',
      level: 3,
    },
    {
      title: 'OpenSSL',
      level: 2,
    },
    {
      title: 'NACLs',
      level: 2,
    },
    {
      title: 'VPN Technologies',
      level: 2,
    },
    {
      title: 'Intrusion Detection',
      level: 1,
    },
  ],
};
*/
/*
const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Coffee Brewing',
    },
    {
      title: "Rubik's Cube Solving",
    },
    {
      title: 'Table Tennis',
    },
    {
      title: 'Guitar Playing',
    },
    {
      title: 'Joke Telling',
    },
    {
      title: 'Duct Tape Crafting',
    },
  ],
};
*/

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    // kernelDevelopment,
    database,
    devops,
    // automation,
    // networkSecurity,
    // misc,
  ],
  tooltip:
    '1: 기초 수준\n2: 인터넷, 참고문서 등의 도움으로 해결하는 수준 \n3: 스스로 문제를 해결하는 수준',
};

export default skill;

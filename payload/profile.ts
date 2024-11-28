import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

// import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/hyunwoo.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '이현우',
    small: '(Hyunwoo Lee)',
  },
  contact: [
    {
      title: 'hyunwoo_lee_ug@gm.gist.ac.kr',
      link: 'mailto:hyunwoo_lee_ug@gm.gist.ac.kr',
      icon: faEnvelope,
    },
    {
      title: '',
      icon: faPhone,
      badge: true,
    },
  ],
  notice: {
    title: '',
    // icon: faBell,
  },
};

export default profile;

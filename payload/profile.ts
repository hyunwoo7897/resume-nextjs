import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

// import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/hyunwoo.jpg';

const profile: IProfile.Payload = {
  disable: false,
  image,
  name: {
    title: '이현우',
    small: '(Hyunwoo Lee)',
  },
  contact: [
    {
      title: 'hyunwoo7897@kaist.ac.kr',
      link: 'mailto:hyunwoo7897@kaist.ac.kr',
      icon: faEnvelope,
    },
    {
      title: '010-XXXX-XXXX',
      icon: faPhone,
      badge: true,
    },

    /*    {
      link: 'https://github.com/hyunwoo7897',
      icon: faGithub,
    }, */
    /*
    {
      link: 'https://www.facebook.com/groups/ubuntu.ko',
      icon: faFacebook,
    }, */
  ],
  notice: {
    title: '',
    // icon: faBell,
  },
};

export default profile;

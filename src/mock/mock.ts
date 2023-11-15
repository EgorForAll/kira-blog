import PlayImg from '../assets/images/play.jpg';
import WindowImg from '../assets/images/window.jpg';
import DoorImg from '../assets/images/door.jpg';
import MouseImg from '../assets/images/mouse.jpg';
import SofaImg from '../assets/images/sofa.jpg';
import AvaImg from '../assets/images/ava.jpg';
import DoctorImg from '../assets/images/doctor.jpg';
import RelaxImg from '../assets/images/relax.jpg';
import StickImg from '../assets/images/stick.jpg';
import HostImg from '../assets/images/host.jpg';
import HugImg from '../assets/images/hug.jpg';
import { nanoid } from 'nanoid';

export const posts = [
  {
    id: nanoid(),
    url_photo: PlayImg,
    text: 'Играем в настолки с хозяевами',
    date: '01.11.2023',
    likes: 3,
    comments: [
      {
        id: nanoid(),
        user: 'Alex',
        text: 'Какие настолки предпочитаете?',
        response: {
          id: nanoid(),
          user: 'Julia',
          text: 'Те, что с кубиками!'
        }
      }
    ]
  },
  {
    id: nanoid(),
    url_photo: WindowImg,
    text: 'Лежу на окне. Радуюсь новому дню. И вам желаю хорошего дня!',
    date: '02.11.2023',
    likes: 1,
    comments: [
      {
        id: nanoid(),
        user: 'Alex',
        text: 'И тебе хорошего дня, Кира!'
      }
    ]
  },
  {
    id: nanoid(),
    url_photo: DoorImg,
    text: 'Опять хозяева покидают меня! Я их так просто не отпущу!',
    date: '03.11.2023',
    likes: 4
  },
  {
    id: nanoid(),
    url_photo: MouseImg,
    text: 'Настроения нет совсем играть с мышками. Лучше корм!',
    date: '04.11.2023',
    likes: 0,
    comments: [
      {
        id: nanoid(),
        user: 'Natasha',
        text: 'Кира, что с тобой?',
        response: {
          id: nanoid(),
          user: 'Kira',
          text: 'Мало кормят'
        }
      }
    ]
  },
  {
    id: nanoid(),
    url_photo: SofaImg,
    text: 'Сплю на диване, показываю всем свои лапки',
    date: '05.11.2023',
    likes: 1,
    comments: [
      {
        id: nanoid(),
        user: 'Julia',
        text: 'Самые лучшие лапки на свете!'
      }
    ]
  },
  {
    id: nanoid(),
    url_photo: AvaImg,
    text: 'Сфоткали на паспорт',
    date: '06.11.2023',
    likes: 10
  },
  {
    id: nanoid(),
    url_photo: DoctorImg,
    text: 'Cегодня прием у ветеринара. Очень нервничаю, но рядом любимый хозяин',
    date: '07.11.2023',
    likes: 5,
    comments: [
      {
        id: nanoid(),
        user: 'Alex',
        text: 'Кира, держись. Все будет хорошо!'
      }
    ]
  },
  {
    id: nanoid(),
    url_photo: StickImg,
    text: 'Кто-нибудь поиграйте со мной',
    date: '08.11.2023',
    likes: 1,
    comments: [
      {
        id: nanoid(),
        user: 'Dan',
        text: 'Почему с такой симпапулькой не играют? Я буду жаловаться!',
        response: {
          id: nanoid(),
          user: 'Kira',
          text: 'Просто хозяева очень заняты'
        }
      }
    ]
  },
  {
    id: nanoid(),
    url_photo: HugImg,
    text: 'Обнимаемся с любимым хозяином после долгой разлуки',
    date: '09.11.2023',
    likes: 2
  },
  {
    id: nanoid(),
    url_photo: HostImg,
    text: 'Когда он уже наиграется сам и будет играть со мной',
    date: '10.11.2023',
    likes: 2
  },
  {
    id: nanoid(),
    url_photo: RelaxImg,
    text: 'Новая зона отдыха. Панорамный вид, мягкий диван, все дела...',
    date: '11.11.2023',
    likes: 2,
    comments: [
      {
        id: nanoid(),
        user: 'Natasha',
        text: 'Класс!!!'
      }
    ]
  }
];

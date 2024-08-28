// projectsData.ts

export interface Project {
  id: number;
  category: string;
  title: string;
  testimonials: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  logos: string[];
  liveAppLink: string;
}

export const projectsData: { [key: string]: Project[] } = {
  'Web Development': [
    {
      id: 1,
      category: 'Web',
      title: 'Mobile App for Fitness',
      testimonials:
        'Above and beyond service, responsive and professional, and capable of meeting my expectations. Extremely flexible and both in terms of Frontend and Backend. Highly recommended.',
      image: '/projects/webDevelopment/WA-image1.jpg',
      author: {
        name: 'Stephen Smith',
        role: 'CEO',
        avatar: '/projects/webDevelopment/people1.png',
      },
      logos: ['/icons/mongoDB.svg', '/icons/flutter.svg'],
      liveAppLink: 'https://healthio-app.com',
    },
    {
      id: 2,
      category: 'Web',
      title: 'Mobile App for Games',
      testimonials:
        'Above and beyond service, responsive and professional, and capable of meeting my expectations. Extremely flexible and both in terms of Frontend and Backend. Highly recommended.',
      image: '/projects/webDevelopment/WA-image1.jpg',
      author: {
        name: 'Stephen Smith',
        role: 'CEO',
        avatar: '/projects/webDevelopment/people1.png',
      },
      logos: ['/icons/mongoDB.svg', '/icons/flutter.svg'],
      liveAppLink: 'https://healthio-app.com',
    },
  ],
  'App Development': [
    {
      id: 1,
      category: 'App',
      title: 'Web App for Finance',
      testimonials:
        'Above and beyond service, responsive and professional, and capable of meeting my expectations. Extremely flexible and both in terms of Frontend and Backend. Highly recommended.',
      image: '/projects/webDevelopment/WA-image1.jpg',
      author: {
        name: 'Stephen Smith',
        role: 'CEO',
        avatar: '/projects/webDevelopment/people1.png',
      },
      logos: ['/icons/mongoDB.svg', '/icons/flutter.svg'],
      liveAppLink: 'https://healthio-app.com',
    },
    {
      id: 2,
      category: 'App',
      title: 'Web App for Trading',
      testimonials:
        'Above and beyond service, responsive and professional, and capable of meeting my expectations. Extremely flexible and both in terms of Frontend and Backend. Highly recommended.',
      image: '/projects/webDevelopment/WA-image1.jpg',
      author: {
        name: 'Stephen Smith',
        role: 'CEO',
        avatar: '/projects/webDevelopment/people1.png',
      },
      logos: ['/icons/mongoDB.svg', '/icons/flutter.svg'],
      liveAppLink: 'https://healthio-app.com',
    },
  ],
  'Individual software development': [
    {
      id: 1,
      category: 'Software',
      title: 'Mobile App for Fitness',
      testimonials:
        'Above and beyond service, responsive and professional, and capable of meeting my expectations. Extremely flexible and both in terms of Frontend and Backend. Highly recommended.',
      image: '/projects/webDevelopment/WA-image1.jpg',
      author: {
        name: 'Stephen Smith',
        role: 'CEO',
        avatar: '/projects/webDevelopment/people1.png',
      },
      logos: ['/icons/mongoDB.svg', '/icons/flutter.svg'],
      liveAppLink: 'https://healthio-app.com',
    },
  ],
  'Database Planning & Management': [
    {
      id: 1,
      category: 'Database',
      title: 'Mobile App for Fitness',
      testimonials:
        'Above and beyond service, responsive and professional, and capable of meeting my expectations. Extremely flexible and both in terms of Frontend and Backend. Highly recommended.',
      image: '/projects/webDevelopment/WA-image1.jpg',
      author: {
        name: 'Stephen Smith',
        role: 'CEO',
        avatar: '/projects/webDevelopment/people1.png',
      },
      logos: ['/icons/mongoDB.svg', '/icons/flutter.svg'],
      liveAppLink: 'https://healthio-app.com',
    },
  ],
  'API development & integration': [
    {
      id: 1,
      category: 'api-integration',
      title: 'Mobile App for Fitness',
      testimonials:
        'Above and beyond service, responsive and professional, and capable of meeting my expectations. Extremely flexible and both in terms of Frontend and Backend. Highly recommended.',
      image: '/projects/webDevelopment/WA-image1.jpg',
      author: {
        name: 'Stephen Smith',
        role: 'CEO',
        avatar: '/projects/webDevelopment/people1.png',
      },
      logos: ['/icons/mongoDB.svg', '/icons/flutter.svg'],
      liveAppLink: 'https://healthio-app.com',
    },
  ],
};

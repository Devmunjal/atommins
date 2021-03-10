import { Home, Circle } from 'react-feather'

export default [
  {
    id: 'menu',
    title: 'Menu',
    icon: <Home size={20} />,
    badge: 'light-warning',
    badgeText: '',
    children: [
      {
        id: 'home',
        title: 'Home',
        icon: <Circle size={12} />,
        navLink: '/dashboard/home'
      },
      
      {
        id: 'newsletter',
        title: 'NewsLetters',
        icon: <Circle size={12} />,
        navLink: '/dashboard/newsletter'
      },
      {
        id: 'events',
        title: 'Events',
        icon: <Circle size={12} />,
        navLink: '/dashboard/event'
      },
      {
        id: 'company',
        title: 'Companies',
        icon: <Circle size={12} />,
        navLink: '/dashboard/company'
      },
      {
        id: 'user',
        title: 'Users',
        icon: <Circle size={12} />,
        navLink: '/dashboard/user'
      },
      {
        id: 'orders',
        title: 'Orders',
        icon: <Circle size={12} />,
        navLink: '/dashboard/order'
      }
    ]
  }
]

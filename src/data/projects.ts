export type Project = {
  title: string
  description: string
  image: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  iosUrl?: string
  androidUrl?: string
  category: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Challe Activity',
    description: 'Activity tracking and challenge-based fitness experience.',
    image: 'https://play-lh.googleusercontent.com/CSTDtA5SCe9WaTTDqqbHvosJsWAg0saGokVI1kmI7zBZDK3fVP5Q-UzOl3tZYTnY5w=w240-h480',
    techStack: ['React Native', 'Mobile', 'Fitness'],
    iosUrl: 'https://apps.apple.com/us/app/challe-activity/id6504609067',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.cas.challe&hl=en_US',
    category: 'Health',
  },
  {
    title: 'Reminder App',
    description: 'Mobile reminder app with native scheduled notifications.',
    image: 'https://play-lh.googleusercontent.com/RTsM49KI0Qf_gsuI9yBYVNoZYA5cHdAUW250TGlRTahbP35kSAUgszyL6nMENLGnUtU=w240-h480',
    techStack: ['React Native', 'Android', 'iOS'],
    iosUrl: 'https://apps.apple.com/us/app/reminderlink/id6479702306',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.link.reminder&hl=en',
    category: 'Productivity',
  },
  {
    title: 'Sand Caddie',
    description: 'Beach rental experience for booking and managing equipment.',
    image: 'https://play-lh.googleusercontent.com/aUjnVeeONHX9w2gIzryflMCbdM6n_nBK3Aw9Gwhhry3QOY-QVx0trSBY1A5_mbEuxUc=w240-h480',
    techStack: ['React Native', 'Booking', 'Payments'],
    iosUrl: 'https://apps.apple.com/pk/app/sand-caddie-beach-rental/id6502660470',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.sandcaddie&hl=en_US',
    category: 'Travel',
  },
  {
    title: 'Distrosub',
    description: 'Music streaming app with seamless playback and subscriptions.',
    image: 'https://play-lh.googleusercontent.com/C87IkTehNEp2rpKUm0fOcFnhQ7KW0EzBtIl6YMiaBsvucChQDUodeqAjwJA9nsfoyL93XlEXfF56K1NG5JdJ=w240-h480',
    techStack: ['React Native', 'Audio', 'Stripe'],
    iosUrl: 'https://apps.apple.com/pk/app/distrosub/id6751633808',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.distrosub.www.twa&hl=en_US',
    category: 'Entertainment',
  },
  {
    title: 'Comet',
    description: 'Discover what to do right now with curated local activities.',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f0/61/43/f0614338-ec99-de9a-1507-ee587cbc6dd8/AppIcon-0-0-1x_U007ephone-0-85-220.png/400x400ia-75.webp',
    techStack: ['React Native', 'Discovery', 'Mobile'],
    iosUrl: 'https://apps.apple.com/pk/app/comet-what-to-do-right-now/id6505089727',
    category: 'Lifestyle',
  },
]

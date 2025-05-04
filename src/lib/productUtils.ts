
export const getPlatformColors = (platform: string) => {
  switch(platform.toLowerCase()) {
    case 'instagram':
      return {
        bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
        textColor: 'text-white',
        bgHoverColor: 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600',
        iconColor: 'text-pink-500',
        borderColor: 'border-pink-500',
        lightBgColor: 'bg-pink-50'
      };
    case 'tiktok':
      return {
        bgColor: 'bg-black',
        textColor: 'text-white',
        bgHoverColor: 'hover:bg-gray-900',
        iconColor: 'text-black',
        borderColor: 'border-black',
        lightBgColor: 'bg-gray-50'
      };
    case 'youtube':
      return {
        bgColor: 'bg-red-600',
        textColor: 'text-white',
        bgHoverColor: 'hover:bg-red-700',
        iconColor: 'text-red-600',
        borderColor: 'border-red-600',
        lightBgColor: 'bg-red-50'
      };
    case 'spotify':
      return {
        bgColor: 'bg-green-600',
        textColor: 'text-white',
        bgHoverColor: 'hover:bg-green-700',
        iconColor: 'text-green-600',
        borderColor: 'border-green-600',
        lightBgColor: 'bg-green-50'
      };
    case 'twitch':
      return {
        bgColor: 'bg-purple-700',
        textColor: 'text-white',
        bgHoverColor: 'hover:bg-purple-800',
        iconColor: 'text-purple-700',
        borderColor: 'border-purple-700',
        lightBgColor: 'bg-purple-50'
      };
    default:
      return {
        bgColor: 'bg-follower-blue',
        textColor: 'text-white',
        bgHoverColor: 'hover:bg-follower-brightblue',
        iconColor: 'text-follower-blue',
        borderColor: 'border-follower-blue',
        lightBgColor: 'bg-blue-50'
      };
  }
};

const instagramFollowerData = {
  title: 'Instagram Follower kaufen',
  description: 'Steigere deine Reichweite mit echten und aktiven Instagram Followern. Unsere Follower sind von höchster Qualität und werden natürlich geliefert.',
  unitName: 'Follower',
  usernameLabel: 'Instagram Benutzername',
  packages: [
    { amount: 100, name: 'Starter', price: 3.99 },
    { amount: 250, name: 'Basic', price: 7.99 },
    { amount: 500, name: 'Standard', price: 14.99 },
    { amount: 1000, name: 'Premium', price: 24.99 },
    { amount: 2500, name: 'Professional', price: 49.99 },
    { amount: 5000, name: 'Enterprise', price: 89.99 },
  ],
  features: [
    'Hochwertiges Profil',
    'Sofortige Lieferung',
    'Kein Passwort erforderlich',
    '100% Sicher und anonym',
    'Lebenslange Garantie',
    '24/7 Support'
  ]
};

const instagramLikesData = {
  title: 'Instagram Likes kaufen',
  description: 'Erhöhe die Interaktion auf deinen Posts mit hochwertigen Instagram Likes. Unsere Likes kommen von echten Profilen und helfen, deine Reichweite zu steigern.',
  unitName: 'Likes',
  usernameLabel: 'Instagram Post URL',
  packages: [
    { amount: 50, name: 'Mini', price: 1.99 },
    { amount: 100, name: 'Starter', price: 3.49 },
    { amount: 250, name: 'Basic', price: 6.99 },
    { amount: 500, name: 'Standard', price: 11.99 },
    { amount: 1000, name: 'Premium', price: 19.99 },
    { amount: 2500, name: 'Professional', price: 39.99 },
  ],
  features: [
    'Hochwertiges Engagement',
    'Natürliche Verteilung',
    'Kein Passwort erforderlich',
    '100% Sicher und anonym',
    'Schnelle Lieferung',
    '24/7 Support'
  ]
};

export const getProductData = (platform: string, type: string) => {
  const productMap: Record<string, Record<string, any>> = {
    instagram: {
      follower: instagramFollowerData,
      likes: instagramLikesData,
      viral: {
        title: 'Instagram Viral Paket',
        description: 'Das perfekte Paket für viralen Content: Likes, Kommentare und Shares für deine Posts, um maximale Reichweite zu erzielen.',
        unitName: 'Paket',
        usernameLabel: 'Instagram Benutzername',
        packages: [
          { amount: 1, name: 'Basic Viral', price: 9.99 },
          { amount: 1, name: 'Standard Viral', price: 19.99 },
          { amount: 1, name: 'Premium Viral', price: 39.99 },
          { amount: 1, name: 'Professional Viral', price: 69.99 },
        ],
        features: [
          'Likes, Kommentare und Shares',
          'Erhöhte Entdeckbarkeit',
          'Organische Reichweite',
          'Kein Passwort erforderlich',
          '100% Sicher und anonym',
          '24/7 Support'
        ]
      },
      aufrufe: {
        title: 'Instagram Views kaufen',
        description: 'Steigere die Aufrufe deiner Videos und Reels mit authentischen Views von echten Profilen. Mehr Views bedeuten mehr Reichweite.',
        unitName: 'Views',
        usernameLabel: 'Instagram Video URL',
        packages: [
          { amount: 500, name: 'Basic', price: 2.99 },
          { amount: 1000, name: 'Standard', price: 4.99 },
          { amount: 2500, name: 'Premium', price: 9.99 },
          { amount: 5000, name: 'Professional', price: 17.99 },
          { amount: 10000, name: 'Enterprise', price: 29.99 },
        ],
        features: [
          'Echte Aufrufe',
          'Sofortige Lieferung',
          'Verbesserte Reichweite',
          'Kein Passwort erforderlich',
          '100% Sicher und anonym',
          '24/7 Support'
        ]
      },
      kommentare: {
        title: 'Instagram Kommentare kaufen',
        description: 'Erhöhe die Interaktion auf deinen Posts mit benutzerdefinierten Kommentaren. Unsere Kommentare wirken natürlich und relevant.',
        unitName: 'Kommentare',
        usernameLabel: 'Instagram Post URL',
        packages: [
          { amount: 10, name: 'Basic', price: 4.99 },
          { amount: 25, name: 'Standard', price: 9.99 },
          { amount: 50, name: 'Premium', price: 17.99 },
          { amount: 100, name: 'Professional', price: 29.99 },
        ],
        features: [
          'Benutzerdefinierte Kommentare',
          'Echte Profile',
          'Kein Passwort erforderlich',
          '100% Sicher und anonym',
          'Schnelle Lieferung',
          '24/7 Support'
        ]
      }
    },
    tiktok: {
      follower: {
        title: 'TikTok Follower kaufen',
        description: 'Erweitere deine TikTok Community mit authentischen Followern, die dein Profil wachsen lassen und deine Glaubwürdigkeit erhöhen.',
        unitName: 'Follower',
        usernameLabel: 'TikTok Benutzername',
        packages: [
          { amount: 100, name: 'Starter', price: 3.99 },
          { amount: 250, name: 'Basic', price: 7.99 },
          { amount: 500, name: 'Standard', price: 14.99 },
          { amount: 1000, name: 'Premium', price: 24.99 },
          { amount: 2500, name: 'Professional', price: 49.99 },
        ],
        features: [
          'Hochwertiges Profil',
          'Sofortige Lieferung',
          'Kein Passwort erforderlich',
          '100% Sicher und anonym',
          'Lebenslange Garantie',
          '24/7 Support'
        ]
      },
      likes: {
        title: 'TikTok Likes kaufen',
        description: 'Booste die Interaktion auf deinen TikTok Videos mit Likes von echten Profilen und erhöhe deine Chancen auf der For You Page zu erscheinen.',
        unitName: 'Likes',
        usernameLabel: 'TikTok Video URL',
        packages: [
          { amount: 100, name: 'Starter', price: 2.99 },
          { amount: 250, name: 'Basic', price: 5.99 },
          { amount: 500, name: 'Standard', price: 9.99 },
          { amount: 1000, name: 'Premium', price: 16.99 },
          { amount: 2500, name: 'Professional', price: 34.99 },
        ],
        features: [
          'Hochwertiges Engagement',
          'Natürliche Verteilung',
          'Kein Passwort erforderlich',
          '100% Sicher und anonym',
          'Schnelle Lieferung',
          '24/7 Support'
        ]
      },
      viral: {
        title: 'TikTok Viral Paket',
        description: 'Das ultimative Paket für viralen Content: Likes, Kommentare und Shares für deine TikTok Videos, um die For You Page zu erobern.',
        unitName: 'Paket',
        usernameLabel: 'TikTok Benutzername',
        packages: [
          { amount: 1, name: 'Basic Viral', price: 9.99 },
          { amount: 1, name: 'Standard Viral', price: 19.99 },
          { amount: 1, name: 'Premium Viral', price: 39.99 },
        ],
        features: [
          'Likes, Kommentare und Shares',
          'Erhöhte Entdeckbarkeit',
          'For You Page Potenzial',
          'Kein Passwort erforderlich',
          '100% Sicher und anonym',
          '24/7 Support'
        ]
      },
      aufrufe: {
        title: 'TikTok Views kaufen',
        description: 'Steigere die Anzahl der Aufrufe deiner TikTok Videos mit authentischen Views, die dein Content-Ranking verbessern.',
        unitName: 'Views',
        usernameLabel: 'TikTok Video URL',
        packages: [
          { amount: 1000, name: 'Basic', price: 2.49 },
          { amount: 2500, name: 'Standard', price: 4.99 },
          { amount: 5000, name: 'Premium', price: 8.99 },
          { amount: 10000, name: 'Professional', price: 15.99 },
          { amount: 25000, name: 'Enterprise', price: 29.99 },
        ],
        features: [
          'Echte Views',
          'Sofortige Lieferung',
          'Verbesserte Reichweite',
          'Kein Passwort erforderlich',
          '100% Sicher und anonym',
          '24/7 Support'
        ]
      },
      kommentare: {
        title: 'TikTok Kommentare kaufen',
        description: 'Erhöhe die Interaktion auf deinen TikTok Videos mit benutzerdefinierten Kommentaren für mehr Engagement und Reichweite.',
        unitName: 'Kommentare',
        usernameLabel: 'TikTok Video URL',
        packages: [
          { amount: 10, name: 'Basic', price: 4.99 },
          { amount: 25, name: 'Standard', price: 9.99 },
          { amount: 50, name: 'Premium', price: 17.99 },
          { amount: 100, name: 'Professional', price: 29.99 },
        ],
        features: [
          'Benutzerdefinierte Kommentare',
          'Echte Profile',
          'Kein Passwort erforderlich',
          '100% Sicher und anonym',
          'Schnelle Lieferung',
          '24/7 Support'
        ]
      }
    },
    youtube: {
      abonnenten: {
        title: 'YouTube Abonnenten kaufen',
        description: 'Steigere deine YouTube Präsenz mit echten Abonnenten, die deine Glaubwürdigkeit erhöhen und dein Kanalwachstum beschleunigen.',
        unitName: 'Abonnenten',
        usernameLabel: 'YouTube Kanal URL',
        packages: [
          { amount: 100, name: 'Starter', price: 9.99 },
          { amount: 250, name: 'Basic', price: 19.99 },
          { amount: 500, name: 'Standard', price: 34.99 },
          { amount: 1000, name: 'Premium', price: 59.99 },
          { amount: 2000, name: 'Professional', price: 99.99 },
        ],
        features: [
          'Hochwertiges Profil',
          'Nachhaltige Abonnenten',
          'Kein Passwort erforderlich',
          '100% Sicher und anonym',
          'Lebenslange Garantie',
          '24/7 Support'
        ]
      },
      likes: {
        title: 'YouTube Likes kaufen',
        description: 'Verbessere das Engagement auf deinen Videos mit authentischen YouTube Likes für mehr Glaubwürdigkeit und bessere Algorithmus-Platzierung.',
        unitName: 'Likes',
        usernameLabel: 'YouTube Video URL',
        packages: [
          { amount: 50, name: 'Starter', price: 3.99 },
          { amount: 100, name: 'Basic', price: 6.99 },
          { amount: 250, name: 'Standard', price: 14.99 },
          { amount: 500, name: 'Premium', price: 24.99 },
          { amount: 1000, name: 'Professional', price: 44.99 },
        ],
        features: [
          'Hochwertiges Engagement',
          'Natürliche Verteilung',
          'Kein Passwort erforderlich',
          '100% Sicher und anonym',
          'Schnelle Lieferung',
          '24/7 Support'
        ]
      },
      aufrufe: {
        title: 'YouTube Aufrufe kaufen',
        description: 'Steigere deine Videoaufrufe mit echtem Traffic und erhöhe die Chancen, in den Empfehlungen und Suchergebnissen zu erscheinen.',
        unitName: 'Aufrufe',
        usernameLabel: 'YouTube Video URL',
        packages: [
          { amount: 1000, name: 'Basic', price: 4.99 },
          { amount: 2500, name: 'Standard', price: 9.99 },
          { amount: 5000, name: 'Premium', price: 17.99 },
          { amount: 10000, name: 'Professional', price: 29.99 },
          { amount: 25000, name: 'Enterprise', price: 59.99 },
        ],
        features: [
          'Echte Aufrufe',
          'Gute Watchtime',
          'Verbesserte Reichweite',
          'Kein Passwort erforderlich',
          '100% Sicher und anonym',
          '24/7 Support'
        ]
      },
      kommentare: {
        title: 'YouTube Kommentare kaufen',
        description: 'Erhöhe die Interaktion auf deinen Videos mit benutzerdefinierten Kommentaren für ein authentisches Engagement.',
        unitName: 'Kommentare',
        usernameLabel: 'YouTube Video URL',
        packages: [
          { amount: 5, name: 'Basic', price: 6.99 },
          { amount: 10, name: 'Standard', price: 12.99 },
          { amount: 25, name: 'Premium', price: 24.99 },
          { amount: 50, name: 'Professional', price: 44.99 },
        ],
        features: [
          'Benutzerdefinierte Kommentare',
          'Echte Profile',
          'Kein Passwort erforderlich',
          '100% Sicher und anonym',
          'Schnelle Lieferung',
          '24/7 Support'
        ]
      }
    },
    spotify: {
      follower: {
        title: 'Spotify Follower kaufen',
        description: 'Erweitere deine Spotify Präsenz mit echten Followern, die dein Künstlerprofil stärken und deine Glaubwürdigkeit erhöhen.',
        unitName: 'Follower',
        usernameLabel: 'Spotify Profil URL',
        packages: [
          { amount: 100, name: 'Starter', price: 4.99 },
          { amount: 250, name: 'Basic', price: 9.99 },
          { amount: 500, name: 'Standard', price: 17.99 },
          { amount: 1000, name: 'Premium', price: 29.99 },
          { amount: 2500, name: 'Professional', price: 59.99 },
        ],
        features: [
          'Hochwertiges Profil',
          'Sofortige Lieferung',
          'Kein Passwort erforderlich',
          '100% Sicher und anonym',
          'Lebenslange Garantie',
          '24/7 Support'
        ]
      },
      streams: {
        title: 'Spotify Streams kaufen',
        description: 'Steigere deine Streams auf Spotify mit authentischen Hörern und verbessere deine Platzierung in den Playlists und Charts.',
        unitName: 'Streams',
        usernameLabel: 'Spotify Track URL',
        packages: [
          { amount: 1000, name: 'Basic', price: 3.99 },
          { amount: 2500, name: 'Standard', price: 8.99 },
          { amount: 5000, name: 'Premium', price: 15.99 },
          { amount: 10000, name: 'Professional', price: 29.99 },
          { amount: 25000, name: 'Enterprise', price: 59.99 },
        ],
        features: [
          'Echte Streams',
          'Verbesserte Playlist-Chancen',
          'Kein Passwort erforderlich',
          '100% Sicher und anonym',
          'Schnelle Lieferung',
          '24/7 Support'
        ]
      },
      hoerer: {
        title: 'Spotify Monatliche Hörer kaufen',
        description: 'Erhöhe deine monatlichen Hörer auf Spotify mit echten Hörern und verbessere deine Künstlerstatistiken und Entdeckbarkeit.',
        unitName: 'Hörer',
        usernameLabel: 'Spotify Künstler URL',
        packages: [
          { amount: 500, name: 'Basic', price: 9.99 },
          { amount: 1000, name: 'Standard', price: 17.99 },
          { amount: 2500, name: 'Premium', price: 34.99 },
          { amount: 5000, name: 'Professional', price: 59.99 },
          { amount: 10000, name: 'Enterprise', price: 99.99 },
        ],
        features: [
          'Echte monatliche Hörer',
          'Verbesserte Artist Metrics',
          'Kein Passwort erforderlich',
          '100% Sicher und anonym',
          'Schnelle Lieferung',
          '24/7 Support'
        ]
      }
    },
    twitch: {
      follower: {
        title: 'Twitch Follower kaufen',
        description: 'Steigere deine Twitch Präsenz mit echten Followern, die dein Kanalwachstum beschleunigen und deine Glaubwürdigkeit erhöhen.',
        unitName: 'Follower',
        usernameLabel: 'Twitch Kanal',
        packages: [
          { amount: 100, name: 'Starter', price: 3.99 },
          { amount: 250, name: 'Basic', price: 8.99 },
          { amount: 500, name: 'Standard', price: 15.99 },
          { amount: 1000, name: 'Premium', price: 27.99 },
          { amount: 2500, name: 'Professional', price: 59.99 },
        ],
        features: [
          'Hochwertiges Profil',
          'Sofortige Lieferung',
          'Kein Passwort erforderlich',
          '100% Sicher und anonym',
          'Lebenslange Garantie',
          '24/7 Support'
        ]
      },
      zuschauer: {
        title: 'Twitch Live Zuschauer kaufen',
        description: 'Erweitere deine Live-Zuschauer auf Twitch und erhöhe deine Reichweite und Platzierung in den Kategorien.',
        unitName: 'Zuschauer',
        usernameLabel: 'Twitch Kanal',
        packages: [
          { amount: 10, name: 'Basic', price: 9.99 },
          { amount: 25, name: 'Standard', price: 19.99 },
          { amount: 50, name: 'Premium', price: 34.99 },
          { amount: 100, name: 'Professional', price: 59.99 },
        ],
        features: [
          'Echte Live-Zuschauer',
          'Verbesserte Kategorie-Platzierung',
          'Kein Passwort erforderlich',
          '100% Sicher und anonym',
          'Schnelle Lieferung',
          '24/7 Support'
        ]
      }
    }
  };
  
  return productMap[platform.toLowerCase()]?.[type.toLowerCase()] || null;
};

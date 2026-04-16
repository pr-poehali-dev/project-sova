import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-[#FF4D00] border-[#FF4D00]">Новый сезон — новый уровень</Badge>,
    title: "EXHACK — Доминируй в CS2.",
    content: 'Лучший чит на CS2 — необнаруживаемый, мощный, с поддержкой 24/7.',
    showButton: true,
    buttonText: 'Купить чит',
    image: 'https://cdn.poehali.dev/projects/1f2d4e44-3e66-4451-b273-a05760dc7bde/files/a1db007a-0444-4a0b-9fe0-7aee3f78c758.jpg'
  },
  {
    id: 'about',
    title: 'Почему мы?',
    content: 'Наши читы не детектируются VAC и используют передовые методы обхода античита. Тысячи довольных игроков по всему миру — и ни одного бана.'
  },
  {
    id: 'features',
    title: 'Возможности EXHACK',
    features: [
      { name: 'Аимбот', description: 'Плавное автоприцеливание с настройкой FOV и силы', icon: 'Crosshair' },
      { name: 'ESP / Wallhack', description: 'Видишь врагов сквозь стены с HP и оружием', icon: 'Eye' },
      { name: 'Тригербот', description: 'Автовыстрел при наведении прицела на врага', icon: 'MousePointerClick' },
      { name: 'Бхоп', description: 'Автоматические прыжки для максимальной скорости', icon: 'Rabbit' },
      { name: 'Радар-хак', description: 'Все враги отображаются на мини-карте', icon: 'Radar' },
      { name: 'No Recoil', description: 'Полная компенсация отдачи для любого оружия', icon: 'Minus' },
      { name: 'Спидхак', description: 'Увеличение скорости передвижения персонажа', icon: 'Zap' },
      { name: 'Скинченджер', description: 'Любые скины на оружие без покупки в Steam', icon: 'Palette' },
      { name: 'Античит байпас', description: 'Обход VAC, FaceIt и ESEA без детекции', icon: 'ShieldOff' },
      { name: 'Стримпруф', description: 'Чит невидим на скриншотах и стримах OBS', icon: 'VideoOff' },
    ]
  },
  {
    id: 'testimonials',
    title: 'Нас выбирают тысячи',
    content: 'От Global Elite до новичков — наши клиенты стабильно растут в рейтинге и получают удовольствие от каждой игры без страха быть забаненным.'
  },
  {
    id: 'pricing',
    title: 'Тарифы',
    pricing: [
      {
        name: 'День',
        price: '149₽',
        period: '24 часа доступа',
        features: ['Все функции', 'Поддержка 24/7', 'Активация за 5 минут'],
      },
      {
        name: 'Месяц',
        price: '890₽',
        period: '30 дней доступа',
        features: ['Все функции', 'Поддержка 24/7', 'Бесплатные обновления', 'Приоритетная помощь'],
        highlighted: true,
      },
      {
        name: 'Навсегда',
        price: '2490₽',
        period: 'Пожизненный доступ',
        features: ['Все функции', 'Поддержка 24/7', 'Все обновления навсегда', 'VIP-поддержка'],
      },
    ]
  },
  {
    id: 'join',
    title: 'Начни с EXHACK сейчас',
    content: 'Подключись за 5 минут. Гарантия безопасности, круглосуточная поддержка и регулярные обновления после каждого патча CS2.',
    showButton: true,
    buttonText: 'Купить EXHACK'
  },
]

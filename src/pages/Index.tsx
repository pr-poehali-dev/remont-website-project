import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    message: '',
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в течение 15 минут.');
    setFormData({ name: '', phone: '', area: '', message: '' });
  };

  const services = [
    {
      icon: 'Sparkles',
      title: 'Дизайн-проект',
      description: 'Создаём концепцию, планировочные решения, 3D-визуализацию и полный комплект чертежей',
      features: ['Планировки', '3D-визуализация', 'Чертежи', 'Смета'],
      price: 'от 1 500 ₽/м²',
    },
    {
      icon: 'Hammer',
      title: 'Ремонт под ключ',
      description: 'Берём на себя весь цикл: от демонтажа до финальной уборки',
      features: ['Демонтаж', 'Черновая отделка', 'Чистовая отделка', 'Уборка'],
      price: 'от 8 000 ₽/м²',
    },
    {
      icon: 'Package',
      title: 'Комплектация',
      description: 'Подбираем материалы, мебель и технику со скидками до 20%',
      features: ['Материалы', 'Мебель', 'Техника', 'Декор'],
      price: 'скидка до 20%',
    },
    {
      icon: 'Building2',
      title: 'Авторский надзор',
      description: 'Контролируем качество и соответствие дизайн-проекту',
      features: ['Контроль сроков', 'Проверка качества', 'Отчёты', 'Консультации'],
      price: 'от 50 000 ₽/мес',
    },
  ];

  const advantages = [
    {
      icon: 'Shield',
      title: 'Договор с гарантиями',
      description: 'Фиксируем сроки и бюджет. Платим неустойку за просрочку.',
    },
    {
      icon: 'Clock',
      title: 'Точно в срок',
      description: 'Работаем по чёткому графику. Средний срок — 90 дней.',
    },
    {
      icon: 'FileText',
      title: 'Прозрачная смета',
      description: 'Никаких скрытых доплат. Вся информация в договоре.',
    },
    {
      icon: 'Users',
      title: 'Своя команда',
      description: 'Постоянные бригады с опытом 10+ лет. Без посредников.',
    },
    {
      icon: 'Award',
      title: 'Гарантия 3 года',
      description: 'Даём расширенную гарантию на все виды работ.',
    },
    {
      icon: 'MessageSquare',
      title: 'Личный менеджер',
      description: 'На связи 24/7. Отчёты каждую неделю с фото.',
    },
  ];

  const portfolio = [
    {
      title: 'ЖК "Символ"',
      area: '120 м²',
      style: 'Минимализм',
      duration: '75 дней',
      budget: '960 000 ₽',
    },
    {
      title: 'ЖК "Город Набережных"',
      area: '85 м²',
      style: 'Неоклассика',
      duration: '60 дней',
      budget: '680 000 ₽',
    },
    {
      title: 'КП "Новорижский"',
      area: '200 м²',
      style: 'Скандинавский',
      duration: '120 дней',
      budget: '1 600 000 ₽',
    },
    {
      title: 'БЦ "Омега Плаза"',
      area: '150 м²',
      style: 'Лофт',
      duration: '90 дней',
      budget: '1 200 000 ₽',
    },
  ];

  const stages = [
    {
      number: '01',
      title: 'Знакомство',
      description: 'Бесплатный выезд на объект, обмер, консультация',
      duration: '1 день',
    },
    {
      number: '02',
      title: 'Дизайн-проект',
      description: 'Планировки, 3D-визуализация, полный комплект чертежей',
      duration: '2-4 недели',
    },
    {
      number: '03',
      title: 'Договор',
      description: 'Прозрачная смета, фиксация цены и сроков',
      duration: '1-2 дня',
    },
    {
      number: '04',
      title: 'Закупка',
      description: 'Комплектация материалами со скидками',
      duration: '1 неделя',
    },
    {
      number: '05',
      title: 'Ремонт',
      description: 'Выполнение работ под контролем прораба',
      duration: '1-3 месяца',
    },
    {
      number: '06',
      title: 'Приёмка',
      description: 'Проверка качества, устранение недочётов, сдача',
      duration: '2-3 дня',
    },
  ];

  const reviews = [
    {
      name: 'Екатерина Смирнова',
      project: 'Квартира 95 м²',
      rating: 5,
      text: 'Очень довольны результатом! Ребята учли все наши пожелания. Работы выполнены качественно и точно в срок. Особенно порадовал дизайн-проект — красиво и функционально.',
      date: 'Декабрь 2024',
    },
    {
      name: 'Дмитрий Волков',
      project: 'Офис 180 м²',
      rating: 5,
      text: 'Сделали ремонт офиса под ключ за 2 месяца. Смета не изменилась ни на рубль. Качество на высоте. Команда работает слаженно, всё чётко по графику.',
      date: 'Ноябрь 2024',
    },
    {
      name: 'Анна Петрова',
      project: 'Квартира 65 м²',
      rating: 5,
      text: 'Спасибо за красивый ремонт! Не нужно было ни о чём думать — всё взяли на себя. От дизайна до последней лампочки. Менеджер всегда на связи, отчёты каждую неделю.',
      date: 'Октябрь 2024',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <nav className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-montserrat font-bold tracking-tight">МВ ГРУПП</div>
            </div>
            <div className="hidden lg:flex items-center gap-10">
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-secondary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-secondary transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('stages')} className="text-sm font-medium hover:text-secondary transition-colors">
                Процесс
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-secondary transition-colors">
                Отзывы
              </button>
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="bg-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/25">
              Оставить заявку
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="relative min-h-[95vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-secondary/5 border border-secondary/20 rounded-full">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-secondary">Полный цикл отделочных работ</span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-montserrat font-bold text-primary mb-8 leading-[0.95] tracking-tight">
                Ремонт и дизайн
                <br />
                <span className="text-secondary">под ключ</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-14 max-w-4xl mx-auto leading-relaxed font-light">
                Вы не будете бегать по подрядчикам, следить за рабочими и тратить время на согласования.
                <br />
                <span className="font-semibold text-primary">Мы берём ВСЁ на себя:</span> проект, ремонт, комплектацию
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-lg px-10 h-16 shadow-2xl shadow-secondary/30 hover:shadow-secondary/50 transition-all"
                  onClick={() => scrollToSection('contacts')}
                >
                  Рассчитать стоимость
                  <Icon name="ArrowRight" size={22} className="ml-3" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-10 h-16 border-2 hover:border-secondary/50"
                  onClick={() => scrollToSection('portfolio')}
                >
                  Смотреть проекты
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold font-montserrat text-secondary mb-3">500+</div>
                  <div className="text-muted-foreground font-light">Реализованных<br />проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold font-montserrat text-secondary mb-3">12</div>
                  <div className="text-muted-foreground font-light">Лет опыта<br />на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold font-montserrat text-secondary mb-3">98%</div>
                  <div className="text-muted-foreground font-light">Довольных<br />клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold font-montserrat text-secondary mb-3">3 года</div>
                  <div className="text-muted-foreground font-light">Гарантия<br />на работы</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <Icon name="ChevronDown" size={36} className="text-secondary" />
          </div>
        </section>

        <section id="services" className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-24">
              <div className="text-sm font-semibold text-secondary mb-4 tracking-wider uppercase">Услуги</div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-primary mb-8 tracking-tight">
                Что мы делаем
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Полный комплекс услуг для создания интерьера вашей мечты — от идеи до воплощения
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="group p-10 hover:shadow-2xl transition-all duration-700 hover:-translate-y-1 border-2 border-gray-100 hover:border-secondary/20 bg-white overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-500">
                      <Icon name={service.icon} size={32} className="text-secondary" />
                    </div>
                    <h3 className="text-3xl font-montserrat font-bold text-primary mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="text-2xl font-bold text-secondary">{service.price}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mb-24">
              <div className="text-sm font-semibold text-secondary mb-4 tracking-wider uppercase">Преимущества</div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-8 tracking-tight">
                Почему мы
              </h2>
              <p className="text-xl text-white/80 font-light leading-relaxed">
                Мы делаем всё, чтобы процесс был комфортным, а результат превосходил ожидания
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
              {advantages.map((advantage, index) => (
                <div key={index} className="group">
                  <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/30 group-hover:scale-110 transition-all duration-500">
                    <Icon name={advantage.icon} size={28} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold mb-4">{advantage.title}</h3>
                  <p className="text-lg text-white/70 leading-relaxed font-light">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-24">
              <div className="text-sm font-semibold text-secondary mb-4 tracking-wider uppercase">Портфолио</div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-primary mb-8 tracking-tight">
                Наши проекты
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Более 500 реализованных объектов по всей России
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
              {portfolio.map((project, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-700 border-0">
                  <div className="relative h-80 bg-gradient-to-br from-gray-300 to-gray-200 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="Image" size={100} className="text-gray-400/30" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-primary">
                      {project.style}
                    </div>
                  </div>
                  <div className="p-8 bg-white">
                    <h3 className="text-2xl font-montserrat font-bold text-primary mb-6">{project.title}</h3>
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Площадь</div>
                        <div className="font-semibold text-primary">{project.area}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Срок</div>
                        <div className="font-semibold text-primary">{project.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Бюджет</div>
                        <div className="font-semibold text-secondary">{project.budget}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="stages" className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-24">
              <div className="text-sm font-semibold text-secondary mb-4 tracking-wider uppercase">Процесс</div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-primary mb-8 tracking-tight">
                Как мы работаем
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Прозрачный процесс от первого звонка до сдачи объекта
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
              {stages.map((stage, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-4 top-0 text-8xl font-montserrat font-black text-secondary/5 group-hover:text-secondary/10 transition-colors duration-500">
                    {stage.number}
                  </div>
                  <div className="relative">
                    <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold mb-6">
                      {stage.duration}
                    </div>
                    <h3 className="text-2xl font-montserrat font-bold text-primary mb-4">{stage.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg font-light">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-24">
              <div className="text-sm font-semibold text-secondary mb-4 tracking-wider uppercase">Отзывы</div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-primary mb-8 tracking-tight">
                Что говорят клиенты
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Нам доверяют, потому что мы держим слово
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl">
              {reviews.map((review, index) => (
                <Card key={index} className="p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex gap-1.5 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg font-light">{review.text}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div>
                      <div className="font-bold text-primary text-lg">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.project}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{review.date}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-start max-w-7xl mx-auto">
              <div>
                <div className="text-sm font-semibold text-secondary mb-4 tracking-wider uppercase">Контакты</div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-primary mb-8 tracking-tight">
                  Начнём<br />ваш проект?
                </h2>
                <p className="text-xl text-muted-foreground mb-14 font-light leading-relaxed">
                  Оставьте заявку, и мы свяжемся с вами в течение 15 минут для бесплатной консультации
                </p>
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">Телефон</div>
                      <a href="tel:+74951234567" className="text-2xl text-primary hover:text-secondary transition-colors font-semibold">
                        +7 (495) 123-45-67
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">Email</div>
                      <a href="mailto:info@mv-remont.ru" className="text-2xl text-primary hover:text-secondary transition-colors">
                        info@mv-remont.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">Адрес офиса</div>
                      <p className="text-lg text-primary">г. Москва, ул. Примерная, д. 1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">Режим работы</div>
                      <p className="text-lg text-primary">Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="p-10 lg:p-12 shadow-2xl border-0 bg-gray-50 sticky top-24">
                <h3 className="text-3xl font-montserrat font-bold text-primary mb-10">Оставить заявку</h3>
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div>
                    <Label htmlFor="name" className="text-base font-medium mb-3 block">Ваше имя *</Label>
                    <Input 
                      id="name" 
                      required
                      placeholder="Иван Иванов" 
                      className="h-14 bg-white text-base border-2 focus:border-secondary" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base font-medium mb-3 block">Телефон *</Label>
                    <Input 
                      id="phone" 
                      required
                      type="tel"
                      placeholder="+7 (___) ___-__-__" 
                      className="h-14 bg-white text-base border-2 focus:border-secondary" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="area" className="text-base font-medium mb-3 block">Площадь помещения, м²</Label>
                    <Input 
                      id="area" 
                      type="number"
                      placeholder="85" 
                      className="h-14 bg-white text-base border-2 focus:border-secondary" 
                      value={formData.area}
                      onChange={(e) => setFormData({...formData, area: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-base font-medium mb-3 block">Комментарий</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о вашем проекте..." 
                      className="bg-white text-base border-2 focus:border-secondary min-h-32" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 h-14 text-base font-semibold shadow-lg shadow-secondary/25">
                    Отправить заявку
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16 max-w-7xl">
            <div>
              <div className="text-3xl font-montserrat font-bold mb-5">МВ ГРУПП</div>
              <p className="text-white/60 leading-relaxed font-light">
                Профессиональная отделка полного цикла с 2012 года
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-bold mb-5 text-lg">Услуги</h4>
              <div className="space-y-3 text-white/60 font-light">
                <div className="hover:text-white transition-colors cursor-pointer">Дизайн-проект</div>
                <div className="hover:text-white transition-colors cursor-pointer">Ремонт под ключ</div>
                <div className="hover:text-white transition-colors cursor-pointer">Комплектация</div>
                <div className="hover:text-white transition-colors cursor-pointer">Авторский надзор</div>
              </div>
            </div>
            <div>
              <h4 className="font-montserrat font-bold mb-5 text-lg">Компания</h4>
              <div className="space-y-3 text-white/60 font-light">
                <div className="hover:text-white transition-colors cursor-pointer">О нас</div>
                <div className="hover:text-white transition-colors cursor-pointer">Портфолио</div>
                <div className="hover:text-white transition-colors cursor-pointer">Отзывы</div>
                <div className="hover:text-white transition-colors cursor-pointer">Контакты</div>
              </div>
            </div>
            <div>
              <h4 className="font-montserrat font-bold mb-5 text-lg">Контакты</h4>
              <div className="space-y-3 text-white/60 font-light">
                <div>+7 (495) 123-45-67</div>
                <div>info@mv-remont.ru</div>
                <div>г. Москва,<br />ул. Примерная, д. 1</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl">
            <p className="text-white/50 text-sm font-light">© 2024 МВ ГРУПП. Все права защищены</p>
            <div className="flex gap-8 text-sm text-white/50 font-light">
              <button className="hover:text-white transition-colors">Политика конфиденциальности</button>
              <button className="hover:text-white transition-colors">Договор оферты</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

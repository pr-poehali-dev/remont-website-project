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
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  const services = [
    {
      icon: 'Sparkles',
      title: 'Дизайн-проект',
      description: 'Разработка индивидуального дизайна с визуализацией и полным комплектом документации',
      price: 'от 1 500 ₽/м²',
    },
    {
      icon: 'Hammer',
      title: 'Ремонт под ключ',
      description: 'Полный цикл работ от демонтажа до финишной отделки с гарантией качества',
      price: 'от 8 000 ₽/м²',
    },
    {
      icon: 'Layers',
      title: 'Черновая отделка',
      description: 'Выравнивание стен и потолков, стяжка пола, подготовка коммуникаций',
      price: 'от 5 000 ₽/м²',
    },
    {
      icon: 'Paintbrush',
      title: 'Чистовая отделка',
      description: 'Покраска, обои, напольные покрытия, установка дверей и сантехники',
      price: 'от 6 500 ₽/м²',
    },
    {
      icon: 'Building2',
      title: 'Комплектация',
      description: 'Подбор и закупка материалов, мебели и техники с оптовыми скидками',
      price: 'скидка до 20%',
    },
    {
      icon: 'ClipboardCheck',
      title: 'Авторский надзор',
      description: 'Контроль качества работ и соответствия дизайн-проекту на всех этапах',
      price: 'от 50 000 ₽/мес',
    },
  ];

  const advantages = [
    {
      number: '01',
      title: 'Всё под ключ',
      description: 'От дизайна до финального декора. Вы не будете бегать по подрядчикам — мы берём всё на себя',
    },
    {
      number: '02',
      title: 'Точные сроки',
      description: 'Фиксируем сроки в договоре. Платим неустойку за каждый день просрочки',
    },
    {
      number: '03',
      title: 'Прозрачная смета',
      description: 'Никаких скрытых платежей. Стоимость фиксируется до начала работ',
    },
    {
      number: '04',
      title: 'Гарантия 3 года',
      description: 'Даём расширенную гарантию на все виды работ и материалов',
    },
  ];

  const portfolio = [
    {
      area: '120 м²',
      type: 'Квартира',
      style: 'Современный минимализм',
      location: 'ЖК "Символ"',
    },
    {
      area: '85 м²',
      type: 'Квартира',
      style: 'Неоклассика',
      location: 'ЖК "Город Набережных"',
    },
    {
      area: '200 м²',
      type: 'Дом',
      style: 'Скандинавский',
      location: 'КП "Новорижский"',
    },
    {
      area: '150 м²',
      type: 'Офис',
      style: 'Лофт',
      location: 'БЦ "Омега Плаза"',
    },
  ];

  const stages = [
    {
      number: '01',
      title: 'Заявка и замер',
      description: 'Оставляете заявку, мы выезжаем на объект для замеров и консультации',
      duration: '1 день',
    },
    {
      number: '02',
      title: 'Дизайн-проект',
      description: 'Разрабатываем индивидуальный дизайн с 3D визуализацией',
      duration: '14-30 дней',
    },
    {
      number: '03',
      title: 'Смета и договор',
      description: 'Формируем прозрачную смету, подписываем договор с фиксацией цены',
      duration: '1-2 дня',
    },
    {
      number: '04',
      title: 'Ремонт',
      description: 'Выполняем все работы под контролем прораба и дизайнера',
      duration: '30-90 дней',
    },
    {
      number: '05',
      title: 'Комплектация',
      description: 'Подбираем и закупаем мебель, технику, декор со скидками',
      duration: '7-14 дней',
    },
    {
      number: '06',
      title: 'Сдача объекта',
      description: 'Проверяем качество, устраняем недочёты, передаём ключи',
      duration: '1-3 дня',
    },
  ];

  const reviews = [
    {
      name: 'Екатерина Смирнова',
      project: 'Квартира 95 м²',
      rating: 5,
      text: 'Делали ремонт в новостройке. Очень довольны результатом! Дизайнеры учли все наши пожелания, работы выполнены качественно и точно в срок. Рекомендуем!',
      date: 'Ноябрь 2024',
    },
    {
      name: 'Дмитрий Волков',
      project: 'Офис 180 м²',
      rating: 5,
      text: 'Профессиональная команда. Сделали ремонт офиса под ключ за 2 месяца. Смета не изменилась, качество отличное. Будем обращаться ещё.',
      date: 'Октябрь 2024',
    },
    {
      name: 'Анна Петрова',
      project: 'Квартира 65 м²',
      rating: 5,
      text: 'Спасибо за красивый ремонт! Особенно понравилось, что не нужно было ни о чём думать — всё организовали сами. От дизайна до последней лампочки.',
      date: 'Сентябрь 2024',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-montserrat font-bold text-primary">МВ ГРУПП</div>
            </div>
            <div className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-secondary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-secondary transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('stages')} className="text-sm font-medium hover:text-secondary transition-colors">
                Этапы работы
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-secondary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-secondary transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="bg-secondary hover:bg-secondary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 py-32">
            <div className="max-w-5xl">
              <div className="inline-block mb-6 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                Полный цикл отделочных работ
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-montserrat font-bold text-primary mb-8 leading-tight">
                Ремонт и дизайн
                <br />
                <span className="text-secondary">под ключ</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
                Вы не будете бегать по подрядчикам, следить за рабочими и тратить время на согласования. 
                <span className="font-semibold text-primary"> Мы берём ВСЁ на себя:</span> проект, ремонт, комплектацию.
              </p>
              <div className="flex flex-wrap gap-4 mb-20">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-lg px-8 h-14"
                  onClick={() => scrollToSection('contacts')}
                >
                  Рассчитать стоимость
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 h-14 border-2"
                  onClick={() => scrollToSection('portfolio')}
                >
                  Смотреть портфолио
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
                <div>
                  <div className="text-5xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-muted-foreground">Реализованных проектов</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-secondary mb-2">12</div>
                  <div className="text-muted-foreground">Лет на рынке</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-secondary mb-2">98%</div>
                  <div className="text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-secondary mb-2">3 года</div>
                  <div className="text-muted-foreground">Гарантия на работы</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <Icon name="ChevronDown" size={32} className="text-secondary" />
          </div>
        </section>

        <section id="services" className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-20">
              <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-primary mb-6">
                Наши услуги
              </h2>
              <p className="text-xl text-muted-foreground">
                Полный комплекс услуг для создания интерьера вашей мечты — от идеи до реализации
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="group p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-secondary/20 bg-white"
                >
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="text-lg font-bold text-secondary">{service.price}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-20">
              <h2 className="text-5xl md:text-6xl font-montserrat font-bold mb-6">
                Почему выбирают нас
              </h2>
              <p className="text-xl text-white/80">
                Мы делаем всё, чтобы процесс ремонта был комфортным, а результат — превосходил ожидания
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex gap-6">
                  <div className="text-6xl font-montserrat font-bold text-secondary/30 flex-shrink-0">
                    {advantage.number}
                  </div>
                  <div>
                    <h3 className="text-3xl font-montserrat font-bold mb-4">{advantage.title}</h3>
                    <p className="text-xl text-white/80 leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-20">
              <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-primary mb-6">
                Наши проекты
              </h2>
              <p className="text-xl text-muted-foreground">
                Более 500 реализованных объектов по всей России
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {portfolio.map((project, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0">
                  <div className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="Image" size={80} className="text-gray-400/50" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-8 bg-white">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                        {project.type}
                      </div>
                      <div className="text-sm text-muted-foreground">{project.area}</div>
                    </div>
                    <h3 className="text-2xl font-montserrat font-bold text-primary mb-2">{project.style}</h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      {project.location}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="stages" className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-20">
              <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-primary mb-6">
                Этапы работы
              </h2>
              <p className="text-xl text-muted-foreground">
                Прозрачный процесс от первого звонка до сдачи объекта
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stages.map((stage, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-5xl font-montserrat font-bold text-secondary/20 flex-shrink-0">
                      {stage.number}
                    </div>
                    <div className="pt-2">
                      <div className="text-sm font-medium text-secondary mb-2">{stage.duration}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-primary mb-4">{stage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-20">
              <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-primary mb-6">
                Отзывы клиентов
              </h2>
              <p className="text-xl text-muted-foreground">
                Что говорят о нас наши клиенты
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="p-8 bg-white border-0 shadow-lg">
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{review.text}</p>
                  <div className="flex items-center justify-between pt-6 border-t">
                    <div>
                      <div className="font-bold text-primary">{review.name}</div>
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
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <div>
                <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-primary mb-6">
                  Начнём ваш проект?
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Оставьте заявку, и мы свяжемся с вами в течение 15 минут для бесплатной консультации
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-primary mb-1">Телефон</div>
                      <a href="tel:+74951234567" className="text-xl text-secondary hover:underline font-semibold">
                        +7 (495) 123-45-67
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-primary mb-1">Email</div>
                      <a href="mailto:info@mv-remont.ru" className="text-xl text-secondary hover:underline">
                        info@mv-remont.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-primary mb-1">Адрес</div>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="p-10 shadow-2xl border-0 bg-gray-50">
                <h3 className="text-3xl font-montserrat font-bold text-primary mb-8">Заказать звонок</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base">Ваше имя *</Label>
                    <Input 
                      id="name" 
                      required
                      placeholder="Иван Иванов" 
                      className="mt-2 h-12 bg-white" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base">Телефон *</Label>
                    <Input 
                      id="phone" 
                      required
                      type="tel"
                      placeholder="+7 (___) ___-__-__" 
                      className="mt-2 h-12 bg-white" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="area" className="text-base">Площадь помещения, м²</Label>
                    <Input 
                      id="area" 
                      type="number"
                      placeholder="85" 
                      className="mt-2 h-12 bg-white" 
                      value={formData.area}
                      onChange={(e) => setFormData({...formData, area: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-base">Комментарий</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о вашем проекте..." 
                      className="mt-2 bg-white" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 h-12 text-base">
                    Отправить заявку
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-montserrat font-bold mb-4">МВ ГРУПП</div>
              <p className="text-white/70">
                Профессиональная отделка полного цикла с 2012 года
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-bold mb-4">Услуги</h4>
              <div className="space-y-2 text-white/70">
                <div>Дизайн-проект</div>
                <div>Ремонт под ключ</div>
                <div>Черновая отделка</div>
                <div>Чистовая отделка</div>
              </div>
            </div>
            <div>
              <h4 className="font-montserrat font-bold mb-4">Компания</h4>
              <div className="space-y-2 text-white/70">
                <div>О нас</div>
                <div>Портфолио</div>
                <div>Отзывы</div>
                <div>Контакты</div>
              </div>
            </div>
            <div>
              <h4 className="font-montserrat font-bold mb-4">Режим работы</h4>
              <div className="space-y-2 text-white/70">
                <div>Пн-Пт: 9:00 - 20:00</div>
                <div>Сб-Вс: 10:00 - 18:00</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">© 2024 МВ ГРУПП. Все права защищены</p>
            <div className="flex gap-6 text-sm text-white/60">
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

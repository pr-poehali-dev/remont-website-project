import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [area, setArea] = useState([50]);
  const [serviceType, setServiceType] = useState('');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const calculatePrice = () => {
    const basePrice = serviceType === 'premium' ? 15000 : serviceType === 'standard' ? 10000 : 5000;
    return basePrice * area[0];
  };

  const services = [
    {
      icon: 'Paintbrush',
      title: 'Малярные работы',
      description: 'Профессиональная покраска стен и потолков с идеальным результатом',
    },
    {
      icon: 'Layers',
      title: 'Укладка плитки',
      description: 'Облицовка любой сложности: ванные комнаты, кухни, полы',
    },
    {
      icon: 'Home',
      title: 'Ремонт под ключ',
      description: 'Полный цикл работ от демонтажа до финишной отделки',
    },
    {
      icon: 'Hammer',
      title: 'Черновая отделка',
      description: 'Выравнивание стен, стяжка пола, подготовка помещений',
    },
    {
      icon: 'Sparkles',
      title: 'Дизайнерский ремонт',
      description: 'Премиум отделка с эксклюзивными материалами',
    },
    {
      icon: 'Wrench',
      title: 'Электромонтаж',
      description: 'Установка электрики, освещения, умного дома',
    },
  ];

  const portfolio = [
    {
      title: 'Квартира 85 м²',
      category: 'Премиум ремонт',
      description: 'ЖК "Новая Москва"',
    },
    {
      title: 'Офис 120 м²',
      category: 'Коммерческий',
      description: 'Бизнес-центр "Столица"',
    },
    {
      title: 'Квартира 65 м²',
      category: 'Чистовая отделка',
      description: 'ЖК "Семейный"',
    },
    {
      title: 'Таунхаус 180 м²',
      category: 'Премиум ремонт',
      description: 'КП "Зеленая долина"',
    },
  ];

  const team = [
    {
      name: 'Михаил Воронов',
      role: 'Главный инженер',
      experience: '15 лет опыта',
    },
    {
      name: 'Андрей Соколов',
      role: 'Дизайнер интерьеров',
      experience: '10 лет опыта',
    },
    {
      name: 'Дмитрий Петров',
      role: 'Мастер отделочных работ',
      experience: '12 лет опыта',
    },
    {
      name: 'Елена Кузнецова',
      role: 'Менеджер проектов',
      experience: '8 лет опыта',
    },
  ];

  const reviews = [
    {
      name: 'Анна Смирнова',
      rating: 5,
      text: 'Отличная работа! Сделали ремонт в квартире за 2 месяца. Качество на высоте, все по договору.',
    },
    {
      name: 'Игорь Волков',
      rating: 5,
      text: 'Профессиональная команда. Особенно порадовало внимание к деталям и чистота на объекте.',
    },
    {
      name: 'Мария Новикова',
      rating: 5,
      text: 'Делали ремонт офиса. Уложились в сроки, результат превзошел ожидания. Рекомендую!',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Home" size={28} className="text-accent" />
              <span className="text-2xl font-montserrat font-bold">МВ-Ремонт</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'services', label: 'Услуги' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'team', label: 'О команде' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'calculator', label: 'Калькулятор' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-accent' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary/95 to-secondary/20">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-montserrat font-bold text-white mb-6 text-balance">
                Премиум отделка
                <br />
                <span className="text-accent">полного цикла</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Превращаем пространства в произведения искусства. Гарантия качества, точные сроки, прозрачные цены.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
                  onClick={() => scrollToSection('calculator')}
                >
                  Рассчитать стоимость
                  <Icon name="Calculator" size={20} className="ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm"
                  onClick={() => scrollToSection('portfolio')}
                >
                  Портфолио работ
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-white/80">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">12</div>
                  <div className="text-white/80">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <div className="text-white/80">Довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-montserrat font-bold text-primary mb-4">Наши услуги</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Полный спектр отделочных работ любой сложности
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-secondary animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon name={service.icon} size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-montserrat font-bold text-primary mb-4">Портфолио работ</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Примеры наших реализованных проектов
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {portfolio.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-64 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                    <Icon name="Image" size={64} className="text-muted-foreground/30" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-medium text-secondary mb-2">{project.category}</div>
                    <h3 className="text-2xl font-montserrat font-bold text-primary mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-montserrat font-bold text-primary mb-4">Наша команда</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Профессионалы своего дела с многолетним опытом
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow">
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Icon name="User" size={40} className="text-white" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-secondary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-montserrat font-bold text-primary mb-4">Отзывы клиентов</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Что говорят о нас наши клиенты
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-white" />
                    </div>
                    <div className="font-medium text-primary">{review.name}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="calculator" className="py-24 bg-gradient-to-br from-primary to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-5xl font-montserrat font-bold text-white mb-4">Калькулятор стоимости</h2>
                <p className="text-xl text-white/90">
                  Узнайте примерную стоимость ремонта за 30 секунд
                </p>
              </div>
              <Card className="p-8 md:p-12">
                <div className="space-y-8">
                  <div>
                    <Label className="text-lg font-medium mb-4 block">Тип отделки</Label>
                    <Select value={serviceType} onValueChange={setServiceType}>
                      <SelectTrigger className="h-12 text-lg">
                        <SelectValue placeholder="Выберите тип отделки" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Базовая отделка</SelectItem>
                        <SelectItem value="standard">Стандартная отделка</SelectItem>
                        <SelectItem value="premium">Премиум отделка</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-lg font-medium mb-4 block">
                      Площадь помещения: <span className="text-secondary font-bold">{area[0]} м²</span>
                    </Label>
                    <Slider
                      value={area}
                      onValueChange={setArea}
                      min={20}
                      max={300}
                      step={5}
                      className="py-4"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>20 м²</span>
                      <span>300 м²</span>
                    </div>
                  </div>
                  {serviceType && (
                    <div className="bg-secondary/10 rounded-xl p-8 text-center animate-scale-in">
                      <div className="text-sm text-muted-foreground mb-2">Примерная стоимость:</div>
                      <div className="text-5xl font-montserrat font-bold text-secondary mb-2">
                        {calculatePrice().toLocaleString('ru-RU')} ₽
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {(calculatePrice() / area[0]).toLocaleString('ru-RU')} ₽ за м²
                      </div>
                    </div>
                  )}
                  <Button
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
                    onClick={() => scrollToSection('contacts')}
                  >
                    Получить точный расчет
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-5xl font-montserrat font-bold text-primary mb-4">Контакты</h2>
                <p className="text-xl text-muted-foreground">
                  Свяжитесь с нами удобным способом
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-secondary" />
                      </div>
                      <div>
                        <div className="font-medium text-primary mb-1">Телефон</div>
                        <a href="tel:+74951234567" className="text-lg text-secondary hover:underline">
                          +7 (495) 123-45-67
                        </a>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-secondary" />
                      </div>
                      <div>
                        <div className="font-medium text-primary mb-1">Email</div>
                        <a href="mailto:info@mv-remont.ru" className="text-lg text-secondary hover:underline">
                          info@mv-remont.ru
                        </a>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-secondary" />
                      </div>
                      <div>
                        <div className="font-medium text-primary mb-1">Адрес</div>
                        <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                      </div>
                    </div>
                  </Card>
                </div>
                <Card className="p-8">
                  <h3 className="text-2xl font-montserrat font-bold text-primary mb-6">Оставьте заявку</h3>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" placeholder="+7 (___) ___-__-__" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea id="message" placeholder="Расскажите о вашем проекте..." className="mt-2" rows={4} />
                    </div>
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                      Отправить заявку
                      <Icon name="Send" size={18} className="ml-2" />
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={24} className="text-accent" />
                <span className="text-xl font-montserrat font-bold">МВ-Ремонт</span>
              </div>
              <p className="text-primary-foreground/80">
                Профессиональная отделка полного цикла. Качество, надежность, точные сроки.
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-bold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2">
                {['Услуги', 'Портфолио', 'О команде', 'Отзывы', 'Контакты'].map((item) => (
                  <div key={item}>
                    <button className="text-primary-foreground/80 hover:text-accent transition-colors">
                      {item}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-montserrat font-bold mb-4">Режим работы</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Пн-Пт: 9:00 - 19:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 МВ-Ремонт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

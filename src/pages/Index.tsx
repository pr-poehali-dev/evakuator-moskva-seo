import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const services = [
    {
      icon: 'Car',
      title: 'Эвакуатор для легковых автомобилей',
      description: 'Перевозка легковых машин любой марки. Услуга эвакуации по Москве и области с платформой 5м',
      price: 'от 2 500 руб'
    },
    {
      icon: 'Truck',
      title: 'Эвакуатор для внедорожников',
      description: 'Специальная платформа для перевозки крупногабаритных авто. Услуга эвакуации джипов по фиксированной цене',
      price: 'от 3 500 руб'
    },
    {
      icon: 'Wrench',
      title: 'Эвакуация автомобилей после ДТП',
      description: 'Круглосуточная услуга эвакуатора на любой дороге Москвы. Наш сервис работает со страховыми компаниями',
      price: 'от 3 000 руб'
    },
    {
      icon: 'MapPin',
      title: 'Эвакуатор за МКАД',
      description: 'Перевозка машин за пределы МКАД. Работаем на всех шоссе Московской области',
      price: 'от 50 руб/км'
    },
    {
      icon: 'Clock',
      title: 'Эвакуатор за 10 минут',
      description: 'Экспресс-услуга: подача эвакуатора за 10 минут в любую точку Москвы. Быстрая эвакуация автомобилей',
      price: 'от 4 000 руб'
    },
    {
      icon: 'ShieldCheck',
      title: 'Эвакуация спецтехники',
      description: 'Перевозка мотоциклов, квадроциклов и любой другой спецтехники. Наш сервис работает с любыми ТС',
      price: 'от 2 000 руб'
    }
  ];

  const prices = [
    {
      type: 'Легковой автомобиль',
      withinMKAD: '2 500₽',
      beyondMKAD: '3 000₽ + 50₽/км',
      time: '10-15 минут',
      features: ['До 2 тонн', 'Седаны, хэтчбеки', 'Платформа 5м']
    },
    {
      type: 'Внедорожник / Кроссовер',
      withinMKAD: '3 500₽',
      beyondMKAD: '4 000₽ + 50₽/км',
      time: '15-20 минут',
      features: ['До 3 тонн', 'SUV, джипы', 'Платформа 6м']
    },
    {
      type: 'Минивэн / Микроавтобус',
      withinMKAD: '4 000₽',
      beyondMKAD: '4 500₽ + 50₽/км',
      time: '20-30 минут',
      features: ['До 3.5 тонн', 'Газель, Спринтер', 'Платформа 7м']
    },
    {
      type: 'Грузовой автомобиль',
      withinMKAD: 'от 5 000₽',
      beyondMKAD: 'от 6 000₽ + 60₽/км',
      time: '30-40 минут',
      features: ['От 3.5 тонн', 'Грузовики', 'Платформа 8м+']
    }
  ];

  const reviews = [
    {
      name: 'Алексей Морозов',
      rating: 5,
      date: '2 дня назад',
      text: 'Отличный сервис эвакуации! Авто сломалось на дороге у МКАД, эвакуатор приехал за 12 минут. Цена услуги как договаривались. Водитель профессионал.',
      carType: 'BMW X5',
      avatar: '👨‍💼'
    },
    {
      name: 'Мария Соколова',
      rating: 5,
      date: '5 дней назад',
      text: 'Заказала эвакуатор круглосуточно ночью после ДТП на Ленинградском шоссе. Услуга перевозки автомобиля оказана быстро, стоимость в руб как договаривались.',
      carType: 'Toyota Camry',
      avatar: '👩'
    },
    {
      name: 'Дмитрий Петров',
      rating: 5,
      date: '1 неделю назад',
      text: 'Заказываю эвакуатор Москва уже второй раз. Наш любимый сервис эвакуации машин — всегда чётко, за 10 минут и по фиксированной цене в руб.',
      carType: 'Mercedes E-Class',
      avatar: '👨'
    },
    {
      name: 'Ольга Никитина',
      rating: 5,
      date: '2 недели назад',
      text: 'Услуга эвакуации легкового автомобиля с подземной парковки. Наш эвакуатор справился за 15 минут. Стоимость перевозки авто адекватная. Спасибо!',
      carType: 'Nissan Qashqai',
      avatar: '👩‍💼'
    }
  ];

  const gallery = [
    {
      url: 'https://cdn.poehali.dev/projects/941748e8-1efb-42de-83b6-dc71da40b66f/files/aafd21ea-f20f-405c-99ba-792f66a1561e.jpg',
      title: 'Эвакуатор в Москве ночью',
      description: 'Современная техника для круглосуточной эвакуации'
    },
    {
      url: 'https://cdn.poehali.dev/projects/941748e8-1efb-42de-83b6-dc71da40b66f/files/21019277-67c3-449d-b169-f2ccf6761645.jpg',
      title: 'Профессиональный водитель',
      description: 'Опытные специалисты с многолетним стажем'
    },
    {
      url: 'https://cdn.poehali.dev/projects/941748e8-1efb-42de-83b6-dc71da40b66f/files/c3e97238-371c-4575-8899-b73d0aa54c78.jpg',
      title: 'Погрузка автомобиля',
      description: 'Бережная эвакуация любых типов транспорта'
    }
  ];

  const team = [
    { name: 'Иван Петров', role: 'Старший водитель', experience: '12 лет', avatar: '👨‍🔧' },
    { name: 'Сергей Иванов', role: 'Водитель-эвакуаторщик', experience: '8 лет', avatar: '👨‍💼' },
    { name: 'Алексей Смирнов', role: 'Диспетчер', experience: '5 лет', avatar: '👨‍💻' },
    { name: 'Мария Волкова', role: 'Старший диспетчер', experience: '7 лет', avatar: '👩‍💼' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={32} className="text-accent" />
              <div>
                <h1 className="font-heading font-bold text-xl text-primary">Эвакуатор Москва 24/7</h1>
                <p className="text-xs text-muted-foreground">Подача за 10 минут</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-accent transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('prices')} className="text-sm font-medium hover:text-accent transition-colors">
                Цены
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-accent transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-accent transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-accent transition-colors">
                Контакты
              </button>
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden lg:block text-right">
                <a href="tel:+74951234567" className="font-heading font-bold text-lg text-primary hover:text-accent transition-colors">
                  +7 (495) 123-45-67
                </a>
                <p className="text-xs text-muted-foreground">Круглосуточно</p>
              </div>
              <Button onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-accent/90">
                Заказать
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-accent text-accent-foreground">Работаем с 2010 года</Badge>
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-primary mb-6 leading-tight">
                Эвакуатор Москва — услуга эвакуации автомобилей за 10 минут
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Круглосуточная эвакуация машин по Москве и области. Прозрачные цены от 2500 руб, наш сервис работает на любых шоссе и дорогах. Перевозка авто любого типа на платформе.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-primary">10 минут</p>
                    <p className="text-sm text-muted-foreground">Подача эвакуатора</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-primary">Страховка</p>
                    <p className="text-sm text-muted-foreground">Полная защита</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="DollarSign" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-primary">От 2 500 руб</p>
                    <p className="text-sm text-muted-foreground">Цена услуги эвакуатора</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-primary">1000+ клиентов</p>
                    <p className="text-sm text-muted-foreground">Заказали эвакуатор</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-accent hover:bg-accent/90 text-lg h-14 animate-pulse-scale">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать эвакуатор Москва
                </Button>
                <Button onClick={() => scrollToSection('prices')} variant="outline" size="lg" className="text-lg h-14">
                  Узнать стоимость услуги
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/941748e8-1efb-42de-83b6-dc71da40b66f/files/aafd21ea-f20f-405c-99ba-792f66a1561e.jpg"
                alt="Эвакуатор Москва круглосуточно"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <Icon name="Star" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-2xl text-primary">4.9</p>
                    <p className="text-sm text-muted-foreground">Рейтинг на Яндекс</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-4">
              Услуги эвакуатора в Москве
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Наш сервис предоставляет услуги эвакуации и перевозки машин любого типа по Москве. Эвакуатор с платформой для легковых авто и спецтехники
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-accent" />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="font-heading font-bold text-xl text-accent">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Прозрачные цены</Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-4">
              Стоимость услуги эвакуатора Москва
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Фиксированная цена услуги эвакуации от 2500 руб. Стоимость не меняется после подачи эвакуатора. Заказать перевозку авто можно круглосуточно
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left font-heading">Тип автомобиля</th>
                  <th className="px-6 py-4 text-left font-heading">В пределах МКАД</th>
                  <th className="px-6 py-4 text-left font-heading">За МКАД</th>
                  <th className="px-6 py-4 text-left font-heading">Время подачи</th>
                  <th className="px-6 py-4 text-left font-heading">Особенности</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((price, index) => (
                  <tr key={index} className="border-b border-border hover:bg-secondary/50 transition-colors">
                    <td className="px-6 py-4 font-semibold">{price.type}</td>
                    <td className="px-6 py-4 text-accent font-heading font-bold">{price.withinMKAD}</td>
                    <td className="px-6 py-4">{price.beyondMKAD}</td>
                    <td className="px-6 py-4">{price.time}</td>
                    <td className="px-6 py-4">
                      <ul className="text-sm space-y-1">
                        {price.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Icon name="Check" size={14} className="text-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-white rounded-xl">
            <h3 className="font-heading font-bold text-xl mb-4">Дополнительные услуги:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Icon name="Clock3" size={20} className="text-accent mt-1" />
                <div>
                  <p className="font-semibold mb-1">Ожидание на месте</p>
                  <p className="text-sm text-muted-foreground">Первые 15 минут бесплатно, далее 200₽ за 10 минут</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="User" size={20} className="text-accent mt-1" />
                <div>
                  <p className="font-semibold mb-1">Помощь водителя</p>
                  <p className="text-sm text-muted-foreground">Погрузка-разгрузка, техническая помощь — бесплатно</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CreditCard" size={20} className="text-accent mt-1" />
                <div>
                  <p className="font-semibold mb-1">Способы оплаты</p>
                  <p className="text-sm text-muted-foreground">Наличные, карта, безналичный расчёт</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наша техника</Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-4">
              Галерея эвакуаторов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современный автопарк для эвакуации любых типов транспорта
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all"
                onClick={() => setSelectedImage(image.url)}
              >
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading font-bold text-white text-lg mb-1">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Отзывы клиентов</Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-4">
              Что говорят наши клиенты
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Более 1000 довольных клиентов за последний год
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{review.avatar}</div>
                      <div>
                        <p className="font-heading font-semibold text-primary">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <Badge variant="outline" className="w-fit">{review.carType}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Badge className="mb-4">О компании</Badge>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-6">
                История и достижения
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-primary">Эвакуатор Москва 24/7</strong> — одна из ведущих служб эвакуации в столице с 2010 года. За 13 лет работы мы помогли более чем 15 000 автовладельцев в сложных ситуациях.
                </p>
                <p>
                  Наша команда состоит из профессиональных водителей с многолетним опытом. Мы используем только современную технику и гарантируем бережную транспортировку вашего автомобиля.
                </p>
                <p>
                  Мы работаем круглосуточно, без выходных и праздников. Среднее время подачи эвакуатора — всего 10-15 минут в пределах МКАД.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <p className="font-heading font-bold text-3xl text-accent mb-1">13+</p>
                  <p className="text-sm text-muted-foreground">Лет на рынке</p>
                </div>
                <div className="text-center">
                  <p className="font-heading font-bold text-3xl text-accent mb-1">15К+</p>
                  <p className="text-sm text-muted-foreground">Клиентов</p>
                </div>
                <div className="text-center">
                  <p className="font-heading font-bold text-3xl text-accent mb-1">25+</p>
                  <p className="text-sm text-muted-foreground">Эвакуаторов</p>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://cdn.poehali.dev/projects/941748e8-1efb-42de-83b6-dc71da40b66f/files/21019277-67c3-449d-b169-f2ccf6761645.jpg"
                alt="Команда эвакуаторов Москва"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="font-heading font-bold text-2xl text-primary mb-8 text-center">Наша команда</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-5xl mb-3">{member.avatar}</div>
                    <CardTitle className="font-heading text-lg">{member.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">Опыт: {member.experience}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-2xl text-primary mb-8 text-center">Лицензии и сертификаты</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <Icon name="FileCheck" size={48} className="mx-auto mb-4 text-accent" />
                <h4 className="font-heading font-semibold mb-2">Лицензия</h4>
                <p className="text-sm text-muted-foreground">Официальная лицензия на услуги эвакуации</p>
              </Card>
              <Card className="text-center p-6">
                <Icon name="ShieldCheck" size={48} className="mx-auto mb-4 text-accent" />
                <h4 className="font-heading font-semibold mb-2">Страхование</h4>
                <p className="text-sm text-muted-foreground">Полис страхования гражданской ответственности</p>
              </Card>
              <Card className="text-center p-6">
                <Icon name="Award" size={48} className="mx-auto mb-4 text-accent" />
                <h4 className="font-heading font-semibold mb-2">Сертификаты</h4>
                <p className="text-sm text-muted-foreground">Сертификаты качества обслуживания</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Часто задаваемые вопросы</Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-4">
              FAQ по услугам эвакуатора Москва
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <Card className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-3">Сколько стоит эвакуатор в Москве?</h3>
              <p className="text-muted-foreground">
                Цена услуги эвакуатора для легкового автомобиля в пределах МКАД — от 2500 руб. Стоимость эвакуации внедорожников — от 3500 руб. За МКАД стоимость перевозки авто рассчитывается + 50 руб/км.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-3">Как быстро приедет эвакуатор?</h3>
              <p className="text-muted-foreground">
                Наш эвакуатор Москва прибывает за 10-15 минут в пределах МКАД. Для заказа эвакуации машин круглосуточно позвоните нам, и наш сервис отправит ближайший эвакуатор на любую дорогу или шоссе.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-3">Можно ли заказать эвакуатор круглосуточно?</h3>
              <p className="text-muted-foreground">
                Да, услуга эвакуатора доступна круглосуточно — 24/7 без выходных. Вы можете заказать эвакуацию автомобилей в любое время на любом шоссе или проспекте Москвы.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-3">На каких шоссе работает эвакуатор?</h3>
              <p className="text-muted-foreground">
                Наш сервис эвакуации работает на всех шоссе Москвы: Ленинградское шоссе, Дмитровское шоссе, Варшавское шоссе и другие. Перевозка машин доступна по любой дороге в пределах МКАД и за МКАД до 50 км.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-3">Какие машины эвакуирует ваш сервис?</h3>
              <p className="text-muted-foreground">
                Услуга эвакуации доступна для любых авто: легковые автомобили, внедорожники, микроавтобусы, грузовые машины и спецтехника. У нас есть эвакуаторы с платформой разных размеров для перевозки любого автомобиля.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-3">Как заказать эвакуатор в Москве?</h3>
              <p className="text-muted-foreground">
                Чтобы заказать эвакуатор Москва, позвоните по телефону +7 (495) 123-45-67 или оставьте заявку на сайте. Наш сервис отправит эвакуатор за 10 минут. Цена услуги фиксированная — от 2500 руб.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-4">
              Вызвать эвакуатор
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Заполните форму или позвоните нам — мы приедем за 10 минут
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8">
              <h3 className="font-heading font-bold text-xl mb-6">Оставьте заявку</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Иван Петров" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Тип автомобиля</label>
                  <Input placeholder="Например: BMW X5" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Адрес подачи</label>
                  <Input placeholder="Москва, улица..." />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Комментарий</label>
                  <Textarea placeholder="Опишите ситуацию..." rows={4} />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-2">Телефон</h4>
                    <a href="tel:+74951234567" className="text-lg font-heading font-bold text-accent hover:underline">
                      +7 (495) 123-45-67
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Круглосуточно, без выходных</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-2">Email</h4>
                    <a href="mailto:info@evacuator-moscow.ru" className="text-accent hover:underline">
                      info@evacuator-moscow.ru
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-2">Адрес офиса</h4>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Тверская, д. 1<br />
                      Пн-Вс: 24/7
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/5">
                <h4 className="font-heading font-semibold mb-3">Зона обслуживания эвакуатора</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    Эвакуатор Москва (в пределах МКАД)
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    Эвакуация авто за МКАД до 50 км
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    Московская область — любой проспект
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    Ленинградское шоссе (услуга эвакуатора)
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    Дмитровское шоссе (перевозка машин)
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    Варшавское шоссе (круглосуточно)
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Truck" size={28} className="text-accent" />
                <h3 className="font-heading font-bold text-lg">Эвакуатор 24/7</h3>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Профессиональная эвакуация автомобилей в Москве с 2010 года
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#services" className="hover:text-accent transition-colors">Эвакуация легковых</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Эвакуация внедорожников</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Эвакуация после ДТП</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Эвакуация за МКАД</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#prices" className="hover:text-accent transition-colors">Цены</a></li>
                <li><a href="#reviews" className="hover:text-accent transition-colors">Отзывы</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">О компании</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="tel:+74951234567" className="text-accent font-heading font-bold text-lg hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </li>
                <li className="text-primary-foreground/80">
                  info@evacuator-moscow.ru
                </li>
                <li className="text-primary-foreground/80">
                  г. Москва, ул. Тверская, д. 1
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2010-2024 Эвакуатор Москва 24/7. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <a 
        href="tel:+74951234567"
        className="fixed bottom-6 right-6 w-16 h-16 bg-accent text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 animate-pulse-scale"
      >
        <Icon name="Phone" size={28} />
      </a>

      {selectedImage && (
        <Dialog open={true} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Фотография</DialogTitle>
            </DialogHeader>
            <img 
              src={selectedImage}
              alt="Увеличенное изображение"
              className="w-full rounded-lg"
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Index;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ReviewsAndAbout = () => {
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

  const team = [
    { name: 'Иван Петров', role: 'Старший водитель', experience: '12 лет', avatar: '👨‍🔧' },
    { name: 'Сергей Иванов', role: 'Водитель-эвакуаторщик', experience: '8 лет', avatar: '👨‍💼' },
    { name: 'Алексей Смирнов', role: 'Диспетчер', experience: '5 лет', avatar: '👨‍💻' },
    { name: 'Мария Волкова', role: 'Старший диспетчер', experience: '7 лет', avatar: '👩‍💼' }
  ];

  return (
    <>
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
    </>
  );
};

export default ReviewsAndAbout;

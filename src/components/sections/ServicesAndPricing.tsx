import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ServicesAndPricingProps {
  setSelectedImage: (url: string) => void;
}

const ServicesAndPricing = ({ setSelectedImage }: ServicesAndPricingProps) => {
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

  return (
    <>
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
    </>
  );
};

export default ServicesAndPricing;

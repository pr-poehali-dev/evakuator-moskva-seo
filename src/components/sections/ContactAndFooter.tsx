import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ContactAndFooter = () => {
  return (
    <>
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
    </>
  );
};

export default ContactAndFooter;

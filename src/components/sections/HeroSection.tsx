import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <>
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
    </>
  );
};

export default HeroSection;

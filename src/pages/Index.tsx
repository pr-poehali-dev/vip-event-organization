import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', type: '', message: '' });
  const [emailError, setEmailError] = useState('');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const validateEmail = (email: string) => {
    return email.includes('@');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setEmailError('Email должен содержать символ @');
      return;
    }
    setEmailError('');
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', type: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">ЭЛИТ</h1>
          <div className="hidden md:flex gap-8">
            {['Главная', 'Мероприятия', 'Вечеринки', 'Туры', 'Портфолио', 'О компании', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-sm tracking-wide hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Связаться
          </Button>
        </div>
      </nav>

      <section id="главная" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10"></div>
        <img 
          src="https://cdn.poehali.dev/projects/37e37c3b-14d3-4bda-9bde-f55163b5ea07/files/166bf68f-dce7-4b4b-8936-5605c226ff3f.jpg" 
          alt="Luxury venue"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="container mx-auto px-6 z-20 text-center animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
            Элитные мероприятия<br />
            <span className="text-primary">под ключ</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            VIP-организация эксклюзивных событий и путешествий по России
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              Консультация
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8">
              Портфолио
            </Button>
          </div>
        </div>
      </section>

      <section id="мероприятия" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-5xl md:text-6xl font-light mb-4">Мероприятия</h3>
            <p className="text-muted-foreground text-lg">Организация корпоративных и частных событий премиум-класса</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Building2', title: 'Корпоративные', desc: 'Конференции, презентации, тимбилдинги для крупного бизнеса' },
              { icon: 'Users', title: 'Частные', desc: 'Дни рождения, юбилеи, семейные торжества в формате VIP' },
              { icon: 'Award', title: 'Премии и награждения', desc: 'Церемонии награждения с полным сопровождением' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary transition-all duration-300 animate-scale-in group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="вечеринки" className="py-24 px-6 bg-secondary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-5xl md:text-6xl font-light mb-6">Вечеринки</h3>
              <p className="text-muted-foreground text-lg mb-8">
                Эксклюзивные вечеринки в лучших локациях Москвы и Санкт-Петербурга. 
                Авторские концепции, топовые артисты, безупречный сервис.
              </p>
              <ul className="space-y-4">
                {['Закрытые вечеринки на крышах', 'Тематические балы и гала-ужины', 'Afterparty для избранных гостей'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Узнать подробнее
              </Button>
            </div>
            <div className="relative h-[500px] animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/37e37c3b-14d3-4bda-9bde-f55163b5ea07/files/e16f1d56-b927-4f01-8e1a-1c0ff3bf46a6.jpg"
                alt="Exclusive party"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="туры" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] animate-scale-in order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/37e37c3b-14d3-4bda-9bde-f55163b5ea07/files/8457e71b-8eb4-4a31-804d-66f70b1d0806.jpg"
                alt="Premium tour"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="animate-fade-in order-1 md:order-2">
              <h3 className="text-5xl md:text-6xl font-light mb-6">Туры по России</h3>
              <p className="text-muted-foreground text-lg mb-8">
                Индивидуальные маршруты премиум-класса по самым красивым местам России. 
                Частные гиды, роскошные отели, эксклюзивный доступ.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: 'Train', title: 'Транссиб VIP' },
                  { icon: 'Mountain', title: 'Горнолыжные курорты' },
                  { icon: 'Waves', title: 'Круизы по рекам' },
                  { icon: 'Castle', title: 'Исторические усадьбы' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon name={item.icon as any} size={24} className="text-primary" />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Подобрать тур
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-5xl md:text-6xl font-light mb-4">Портфолио</h3>
            <p className="text-muted-foreground text-lg">Наши реализованные проекты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: 'https://cdn.poehali.dev/projects/37e37c3b-14d3-4bda-9bde-f55163b5ea07/files/166bf68f-dce7-4b4b-8936-5605c226ff3f.jpg', title: 'Корпоративный гала-ужин' },
              { src: 'https://cdn.poehali.dev/projects/37e37c3b-14d3-4bda-9bde-f55163b5ea07/files/e16f1d56-b927-4f01-8e1a-1c0ff3bf46a6.jpg', title: 'Премиум вечеринка' },
              { src: 'https://cdn.poehali.dev/projects/37e37c3b-14d3-4bda-9bde-f55163b5ea07/files/65b0475f-475c-4952-a79f-94afdae5dfa8.jpg', title: 'Элитное торжество' },
              { src: 'https://cdn.poehali.dev/projects/37e37c3b-14d3-4bda-9bde-f55163b5ea07/files/0c715a2e-1bad-4fd5-b408-02447a6ae0ee.jpg', title: 'VIP яхт-вечеринка' },
              { src: 'https://cdn.poehali.dev/projects/37e37c3b-14d3-4bda-9bde-f55163b5ea07/files/36191bb3-cde1-439c-b165-100f5c0ad677.jpg', title: 'Горнолыжный тур' }
            ].map((item, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-lg animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <img 
                  src={item.src}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-xl font-semibold p-6">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="о-компании" className="py-24 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h3 className="text-5xl md:text-6xl font-light mb-8">О компании</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Мы — команда профессионалов с 15-летним опытом организации мероприятий высшего уровня. 
              Работаем только с VIP-клиентами, предоставляя полный спектр услуг под ключ. 
              Каждое событие создаётся по индивидуальному проекту с вниманием к малейшим деталям.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { num: '15+', label: 'Лет опыта' },
                { num: '500+', label: 'Событий' },
                { num: '100%', label: 'Конфиденциальность' }
              ].map((item, idx) => (
                <div key={idx} className="animate-scale-in">
                  <div className="text-5xl md:text-6xl font-light text-primary mb-2">{item.num}</div>
                  <div className="text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-5xl md:text-6xl font-light mb-4">Контакты</h3>
            <p className="text-muted-foreground text-lg">Свяжитесь с нами для обсуждения вашего мероприятия</p>
          </div>
          <Card className="bg-card border-border animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">Имя</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input 
                    type="text" 
                    value={formData.email}
                    onChange={(e) => { setFormData({...formData, email: e.target.value}); setEmailError(''); }}
                    className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="example@mail.ru"
                    required
                  />
                  {emailError && <p className="text-destructive text-sm mt-1">{emailError}</p>}
                </div>
                <div>
                  <label className="block text-sm mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Тип мероприятия</label>
                  <select 
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option>Выберите тип</option>
                    <option>Корпоративное мероприятие</option>
                    <option>Частная вечеринка</option>
                    <option>Премиум-тур</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2">Сообщение</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-background border border-border rounded-md px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Расскажите о вашем мероприятии"
                    required
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg">
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border space-y-3 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <a href="tel:+74951234567" className="hover:text-primary transition-colors">+7 (495) 123-45-67</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <a href="mailto:info@elite-events.ru" className="hover:text-primary transition-colors">info@elite-events.ru</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>Москва, Тверская ул., 1</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary/40 py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-wider">ЭЛИТ</h2>
          <p className="text-muted-foreground mb-6">Организация VIP-мероприятий и туризма по России</p>
          <div className="flex gap-6 justify-center mb-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
              <Icon name="Instagram" size={20} />
              <span>Instagram</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
              <Icon name="Facebook" size={20} />
              <span>Facebook</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
              <Icon name="Linkedin" size={20} />
              <span>Linkedin</span>
            </a>
          </div>
          <div className="space-y-2 mb-6">
            <div className="flex items-center justify-center gap-2">
              <Icon name="Phone" size={16} className="text-primary" />
              <a href="tel:+74951234567" className="hover:text-primary transition-colors">+7 (495) 123-45-67</a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Icon name="Mail" size={16} className="text-primary" />
              <a href="mailto:info@elite-events.ru" className="hover:text-primary transition-colors">info@elite-events.ru</a>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 ЭЛИТ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
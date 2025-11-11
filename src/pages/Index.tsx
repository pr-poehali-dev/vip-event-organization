import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', type: '', message: '' });
  const [emailError, setEmailError] = useState('');

  const scrollToSection = (section: string) => {
    setMobileMenuOpen(false);
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
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-tight">Kairos</h1>
          <div className="hidden md:flex gap-8">
            {['Главная', 'Мероприятия', 'Вечеринки', 'Туры', 'Портфолио', 'О компании', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-sm hover:text-foreground/60 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border/40 animate-fade-in">
            <div className="px-6 py-4 space-y-3">
              {['Главная', 'Мероприятия', 'Вечеринки', 'Туры', 'Портфолио', 'О компании', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block text-sm w-full text-left py-2 hover:text-foreground/60 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="главная" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight leading-tight">
            Создаём события,<br />которые запоминаются
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Организация премиальных мероприятий и туров по России
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('контакты')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
            >
              Связаться с нами
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('портфолио')}
              className="border-border hover:bg-accent rounded-full px-8"
            >
              Смотреть проекты
            </Button>
          </div>
        </div>
      </section>

      <section id="мероприятия" className="py-32 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">Мероприятия</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Профессиональная организация событий любого масштаба
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Building2', title: 'Корпоративные', desc: 'Конференции, презентации и тимбилдинги' },
              { icon: 'Users', title: 'Частные', desc: 'Юбилеи и семейные торжества' },
              { icon: 'Award', title: 'Церемонии', desc: 'Премии и награждения с полным сопровождением' }
            ].map((item, idx) => (
              <div key={idx} className="bg-background rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 animate-scale-in">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                  <Icon name={item.icon as any} size={24} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="вечеринки" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/37e37c3b-14d3-4bda-9bde-f55163b5ea07/files/e16f1d56-b927-4f01-8e1a-1c0ff3bf46a6.jpg"
                alt="Exclusive party"
                className="w-full aspect-[4/3] object-cover rounded-3xl"
              />
            </div>
            <div className="animate-fade-in order-1 md:order-2">
              <h3 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">Вечеринки</h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Эксклюзивные вечеринки в премиальных локациях. 
                Авторские концепции и безупречное исполнение.
              </p>
              <ul className="space-y-4">
                {['Закрытые мероприятия на крышах', 'Тематические балы и гала-ужины', 'Приватные afterparty'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="туры" className="py-32 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h3 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">Туры по России</h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Индивидуальные маршруты премиум-класса. 
                Частные гиды и эксклюзивный доступ.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'Train', title: 'Транссиб VIP' },
                  { icon: 'Mountain', title: 'Горнолыжные курорты' },
                  { icon: 'Waves', title: 'Круизы' },
                  { icon: 'Castle', title: 'Исторические туры' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon name={item.icon as any} size={20} className="text-primary flex-shrink-0" />
                    <span className="text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/37e37c3b-14d3-4bda-9bde-f55163b5ea07/files/8457e71b-8eb4-4a31-804d-66f70b1d0806.jpg"
                alt="Premium tour"
                className="w-full aspect-[4/3] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">Портфолио</h3>
            <p className="text-muted-foreground text-lg">Наши реализованные проекты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { src: 'https://cdn.poehali.dev/projects/37e37c3b-14d3-4bda-9bde-f55163b5ea07/files/166bf68f-dce7-4b4b-8936-5605c226ff3f.jpg', title: 'Корпоративный гала-ужин' },
              { src: 'https://cdn.poehali.dev/projects/37e37c3b-14d3-4bda-9bde-f55163b5ea07/files/e16f1d56-b927-4f01-8e1a-1c0ff3bf46a6.jpg', title: 'Премиум вечеринка' },
              { src: 'https://cdn.poehali.dev/projects/37e37c3b-14d3-4bda-9bde-f55163b5ea07/files/65b0475f-475c-4952-a79f-94afdae5dfa8.jpg', title: 'Элитное торжество' },
              { src: 'https://cdn.poehali.dev/projects/37e37c3b-14d3-4bda-9bde-f55163b5ea07/files/0c715a2e-1bad-4fd5-b408-02447a6ae0ee.jpg', title: 'VIP яхт-вечеринка' },
              { src: 'https://cdn.poehali.dev/projects/37e37c3b-14d3-4bda-9bde-f55163b5ea07/files/36191bb3-cde1-439c-b165-100f5c0ad677.jpg', title: 'Горнолыжный тур' }
            ].map((item, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-2xl animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <img 
                  src={item.src}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-lg font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="о-компании" className="py-32 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight">О Kairos</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-16">
              Профессиональная команда с 15-летним опытом организации мероприятий. 
              Работаем с каждым клиентом индивидуально, создавая события по уникальным проектам.
            </p>
            <div className="grid md:grid-cols-3 gap-12 mt-20">
              {[
                { num: '15+', label: 'Лет опыта' },
                { num: '500+', label: 'Реализованных событий' },
                { num: '100%', label: 'Конфиденциальность' }
              ].map((item, idx) => (
                <div key={idx} className="animate-scale-in">
                  <div className="text-5xl md:text-6xl font-semibold mb-2">{item.num}</div>
                  <div className="text-muted-foreground text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">Свяжитесь с нами</h3>
            <p className="text-muted-foreground text-lg">Обсудим ваше мероприятие</p>
          </div>
          <div className="bg-secondary/30 rounded-3xl p-8 md:p-12 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="text" 
                  value={formData.email}
                  onChange={(e) => { setFormData({...formData, email: e.target.value}); setEmailError(''); }}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="example@mail.ru"
                  required
                />
                {emailError && <p className="text-destructive text-sm mt-2">{emailError}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Тип мероприятия</label>
                <select 
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                >
                  <option value="">Выберите тип</option>
                  <option>Корпоративное мероприятие</option>
                  <option>Частная вечеринка</option>
                  <option>Премиум-тур</option>
                  <option>Другое</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3.5 h-32 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-all"
                  placeholder="Расскажите о вашем мероприятии"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-6 text-base font-medium">
                Отправить заявку
              </Button>
            </form>
            <div className="mt-10 pt-10 border-t border-border space-y-4 text-center">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Phone" size={18} className="text-muted-foreground" />
                <a href="tel:+74951234567" className="hover:text-foreground/60 transition-colors">+7 (495) 123-45-67</a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Mail" size={18} className="text-muted-foreground" />
                <a href="mailto:info@kairos-events.ru" className="hover:text-foreground/60 transition-colors">info@kairos-events.ru</a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="MapPin" size={18} className="text-muted-foreground" />
                <span className="text-muted-foreground">Москва, Тверская ул., 1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/30 py-16 px-6 border-t border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-2 tracking-tight">Kairos</h2>
              <p className="text-muted-foreground text-sm">Организация премиальных событий</p>
            </div>
            <div className="flex gap-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground/60 transition-colors">
                <Icon name="Instagram" size={22} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground/60 transition-colors">
                <Icon name="Facebook" size={22} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground/60 transition-colors">
                <Icon name="Linkedin" size={22} />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/40">
            <p className="text-sm text-muted-foreground">© 2025 Kairos. Все права защищены.</p>
            <div className="flex gap-6 text-sm">
              <a href="tel:+74951234567" className="text-muted-foreground hover:text-foreground/60 transition-colors">
                +7 (495) 123-45-67
              </a>
              <a href="mailto:info@kairos-events.ru" className="text-muted-foreground hover:text-foreground/60 transition-colors">
                info@kairos-events.ru
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

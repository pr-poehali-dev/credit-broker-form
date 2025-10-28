import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    amount: '',
    creditType: 'consumer',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Заявка отправлена",
      description: "Наш специалист свяжется с вами в ближайшее время",
    });

    setFormData({
      name: '',
      phone: '',
      amount: '',
      creditType: 'consumer',
      consent: false
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-primary text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <Icon name="TrendingUp" size={32} className="text-accent" />
            <div>
              <h1 className="text-3xl font-bold">Бюро Кредитных Решений</h1>
              <p className="text-sm text-slate-200 mt-1">Надежный партнер в мире финансов</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <Card className="shadow-xl border-t-4 border-t-accent">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Заявка на кредит</CardTitle>
                <CardDescription>Заполните форму, и наш специалист свяжется с вами в течение 30 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-slate-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="border-slate-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Желаемая сумма кредита (₽)</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="500000"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      required
                      className="border-slate-300"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Вид кредита</Label>
                    <RadioGroup
                      value={formData.creditType}
                      onValueChange={(value) => setFormData({ ...formData, creditType: value })}
                    >
                      <div className="flex items-center space-x-2 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                        <RadioGroupItem value="consumer" id="consumer" />
                        <Label htmlFor="consumer" className="cursor-pointer flex-1">
                          <div className="flex items-center gap-2">
                            <Icon name="Wallet" size={18} className="text-primary" />
                            <span>Потребительский кредит</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                        <RadioGroupItem value="mortgage" id="mortgage" />
                        <Label htmlFor="mortgage" className="cursor-pointer flex-1">
                          <div className="flex items-center gap-2">
                            <Icon name="Home" size={18} className="text-primary" />
                            <span>Ипотечный кредит</span>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex items-start space-x-2 p-4 bg-slate-50 rounded-lg">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                    />
                    <Label htmlFor="consent" className="text-sm cursor-pointer leading-relaxed">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </Label>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <Icon name="Phone" size={24} />
                  Контакты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-slate-700">Адрес</p>
                    <p className="text-slate-600">г. Москва, ул. Заречная, д. 9, офис 301</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-slate-700">Телефон</p>
                    <p className="text-slate-600">8 499 322 83 85</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={20} className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-slate-700">Email</p>
                    <p className="text-slate-600">melnikov@bkr-credit.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-slate-700">Режим работы</p>
                    <p className="text-slate-600">Пн-Пт: 9:00 - 19:00</p>
                    <p className="text-slate-600">Сб-Вс: 10:00 - 16:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl bg-gradient-to-br from-primary to-primary/90 text-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="FileText" size={24} className="text-accent" />
                  Реквизиты компании
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <p className="font-semibold opacity-90">ООО:</p>
                  <p>«Бюро Кредитных Решений»</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <p className="font-semibold opacity-90">ИНН:</p>
                  <p>7701234567</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <p className="font-semibold opacity-90">КПП:</p>
                  <p>770101001</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <p className="font-semibold opacity-90">ОГРН:</p>
                  <p>1234567890123</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <p className="font-semibold opacity-90">Р/С:</p>
                  <p>40702810100000000000</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <p className="font-semibold opacity-90">Банк:</p>
                  <p>ПАО «Сбербанк»</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <p className="font-semibold opacity-90">БИК:</p>
                  <p>044525225</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <p className="font-semibold opacity-90">К/С:</p>
                  <p>30101810400000000225</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: 'Shield', text: 'Гарантия безопасности' },
                { icon: 'Award', text: 'Лицензия ЦБ РФ' },
                { icon: 'Users', text: '10 000+ клиентов' }
              ].map((item, i) => (
                <Card key={i} className="text-center p-4 hover-scale shadow-md">
                  <Icon name={item.icon} size={32} className="text-accent mx-auto mb-2" />
                  <p className="text-xs text-slate-600 font-medium">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-300 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 Бюро Кредитных Решений. Все права защищены.</p>
          <p className="text-xs mt-2 text-slate-400">Лицензия ЦБ РФ № 123456</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
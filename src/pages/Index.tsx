import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [cartItems, setCartItems] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");

  const games = [
    {
      id: 1,
      title: "Cyber Strike",
      genre: "Шутер",
      price: 2999,
      originalPrice: 3999,
      rating: 4.8,
      image: "/img/96aa5dea-1455-42ff-a636-30c5b5c305a3.jpg",
      platform: "PC",
      description: "Футуристический шутер в киберпанк-мире",
    },
    {
      id: 2,
      title: "Dragon Quest",
      genre: "RPG",
      price: 4999,
      originalPrice: null,
      rating: 4.9,
      image: "/img/79664806-559e-455c-99d4-105802ba1792.jpg",
      platform: "PC",
      description: "Эпическая фэнтезийная RPG с магическим миром",
    },
    {
      id: 3,
      title: "Speed Racer",
      genre: "Гонки",
      price: 1999,
      originalPrice: 2999,
      rating: 4.6,
      image: "/img/6bb34580-b6c3-49b0-9d52-e1ee433ddc88.jpg",
      platform: "PC",
      description: "Адреналиновые гонки по неоновым трассам",
    },
    {
      id: 4,
      title: "Cyber Strike",
      genre: "Шутер",
      price: 2999,
      originalPrice: 3999,
      rating: 4.8,
      image: "/img/96aa5dea-1455-42ff-a636-30c5b5c305a3.jpg",
      platform: "PC",
      description: "Футуристический шутер в киберпанк-мире",
    },
    {
      id: 5,
      title: "Dragon Quest",
      genre: "RPG",
      price: 4999,
      originalPrice: null,
      rating: 4.9,
      image: "/img/79664806-559e-455c-99d4-105802ba1792.jpg",
      platform: "PC",
      description: "Эпическая фэнтезийная RPG с магическим миром",
    },
    {
      id: 6,
      title: "Speed Racer",
      genre: "Гонки",
      price: 1999,
      originalPrice: 2999,
      rating: 4.6,
      image: "/img/6bb34580-b6c3-49b0-9d52-e1ee433ddc88.jpg",
      platform: "PC",
      description: "Адреналиновые гонки по неоновым трассам",
    },
  ];

  const addToCart = (gameId: number) => {
    setCartItems(cartItems + 1);
  };

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesGenre =
      selectedGenre === "all" || game.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-game-dark via-slate-900 to-game-dark text-white">
      {/* Header */}
      <header className="bg-game-dark/90 backdrop-blur-sm border-b border-game-orange/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Icon name="Gamepad2" className="text-game-orange" size={32} />
              <h1 className="text-2xl font-orbitron font-bold text-game-orange">
                GAME STORE
              </h1>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="hover:text-game-orange transition-colors">
                Главная
              </a>
              <a href="#" className="hover:text-game-orange transition-colors">
                Магазин
              </a>
              <a href="#" className="hover:text-game-orange transition-colors">
                Личный кабинет
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-game-orange text-game-orange hover:bg-game-orange hover:text-white"
              >
                <Icon name="User" size={16} />
                Войти
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-game-blue text-game-blue hover:bg-game-blue hover:text-white relative"
              >
                <Icon name="ShoppingCart" size={16} />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-game-orange text-white min-w-[20px] h-5 p-0 flex items-center justify-center text-xs">
                    {cartItems}
                  </Badge>
                )}
                Корзина
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-game-orange/20 to-game-blue/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-orbitron font-bold mb-6 bg-gradient-to-r from-game-orange to-game-blue bg-clip-text text-transparent">
            Лучшие игры для геймеров
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Открой для себя мир невероятных приключений! Тысячи игр,
            эксклюзивные предложения и мгновенная доставка.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-game-orange to-game-blue hover:from-game-orange/80 hover:to-game-blue/80 text-white font-semibold px-8"
          >
            Начать покупки
          </Button>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-game-dark/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <Input
                placeholder="Поиск игр..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-gray-400"
              />
            </div>
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger className="w-full md:w-[200px] bg-slate-800 border-slate-700 text-white">
                <SelectValue placeholder="Жанр" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все жанры</SelectItem>
                <SelectItem value="Шутер">Шутеры</SelectItem>
                <SelectItem value="RPG">RPG</SelectItem>
                <SelectItem value="Гонки">Гонки</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-orbitron font-bold mb-8 text-center">
            Популярные игры
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game) => (
              <Card
                key={game.id}
                className="bg-slate-800 border-slate-700 hover:border-game-orange/50 transition-all duration-300 group hover:scale-105"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-game-blue text-white">
                        {game.platform}
                      </Badge>
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge
                        variant="outline"
                        className="bg-slate-900/80 text-white border-slate-600"
                      >
                        {game.genre}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-orbitron mb-2 text-white">
                    {game.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    {game.description}
                  </CardDescription>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Icon
                        name="Star"
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                      <span className="text-sm font-medium">{game.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-400">
                        4.2K отзывов
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-game-orange">
                        {game.price}₽
                      </span>
                      {game.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {game.originalPrice}₽
                        </span>
                      )}
                    </div>
                    <Button
                      onClick={() => addToCart(game.id)}
                      className="bg-gradient-to-r from-game-orange to-game-blue hover:from-game-orange/80 hover:to-game-blue/80 text-white font-semibold"
                    >
                      <Icon name="ShoppingCart" size={16} />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-game-dark border-t border-game-orange/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Gamepad2" className="text-game-orange" size={24} />
                <span className="text-xl font-orbitron font-bold text-game-orange">
                  GAME STORE
                </span>
              </div>
              <p className="text-gray-400">
                Лучший магазин игр для настоящих геймеров. Мгновенная доставка,
                лучшие цены.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-game-orange transition-colors"
                  >
                    Новинки
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-game-orange transition-colors"
                  >
                    Скидки
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-game-orange transition-colors"
                  >
                    Хиты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-game-orange transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-game-orange transition-colors"
                  >
                    Контакты
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-game-orange transition-colors"
                  >
                    Помощь
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Аккаунт</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-game-orange transition-colors"
                  >
                    Вход
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-game-orange transition-colors"
                  >
                    Регистрация
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-game-orange transition-colors"
                  >
                    Профиль
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Game Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

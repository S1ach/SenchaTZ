Ext.define('SenchaTZ.store.Products', {
    extend: 'Ext.data.Store',
    alias: 'store.products',
    pageSize: 20,

    fields: [
        { name: 'ID', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'desc', type: 'string' },
        { name: 'price', type: 'float' },
        { name: 'count', type: 'int' }
    ],

    data: [
        { ID: 1, name: 'Ноутбук Acer Aspire', desc: 'Отличный выбор для студентов и повседневных задач.', price: 277, count: 10 },
        { ID: 2, name: 'Ноутбук Lenovo IdeaPad', desc: 'Ультратонкий корпус и высокая автономность для работы на ходу.', price: 141, count: 0 },
        { ID: 3, name: 'Ноутбук HP Pavilion', desc: 'Идеален для просмотра фильмов и интернет-сёрфинга.', price: 59, count: 5 },
        { ID: 4, name: 'Ноутбук Dell Inspiron', desc: 'Надёжный помощник в офисе с классическим дизайном.', price: 286, count: 0 },
        { ID: 5, name: 'Ноутбук ASUS VivoBook', desc: 'Яркий экран и быстрый SSD для комфортной работы.', price: 253, count: 6 },
        { ID: 6, name: 'Ноутбук MSI Modern', desc: 'Компактный и лёгкий – легко брать с собой.', price: 67, count: 3 },
        { ID: 7, name: 'Ноутбук Apple MacBook Air', desc: 'Мгновенный отклик и невероятная плавность работы.', price: 107, count: 8 },
        { ID: 8, name: 'Ноутбук Acer Nitro 5', desc: 'Графика уровня GeForce – идеально для гейминга.', price: 140, count: 5 },
        { ID: 9, name: 'Ноутбук Lenovo Legion', desc: 'Мощный процессор для тяжёлых игр и задач.', price: 226, count: 4 },
        { ID: 10, name: 'Ноутбук HP Envy', desc: 'Стильный металлический корпус и сенсорный экран.', price: 235, count: 13 },
        { ID: 11, name: 'Ноутбук ASUS ROG Strix', desc: 'Настоящая игровая станция с охлаждением высокого уровня.', price: 165, count: 15 },
        { ID: 12, name: 'Ноутбук Dell XPS 13', desc: 'Безрамочный дисплей и ультрапортативный дизайн.', price: 78, count: 2 },
        { ID: 13, name: 'Ноутбук Apple MacBook Pro', desc: 'Для дизайнеров, разработчиков и творческих задач.', price: 201, count: 4 },
        { ID: 14, name: 'Ноутбук Huawei MateBook D', desc: 'Тихая работа, качественный экран и долгий заряд.', price: 202, count: 12 },
        { ID: 15, name: 'Ноутбук Samsung Galaxy Book', desc: 'Современный дизайн с быстрой зарядкой и LTE.', price: 148, count: 4 },
        { ID: 16, name: 'Ноутбук LG Gram', desc: 'Вес меньше 1 кг – один из самых лёгких ноутбуков в мире.', price: 216, count: 0 },
        { ID: 17, name: 'Ноутбук Microsoft Surface Laptop', desc: 'Премиальный корпус и потрясающий тачпад.', price: 195, count: 16 },
        { ID: 18, name: 'Ноутбук ASUS ZenBook', desc: 'Сбалансирован по мощности, весу и автономности.', price: 202, count: 20 },
        { ID: 19, name: 'Ноутбук MSI GF63', desc: 'Доступный игровой ноутбук с современным железом.', price: 215, count: 9 },
        { ID: 20, name: 'Ноутбук Lenovo ThinkPad', desc: 'Легендарная клавиатура и устойчивость к нагрузкам.', price: 67, count: 11 },
        { ID: 21, name: 'Ноутбук HP Omen', desc: 'Высокая частота экрана – для киберспортсменов.', price: 148, count: 13 },
        { ID: 22, name: 'Ноутбук ASUS TUF Gaming', desc: 'Прочный корпус и мощное охлаждение для длительных сессий.', price: 112, count: 6 },
        { ID: 23, name: 'Ноутбук Dell G15', desc: 'Игровой дух и строгий дизайн в одном корпусе.', price: 101, count: 14 },
        { ID: 24, name: 'Ноутбук Acer Swift 3', desc: 'Лёгкий, тихий и быстрый ноутбук для повседневной жизни.', price: 269, count: 0 },
        { ID: 25, name: 'Ноутбук Lenovo Yoga', desc: 'Трансформируется в планшет – удобен для презентаций.', price: 128, count: 10 },
        { ID: 26, name: 'Ноутбук Acer TravelMate', desc: 'Долгая работа от батареи и прочный корпус для бизнеса.', price: 189, count: 7 },
        { ID: 27, name: 'Ноутбук Lenovo V15', desc: 'Бюджетное решение для учёбы и офисных задач.', price: 95, count: 10 },
        { ID: 28, name: 'Ноутбук HP ProBook', desc: 'Безопасность и корпоративные функции для работы.', price: 245, count: 5 },
        { ID: 29, name: 'Ноутбук Dell Latitude', desc: 'Профессиональная серия с надёжной сборкой.', price: 268, count: 8 },
        { ID: 30, name: 'Ноутбук ASUS ExpertBook', desc: 'Сверхлёгкий и прочный для деловых поездок.', price: 210, count: 4 },
        { ID: 31, name: 'Ноутбук MSI Prestige', desc: 'Создан для создателей контента и дизайнеров.', price: 299, count: 9 },
        { ID: 32, name: 'Ноутбук Apple MacBook 12', desc: 'Минимальный вес и стильный дизайн Apple.', price: 255, count: 3 },
        { ID: 33, name: 'Ноутбук Huawei MateBook X Pro', desc: 'Безрамочный экран 3K и премиум-качество.', price: 287, count: 12 },
        { ID: 34, name: 'Ноутбук Samsung Notebook 9', desc: 'Тонкий, лёгкий и с поддержкой стилуса.', price: 178, count: 5 },
        { ID: 35, name: 'Ноутбук LG Ultra PC', desc: 'Удобный баланс между ценой и производительностью.', price: 132, count: 14 },
        { ID: 36, name: 'Ноутбук Microsoft Surface Go Laptop', desc: 'Компактный ноутбук для учёбы и путешествий.', price: 119, count: 7 },
        { ID: 37, name: 'Ноутбук ASUS Chromebook Flip', desc: 'Хромбук-трансформер с сенсорным экраном.', price: 88, count: 11 },
        { ID: 38, name: 'Ноутбук Lenovo Chromebook Duet', desc: 'Планшет и ноутбук два в одном.', price: 75, count: 6 },
        { ID: 39, name: 'Ноутбук HP Spectre x360', desc: 'Роскошный дизайн и экран 4K OLED.', price: 301, count: 4 },
        { ID: 40, name: 'Ноутбук Dell Alienware M15', desc: 'Флагман игровой серии с RGB-подсветкой.', price: 342, count: 8 },

    ],

    proxy: {
        type: 'memory',
        enablePaging: true,
        reader: {
            type: 'json'
        }
    }
});

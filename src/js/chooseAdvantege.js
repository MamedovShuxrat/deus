const advantagesData = {
    keyBenefits: [
        {
            title: "Российское ПО",
            description: "Свидетельство о регистрации Минцифры № АО-20221221-11257705008-3",
            icon: "images/cards/castle.svg"
        },
        {
            title: "Бизнес-консалтинг",
            description: "Экономическая эффективность проектов",
            icon: "images/cards/diagramm.svg"
        },
        {
            title: "Онбординг и документация",
            description: "Инструменты для успешного старта работ",
            icon: "images/cards/notepad.svg"
        },
        {
            title: "Техническая поддержка 24/7",
            description: "Обеспечение бесперебойной работы системы",
            icon: "images/cards/headphones.svg"
        },
        {
            title: "Скорость работы",
            description: "Моментальная загрузка страниц с любым количеством SKU",
            icon: "images/cards/time.svg"
        },
        {
            title: "Актуальность и развитие",
            description: "Улучшение функциональности, обеспечение безопасности, устранение ошибок",
            icon: "images/cards/todo.svg"
        }
    ],
    eCommerceSpecial: [
        {
            title: "Интеграция с платежными системами",
            description: "Полная совместимость с основными платежными шлюзами для удобных и безопасных транзакций.",
            icon: "images/cards/payment.svg"
        },
        {
            title: "Управление запасами",
            description: "Автоматическое обновление наличия товаров и управление складскими запасами в реальном времени.",
            icon: "images/cards/inventory.svg"
        },
        {
            title: "Аналитика продаж",
            description: "Подробные отчеты и аналитика по продажам для оптимизации бизнес-процессов и увеличения прибыли.",
            icon: "images/cards/analytics.svg"
        },
        {
            title: "Маркетинговые инструменты",
            description: "Встроенные инструменты для создания и управления рекламными кампаниями, акциями и скидками.",
            icon: "images/cards/marketing.svg"
        },
        {
            title: "Мобильная оптимизация",
            description: "Полная адаптивность для мобильных устройств, обеспечивающая комфортный шопинг на любом устройстве.",
            icon: "images/cards/mobile.svg"
        },
        {
            title: "Клиентская поддержка",
            description: "Интегрированные системы поддержки клиентов, включая чат, почту и телефонные консультации.",
            icon: "images/cards/support.svg"
        }
    ],
    threeTypesOfAdvantages: [
        {
            title: "Широкий набор функций",
            description: "Охватывает все аспекты управления бизнесом, от бухгалтерии до HR.",
            icon: "images/cards/features.svg"
        },
        {
            title: "Гибкость настройки",
            description: "Возможность адаптировать систему под специфические нужды вашего бизнеса.",
            icon: "images/cards/flexibility.svg"
        },
        {
            title: "Снижение затрат",
            description: "Оптимизация процессов и автоматизация задач, сокращающих операционные расходы.",
            icon: "images/cards/costs.svg"
        },
        {
            title: "Высокая рентабельность",
            description: "Улучшение показателей ROI и сокращение времени на возврат инвестиций.",
            icon: "images/cards/roi.svg"
        },
        {
            title: "Надежность и безопасность",
            description: "Высокие стандарты защиты данных и регулярные обновления безопасности.",
            icon: "images/cards/security.svg"
        },
        {
            title: "Масштабируемость",
            description: "Возможность расширения и добавления новых функций без потери производительности.",
            icon: "images/cards/scalability.svg"
        }]
};

const reasonsItems = document.querySelectorAll('.reasons__item');
const cardsContainer = document.getElementById('cardsContainer');

function updateCards(category) {
    cardsContainer.innerHTML = '';

    const data = advantagesData[category];

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card__item card__item-reasons';
        card.innerHTML = `
            <div class="card__icon_wrapper card__icon_wrapper-reasons card__icon_wrapper-mb">
                <img src="${item.icon}" alt="${item.title}" class="card__icon card__icon-sm">
            </div>
            <div class="cards__text_wrapper">
                <p class="card__text card__text-reasons">${item.title}</p>
                <p class="card__text_desc card__text_desc-reasons">${item.description}</p>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}

reasonsItems.forEach(item => {
    item.addEventListener('click', () => {
        reasonsItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });
        item.classList.add('active');
        const category = item.getAttribute('data-category');
        updateCards(category);
    });
});

updateCards('keyBenefits');


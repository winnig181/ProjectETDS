const {hashSync} = require('bcrypt');

const currentDate = new Date();
const endDateValue = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [{
            name: 'Анна',
            email: '1@1',
            hashpass: hashSync('1', 10),
            nickName: 'Nicee',
            phone: '+7 911 112 6969',
            avatar: 'https://fikiwiki.com/uploads/posts/2022-02/1644913307_8-fikiwiki-com-p-kartinki-devushki-v-shlyape-9.jpg',
            about: 'Люблю качественную инструментальную музыку и рубиться в Дота2',
            city: 'Москва',
            metro: 'Чистые пруды',
            publicPhone: '+7 911 112 6969',
            isActivated: false,
            activationLink: 'some link should be here',
            createdAt: currentDate,
            updatedAt: currentDate,
        }, {
            name: 'Виктор',
            email: '2@2',
            hashpass: hashSync('2', 10),
            nickName: 'Liquidator777',
            phone: '+7 928 514 0191',
            avatar: 'https://avatars.mds.yandex.net/i?id=5c55dc82707935b02b01116c65f64c31f8e059e5-4112653-images-thumbs&n=13',
            about: 'люблю IT, детей и кальян',
            city: 'Москва',
            metro: 'Ленинский проспект',
            publicPhone: '+7 928 514 0191',
            createdAt: currentDate,
            updatedAt: currentDate,
        }])

        await queryInterface.bulkInsert('Categories', [{
          categoryName: 'Техника',
    
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          categoryName: 'Спорт',
    
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          categoryName: 'Одежда',
    
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          categoryName: 'Развлечения',
    
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          categoryName: 'Инструменты',
    
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          categoryName: 'Творчество',
    
          createdAt: currentDate,
          updatedAt: currentDate,
        }
        ])
    
    
           const subcategories = ['Настольные игры', 'Книги', 'Музыка', 'Компьютерные игры'].map(
                (subCategoryName) => ({
                    categoryId: 4,
                    subCategoryName,
                    createdAt: currentDate,
                    updatedAt: currentDate,
                })
            );
    
        await queryInterface.bulkInsert('Subcategories', subcategories)
        
        await queryInterface.bulkInsert('Items', [{

          title: 'Почта',
          description: 'Я почему вредный был?',
          img1: 'pochta.jpg',
          condition: 'Новое',
          status: 'Доступен',
          hidden: false,
          subCategoryId: 1,
          userId: 1,
          price: 150,        
          createdAt: currentDate,
          updatedAt: currentDate,
          }, 
          {
            title: 'Имаджинариум',
            description: 'Много историй в одной коробке',
            img1: 'image.jpg',
            condition: 'Как новое',
            status: 'Доступен',
            hidden: false,
            subCategoryId: 1,
            userId: 1,
            price: 200,        
            createdAt: currentDate,
            updatedAt: currentDate,
            },
  
            {
  
              title: 'Колонизаторы',
              description: 'Про колонизацию, удачу и дипломатию...',
              img1: 'cat.jpg',
              condition: 'Как новое',
              status: 'Доступен',
              hidden: false,
              subCategoryId: 1,
              userId: 1,
              price: 200,        
              createdAt: currentDate,
              updatedAt: currentDate,
              },
          ])
    
              await queryInterface.bulkInsert('Userreviews', [
                {
                  userId: 1,
                  review: 'Замечательный арендодатель. Игры были в отличном состоянии, а он предоставил полезные рекомендации для выбора.',
                  rating: 5,
                  targetId: 2,
                },
                {
                  userId: 1,
                  review: 'Прекрасный опыт взаимодействия с Виктором. Все вещи возвращены в исходном состоянии, и общение было легким и приятным',
                  rating: 5,
                  targetId: 2,
                },
                {
                  userId: 1,
                  review: 'Владелец был дружелюбным и внимательным к деталям, и игры были в хорошем состоянии.',
                  rating: 5,
                  targetId: 2,
                },       
          
          
              ])
          
              await queryInterface.bulkInsert('Deals', [{
                ownerId: 1,
                tenantId: 2,
                itemId: 1,
                startDate: currentDate,
                endDate: endDateValue,
                ownerApproveDeal: false,
                ownerCloseDeal: false,
                tenantApproveDeal: false,
                tenantCloseDeal: false,
                createdAt: new Date(),
                updatedAt: new Date()
  },])
  },

    async down(queryInterface, Sequelize) {

    },
};

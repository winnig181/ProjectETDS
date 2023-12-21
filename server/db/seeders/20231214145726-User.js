const {hashSync} = require('bcrypt');
const faker = require('faker');

const currentDate = new Date();
const endDateValue = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [{
            name: 'John Doe',
            email: '1@1',
            hashpass: hashSync('1', 10),
            nickName: 'milkman',
            phone: '+1 911 112 6969',
            avatar: 'https://avatars.mds.yandex.net/i?id=5c55dc82707935b02b01116c65f64c31f8e059e5-4112653-images-thumbs&n=13',
            about: 'driver, bring some milk',
            city: 'San Francisco',
            metro: null,
            publicPhone: '+995 595 * *',
            isActivated: false,
            activationLink: 'some link should be here',
            createdAt: faker.date.past(),
            updatedAt: currentDate,
        }, {
            name: 'Виктор',
            email: '2@2',
            hashpass: hashSync('2', 10),
            nickName: 'Liquidator777',
            phone: '+7 928 *** 01 91',
            avatar: 'johndoe.jpeg',
            about: 'катаюсь на метро в час пик, радуюсь жести',
            city: 'Москвэ',
            metro: 'Ленинский проспект',
            publicPhone: this.phone,
            createdAt: faker.date.past(),
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
        img1: 'https://www.mosigra.ru/image/cache/data/tovari/hobby-world/pochta/pochta-00-1024x1024-wm.jpg',
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
          img1: 'https://www.mosigra.ru/image/cache/data/%D0%A2%D0%BE%D0%B2%D0%B0%D1%80%D1%8B/Cosmodrome%20Games/%D0%98%D0%BC%D0%B0%D0%B4%D0%B6%D0%B8%D0%BD%D0%B0%D1%80%D0%B8%D1%83%D0%BC%20(2021)/DSC_6856-1024x1024-wm.webp',
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
            img1: 'https://www.mosigra.ru/image/cache/data/mosigra.market/554/071/DSC_2202_600x600-1024x1024-wm.webp',
            condition: 'Как новое',
            status: 'Доступен',
            hidden: false,
            subCategoryId: 1,
            userId: 1,
            price: 200,        
            createdAt: currentDate,
            updatedAt: currentDate,
            },
            // {
            //   title: DataTypes.TEXT,
            //   description: DataTypes.TEXT,
            //   img1: DataTypes.TEXT,
            //   condition: DataTypes.TEXT,
            //   status: DataTypes.TEXT,
            //   hidden: DataTypes.BOOLEAN,
            //   subCategoryId: DataTypes.INTEGER,
            //   userId: DataTypes.INTEGER,
            //   price: DataTypes.INTEGER,        
            //   createdAt: currentDate,
            //   updatedAt: currentDate,
            //   },
            //   {
            //     title: DataTypes.TEXT,
            //     description: DataTypes.TEXT,
            //     img1: DataTypes.TEXT,
            //     condition: DataTypes.TEXT,
            //     status: DataTypes.TEXT,
            //     hidden: DataTypes.BOOLEAN,
            //     subCategoryId: DataTypes.INTEGER,
            //     userId: DataTypes.INTEGER,
            //     price: DataTypes.INTEGER,        
            //     createdAt: currentDate,
            //     updatedAt: currentDate,
            //     },
            //     {
            //       title: DataTypes.TEXT,
            //       description: DataTypes.TEXT,
            //       img1: DataTypes.TEXT,
            //       condition: DataTypes.TEXT,
            //       status: DataTypes.TEXT,
            //       hidden: DataTypes.BOOLEAN,
            //       subCategoryId: DataTypes.INTEGER,
            //       userId: DataTypes.INTEGER,
            //       price: DataTypes.INTEGER,        
            //       createdAt: currentDate,
            //       updatedAt: currentDate,
            //       },
        ])

    // await queryInterface.bulkInsert('Users', users)
  
    
    
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
//   },{
//       ownerId: 1,
//       tenantId: 2,
//       itemId: 2,
//       startDate: currentDate,
//       endDate: endDateValue,
//       ownerApproveDeal: false,
//       ownerCloseDeal: false,
//       tenantApproveDeal: false,
//       tenantCloseDeal: false,
//       createdAt: new Date(),
//       updatedAt: new Date()
//   },{
//     ownerId: 2,
//     tenantId: 1,
//     itemId: 5,
//     startDate: currentDate,
//     endDate: endDateValue,
//     ownerApproveDeal: false,
//     ownerCloseDeal: false,
//     tenantApproveDeal: false,
//     tenantCloseDeal: false,
//     createdAt: new Date(),
//     updatedAt: new Date()
// },
// {
//   ownerId: 2,
//   tenantId: 3,
//   itemId: 13,
//   startDate: currentDate,
//   endDate: endDateValue,
//   ownerApproveDeal: false,
//   ownerCloseDeal: false,
//   tenantApproveDeal: false,
//   tenantCloseDeal: false,
//   createdAt: new Date(),
//   updatedAt: new Date()
// },{
//       ownerId: 1,
//       tenantId: 2,
//       itemId: 3,
//       startDate: currentDate,
//       endDate: endDateValue,
//       ownerApproveDeal: false,
//       ownerCloseDeal: false,
//       tenantApproveDeal: false,
//       tenantCloseDeal: false,
//       createdAt: new Date(),
//       updatedAt: new Date()
  },])
  },

    async down(queryInterface, Sequelize) {

    },
};

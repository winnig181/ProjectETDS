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
            name: 'Пассажир метро',
            email: '2@2',
            hashpass: hashSync('2', 10),
            nickName: 'MetroMan',
            phone: '+7 928 *** 01 91',
            avatar: 'johndoe.jpeg',
            about: 'катаюсь на метро в час пик, радуюсь жести',
            city: 'Москвэ',
            metro: 'Ленинский проспект',
            publicPhone: this.phone,
            createdAt: faker.date.past(),
            updatedAt: currentDate,
        }, {
            name: faker.name.findName(),
            email: faker.internet.email(),
            hashpass: hashSync('password', 10),
            nickName: faker.internet.userName(),
            phone: faker.phone.phoneNumber(),
            avatar: faker.image.avatar(),
            about: faker.lorem.sentence(),
            city: faker.address.city(),
            metro: faker.address.streetName(),
            publicPhone: faker.phone.phoneNumber(),
            isActivated: true,
            activationLink: null,
            createdAt: faker.date.past(),
            updatedAt: currentDate,
        },])

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
        const subCategories = ['Гаджеты', 'Верхняя одежда', 'Футбол', 'Фрукты', 'Романы'].map(
            (subCategoryName, index = 1) => ({
                categoryId: index,
                subCategoryName,
                createdAt: currentDate,
                updatedAt: currentDate,
            })
        )

        await queryInterface.bulkInsert('Subcategories', subCategories)
        await queryInterface.bulkInsert('Items', [{
            title: 'Cluedo',
            description: 'Хорошая детективная игра на компанию',
            img1: '/seeds_img/cluedo.jpeg',
            img2: '/seeds_img/cluedo2.jpeg',
            img3: '/seeds_img/cluedo3.jpeg',
            condition: faker.random.arrayElement(['новый', 'б/у']),
            status: faker.random.arrayElement(['в наличии', 'продано']),
            hidden: faker.random.boolean(),
            subCategoryId: 1,
            userId: faker.random.number({min: 1, max: 3}),
            price: faker.random.number({min: 10, max: 1000, precision: 0.01}),
            createdAt: faker.date.past(),
            updatedAt: currentDate,
        }, {
            title: 'Cluedo',
            description: 'Хорошая детективная игра на компанию',
            img1: `./item_images/item_server/public/seeds_img/cluedo.jpeg`,
            img2: `./item_images/item_server/public/seeds_img/cluedo2.jpeg`,
            img3: `./item_images/item_server/public/seeds_img/cluedo3.jpeg`,
            condition: faker.random.arrayElement(['новый', 'б/у']),
            status: faker.random.arrayElement(['в наличии', 'продано']),
            hidden: faker.random.boolean(),
            subCategoryId: 1,
            userId: faker.random.number({min: 1, max: 3}),
            price: faker.random.number({min: 10, max: 1000, precision: 0.01}),
            createdAt: faker.date.past(),
            updatedAt: currentDate,
        }, {
            title: 'Cluedo',
            description: 'Хорошая детективная игра на компанию',
            img1: `./item_images/item_server/public/seeds_img/cluedo.jpeg`,
            img2: `./item_images/item_server/public/seeds_img/cluedo2.jpeg`,
            img3: `./item_images/item_server/public/seeds_img/cluedo3.jpeg`,
            condition: faker.random.arrayElement(['новый', 'б/у']),
            status: faker.random.arrayElement(['в наличии', 'продано']),
            hidden: faker.random.boolean(),
            subCategoryId: 1,
            userId: faker.random.number({min: 1, max: 3}),
            price: faker.random.number({min: 10, max: 1000, precision: 0.01}),
            createdAt: faker.date.past(),
            updatedAt: currentDate,
        }])



        const userReviews = Array.from({length: 10}).map((_, index) => ({
            userId: faker.random.number({min: 1, max: 3}),
            review: faker.lorem.paragraph(),
            rating: faker.random.number({min: 1, max: 5, precision: 0.1}),
            targetId: faker.random.number({min: 1, max: 3}),
            createdAt: faker.date.past(),
            updatedAt: currentDate,
        }));


        // await queryInterface.bulkInsert('Items', items)
        await queryInterface.bulkInsert('Userreviews', userReviews)
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
        }, {
            ownerId: 1,
            tenantId: 2,
            itemId: 2,
            startDate: currentDate,
            endDate: endDateValue,
            ownerApproveDeal: false,
            ownerCloseDeal: false,
            tenantApproveDeal: false,
            tenantCloseDeal: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            ownerId: 2,
            tenantId: 1,
            itemId: 1,
            startDate: currentDate,
            endDate: endDateValue,
            ownerApproveDeal: false,
            ownerCloseDeal: false,
            tenantApproveDeal: false,
            tenantCloseDeal: false,
            createdAt: new Date(),
            updatedAt: new Date()
        },
            {
                ownerId: 2,
                tenantId: 3,
                itemId: 3,
                startDate: currentDate,
                endDate: endDateValue,
                ownerApproveDeal: false,
                ownerCloseDeal: false,
                tenantApproveDeal: false,
                tenantCloseDeal: false,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                ownerId: 1,
                tenantId: 2,
                itemId: 3,
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

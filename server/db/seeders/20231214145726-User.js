

const {hashSync} = require('bcrypt')

const currentDate = new Date()
const endDateValue = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
      publicPhone: '+995 595 *** ***',
      isActivated: false,
      activationLink: 'some link should be here',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
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
      createdAt: new Date(),
      updatedAt: new Date()
    }])
    await queryInterface.bulkInsert('Categories', [{
      categoryName: 'Домашние развлечения',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      categoryName: 'Туризм',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      categoryName: 'Спортинвентарь',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      categoryName: 'Оборудование и инструменты',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ])
    await queryInterface.bulkInsert('Subсategories', [{
      categoryId: 1,
      subCategoryName: 'Видеоигры',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      categoryId: 1,
      subCategoryName: 'Music',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      categoryId: 1,
      subCategoryName: 'Подушки',
      createdAt: new Date(),
      updatedAt: new Date()
    },])
    await queryInterface.bulkInsert('Items', [{
      title: 1,
      description: 'Heroes of Might and Magic 3',
      img1:'aaa',
      img2:'bbb',
      img3:'ccc',
      condition:'used',
      status:'ordered',
      hidden: false,
      subCategoryId: 1,
      userId: 1,
      price: 35,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 1,
      description: 'The Binding of Isaac',
      img1:'aaa',
      img2:'bbb',
      img3:'ccc',
      condition:'new',
      status:'available',
      hidden: true,
      subCategoryId: 1,
      userId: 1,
      price: 666,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 1,
      description: 'Doom',
      img1:'aaa',
      img2:'bbb',
      img3:'ccc',
      condition:'used',
      status:'available',
      hidden: false,
      subCategoryId: 1,
      userId: 1,
      price: 42,
      createdAt: new Date(),
      updatedAt: new Date()
    },])
    await queryInterface.bulkInsert('Deals', [{
      owner: 1,
      tenant: 2,
      itemId: 1,
      startDate: currentDate,
      endDate: endDateValue,
      ownerApproveDeal: true,
      ownerCloseDeal: true,
      tenantApproveDeal: true,
      tenantCloseDeal: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      owner: 1,
      tenant: 2,
      itemId: 2,
      startDate: currentDate,
      endDate: endDateValue,
      ownerApproveDeal: true,
      ownerCloseDeal: false,
      tenantApproveDeal: true,
      tenantCloseDeal: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      owner: 1,
      tenant: 2,
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
    await queryInterface.bulkInsert('Userreviews', [{
      userId: 2,
      review: 'Отличный парень, привёз всё быстро и в целости',
      rating: 4,
      targetId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      review: 'Рыба-рыба, рыба-кит',
      rating: 5,
      targetId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
